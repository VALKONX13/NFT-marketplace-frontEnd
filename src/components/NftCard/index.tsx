import Image from "next/image";
import RedarkButton from "@/components/RedarkButton/index";
import { slugify } from "@/utils/slugify";
import Link from "next/link";

type NFTCardProps = {
  creatorName: string;
  imageSrc: string;
  title: string;
  currentBid: string;
  onPlaceBid?: () => void;
};

export default function NFTCard({
  creatorName,
  imageSrc,
  title,
  currentBid,
  onPlaceBid,
}: NFTCardProps) {
  const titleSlug = slugify(title);
  const artistSlug = slugify(creatorName);
  const href = `/marketplace/${titleSlug}_${artistSlug}`;

  return (
    <Link href={href} passHref>
      <div className="bg-redark-purple/13 grid rounded-2xl shadow-lg py-5 pl-6 pr-3 mb-3 text-white font-sans !box-content">
        {/* Creator Info */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
          <div>
            <p className="text-xs text-gray-400 font-azeret">Created by</p>
            <p className="text-sm font-semibold font-azeret">{creatorName}</p>
          </div>
        </div>

        {/* NFT Image */}
        <div className="rounded-xl overflow-hidden mb-4">
          <Image
            src={imageSrc}
            alt={title}
            width={400}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Title */}
        <p className="text-sm font-medium mb-2">{title}</p>

        {/* Bid Info */}
        <div className="flex justify-between items-center gap-3 " >
          <div className="w-fit max-w-[30%]">
            <p className="text-xs w-fit text-gray-400 font-azeret">Current Bid</p>
            <p className="text-xs w-fit">{currentBid} SOL</p>
          </div>
          <RedarkButton
            title="place Bid"
            onClick={onPlaceBid}
            className="!px-4 xl:!px-4 text-[10px] xl:text-[12px] 2xl:text-xs 2xl:px-3"
          >
            PLACE BID
          </RedarkButton>
        </div>
      </div>
    </Link>
  );
}
