'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import NoPostsHolder from '@/components/posts/NoPostsHolder';
import PostCard, { PostCardProps } from '@/components/posts/PostCard';
import AnimatedHeaderPost from '@/components/posts/AnimatedHeaderPost';
import { useAuth } from 'react-oidc-context';
import { explorePosts, PostDTO } from '@/services/postService';
import { FilterState } from '@/types/filters';
import Fallback from '@/components/Fallback/Fallback';
import { getAuthorName, hasAuthor } from '@/services/authorCache';

const ExplorePostsFilter = dynamic(
  () => import('@/components/posts/ExplorePostsFilter.client'),
  { ssr: false }
);

export default function ExplorePostsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialTag = searchParams.get('tag') || '';
  const auth = useAuth();

  const [filters, setFilters] = useState<FilterState>({
    keyword: '',
    tag: '',
    sort: 'recent',
    dateRange: 'all',
  });

  const [posts, setPosts] = useState<PostCardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Set filters on mount if tag param is present
  useEffect(() => {
    if (initialTag) {
      setFilters((prev) => ({
        ...prev,
        tag: initialTag,
      }));

      // Clean URL after syncing
      const params = new URLSearchParams(searchParams.toString());
      params.delete('tag');
      router.replace(`/posts?${params.toString()}`, { scroll: false });
    }
  }, [initialTag]);

  // Fetch posts when filters or auth is ready
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const token = auth.user?.access_token;
      const page = 0;
      const size = 30;
      const tagList = filters.tag ? [filters.tag] : [];
  
      try {
        const dataPage = await explorePosts(
          filters.keyword,
          tagList,
          filters.sort,
          page,
          size,
          token
        );
  
        const postsWithAuthors = await Promise.all(
          dataPage.content.map(async (post) => {
            let author = 'Unknown Author';
        
            if (post.authorId) {
              if (hasAuthor(post.authorId)) {
                author = await getAuthorName(post.authorId);
              } else {
                author = await getAuthorName(post.authorId, token);
              }
            }
        
            return {
              id: post.id!,
              title: post.title,
              description: post.content,
              author,
              timestamp: post.createdAt
                ? new Date(post.createdAt).toLocaleDateString()
                : '',
              tags: post.tags || [],
              imageUrl: post.bannerImageUrl || '/default-cover.jpg',
              reactionCount: (post.likeCount || 0) + (post.heartCount || 0),
              commentCount: 0,
              onClick: () => router.push(`/posts/${post.id}`),
            };
          })
        );        
  
        setPosts(postsWithAuthors);
      } catch (e) {
        console.error('Failed to fetch posts:', e);
      } finally {
        setLoading(false);
      }
    };
  
    if (auth.user) {
      fetchPosts();
    }
  }, [filters, auth.user]);  

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8">
      <AnimatedHeaderPost />
      <ExplorePostsFilter filters={filters} setFilters={setFilters} />
      {loading ? (
        <Fallback message="Loading Explore Posts..." />
      ) : posts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              {...post}
              onClick={() => router.push(`/posts/${post.id}`)}
            />
          ))}
        </div>
      ) : (
        <div className="mt-10">
          <NoPostsHolder />
        </div>
      )}
    </section>
  );
}
