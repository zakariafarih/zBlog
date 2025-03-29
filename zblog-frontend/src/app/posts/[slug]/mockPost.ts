export const mockPost = {
    title: "React: The Good Parts",
    coverImageUrl: "/covers/react-good.png",
    author: {
      name: "Alex Johnson",
      avatarUrl: "/avatars/alex.png",
    },
    publishedAt: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3 hours ago
    tag: "React",
    content: `
  React is one of the most popular JavaScript libraries for building user interfaces. But with great power comes great responsibility.
  
  In this post, we'll explore the "good parts" of React — features and practices that make it delightful to use.
  
  From hooks to component composition, we'll highlight patterns that lead to scalable and maintainable code. Let's dive in!
  `.trim(),
  }
  