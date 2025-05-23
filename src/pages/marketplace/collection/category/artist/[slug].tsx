import PaginatedNFTGallery from "@/components/PaginatedNFTGallery";
import SortDropdown from "@/components/SortDropdown";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { useRouter } from "next/router";
import PaginationContainer from "@/components/PaginationContainer";
import ArtistFilter from "@/components/ArtistsFilter";
import { useState } from "react";
import NFTCard from "@/components/NftCard";
import MockData from "@/utils/mockData";
import { motion } from 'framer-motion';
import Header from "@/components/Header";
import MobileFollowersSection from "@/components/MobileFollowersSection";
import UserCard from "@/components/UserCard";

export default function ArtistDetailPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [open, setOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("");

  const artistSlug = slug as string;

  if (!slug || typeof slug !== "string") {
    return <div className="text-white p-8">Loading artist info...</div>;
  }

  const artist = artistSlug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const artistDetails = {
    MemberSince: "2025.05.23 9:34 AM (75 days)",
    NFTsCreated: 7,
    NFTsBought: 4,
    ARKScore: 910,
    TotalEarnings: "271.98 SOL",
  };

  const dummyAvatars = Array.from({ length: 18 }, (_, i) => ({
    id: i + 1,
    name: "Nicolaus Kozlowsky",
    avatar: "/assets/img/thumb1.jpg"
  }));

  return (
    <div className="bg-redark-navy text-white grid grid-cols-5 md:grid-cols-8 lg:grid-cols-12 lg:gap-5 md:gap-5 gap-2 h-auto">
      <Sidebar
        dividerTitles={["Marketplace", "Account"]}
        navItems={[MockData.mainPageSidebar, MockData.accountItems]}
        button={true}
        className="lg:col-span-3 xl:col-span-2 col-span-1"
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="lg:col-span-9 xl:col-span-10 md:col-span-7 col-span-4 2xl:px-14">
        <div className="col-span-10">
          <Header searchBar={true} wallet={true} />
        </div>
        <div className="col-span-12 grid grid-cols-12 gap-5 gap-y-8 md:py-10 pt-5 2xl:pt-20">
          <div className="col-span-12 grid grid-cols-4 md:col-span-12 gap-3 md:pr-8 pr-3">
            {/* Mobile title */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="text-center space-y-1 flex-col gap-6 items-start md:hidden flex col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="flex md:flex-row flex-col w-full md:justify-between gap-4">
                <p className="md:hidden font-mokoto text-redark-purple text-center">Artist Details</p>
                <h1 className="text-xl m-0 font-mokoto text-start -mb-3">
                  {artist}
                </h1>
                <p className="text-redark-purple hidden md:inline">Marketplace/Collection/Category/Artist</p>
                <div className="flex items-center gap-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.8571 10.2857C21.6964 10.2857 24 7.98214 24 5.14286C24 2.30357 21.6964 0 18.8571 0C16.0179 0 13.7143 2.30357 13.7143 5.14286C13.7143 5.35714 13.725 5.57143 13.7518 5.78036L8.71071 8.29821C7.78929 7.40357 6.53036 6.85714 5.14286 6.85714C2.30357 6.85714 0 9.16071 0 12C0 14.8393 2.30357 17.1429 5.14286 17.1429C6.53036 17.1429 7.78929 16.5964 8.71071 15.7018L13.7518 18.2196C13.725 18.4286 13.7143 18.6375 13.7143 18.8571C13.7143 21.6964 16.0179 24 18.8571 24C21.6964 24 24 21.6964 24 18.8571C24 16.0179 21.6964 13.7143 18.8571 13.7143C17.4696 13.7143 16.2107 14.2607 15.2893 15.1554L10.2482 12.6375C10.275 12.4286 10.2857 12.2196 10.2857 12C10.2857 11.7804 10.275 11.5714 10.2482 11.3625L15.2893 8.84464C16.2107 9.73929 17.4696 10.2857 18.8571 10.2857Z" fill="#8C52FF" />
                  </svg>
                  <div className="bg-redark-purple/25 border border-redark-purple/50 rounded-full aspect-square w-[30px] h-[30px] flex justify-center items-center">
                    <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.076 12.4V10.324H8V9.064H10.076V7H11.336V9.064H13.4V10.324H11.336V12.4H10.076Z" fill="white" />
                      <path d="M10.606 3.81694L10.0844 3.23013L9.90181 3.02584C8.77166 1.7566 7.06341 1.16544 5.38992 1.46971C3.07312 1.89134 1.39095 3.90822 1.39095 6.26414V6.41627C1.39095 7.82026 1.97341 9.15905 3.00358 10.1153L10.9972 17.5612C11.032 17.5917 11.0798 17.6134 11.1276 17.6134C11.1754 17.6134 11.2232 17.596 11.258 17.5612L19.2559 10.1153C20.2818 9.15905 20.8642 7.82026 20.8642 6.41627V6.26414C20.8642 3.90822 19.182 1.89134 16.8652 1.46971C15.1918 1.16544 13.4835 1.7566 12.3534 3.02584L12.1708 3.23013L11.6492 3.81694C11.5188 3.96473 11.3275 4.05166 11.1276 4.05166C10.9276 4.05166 10.7407 3.96473 10.606 3.81694ZM12.123 1.33497C13.5183 0.243941 15.3309 -0.221157 17.113 0.1005C20.0905 0.643839 22.2552 3.23883 22.2552 6.26414V6.41627C22.2552 7.98109 21.6857 9.48505 20.6643 10.6543C20.5165 10.8195 20.3643 10.9803 20.1992 11.1325L12.2012 18.5784C12.1664 18.6131 12.1273 18.6436 12.0882 18.674C11.8144 18.887 11.4753 19 11.1276 19C10.7277 19 10.3452 18.8479 10.0496 18.5784L2.05165 11.1368C1.88647 10.9847 1.73434 10.8238 1.58655 10.6587C0.569419 9.48505 0 7.98109 0 6.41627V6.26414C0 3.23883 2.16466 0.643839 5.14216 0.1005C6.91996 -0.221157 8.73254 0.239595 10.1278 1.33497C10.4191 1.56534 10.6929 1.81745 10.9407 2.09999L11.1232 2.30428L11.3058 2.09999C11.4884 1.89569 11.6796 1.70444 11.8839 1.53057C11.9621 1.46537 12.0404 1.40017 12.1186 1.33497H12.123Z" fill="white" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            <motion.div className="md:col-span-2 col-span-4 relative aspect-square"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}>
              <Image
                src="/assets/img/NFT-art.png"
                alt="NFT ARTWORK"
                fill
                className="object-cover rounded-xl !h-auto"
              />
            </motion.div>
            <div className="text-white md:col-span-2 col-span-4 pb-8 md: space-y-6">
              {/* Desktop title */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="text-center space-y-1 flex-col gap-6 items-start hidden md:flex md:pl-3">
                <div className="flex w-full justify-between">
                  <p className="text-redark-purple hidden md:inline">Marketplace/Collection/Category/Artist</p>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.8571 10.2857C21.6964 10.2857 24 7.98214 24 5.14286C24 2.30357 21.6964 0 18.8571 0C16.0179 0 13.7143 2.30357 13.7143 5.14286C13.7143 5.35714 13.725 5.57143 13.7518 5.78036L8.71071 8.29821C7.78929 7.40357 6.53036 6.85714 5.14286 6.85714C2.30357 6.85714 0 9.16071 0 12C0 14.8393 2.30357 17.1429 5.14286 17.1429C6.53036 17.1429 7.78929 16.5964 8.71071 15.7018L13.7518 18.2196C13.725 18.4286 13.7143 18.6375 13.7143 18.8571C13.7143 21.6964 16.0179 24 18.8571 24C21.6964 24 24 21.6964 24 18.8571C24 16.0179 21.6964 13.7143 18.8571 13.7143C17.4696 13.7143 16.2107 14.2607 15.2893 15.1554L10.2482 12.6375C10.275 12.4286 10.2857 12.2196 10.2857 12C10.2857 11.7804 10.275 11.5714 10.2482 11.3625L15.2893 8.84464C16.2107 9.73929 17.4696 10.2857 18.8571 10.2857Z" fill="#8C52FF" />
                  </svg>
                </div>
                <div className="flex gap-6 items-center">
                  <h1 className="text-3xl m-0 font-mokoto text-start -mb-3">
                    {artist}
                  </h1>
                  <div className="bg-redark-purple/25 border border-redark-purple/50 rounded-full w-[40px] h-[40px] flex justify-center items-center">
                    <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.076 12.4V10.324H8V9.064H10.076V7H11.336V9.064H13.4V10.324H11.336V12.4H10.076Z" fill="white" />
                      <path d="M10.606 3.81694L10.0844 3.23013L9.90181 3.02584C8.77166 1.7566 7.06341 1.16544 5.38992 1.46971C3.07312 1.89134 1.39095 3.90822 1.39095 6.26414V6.41627C1.39095 7.82026 1.97341 9.15905 3.00358 10.1153L10.9972 17.5612C11.032 17.5917 11.0798 17.6134 11.1276 17.6134C11.1754 17.6134 11.2232 17.596 11.258 17.5612L19.2559 10.1153C20.2818 9.15905 20.8642 7.82026 20.8642 6.41627V6.26414C20.8642 3.90822 19.182 1.89134 16.8652 1.46971C15.1918 1.16544 13.4835 1.7566 12.3534 3.02584L12.1708 3.23013L11.6492 3.81694C11.5188 3.96473 11.3275 4.05166 11.1276 4.05166C10.9276 4.05166 10.7407 3.96473 10.606 3.81694ZM12.123 1.33497C13.5183 0.243941 15.3309 -0.221157 17.113 0.1005C20.0905 0.643839 22.2552 3.23883 22.2552 6.26414V6.41627C22.2552 7.98109 21.6857 9.48505 20.6643 10.6543C20.5165 10.8195 20.3643 10.9803 20.1992 11.1325L12.2012 18.5784C12.1664 18.6131 12.1273 18.6436 12.0882 18.674C11.8144 18.887 11.4753 19 11.1276 19C10.7277 19 10.3452 18.8479 10.0496 18.5784L2.05165 11.1368C1.88647 10.9847 1.73434 10.8238 1.58655 10.6587C0.569419 9.48505 0 7.98109 0 6.41627V6.26414C0 3.23883 2.16466 0.643839 5.14216 0.1005C6.91996 -0.221157 8.73254 0.239595 10.1278 1.33497C10.4191 1.56534 10.6929 1.81745 10.9407 2.09999L11.1232 2.30428L11.3058 2.09999C11.4884 1.89569 11.6796 1.70444 11.8839 1.53057C11.9621 1.46537 12.0404 1.40017 12.1186 1.33497H12.123Z" fill="white" />
                    </svg>
                  </div>
                </div>
              </motion.div>
              {/* Personal info */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="md:bg-redark-purple/13 bg-transparent py-4 md:px-8 px-4 rounded-xl space-y-2 md:mx-3">
                <p className="xl:text-lg text-2xl text-center md:text-start font-mokoto border-b pb-3 pt-1 border-b-gray-500">
                  Personal Intro
                </p>
                <p className="text-gray-400 text-sm font-azeret leading-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                  tempor lobortis purus, non tempus neque. Nullam molestie, neque
                  venenatis iaculis sagittis, lacus mi finibus lacus, id fringilla
                  leo justo scelerisque lorem. Nunc convallis eget nisi quis
                  laoreet. Morbi at risus erat. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Pellentesque faucibus ex ut facilisis
                  ullamcorper. Etiam elit odio, sagittis ac lacinia sed, fringilla
                  non felis.
                </p>
              </motion.div>
              {/* Details */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-[#474747]/13 p-4 rounded-xl mr-2 ml-3">
                <div className="border-b lg:justify-start justify-center border-b-gray-500 flex items-center gap-4 pb-3">
                  <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 2H8.75H8.45C8.21875 0.859375 7.20937 0 6 0C4.79063 0 3.78125 0.859375 3.55 2H3.25H2C0.896875 2 0 2.89687 0 4V14C0 15.1031 0.896875 16 2 16H10C11.1031 16 12 15.1031 12 14V4C12 2.89687 11.1031 2 10 2ZM2.5 3.5V4.25C2.5 4.66563 2.83437 5 3.25 5H6H8.75C9.16562 5 9.5 4.66563 9.5 4.25V3.5H10C10.275 3.5 10.5 3.725 10.5 4V14C10.5 14.275 10.275 14.5 10 14.5H2C1.725 14.5 1.5 14.275 1.5 14V4C1.5 3.725 1.725 3.5 2 3.5H2.5ZM5.25 2.5C5.25 2.30109 5.32902 2.11032 5.46967 1.96967C5.61032 1.82902 5.80109 1.75 6 1.75C6.19891 1.75 6.38968 1.82902 6.53033 1.96967C6.67098 2.11032 6.75 2.30109 6.75 2.5C6.75 2.69891 6.67098 2.88968 6.53033 3.03033C6.38968 3.17098 6.19891 3.25 6 3.25C5.80109 3.25 5.61032 3.17098 5.46967 3.03033C5.32902 2.88968 5.25 2.69891 5.25 2.5ZM4.25 8.5C4.25 8.40151 4.2306 8.30398 4.19291 8.21299C4.15522 8.12199 4.09997 8.03931 4.03033 7.96967C3.96069 7.90003 3.87801 7.84478 3.78701 7.80709C3.69602 7.7694 3.59849 7.75 3.5 7.75C3.40151 7.75 3.30398 7.7694 3.21299 7.80709C3.12199 7.84478 3.03931 7.90003 2.96967 7.96967C2.90003 8.03931 2.84478 8.12199 2.80709 8.21299C2.7694 8.30398 2.75 8.40151 2.75 8.5C2.75 8.59849 2.7694 8.69602 2.80709 8.78701C2.84478 8.87801 2.90003 8.96069 2.96967 9.03033C3.03931 9.09997 3.12199 9.15522 3.21299 9.19291C3.30398 9.2306 3.40151 9.25 3.5 9.25C3.59849 9.25 3.69602 9.2306 3.78701 9.19291C3.87801 9.15522 3.96069 9.09997 4.03033 9.03033C4.09997 8.96069 4.15522 8.87801 4.19291 8.78701C4.2306 8.69602 4.25 8.59849 4.25 8.5ZM5.5 8C5.225 8 5 8.225 5 8.5C5 8.775 5.225 9 5.5 9H8.5C8.775 9 9 8.775 9 8.5C9 8.225 8.775 8 8.5 8H5.5ZM5.5 11C5.225 11 5 11.225 5 11.5C5 11.775 5.225 12 5.5 12H8.5C8.775 12 9 11.775 9 11.5C9 11.225 8.775 11 8.5 11H5.5ZM3.5 12.25C3.69891 12.25 3.88968 12.171 4.03033 12.0303C4.17098 11.8897 4.25 11.6989 4.25 11.5C4.25 11.3011 4.17098 11.1103 4.03033 10.9697C3.88968 10.829 3.69891 10.75 3.5 10.75C3.30109 10.75 3.11032 10.829 2.96967 10.9697C2.82902 11.1103 2.75 11.3011 2.75 11.5C2.75 11.6989 2.82902 11.8897 2.96967 12.0303C3.11032 12.171 3.30109 12.25 3.5 12.25Z" fill="white" />
                  </svg>
                  <h2 className="text-lg m-0">Details</h2>
                </div>
                <div className="text-sm space-y-1 flex pt-4 font-azeret">
                  <div className="text-gray-500 grow flex flex-col gap-3 md:gap-6">
                    <div className="md:flex md:justify-between flex-col md:flex-row">
                      <p className="text-center">Member Since</p>
                      <p className="text-center text-white md:text-gray-500">{artistDetails.MemberSince}</p>
                    </div>
                    <div className="md:flex md:justify-between flex-col md:flex-row">
                      <p className="text-center">NFTs Created</p>
                      <p className="text-center text-white md:text-gray-500">{artistDetails.NFTsCreated}</p>
                    </div>
                    <div className="md:flex md:justify-between flex-col md:flex-row">
                      <p className="text-center">NFTs Bought</p>
                      <p className="text-center text-white md:text-gray-500">{artistDetails.NFTsBought}</p>
                    </div>
                    <div className="md:flex md:justify-between flex-col md:flex-row">
                      <p className="text-center">ARK Score</p>
                      <p className="font-mokoto text-center text-white">{artistDetails.ARKScore}</p>
                    </div>
                    <div className="md:flex md:justify-between flex-col md:flex-row">
                      <p className="text-center">Total Earnings</p>
                      <p className="text-center text-white md:text-gray-500">{artistDetails.TotalEarnings}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="col-span-12 flex-col gap-10 hidden md:flex pr-6">
            <PaginationContainer title="Following" display="flex flex-col md:flex-row overflow-auto" itemsPerPage={5}>
              {dummyAvatars.map((item) => (
                <UserCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  avatar={item.avatar}
                />
              ))}
            </PaginationContainer>
            <PaginationContainer title="Followers" display="flex flex-col md:flex-row overflow-auto" itemsPerPage={5}>
              {dummyAvatars.map((item) => (
                <UserCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  avatar={item.avatar}
                />
              ))}
            </PaginationContainer>
          </div>
          <div className="col-span-full ml-4 bg-redark-purple/13 rounded-tl-3xl rounded-bl-3xl p-4 md:hidden">
            <MobileFollowersSection title="Following" items={MockData.historyData} />
          </div>
          <div className="col-span-full my-6 ml-4 bg-redark-purple/13 rounded-tl-3xl rounded-bl-3xl p-4 md:hidden">
            <MobileFollowersSection title="Followers" items={MockData.historyData} />
          </div>
          <div className="flex flex-col col-span-12 xl:max-w-[85%]">
            <div className=" md:pt-12 text-white pr-4 pl-2">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="flex items-center md:pb-12 pb-2">
                <h2 className="lg:text-3xl text-lg font-mokoto grow m-0">
                  Top sellers
                </h2>
                <SortDropdown className="hidden md:flex" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="hidden xl:grid grid-cols-12 gap-10">
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
              </motion.div>
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="sm:hidden inline">
                <PaginatedNFTGallery itemsPerPage={1} />
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="hidden sm:inline md:hidden">
                <PaginatedNFTGallery itemsPerPage={2} />
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="hidden md:inline xl:hidden">
                <PaginatedNFTGallery itemsPerPage={3} />
              </motion.span>
            </div>
          </div>
          <div className="flex flex-col col-span-12 xl:max-w-[85%]">
            <div className=" md:pt-12 text-white pr-4 pl-2">
              <ArtistFilter state={open} />
              <div className="flex flex-col justify-center md:pb-12 pb-2">
                <h2 className="lg:text-3xl text-lg font-mokoto grow m-0 md:mb-7 mb-2">
                  Minted NFTs
                </h2>
                <div className="flex justify-between">
                  <div className="lg:gap-2 gap-1 hidden md:flex">
                    {["category", "artist", "status", "pricing"].map((filter) => (
                      <motion.button
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.2 }}
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
                      </motion.button>
                    ))}
                  </div>
                  <SortDropdown className="hidden md:flex" />
                </div>

              </div>
              <div className="hidden xl:grid grid-cols-12 gap-10">
                {[...Array(8)].map((_, index) => (
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
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="sm:hidden inline">
                <PaginatedNFTGallery itemsPerPage={1} />
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="hidden sm:inline md:hidden">
                <PaginatedNFTGallery itemsPerPage={2} />
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="hidden md:inline xl:hidden">
                <PaginatedNFTGallery itemsPerPage={3} />
              </motion.span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
