import {
  LucideCirclePlus,
  LucideFolders,
  LucideHouse,
  LucideSearch,
} from 'lucide-react';
import Link from 'next/link';

export const Sidebar = () => {
  const navLinks = [
    { href: '/', text: 'Home', icon: <LucideHouse /> },
    { href: '/search', text: 'Search', icon: <LucideSearch /> },
    { href: '/library', text: 'Your Library', icon: <LucideFolders /> },
  ];

  const playlists = [
    'Running Playlist',
    '21st Birthday',
    'April, 2023',
    'Gym Session',
    'Classic Anthems',
    'R&B Favourites',
    'Classical Music',
    'Hayleys Bday',
    'Discover Weekly',
    'Liked From Radio',
  ];

  return (
    <aside className="space-y-8 bg-fill-sidebar px-5 py-10 text-ui-grey-6">
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

      <section className="flex flex-col gap-7 p-4">
        <button className="flex items-center gap-4 font-bold">
          <div className="rounded bg-primary-white p-2 text-black">
            <LucideCirclePlus className="h-3 w-3" />
          </div>
          Create Playlist
        </button>

        <button className="flex items-center gap-4 font-bold">
          <div className="rounded bg-linear-to-t from-[#649AED] to-[#E57BA1] p-2 text-black">
            <LucideCirclePlus className="h-3 w-3" />
          </div>
          Liked songs
        </button>
      </section>

      <div aria-hidden className="h-px bg-ui-grey-2" />

      <ul className="flex flex-col gap-4 p-4">
        {playlists.map(playlist => {
          return (
            <li key={playlist}>
              <Link href={`/playlists/${playlist}`}>{playlist}</Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
