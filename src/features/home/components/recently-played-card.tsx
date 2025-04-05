import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type RecentlyPlayedCardProps = {
  children: React.ReactNode;
  href: string;
  imageSrc: StaticImageData;
};

export const RecentlyPlayedCard = ({
  children,
  href,
  imageSrc,
}: RecentlyPlayedCardProps) => {
  return (
    <li className="flex-[1_0_250px]">
      <Link
        href={href}
        className="grid h-20 max-w-[360px] grid-cols-[80px_1fr] items-center gap-9 overflow-hidden rounded-lg bg-ui-grey-0"
      >
        <Image src={imageSrc} alt="" className="object-contain" />
        <span className="font-extrabold">{children}</span>
      </Link>
    </li>
  );
};
