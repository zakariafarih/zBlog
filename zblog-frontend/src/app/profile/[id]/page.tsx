'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAuth } from 'react-oidc-context';
import { getMyProfile, getUserProfile, UserProfileDTO } from '@/services/userService';
import Fallback from '@/components/fallback/Fallback';
import ProfilePageContent from '@/components/profile/ProfilePageContent';

export default function ProfilePage() {

  const { user, isLoading } = useAuth();
  const accessToken = user?.access_token;
  const params = useParams();
  const [profile, setProfile] = useState<UserProfileDTO | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const id = params?.id?.toString();
  const isMe = id === 'me';

  useEffect(() => {
    if (!id || !accessToken) return;

    async function fetchProfile() {
      setLoading(true);
      setError(null);
      try {
        const data = isMe
          ? await getMyProfile(accessToken)
          : await getUserProfile(id as string, accessToken);
        setProfile(data);
      } catch (err: any) {
        setError(err.message || 'Failed to load profile');
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, [id, accessToken, isMe]);

  if (isLoading || loading) {
    return <Fallback message="Loading profile..." />;
  }

  if (error) {
    return (
      <div className="text-center text-red-500 p-6">
        <p className="text-xl font-semibold">Something went wrong</p>
        <p className="text-sm mt-2">{error}</p>
      </div>
    );
  }

  if (!profile) {
    return <div className="text-center text-gray-400 p-6">Profile not found.</div>;
  }

  return <ProfilePageContent profile={profile} isMe={isMe} token={accessToken} />;
}
