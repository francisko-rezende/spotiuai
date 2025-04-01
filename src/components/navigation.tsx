import { LucideFolders, LucideHouse, LucideSearch } from 'lucide-react';
import Link from 'next/link';

export const Navigation = () => {
  const navLinks = [
    { href: '/', text: 'Home', icon: <LucideHouse /> },
    { href: '/search', text: 'Search', icon: <LucideSearch /> },
    { href: '/library', text: 'Your Library', icon: <LucideFolders /> },
  ];

  return (
    <nav className="p-4">
      <ul className="flex flex-col gap-5">
        {navLinks.map(({ text, icon, href }) => {
          return (
            <li key={text}>
              <Link className="flex gap-4 font-bold" href={href}>
                {icon} {text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
