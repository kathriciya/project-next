import Navigation from '../Navigation/Navigation';
import cls from './header.module.css';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
];

const Header = () => {
  return (
    <header className={cls.header}>
      <Navigation navLinks={navItems} />
    </header>
  );
};

export default Header;
