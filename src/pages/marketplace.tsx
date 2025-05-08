/* eslint-disable @next/next/no-img-element */
import React from "react";
// import { motion } from "framer-motion";
import RedarkButton from "@/components/RedarkButton/index";
import Sidebar from "@/components/Sidebar";
import SortDropdown from "@/components/SortDropdown";
import NFTCard from "@/components/NftCard";

const marketplace = () => {
  return (
    <div className="bg-redark-navy grid grid-cols-12 gap-8 h-screen">
      <Sidebar className="col-start-1 col-end-3" />
      <div className="col-start-3 col-end-11 p-6">
        <div className="bg-[url('/assets/img/marketplace-header.jpg')] rounded-[40px] bg-cover px-[50px] py-[46px]">
          <p className="font-bold text-5xl text-white max-w-[416px] leading-16">
            Discover Rare & Unique Digital Art
          </p>
          <div className="pt-5 gap-10 flex">
            <RedarkButton title="EXPLORE NFTS" />
            <RedarkButton title="CREATE NFT" />
          </div>
        </div>
        <p className="text-4xl font-mokoto adjust-mokoto py-10">
          Trending NFTs
        </p>
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <p className="bg-redark-purple rounded-[40px] py-2 px-5">
              Category
            </p>
            <p className="bg-redark-purple rounded-[40px] py-2 px-5">Artist</p>
            <p className="bg-redark-purple rounded-[40px] py-2 px-5">status</p>
            <p className="bg-redark-purple rounded-[40px] py-2 px-5">pricing</p>
          </div>
          <SortDropdown />
        </div>
        <div className="grid grid-cols-12 gap-6 my-12">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="col-span-3">
              <NFTCard
                creatorName="John Doe"
                imageSrc="/assets/img/duck-nft.jpg"
                title={`Cyber Duck #${index + 1}`}
                currentBid="0.58"
                onPlaceBid={() => alert(`Bid placed on Duck #${index + 1}`)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="col-start-11 col-end-13 pt-4">
        <p>Recently added</p>
      </div>
    </div>
  );
};

export default marketplace;
