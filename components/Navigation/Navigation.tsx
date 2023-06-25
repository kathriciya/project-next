'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import cls from './navigation.module.css';

type NavLink = {
  label: string;
  href: string;
};

type NavLinkProps = {
  navLinks: NavLink[];
};

const Navigation = ({ navLinks }: NavLinkProps) => {
  const pathname = usePathname();
  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.label}
            href={link.href}
            className={isActive ? `${cls.link} ${cls.linkActive}` : cls.link}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
};

export default Navigation;
