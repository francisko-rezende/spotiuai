import { Navigation } from './navigation';
import { PlaylistActions } from './playlist-actions';
import { Playlists } from './playlists';

export const Sidebar = () => {
  return (
    <aside className="space-y-8 bg-fill-sidebar px-5 py-10 text-ui-grey-6">
      <Navigation />

      <PlaylistActions />

      <div aria-hidden className="h-px bg-ui-grey-2" />

      <Playlists />
    </aside>
  );
};
