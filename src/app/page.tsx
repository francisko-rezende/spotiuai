import Image from 'next/image';
import blend from '../assets/img/playlists/blend.png';
import sos from '../assets/img/albums/sos.png';
import strangerInTheAlps from '../assets/img/albums/stranger-in-the-alps.png';

export default function Home() {
  return (
    <div>
      <section className="space-y-6">
        <p className="text-4xl font-extrabold capitalize">Good evening</p>
        <div className="-mx-12 -my-6 overflow-x-auto px-12 py-6">
          <ul className="flex gap-6">
            <li className="grid h-20 max-w-[360px] flex-[1_0_250px] grid-cols-[80px_1fr] items-center gap-9 overflow-hidden rounded-lg bg-ui-grey-0">
              <Image src={sos} alt="" className="object-contain" />
              <span className="font-extrabold">SOS</span>
            </li>
            <li className="grid h-20 max-w-[360px] flex-[1_0_250px] grid-cols-[80px_1fr] items-center gap-9 overflow-hidden rounded-lg bg-ui-grey-0">
              <Image src={sos} alt="" className="object-contain" />
              <span className="font-extrabold">SOS</span>
            </li>
            <li className="grid h-20 max-w-[360px] flex-[1_0_250px] grid-cols-[80px_1fr] items-center gap-9 overflow-hidden rounded-lg bg-ui-grey-0">
              <Image src={sos} alt="" className="object-contain" />
              <span className="font-extrabold">SOS</span>
            </li>
            <li className="w-6 shrink-0" aria-hidden />
          </ul>
        </div>
      </section>
    </div>
  );
}
