// components/NFTCard.tsx
import Image from 'next/image';
import RedarkButton from '@/components/RedarkButton/index';

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
  return (
    <div className="bg-redark-purple/13 grid rounded-2xl shadow-lg py-5 pl-6 pr-3 max-w-xs text-white font-sans !box-content">
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
      <div className="flex justify-between items-center">
        <div>
          <p className="text-xs text-gray-400 font-azeret">Current Bid</p>
          <p className="text-sm font-bold">{currentBid} SOL</p>
        </div>
        <RedarkButton title='place Bid'
          onClick={onPlaceBid}
          className="bg-[#cfc2ff] text-[#1a1440] text-sm font-semibold !py-[14px] !px-[28px] rounded-full transition hover:bg-[#b5a8f0]"
        >
          PLACE BID
        </RedarkButton>
      </div>
    </div>
  );
}
