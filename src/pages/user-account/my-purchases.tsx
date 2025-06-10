import Sidebar from "@/components/Sidebar";
import React from "react";
import MockData from "@/utils/mockData";
import { motion } from "framer-motion";
import Table from "@/components/Table";
import Header from "@/components/Header";

function MyPurchases() {
  return (
    <div
     className="bg-redark-navy flex md:gap-8 gap-2 h-auto">
      <Sidebar
        dividerTitles={["My Account"]}
        navItems={[MockData.userAccountSideBarItems]}
        button={false}
        className="col-span-1 lg:col-span-3 2xl:col-span-2 !h-auto"
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="pl-4 md:col-span-11 2xl:col-span-10 lg:col-span-9 sm:col-span-7 col-span-4 xl:-ml-9 2xl:ml-0 w-full overflow-auto"
      >
        <Header searchBar={false} wallet={false} />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="min-h-screen text-white col-span-9 py-4 flex flex-col lg:justify-center lg:pr-16 md:pr-8"
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
            className="mb-2 flex lg:hidden">My Purchases</motion.p>
          <div className="flex flex-col  col-span-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-10 lg:py-8 lg:pr-8 py-4 pr-4 pl-2">
              <h1 className="text-3xl hidden lg:flex font-medium mb-10 font-mokoto uppercase">
                Purchase History
              </h1>
              <Table className="lg:ml-10 !w-auto"
                columns={[
                  "Item",
                  "Title",
                  "Artist",
                  "Collection",
                  "Price",
                  "Date of Purchase",
                  "Qty",
                ]}
                data={MockData.biddingActivityTableData}
                title="Purchased NFTs"
                icon={
                  <svg
                    width="16"
                    height="13"
                    viewBox="0 0 16 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.75447 0.189056C5.06381 0.456828 5.08881 0.911138 4.81071 1.209L2.56093 3.61594C2.42345 3.76336 2.22971 3.85061 2.02348 3.85362C1.81725 3.85663 1.6204 3.78142 1.47354 3.64302L0.220535 2.43955C-0.0700615 2.15673 -0.0700615 1.69941 0.220535 1.4166C0.511132 1.13378 0.98921 1.13378 1.27981 1.4166L1.97036 2.08151L3.69207 0.240203C3.97017 -0.0576557 4.442 -0.0817252 4.75134 0.186047L4.75447 0.189056ZM4.75447 5.00294C5.06381 5.27071 5.08881 5.72502 4.81071 6.02288L2.56093 8.42982C2.42345 8.57725 2.22971 8.6645 2.02348 8.66751C1.81725 8.67052 1.6204 8.5953 1.47354 8.4569L0.220535 7.25343C-0.0731862 6.97061 -0.0731862 6.51329 0.220535 6.23349C0.514256 5.95368 0.98921 5.95067 1.27981 6.23349L1.97036 6.8984L3.69207 5.05709C3.97017 4.75924 4.442 4.73517 4.75134 5.00294H4.75447ZM7.00112 1.92807C7.00112 1.39554 7.44795 0.965294 8.00103 0.965294H15.0003C15.5534 0.965294 16.0002 1.39554 16.0002 1.92807C16.0002 2.46061 15.5534 2.89085 15.0003 2.89085H8.00103C7.44795 2.89085 7.00112 2.46061 7.00112 1.92807ZM7.00112 6.74195C7.00112 6.20942 7.44795 5.77918 8.00103 5.77918H15.0003C15.5534 5.77918 16.0002 6.20942 16.0002 6.74195C16.0002 7.27449 15.5534 7.70473 15.0003 7.70473H8.00103C7.44795 7.70473 7.00112 7.27449 7.00112 6.74195ZM5.00132 11.5558C5.00132 11.0233 5.44815 10.5931 6.00122 10.5931H15.0003C15.5534 10.5931 16.0002 11.0233 16.0002 11.5558C16.0002 12.0884 15.5534 12.5186 15.0003 12.5186H6.00122C5.44815 12.5186 5.00132 12.0884 5.00132 11.5558ZM1.50166 10.1117C1.89945 10.1117 2.28094 10.2638 2.56222 10.5347C2.84349 10.8055 3.00151 11.1728 3.00151 11.5558C3.00151 11.9389 2.84349 12.3062 2.56222 12.577C2.28094 12.8478 1.89945 13 1.50166 13C1.10387 13 0.722381 12.8478 0.441103 12.577C0.159826 12.3062 0.00180648 11.9389 0.00180648 11.5558C0.00180648 11.1728 0.159826 10.8055 0.441103 10.5347C0.722381 10.2638 1.10387 10.1117 1.50166 10.1117Z"
                      fill="white"
                    />
                  </svg>
                }
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default MyPurchases;
