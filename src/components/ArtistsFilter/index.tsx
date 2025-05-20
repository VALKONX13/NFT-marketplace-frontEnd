"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const allArtists = Array.from({ length: 64 }, (_, i) => ({
  id: i,
  name: "John Doe",
}));

type ArtistFilterProps = {
  state?: boolean;
};

const ITEMS_PER_PAGE = 24;

export default function ArtistFilter({ state }: ArtistFilterProps) {
  const [selected, setSelected] = useState<number[]>([]);
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(allArtists.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const currentItems = allArtists.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const toggleSelection = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  const variants = {
    hidden: { opacity: 0, y: -20, transition: { duration: 0.3 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <div className="relative w-full flex flex-col items-center lg:mt-8">
      <AnimatePresence>
        {state && (
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white/13 mb-12 p-6 rounded-3xl text-white w-full max-w-5xl"
          >
            <h2 className="text-lg font-bold tracking-widest mb-4">
              FILTER: ARTISTS
            </h2>
            <div className="grid lg:grid-cols-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-4 mb-6">
              {currentItems.map((artist) => (
                <label
                  key={artist.id}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selected.includes(artist.id)}
                    onChange={() => toggleSelection(artist.id)}
                    className="hidden peer"
                  />
                  <div
                    className={`w-4 h-4 rounded-sm border border-white peer-checked:bg-redark-purple peer-checked:border-white transition
                    `}
                  />
                  <span className="font-azeret text-[14px]">{artist.name}</span>
                </label>
              ))}
            </div>

            <div className="flex justify-center items-center space-x-4 text-white">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="disabled:opacity-30"
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
              {Array.from({ length: totalPages }, (_, i) => (
                <button key={i} onClick={() => setPage(i + 1)}>
                  <svg
                    className={`text-lg ${
                      page === i + 1 ? "fill-redark-purple" : "fill-gray-600"
                    }`}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    // fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.23077 1.23077C9.23077 0.55 8.68077 0 8 0C7.31923 0 6.76923 0.55 6.76923 1.23077V6.76923H1.23077C0.55 6.76923 0 7.31923 0 8C0 8.68077 0.55 9.23077 1.23077 9.23077H6.76923V14.7692C6.76923 15.45 7.31923 16 8 16C8.68077 16 9.23077 15.45 9.23077 14.7692V9.23077H14.7692C15.45 9.23077 16 8.68077 16 8C16 7.31923 15.45 6.76923 14.7692 6.76923H9.23077V1.23077Z"
                      //   fill="white"
                      //   fill-opacity="0.25"
                    />
                  </svg>
                </button>
              ))}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="disabled:opacity-30 scale-x-[-1]"
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
                    // fill-opacity="0.25"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
