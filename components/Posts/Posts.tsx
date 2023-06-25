import Link from 'next/link';
import MyRocketIcon from './../../public/rocket.svg';
import cls from './posts.module.css';

type PostsProps = {
  posts: any[];
};

const Posts = ({ posts }: PostsProps) => {
  return (
    <ul className={cls.listPost}>
      {posts.map((post: any) => (
        <li key={post.id} className={cls.linkWrap}>
          <MyRocketIcon width={22} height={22} className={cls.rocketIcon} />
          <Link href={`/blog/${post.id}`} className={cls.linkPost}>
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
