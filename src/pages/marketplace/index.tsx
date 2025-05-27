import React, { useState } from "react";
import { motion } from "framer-motion";
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

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const sideCardVariants = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0 },
};

const Marketplace = () => {
  const [open, setOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("");

  return (
    <div
      className="bg-redark-navy text-white grid grid-cols-5 md:grid-cols-8 lg:grid-cols-12 lg:gap-5 md:gap-5 gap-2 h-auto"
    >
      <motion.div variants={itemVariants} className="lg:col-span-3 xl:col-span-2 col-span-1">
        <Sidebar
          dividerTitles={["Marketplace", "Account"]}
          navItems={[MockData.mainPageSidebar, MockData.accountItems]}
          button={true}
        />
      </motion.div>

      <motion.div variants={itemVariants} className="xl:col-span-10 lg:col-span-9 md:col-span-7 col-span-4">
        <Header searchBar={true} wallet={true} />
        <div className="lg:grid lg:grid-cols-8 gap-6">
          <motion.div variants={itemVariants} className="flex flex-col items-center mx-auto">
            <p className="lg:hidden block font-mokoto text-sm text-redark-purple mb-4 pt-4">
              Explore Marketplace
            </p>
            <RedarkButton title="CREATE NFT" href="/ark-tools/nft-mint-tool" className="!mx-3 !px-6 text-[10px] lg:hidden block" />
          </motion.div>

          <div className="col-span-8 xl:col-start-1 xl:col-end-7 gap-6 py-4 xl:pr-0 pr-2 md:pr-5">
            <motion.div variants={itemVariants}><MainBanner className="hidden lg:block" /></motion.div>
            <motion.div variants={itemVariants}><ArtistFilter state={open} /></motion.div>

            {/* trending NFTS */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex items-center justify-between mb-4">
              <p className="lg:text-4xl md:text-2xl text-xs -mb-1 text-white font-mokoto adjust-mokoto lg:py-10 pb-4">
                Trending NFTs
              </p>
              <span className="lg:hidden inline">
                <SortDropdown />
              </span>
            </motion.div>

            {/* Filter Options */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex items-center gap-2">
              <div className="flex items-center gap-2 grow justify-center md:justify-start pr-2">
                <div className="flex lg:gap-2 gap-1">
                  {["category", "artist", "status", "pricing"].map((filter) => (
                    <motion.button
                      key={filter}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
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
                    </motion.button>
                  ))}
                </div>
              </div>
              <span className="hidden lg:inline">
                <SortDropdown />
              </span>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="md:grid md:grid-cols-6 lg:grid-cols-12 md:gap-6 gap-3 lg:my-12 my-4"
            >
              {/* Mobile cards */}
              <PaginationContainer title="" itemsPerPage={1} className="!bg-transparent md:hidden">
                {[...Array(4)].map((_, index) => (
                  <motion.div key={index} variants={itemVariants} className="xl:col-span-4 2xl:col-span-3 lg:col-span-4">
                    <NFTCard
                      creatorName="John Doe"
                      imageSrc="/assets/img/duck-nft.jpg"
                      title={`Cyber Duck #${index + 1}`}
                      currentBid="0.58"
                      onPlaceBid={() => alert(`Bid placed on Duck #${index + 1}`)}
                    />
                  </motion.div>
                ))}
              </PaginationContainer>

              {[...Array(4)].map((_, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="xl:col-span-4 2xl:col-span-3 lg:col-span-4 md:col-span-3 hidden md:inline"
                >
                  <NFTCard
                    creatorName="John Doe"
                    imageSrc="/assets/img/duck-nft.jpg"
                    title={`Cyber Duck #${index + 1}`}
                    currentBid="0.58"
                    onPlaceBid={() => alert(`Bid placed on Duck #${index + 1}`)}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* trending NFTS */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }} className="flex items-center justify-between mb-4">
              <p className="lg:text-4xl md:text-2xl text-xs -mb-1 text-white font-mokoto adjust-mokoto lg:py-10 pb-4">
                Trending NFTs
              </p>
              <span className="lg:hidden inline">
                <SortDropdown />
              </span>
            </motion.div>

            {/* Filter Options */}
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <div className="flex items-center gap-2 grow justify-center md:justify-start pr-2">
                <div className="flex lg:gap-2 gap-1">
                  {["category", "artist", "status", "pricing"].map((filter) => (
                    <motion.button
                      key={filter}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
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
                    </motion.button>
                  ))}
                </div>
              </div>
              <span className="hidden lg:inline">
                <SortDropdown />
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="md:grid md:grid-cols-6 lg:grid-cols-12 md:gap-6 gap-3 lg:my-12 my-4"
            >
              {/* Mobile cards */}
              <PaginationContainer title="" itemsPerPage={1} className="!bg-transparent md:hidden">
                {[...Array(8)].map((_, index) => (
                  <motion.div key={index} variants={itemVariants} className="xl:col-span-4 2xl:col-span-3 lg:col-span-4">
                    <NFTCard
                      creatorName="John Doe"
                      imageSrc="/assets/img/duck-nft.jpg"
                      title={`Cyber Duck #${index + 1}`}
                      currentBid="0.58"
                      onPlaceBid={() => alert(`Bid placed on Duck #${index + 1}`)}
                    />
                  </motion.div>
                ))}
              </PaginationContainer>

              {[...Array(8)].map((_, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="xl:col-span-4 2xl:col-span-3 lg:col-span-4 md:col-span-3 hidden md:inline"
                >
                  <NFTCard
                    creatorName="John Doe"
                    imageSrc="/assets/img/duck-nft.jpg"
                    title={`Cyber Duck #${index + 1}`}
                    currentBid="0.58"
                    onPlaceBid={() => alert(`Bid placed on Duck #${index + 1}`)}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={sideCardVariants}
            className="col-span-2 xl:col-span-2 lg:col-span-8 pt-4 flex flex-col lg:gap-6 gap-10 ml-8 lg:ml-0 items-end"
          >
            <RecentlyAddedSideCard
              title="RECENTLY ADDED"
              mainImage={{
                src: "/assets/img/lizard-main.jpg",
                category: "Category",
                timestamp: "16h ago",
              }}
              items={MockData.recentlyAddedItems}
            />
            <TopCreators title="TOP CREATORS" creators={MockData.TopCreatorsItems} />
            <HistorySideCard items={MockData.historyData} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Marketplace;
