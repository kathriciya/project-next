import { Metadata } from 'next';
import Link from 'next/link';
// import Icon from './../../public/rocket.svg';
import cls from './blog.module.css';

async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) throw new Error('Something went wrong!');
  return response.json();
}

export const metadata: Metadata = {
  title: 'Blog | Next App',
};

export default async function Blog() {
  const posts = await getData();

  return (
    <>
      <h1>Blog</h1>
      <ul className={cls.listPost}>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`} className={cls.linkPost}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
