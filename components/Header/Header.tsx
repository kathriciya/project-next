import Link from 'next/link';
import cls from './header.module.css';

const Header = () => {
  return (
    <header className={cls.header}>
      <Link className={cls.link} href="/">
        Home
      </Link>
      <Link className={cls.link} href="/blog">
        Blog
      </Link>
      <Link className={cls.link} href="/about">
        About
      </Link>
    </header>
  );
};

export default Header;
