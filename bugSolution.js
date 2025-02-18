```javascript
// pages/posts/[slug].js

import { getStaticProps } from 'next/server';

export default function Post({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export async function getStaticPaths() {
  // Fetch all possible paths for your posts here
  const posts = await fetchPosts(); // Replace with your data fetching logic

  return {
    paths: posts.map(post => ({ params: { slug: post.slug } })),
    fallback: 'blocking', // or 'true'
  };
}

export async function getStaticProps({ params }) {
  const post = await fetchPost(params.slug);
  //Error handling
  if(!post){
    return {
      notFound: true
    }
  }
  return {
    props: {
      post,
    },
  };
}

async function fetchPosts() {
  // Replace with your actual data fetching logic
  return [
    { slug: 'my-post', title: 'My Post', content: 'This is my post content.' },
    { slug: 'another-post', title: 'Another Post', content: 'This is another post content.' },
  ];
}

async function fetchPost(slug) {
  // Replace with your actual data fetching logic
  const posts = await fetchPosts();
  return posts.find(post => post.slug === slug);
}
```