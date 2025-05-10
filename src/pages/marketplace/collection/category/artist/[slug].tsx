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

  const dummyAvatars = Array(27)
    .fill(0)
    .map((_, i) => (
      <div
        key={i}
        className="flex flex-col items-center text-white text-sm w-32"
      >
        <Image
          src="/assets/img/thumb1.jpg"
          alt={`User ${i}`}
          width={64}
          height={64}
          className="rounded-full w-16 h-16 object-cover mb-2"
        />
        <span className="text-xs">Nicolaus Kozlowsky</span>
        <button className="text-purple-400 text-xs mt-1">Follow</button>
      </div>
    ));

  return (
    <div className="bg-redark-navy grid grid-cols-12 gap-8">
      <Sidebar
        dividerTitles={["Marketplace", "Account"]}
        navItems={[MockData.marketplace, MockData.accountItems]}
        button={true}
        className="col-start-1 col-end-3"
      />
      <div className="col-span-10 grid grid-cols-8 gap-5 gap-y-8 px-8 py-16">
        <div className="col-span-4 relative aspect-[4/5]">
          <div className="z-10 absolute top-[5%] left-[6%] bg-redark-purple p-6 rounded-full border-2 border-white w-[80px] h-[80px] flex items-center">
            <svg
              width="31"
              height="36"
              viewBox="0 0 31 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.9802 29.3344C17.8524 29.0039 16.6901 28.568 15.5 28.0406C14.3169 28.568 13.1475 28.9969 12.0198 29.3344C13.2928 32.0273 14.6075 32.625 15.5 32.625C16.3925 32.625 17.7072 32.0273 18.9802 29.3344ZM18.06 22.9008C19.084 22.275 20.0458 21.6281 20.9245 20.9602C20.9937 20.0109 21.0352 19.0195 21.0352 18C21.0352 16.9805 21.0006 15.9891 20.9245 15.0398C20.0388 14.3789 19.084 13.725 18.06 13.0992C17.1951 12.5719 16.3372 12.1008 15.5 11.6789C14.6628 12.1008 13.8049 12.5719 12.94 13.0992C11.916 13.725 10.9542 14.3719 10.0755 15.0398C10.0063 15.9891 9.96482 16.9805 9.96482 18C9.96482 19.0195 9.99942 20.0109 10.0755 20.9602C10.9612 21.6211 11.916 22.275 12.94 22.9008C13.8049 23.4281 14.6628 23.8992 15.5 24.3211C16.3372 23.8992 17.1951 23.4281 18.06 22.9008ZM26.3974 20.6367C25.6916 21.3539 24.9236 22.057 24.0864 22.7391C23.9204 24.1523 23.6851 25.4953 23.3738 26.7469C25.9476 26.9016 26.9647 26.107 27.373 25.3617C27.8227 24.5391 27.9403 23.0555 26.3974 20.6367ZM30.2789 9C31.7112 11.6086 30.9293 14.8219 28.646 18C30.9293 21.1781 31.7112 24.3914 30.2789 27C28.8813 29.5523 25.9546 30.4664 22.3083 30.0375C20.7861 33.7008 18.4613 36 15.5 36C12.5387 36 10.2139 33.7008 8.69173 30.0375C5.04543 30.4664 2.11871 29.5594 0.721073 27C-0.711154 24.3914 0.0706897 21.1781 2.35395 18C0.0706897 14.8219 -0.711154 11.6086 0.721073 9C2.11871 6.44766 5.04543 5.53359 8.69173 5.9625C10.2139 2.29922 12.5387 0 15.5 0C18.4613 0 20.7861 2.29922 22.3083 5.9625C25.9546 5.53359 28.8813 6.44062 30.2789 9ZM3.62704 25.3617C4.03526 26.107 5.05235 26.9086 7.62621 26.7469C7.31486 25.4953 7.07961 24.1523 6.91355 22.7391C6.08328 22.057 5.30835 21.3469 4.60262 20.6367C3.05969 23.0484 3.17039 24.5391 3.62704 25.3617ZM4.60262 15.3633C5.30835 14.6461 6.07636 13.943 6.91355 13.2609C7.07961 11.8477 7.31486 10.5047 7.62621 9.25313C5.05235 9.09141 4.03526 9.89297 3.62704 10.6383C3.17731 11.4609 3.05969 12.9445 4.60262 15.3633ZM15.5 7.95937C16.6831 7.43203 17.8524 7.00313 18.9802 6.66563C17.7072 3.97266 16.3925 3.375 15.5 3.375C14.6075 3.375 13.2928 3.97266 12.0198 6.66563C13.1475 6.99609 14.3099 7.43203 15.5 7.95937ZM24.0934 13.2609C24.9236 13.943 25.6986 14.6531 26.4043 15.3633C27.9472 12.9516 27.8296 11.4609 27.3799 10.6383C26.9717 9.89297 25.9546 9.09141 23.3807 9.25313C23.6921 10.5047 23.9273 11.8477 24.0934 13.2609ZM15.5 15.75C16.0872 15.75 16.6504 15.9871 17.0656 16.409C17.4808 16.831 17.7141 17.4033 17.7141 18C17.7141 18.5967 17.4808 19.169 17.0656 19.591C16.6504 20.0129 16.0872 20.25 15.5 20.25C14.9128 20.25 14.3496 20.0129 13.9344 19.591C13.5192 19.169 13.2859 18.5967 13.2859 18C13.2859 17.4033 13.5192 16.831 13.9344 16.409C14.3496 15.9871 14.9128 15.75 15.5 15.75Z"
                fill="white"
              />
            </svg>
          </div>
          <Image
            src="/assets/img/NFT-art.png"
            alt="NFT ARTWORK"
            fill
            className="object-cover rounded-xl !h-auto"
          />
        </div>
        <div className="text-white col-span-4 pb-8 pr-8 space-y-6">
          {/* Header */}
          <div className="text-center space-y-1">
            <h1 className="text-2xl font-bold font-mokoto text-start">
              {artist}
            </h1>
          </div>
          {/* Personal info */}
          <div className="bg-redark-purple/13 p-4 rounded-xl space-y-2">
            <p className="text-md font-mokoto border-b border-b-gray-500">
              Personal Intro
            </p>
            <p className="text-gray-400 text-sm font-azeret">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              tempor lobortis purus, non tempus neque. Nullam molestie, neque
              venenatis iaculis sagittis, lacus mi finibus lacus, id fringilla
              leo justo scelerisque lorem. Nunc convallis eget nisi quis
              laoreet. Morbi at risus erat. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Pellentesque faucibus ex ut facilisis
              ullamcorper. Etiam elit odio, sagittis ac lacinia sed, fringilla
              non felis.
            </p>
          </div>
          {/* Details */}
          <div className="bg-[#474747]/13 p-4 rounded-xl">
            <div className="border-b border-b-gray-500 flex items-center gap-4 pb-3">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.0008 14.4998H7.00343V15.4998C7.00343 15.6717 6.97219 15.8404 6.91908 15.9998H14.0008C15.1035 15.9998 16 15.1029 16 13.9998V4.82807C16 4.29682 15.7907 3.78745 15.4158 3.41246L12.5857 0.584368C12.2108 0.209373 11.7048 0 11.1737 0H6.00381C4.9011 0 4.00457 0.896864 4.00457 1.99998V4.22182L4.00769 4.2187C4.05455 4.19683 4.13264 4.1562 4.21386 4.12495C4.6387 3.95308 5.0979 3.9562 5.504 4.10933V1.99998C5.504 1.72498 5.72891 1.49998 6.00381 1.49998H11.0019V3.99995C11.0019 4.55307 11.4486 4.99994 12.0015 4.99994H14.5006V13.9998C14.5006 14.2748 14.2757 14.4998 14.0008 14.4998ZM3.41729 5.04994C3.10491 4.92182 2.74567 5.01869 2.5395 5.28431L2.2115 5.70618C2.17089 5.75931 2.11154 5.79056 2.04906 5.79993L1.52114 5.8718C1.18689 5.91868 0.924491 6.18118 0.880758 6.51242L0.80891 7.04054C0.799539 7.10617 0.765177 7.16554 0.715196 7.20304L0.290358 7.53429C0.0248336 7.74053 -0.0720045 8.0999 0.0560717 8.4124L0.255996 8.90614C0.280986 8.96552 0.280986 9.03427 0.255996 9.09677L0.0560717 9.58739C-0.0720045 9.89988 0.0248336 10.2593 0.290358 10.4655L0.712072 10.7936C0.765177 10.8342 0.796415 10.8936 0.805786 10.9561L0.877634 11.4842C0.924491 11.8186 1.18689 12.0811 1.51801 12.128L2.00533 12.1936V15.4998C2.00533 15.6842 2.10529 15.8529 2.27085 15.9404C2.43641 16.0279 2.63009 16.0186 2.78316 15.9154L4.00457 15.0998L5.22598 15.9154C5.37904 16.0186 5.57584 16.0279 5.73828 15.9404C5.90072 15.8529 6.00381 15.6842 6.00381 15.4998V12.1936L6.488 12.128C6.82224 12.0811 7.08464 11.8186 7.12838 11.4842L7.20023 10.9561C7.2096 10.8905 7.24396 10.8311 7.29394 10.7936L7.71565 10.4655C7.98118 10.2593 8.07802 9.89988 7.94994 9.58739L7.75314 9.09364C7.72815 9.03427 7.72815 8.96552 7.75314 8.90302L7.95619 8.40928C8.08426 8.09678 7.98743 7.73741 7.7219 7.53116L7.30019 7.20304C7.24708 7.16241 7.21584 7.10304 7.20647 7.04054L7.13463 6.51242C7.08777 6.17805 6.82537 5.91555 6.49424 5.8718L5.96632 5.79993C5.90072 5.79056 5.84137 5.75618 5.80388 5.70618L5.47588 5.28431C5.26971 5.01869 4.91047 4.92182 4.59809 5.04994L4.09828 5.24994C4.03893 5.27494 3.97021 5.27494 3.90773 5.24994L3.41417 5.04681L3.41729 5.04994ZM2.00533 8.99989C2.00533 8.46947 2.21596 7.96076 2.59089 7.5857C2.96582 7.21063 3.47434 6.99992 4.00457 6.99992C4.5348 6.99992 5.04331 7.21063 5.41824 7.5857C5.79317 7.96076 6.00381 8.46947 6.00381 8.99989C6.00381 9.53032 5.79317 10.039 5.41824 10.4141C5.04331 10.7892 4.5348 10.9999 4.00457 10.9999C3.47434 10.9999 2.96582 10.7892 2.59089 10.4141C2.21596 10.039 2.00533 9.53032 2.00533 8.99989Z"
                  fill="white"
                />
              </svg>
              <h2 className="text-lg font-semibold m-0">Details</h2>
            </div>
            <div className="text-sm space-y-1 flex pt-4 font-azeret">
              <div className="text-gray-500 grow flex flex-col gap-3">
                <p>Member Since</p>
                <p>NFTs Created</p>
                <p>NFTs Bought</p>
                <p>ARK Score</p>
                <p>Total Earnings</p>
              </div>
              <div className="text-gray-500 text-end flex flex-col gap-3">
                <p>{artistDetails.MemberSince}</p>
                <p>{artistDetails.NFTsCreated}</p>
                <p>{artistDetails.NFTsBought}</p>
                <p className="font-mokoto text-white">
                  {artistDetails.ARKScore}
                </p>
                <p>{artistDetails.TotalEarnings}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 flex flex-col gap-6">
          <PaginationContainer title="Following">
            {dummyAvatars}
          </PaginationContainer>
          <PaginationContainer title="Top Followers">
            {dummyAvatars}
          </PaginationContainer>
        </div>
        <div className="flex flex-col col-span-12">
          <div className="px-8 py-12 text-white">
            <div className="flex items-center pb-12">
              <h2 className="text-3xl font-semibold font-mokoto grow m-0">
                Related Artworks
              </h2>
              <SortDropdown />
            </div>
            <PaginatedNFTGallery />
          </div>
        </div>
        <div className="col-span-12">
          <h2 className="text-3xl text-white font-mokoto adjust-mokoto py-10">
            Trending NFTs
          </h2>
          <ArtistFilter state={open} />
          <div className="">
            <div className="col-span-12 flex">
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
          </div>
        </div>
      </div>
    </div>
  );
}
