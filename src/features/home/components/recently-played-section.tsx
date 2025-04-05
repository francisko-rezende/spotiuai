import { RecentlyPlayedCard } from './recently-played-card';
import blend from '../assets/img/playlists/blend.png';
import sos from '../assets/img/albums/sos.png';
import strangerInTheAlps from '../assets/img/albums/stranger-in-the-alps.png';

export const RecentlyPlayedSection = () => {
  const wideCards = [
    {
      children: 'Dan & Hayley',
      href: '#',
      imageSrc: blend,
    },
    {
      children: 'SOS',
      href: '#',
      imageSrc: sos,
    },
    {
      children: 'Stranger in the Alps',
      href: '#',
      imageSrc: strangerInTheAlps,
    },
  ];

  return (
    <section className="space-y-6">
      <p className="text-4xl font-extrabold capitalize">Good evening</p>
      <div className="-mx-12 -my-6 overflow-x-auto px-12 py-6">
        <ul className="flex gap-6">
          {wideCards.map(wideCardProps => {
            return (
              <RecentlyPlayedCard
                key={wideCardProps.children}
                {...wideCardProps}
              />
            );
          })}
          <li className="w-6 shrink-0" aria-hidden />
        </ul>
      </div>
    </section>
  );
};
