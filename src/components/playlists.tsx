import Link from 'next/link';

export const Playlists = () => {
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
    <ul className="flex flex-col gap-4 p-4">
      {playlists.map(playlist => {
        return (
          <li key={playlist}>
            <Link href={`/playlists/${playlist}`}>{playlist}</Link>
          </li>
        );
      })}
    </ul>
  );
};
