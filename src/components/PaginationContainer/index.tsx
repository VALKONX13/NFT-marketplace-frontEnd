import React, { useState } from "react";
import { motion } from "framer-motion";

type PaginationContainerProps = {
  title?: string;
  children: React.ReactNode[];
  itemsPerPage?: number;
  className?: string;
  height?: string;
  display?: string;
  position?: string;
};

export default function PaginationContainer({
  title,
  children,
  itemsPerPage = 5,
  className,
  height,
  display,
  position,
}: PaginationContainerProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(children.length / itemsPerPage);

  const start = currentPage * itemsPerPage;
  const currentItems = children.slice(start, start + itemsPerPage);

  const goToPage = (page: number) => {
    if (page >= 0 && page < totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <motion.div
      className={`bg-[#474747]/13 md:p-4 p-1 rounded-2xl ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="">
        {(title === "") ? "" : <div className="flex justify-between items-center mb-4 border-b border-white/20 pb-2">
          <h2 className="text-white font-semibold text-lg flex items-center gap-2">
            <svg
              width="12"
              height="16"
              viewBox="0 0 12 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2H8.75H8.45C8.21875 0.859375 7.20937 0 6 0C4.79063 0 3.78125 0.859375 3.55 2H3.25H2C0.896875 2 0 2.89687 0 4V14C0 15.1031 0.896875 16 2 16H10C11.1031 16 12 15.1031 12 14V4C12 2.89687 11.1031 2 10 2ZM2.5 3.5V4.25C2.5 4.66563 2.83437 5 3.25 5H6H8.75C9.16562 5 9.5 4.66563 9.5 4.25V3.5H10C10.275 3.5 10.5 3.725 10.5 4V14C10.5 14.275 10.275 14.5 10 14.5H2C1.725 14.5 1.5 14.275 1.5 14V4C1.5 3.725 1.725 3.5 2 3.5H2.5ZM5.25 2.5C5.25 2.30109 5.32902 2.11032 5.46967 1.96967C5.61032 1.82902 5.80109 1.75 6 1.75C6.19891 1.75 6.38968 1.82902 6.53033 1.96967C6.67098 2.11032 6.75 2.30109 6.75 2.5C6.75 2.69891 6.67098 2.88968 6.53033 3.03033C6.38968 3.17098 6.19891 3.25 6 3.25C5.80109 3.25 5.61032 3.17098 5.46967 3.03033C5.32902 2.88968 5.25 2.69891 5.25 2.5ZM4.25 8.5C4.25 8.40151 4.2306 8.30398 4.19291 8.21299C4.15522 8.12199 4.09997 8.03931 4.03033 7.96967C3.96069 7.90003 3.87801 7.84478 3.78701 7.80709C3.69602 7.7694 3.59849 7.75 3.5 7.75C3.40151 7.75 3.30398 7.7694 3.21299 7.80709C3.12199 7.84478 3.03931 7.90003 2.96967 7.96967C2.90003 8.03931 2.84478 8.12199 2.80709 8.21299C2.7694 8.30398 2.75 8.40151 2.75 8.5C2.75 8.59849 2.7694 8.69602 2.80709 8.78701C2.84478 8.87801 2.90003 8.96069 2.96967 9.03033C3.03931 9.09997 3.12199 9.15522 3.21299 9.19291C3.30398 9.2306 3.40151 9.25 3.5 9.25C3.59849 9.25 3.69602 9.2306 3.78701 9.19291C3.87801 9.15522 3.96069 9.09997 4.03033 9.03033C4.09997 8.96069 4.15522 8.87801 4.19291 8.78701C4.2306 8.69602 4.25 8.59849 4.25 8.5ZM5.5 8C5.225 8 5 8.225 5 8.5C5 8.775 5.225 9 5.5 9H8.5C8.775 9 9 8.775 9 8.5C9 8.225 8.775 8 8.5 8H5.5ZM5.5 11C5.225 11 5 11.225 5 11.5C5 11.775 5.225 12 5.5 12H8.5C8.775 12 9 11.775 9 11.5C9 11.225 8.775 11 8.5 11H5.5ZM3.5 12.25C3.69891 12.25 3.88968 12.171 4.03033 12.0303C4.17098 11.8897 4.25 11.6989 4.25 11.5C4.25 11.3011 4.17098 11.1103 4.03033 10.9697C3.88968 10.829 3.69891 10.75 3.5 10.75C3.30109 10.75 3.11032 10.829 2.96967 10.9697C2.82902 11.1103 2.75 11.3011 2.75 11.5C2.75 11.6989 2.82902 11.8897 2.96967 12.0303C3.11032 12.171 3.30109 12.25 3.5 12.25Z"
                fill="white"
              />
            </svg>
            {title} ({children.length})
          </h2>
        </div>}


        <div className={`flex items-center gap-4 ${height}`}>
          <motion.div
            className={`flex w-full justify-around gap-4 h-full ${display}`}
            key={currentPage} // ensure animation triggers on page change
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {currentItems}
          </motion.div>
        </div>
      </div>

      <div className={`flex justify-center items-center mt-4 gap-2 ${position}`}>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          className={`fill-redark-purple transition disabled:fill-gray-500 disabled:cursor-not-allowed disabled:opacity-50`}
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 0}
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
        </motion.button>

        {Array.from({ length: totalPages }, (_, i) => (
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            key={i}
            onClick={() => goToPage(i)}
            className={`text-xl font-bold transition ${i === currentPage ? "fill-redark-purple" : "fill-gray-500"
              }`}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.23077 1.23077C9.23077 0.55 8.68077 0 8 0C7.31923 0 6.76923 0.55 6.76923 1.23077V6.76923H1.23077C0.55 6.76923 0 7.31923 0 8C0 8.68077 0.55 9.23077 1.23077 9.23077H6.76923V14.7692C6.76923 15.45 7.31923 16 8 16C8.68077 16 9.23077 15.45 9.23077 14.7692V9.23077H14.7692C15.45 9.23077 16 8.68077 16 8C16 7.31923 15.45 6.76923 14.7692 6.76923H9.23077V1.23077Z" />
            </svg>
          </motion.button>
        ))}

        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          className={`fill-redark-purple transition disabled:fill-gray-500 disabled:cursor-not-allowed disabled:opacity-50 scale-x-[-1]`}
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages - 1}
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
        </motion.button>
      </div>
    </motion.div>
  );
}
