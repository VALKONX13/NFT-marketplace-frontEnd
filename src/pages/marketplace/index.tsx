import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import SortDropdown from "@/components/SortDropdown";
import NFTCard from "@/components/NftCard";
import RecentlyAddedSideCard from "@/components/RecentlyAddedSideCard";
import TopCreators from "@/components/TopCreatorsSideCard";
import HistorySideCard from "@/components/HistorySideCard";
import ArtistFilter from "@/components/ArtistsFilter";
import MockData from "@/utils/mockData";
import MainBanner from "@/components/MainBanner";
import Header from "@/components/Header";

const marketplace = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open, setOpen] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeFilter, setActiveFilter] = useState("");

  return (
    <div className="bg-redark-navy grid grid-cols-12 gap-8 h-auto">
      <Sidebar
        dividerTitles={["Marketplace", "Account"]}
        navItems={[MockData.marketplaceItems, MockData.accountItems]}
        button={true}
        className="col-start-1 col-end-3"
      />
      <div className='col-span-10'>
        <Header />
        <div className="grid grid-cols-8 gap-6">
          <div className="col-span-6 gap-6 py-4">
            <MainBanner />
            <ArtistFilter state={open} />
            <p className="text-4xl text-white font-mokoto adjust-mokoto py-10">
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
                      className={`rounded-[40px] py-2 px-5 transition-all ${activeFilter === filter
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
          <div className="col-span-2 pt-4 flex flex-col gap-6">
            <RecentlyAddedSideCard
              title="RECENTLY ADDED"
              mainImage={{
                src: "/assets/img/lizard-main.jpg",
                category: "Category",
                timestamp: "16h ago",
              }}
              items={MockData.recentlyAddedItems}
            />
            <TopCreators
              title="TOP CREATORS"
              creators={MockData.TopCreatorsItems}
            />
            <HistorySideCard items={MockData.historyData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default marketplace;
