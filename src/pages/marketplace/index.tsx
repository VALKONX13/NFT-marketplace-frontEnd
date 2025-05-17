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
import RedarkButton from "@/components/RedarkButton";
import PaginationContainer from "@/components/PaginationContainer";

const marketplace = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open, setOpen] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeFilter, setActiveFilter] = useState("");

  return (
    <div className="bg-redark-navy grid grid-cols-5 md:grid-cols-8 lg:grid-cols-12 lg:gap-5 md:gap-5 gap-2 h-auto">
      <Sidebar
        dividerTitles={["Marketplace", "Account"]}
        navItems={[MockData.marketplaceItems, MockData.accountItems]}
        button={true}
        className="lg:col-span-3 xl:col-span-2 col-span-1"
      />
      <div className='xl:col-span-10 lg:col-span-9 md:col-span-7 col-span-4'>
        <Header />
        <div className="lg:grid lg:grid-cols-8 gap-6">
          <div className="flex flex-col items-center mx-auto">
            <p className="lg:hidden block font-mokoto text-sm text-redark-purple mb-4 pt-4">Explore Marketplace</p>
            <RedarkButton title="CREATE NFT" href="/ark-tools/nft-mint-tool" className="!mx-3 !px-6 text-[10px] lg:hidden block" />
          </div>
          <div className="col-span-8 xl:col-start-1 xl:col-end-7 gap-6 py-4 xl:pr-0 pr-2 md:pr-5">
            <MainBanner />
            <ArtistFilter state={open} />
            <div className="flex items-center justify-between mb-4">
              <p className="lg:text-4xl md:text-2xl text-xs -mb-1 text-white font-mokoto adjust-mokoto lg:py-10 pb-4">
                Trending NFTs
              </p>
              <span className="lg:hidden inline">
                <SortDropdown />
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 grow justify-center md:justify-start pr-2">
                <div className="flex lg:gap-2 gap-1">
                  {["category", "artist", "status", "pricing"].map((filter) => (
                    <button
                      key={filter}
                      onClick={() => {
                        setActiveFilter(filter);
                        if (filter === "artist") setOpen(!open);
                      }}
                      className={`rounded-[40px] py-2 lg:px-5 px-2 transition-all text-xs lg:text-md ${activeFilter === filter
                        ? "bg-redark-purple text-white"
                        : "bg-transparent border border-redark-purple text-white"
                        }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
              <span className="hidden lg:inline">
                <SortDropdown />
              </span>
            </div>
            <div className="md:grid md:grid-cols-6 lg:grid-cols-12 md:gap-6 gap-3 lg:my-12 my-4">
              <PaginationContainer title="" itemsPerPage={1} className="!bg-transparent md:hidden">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="xl:col-span-4 2xl:col-span-3 lg:col-span-4">
                    <NFTCard
                      creatorName="John Doe"
                      imageSrc="/assets/img/duck-nft.jpg"
                      title={`Cyber Duck #${index + 1}`}
                      currentBid="0.58"
                      onPlaceBid={() => alert(`Bid placed on Duck #${index + 1}`)}
                    />
                  </div>
                ))}
              </PaginationContainer>
              {[...Array(4)].map((_, index) => (
                <div key={index} className="xl:col-span-4 2xl:col-span-3 lg:col-span-4 md:col-span-3 hidden md:inline">
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
          <div className="col-span-2 xl:col-span-2 lg:col-span-8 pt-4 flex flex-col lg:gap-6 gap-10 ml-8 lg:ml-0 items-end">
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
