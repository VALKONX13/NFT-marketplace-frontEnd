/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
// import { motion } from "framer-motion";
import RedarkButton from "@/components/RedarkButton/index";
import Sidebar from "@/components/Sidebar";
import SortDropdown from "@/components/SortDropdown";
import NFTCard from "@/components/NftCard";
import RecentlyAddedSideCard from "@/components/RecentlyAddedSideCard";
import TopCreators from "@/components/TopCreatorsSideCard";
import HistorySideCard from "@/components/HistorySideCard";
import ArtistFilter from "@/components/ArtistsFilter";

const recentlyAddedItems = [
  {
    id: 1,
    thumbnail: "/assets/img/thumb1.jpg",
    name: "Jack Doeig",
    date: "Mon, 08 May",
  },
  {
    id: 2,
    thumbnail: "/assets/img/thumb1.jpg",
    name: "Jack Doeig",
    date: "Mon, 08 May",
  },
  {
    id: 3,
    thumbnail: "/assets/img/thumb1.jpg",
    name: "Jack Doeig",
    date: "Mon, 08 May",
  },
];

const TopCreatorsItems = [
  {
    id: 1,
    name: "Nicolaus Kozlowsky",
    avatar: "/assets/img/thumb1.jpg",
  },
  {
    id: 2,
    name: "Nicolaus Kozlowsky",
    avatar: "/assets/img/thumb1.jpg",
  },
  {
    id: 3,
    name: "Nicolaus Kozlowsky",
    avatar: "/assets/img/thumb1.jpg",
  },
  {
    id: 4,
    name: "Nicolaus Kozlowsky",
    avatar: "/assets/img/thumb1.jpg",
  },
  {
    id: 5,
    name: "Nicolaus Kozlowsky",
    avatar: "/assets/img/thumb1.jpg",
  },
];

const historyData = [
  {
    id: "1",
    avatar: "/assets/img/thumb1.jpg",
    title: "Lorem NFT Sold",
    subtitle: "1.22 SOL",
    time: "Just now",
  },
  {
    id: "2",
    avatar: "/assets/img/thumb1.jpg",
    title: "New NFT Uploaded",
    subtitle: "by Marisol Pena",
    time: "1h ago",
  },
  {
    id: "3",
    avatar: "/assets/img/thumb1.jpg",
    title: "You followed a creator",
    subtitle: "Jane Cooper",
    time: "2h ago",
  },
  {
    id: "4",
    avatar: "/assets/img/thumb1.jpg",
    title: "You placed a bod",
    subtitle: "Funny Monkey NFT",
    time: "6h ago",
  },
  {
    id: "5",
    avatar: "/assets/img/thumb1.jpg",
    title: "You followed a creator",
    subtitle: "Courtney Covv",
    time: "08 May",
  },
];

const marketplace = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open, setOpen] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeFilter, setActiveFilter] = useState(""); // or null if none selected

  return (
    <div className="bg-redark-navy grid grid-cols-12 gap-8 h-auto">
      <Sidebar className="col-start-1 col-end-3" />
      <div className="col-start-3 col-end-11 py-4">
        <div className="bg-[url('/assets/img/marketplace-header.jpg')] rounded-[40px] bg-cover px-[50px] py-[46px]">
          <p className="font-bold text-5xl text-white max-w-[416px] leading-16">
            Discover Rare & Unique Digital Art
          </p>
          <div className="pt-5 gap-10 flex">
            <RedarkButton title="EXPLORE NFTS" />
            <RedarkButton title="CREATE NFT" />
          </div>
        </div>
        <ArtistFilter state={open} />
        <p className="text-4xl font-mokoto adjust-mokoto py-10">
          Trending NFTs
        </p>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 grow">
            <div className="flex gap-2">
              {["category", "artist", "status", "pricing"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => {
                    setActiveFilter(filter);
                    if (filter === "artist") setOpen(!open);
                  }}
                  className={`rounded-[40px] py-2 px-5 transition-all ${
                    activeFilter === filter
                      ? "bg-redark-purple text-white"
                      : "bg-transparent border border-redark-purple text-white"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
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
      <div className="col-start-11 col-end-13 pt-4 flex flex-col gap-6">
        <RecentlyAddedSideCard
          title="RECENTLY ADDED"
          mainImage={{
            src: "/assets/img/lizard-main.jpg",
            category: "Category",
            timestamp: "16h ago",
          }}
          items={recentlyAddedItems}
        />
        <TopCreators title="TOP CREATORS" creators={TopCreatorsItems} />
        <HistorySideCard items={historyData} />
      </div>
    </div>
  );
};

export default marketplace;
