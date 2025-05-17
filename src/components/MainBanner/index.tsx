import React from "react";
import RedarkButton from '@/components/RedarkButton/index';

function MainBanner() {
  return (
    <div className="bg-[url('/assets/img/marketplace-header.jpg')] rounded-[40px] w-full bg-center bg-cover px-[50px] py-[46px] hidden lg:block">
      <p className="font-bold text-5xl text-white max-w-[416px] leading-16">
        Discover Rare & Unique Digital Art
      </p>
      <div className="pt-5 gap-10 flex">
        <RedarkButton title="EXPLORE NFTS" />
        <RedarkButton title="CREATE NFT" />
      </div>
    </div>
  );
}

export default MainBanner;
