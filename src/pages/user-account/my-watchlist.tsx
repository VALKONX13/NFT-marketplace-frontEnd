import Sidebar from "@/components/Sidebar";
import React from "react";
import MockData from "@/utils/mockData";
import { motion } from "framer-motion";
import Table from "@/components/Table";
import Header from "@/components/Header";

function MyWatchlist() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-redark-navy grid md:grid-cols-12 sm:grid-cols-8 grid-cols-5 md:gap-8 gap-2 h-auto">
      <Sidebar
        dividerTitles={["My Account"]}
        navItems={[MockData.userAccountSideBarItems]}
        button={false}
        className="col-span-1 lg:col-span-3 2xl:col-span-2"
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="md:col-span-11 2xl:col-span-10 lg:col-span-9 sm:col-span-7 col-span-4 xl:-ml-9 2xl:ml-0">
        <Header searchBar={false} wallet={false} />
        <motion.div
          className="min-h-screen text-white col-span-9 py-4 flex flex-col lg:justify-center lg:pr-16 md:pr-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex lg:hidden font-mokoto text-xs pb-6 pt-2">My Account</motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="mb-2 flex lg:hidden">My Watchlist</motion.p>
          <div className="flex flex-col col-span-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-10 lg:py-8 lg:pr-8 py-6 pr-4 pl-2">
              <h1 className="text-3xl hidden lg:flex font-medium mb-10 font-mokoto uppercase">
                Bidding Activity
              </h1>
              <Table className="lg:ml-10 !w-auto"
                columns={[
                  "Item",
                  "Title",
                  "Artist",
                  "Collection",
                  "Avg Price",
                  "My Bid",
                  "Time Left",
                ]}
                data={MockData.biddingActivityTableData}
                title="Current Bids"
                icon={
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.8517 6.2335L11.911 7.2928L15.3451 3.86179C15.592 3.61493 15.7451 3.28683 15.7795 2.93686L15.9982 0.546398C16.0107 0.399534 15.9576 0.252669 15.8545 0.146426C15.7513 0.0401839 15.6045 -0.0129374 15.4545 0.00268655L13.0641 0.221421C12.7141 0.252669 12.386 0.405783 12.1391 0.655766L8.70502 4.08677L9.76431 5.14608L13.1984 1.71507L14.3921 1.6057L14.2827 2.79937L10.8517 6.2335ZM7.29263 11.9175L6.23334 10.8582L4.89907 12.1925L3.81478 11.1082L5.14905 9.77388L4.08976 8.71457L2.74924 10.0457L2.3524 9.64888C2.15866 9.45515 1.83994 9.45515 1.6462 9.64888L1.14624 10.1488C0.999377 10.2957 0.958755 10.5176 1.04312 10.7051L1.90243 12.6424L0.146319 14.3986C-0.0474157 14.5923 -0.0474157 14.911 0.146319 15.1048L0.89626 15.8547C1.09 16.0484 1.40872 16.0484 1.60245 15.8547L3.35857 14.0986L5.29592 14.9579C5.4834 15.0423 5.70526 15.0016 5.85212 14.8548L6.35208 14.3548C6.54582 14.1611 6.54582 13.8423 6.35208 13.6486L5.95524 13.2518L7.28951 11.9175H7.29263ZM1.71182 2.80249L1.60245 1.6057L2.79611 1.71507L11.4798 10.3988L12.5391 9.33953L3.85853 0.655766C3.61167 0.405783 3.28357 0.252669 2.9336 0.221421L0.543163 0.00581133C0.3963 -0.00981257 0.249436 0.0433087 0.146319 0.149551C0.0432022 0.255794 -0.0130434 0.399534 0.0025804 0.546398L0.218188 2.93686C0.249436 3.28683 0.402549 3.61493 0.652529 3.86179L9.3331 12.5456L10.3924 11.4863L1.71182 2.80249ZM14.3515 9.64888C14.1577 9.45515 13.839 9.45515 13.6453 9.64888L9.64557 13.6486C9.45184 13.8423 9.45184 14.1611 9.64557 14.3548L10.1455 14.8548C10.2924 15.0016 10.5143 15.0423 10.7017 14.9579L12.6391 14.0986L14.3952 15.8547C14.5889 16.0484 14.9077 16.0484 15.1014 15.8547L15.8513 15.1048C16.0451 14.911 16.0451 14.5923 15.8513 14.3986L14.0952 12.6424L14.9545 10.7051C15.0389 10.5144 14.9983 10.2957 14.8514 10.1488L14.3515 9.64888Z"
                      fill="white"
                    />
                  </svg>
                }
              />
              <h1 className="text-3xl hidden lg:flex font-medium mb-10 font-mokoto uppercase">
                Watched NFTs
              </h1>
              <Table
                className="lg:ml-10 !w-auto"
                columns={[
                  "Item",
                  "Title",
                  "Artist",
                  "Collection",
                  "Avg Price",
                  "Lowest Price",
                  "Items Sold",
                ]}
                data={MockData.biddingActivityTableData}
                title="My Favourite NFTs"
                icon={
                  <svg
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 3.09375C0 1.38516 1.40714 0 3.14286 0H14C15.1036 0 16 0.882422 16 1.96875V12.0938C16 12.8777 15.5321 13.5563 14.8571 13.8727V16.3125H15.1429C15.6179 16.3125 16 16.6887 16 17.1562C16 17.6238 15.6179 18 15.1429 18H2.85714C1.27857 18 0 16.7414 0 15.1875C0 15.0926 0.00357143 14.9977 0.0142857 14.9062H0V3.09375ZM2.85714 14.0625C2.225 14.0625 1.71429 14.5652 1.71429 15.1875C1.71429 15.8098 2.225 16.3125 2.85714 16.3125H13.1429V14.0625H2.85714ZM1.71429 12.6105C2.06429 12.4594 2.45 12.375 2.85714 12.375H14C14.1571 12.375 14.2857 12.2484 14.2857 12.0938V1.96875C14.2857 1.81406 14.1571 1.6875 14 1.6875H3.14286C2.35357 1.6875 1.71429 2.3168 1.71429 3.09375V12.6105ZM4.57143 6.09258C4.57143 4.9043 5.55 3.9375 6.76071 3.9375C7.33929 3.9375 7.89643 4.16602 8.30714 4.5668L8.57143 4.82695L8.83571 4.5668C9.24643 4.1625 9.80357 3.9375 10.3821 3.9375C11.5893 3.9375 12.5714 4.90078 12.5714 6.09258C12.5714 6.66211 12.3393 7.21055 11.9321 7.61484L8.97857 10.5223C8.75714 10.7402 8.39286 10.7402 8.17143 10.5223L5.21786 7.61484C4.80714 7.21055 4.57857 6.66211 4.57857 6.09258H4.57143Z"
                      fill="white"
                    />
                  </svg>
                }
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default MyWatchlist;
