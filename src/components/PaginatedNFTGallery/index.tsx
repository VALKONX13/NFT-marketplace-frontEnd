"use client";

import { useState } from "react";
import NFTCard from "@/components/NftCard";

const nftData = [
  {
    creatorName: "John Doe",
    imageSrc: "/assets/img/duck-nft.jpg",
    title: "Artwork Title Possible Text",
    currentBid: "0.58",
  },
  {
    creatorName: "Jane Smith",
    imageSrc: "/assets/img/duck-nft.jpg",
    title: "Cyber Cat Supreme",
    currentBid: "0.73",
  },
  {
    creatorName: "Jane Smith",
    imageSrc: "/assets/img/duck-nft.jpg",
    title: "Cyber Cat Supreme",
    currentBid: "0.73",
  },

  {
    creatorName: "Jane Smith",
    imageSrc: "/assets/img/duck-nft.jpg",
    title: "Cyber Cat Supreme",
    currentBid: "0.73",
  },
  {
    creatorName: "Jane Smith",
    imageSrc: "/assets/img/duck-nft.jpg",
    title: "Cyber Cat Supreme",
    currentBid: "0.73",
  },
  {
    creatorName: "Jane Smith",
    imageSrc: "/assets/img/duck-nft.jpg",
    title: "Cyber Cat Supreme",
    currentBid: "0.73",
  },
];

type PaginatedNFTGalleryProps = {
  itemsPerPage?: number;
};

export default function PaginatedNFTGallery({
  itemsPerPage = 4,
}: PaginatedNFTGalleryProps) {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(nftData.length / itemsPerPage);

  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 0));
  const handleNext = () =>
    setPage((prev) => Math.min(prev + 1, totalPages - 1));

  const currentItems = nftData.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage
  );

  return (
    <div className="space-y-6">
      {/* NFT Cards Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {currentItems.map((item, idx) => (
          <NFTCard key={idx} {...item} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-4 pt-6">
        <button
          onClick={handlePrev}
          disabled={page === 0}
          className="text-white disabled:opacity-30"
        >
          <svg
            width="17"
            height="14"
            viewBox="0 0 17 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.269915 7.63694C0.0985508 7.47287 0.000106812 7.24317 0.000106812 7.00253C0.000106812 6.76189 0.0985508 6.53583 0.269915 6.36811L6.68699 0.242725C7.03701 -0.0927129 7.59121 -0.0781286 7.923 0.271894C8.2548 0.621916 8.24386 1.17612 7.89384 1.50791L3.05915 6.12747H15.4594C15.9443 6.12747 16.3345 6.5176 16.3345 7.00253C16.3345 7.48745 15.9443 7.87758 15.4594 7.87758H3.05915L7.89748 12.4935C8.2475 12.8289 8.25844 13.3795 7.92665 13.7295C7.59486 14.0795 7.04066 14.0905 6.69063 13.7587L0.273561 7.6333L0.269915 7.63694Z"
              fill="white"
            />
          </svg>
        </button>
        <div className="flex gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`text-xl font-bold transition ${
                i === page ? "fill-redark-purple" : "fill-gray-500"
              }`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.23077 1.23077C9.23077 0.55 8.68077 0 8 0C7.31923 0 6.76923 0.55 6.76923 1.23077V6.76923H1.23077C0.55 6.76923 0 7.31923 0 8C0 8.68077 0.55 9.23077 1.23077 9.23077H6.76923V14.7692C6.76923 15.45 7.31923 16 8 16C8.68077 16 9.23077 15.45 9.23077 14.7692V9.23077H14.7692C15.45 9.23077 16 8.68077 16 8C16 7.31923 15.45 6.76923 14.7692 6.76923H9.23077V1.23077Z" />
              </svg>
            </button>
          ))}
        </div>
        <button
          onClick={handleNext}
          disabled={page === totalPages - 1}
          className="text-white disabled:opacity-30 scale-x-[-1]"
        >
          <svg
            width="17"
            height="14"
            viewBox="0 0 17 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.269915 7.63694C0.0985508 7.47287 0.000106812 7.24317 0.000106812 7.00253C0.000106812 6.76189 0.0985508 6.53583 0.269915 6.36811L6.68699 0.242725C7.03701 -0.0927129 7.59121 -0.0781286 7.923 0.271894C8.2548 0.621916 8.24386 1.17612 7.89384 1.50791L3.05915 6.12747H15.4594C15.9443 6.12747 16.3345 6.5176 16.3345 7.00253C16.3345 7.48745 15.9443 7.87758 15.4594 7.87758H3.05915L7.89748 12.4935C8.2475 12.8289 8.25844 13.3795 7.92665 13.7295C7.59486 14.0795 7.04066 14.0905 6.69063 13.7587L0.273561 7.6333L0.269915 7.63694Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
