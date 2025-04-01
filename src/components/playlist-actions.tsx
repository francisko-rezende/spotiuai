import { LucideCirclePlus } from 'lucide-react';

export const PlaylistActions = () => {
  return (
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
  );
};
