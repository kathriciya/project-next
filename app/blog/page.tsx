'use client';

import PostSearch from '@/components/PostSearch/PostSearch';
import Posts from '@/components/Posts/Posts';
import { getAllPosts } from '@/services/getPosts';
import { useEffect, useState } from 'react';
import cls from './blog.module.css';

export default function Blog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);
  return (
    <>
      <h1 className={cls.title}>Blog</h1>
      <PostSearch onSearch={setPosts} />
      {loading ? <h3>Loading ...</h3> : <Posts posts={posts} />}
    </>
  );
}
