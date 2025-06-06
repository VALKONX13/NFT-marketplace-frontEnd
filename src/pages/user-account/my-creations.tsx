import Sidebar from "@/components/Sidebar";
import React from "react";
import MockData from "@/utils/mockData";
import { motion } from "framer-motion";
import Table from "@/components/Table";
import Header from "@/components/Header";

function MyCreations() {
  return (
    <div className="bg-redark-navy grid md:grid-cols-12 sm:grid-cols-8 grid-cols-5 md:gap-8 gap-2 h-auto">
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
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="min-h-screen text-white col-span-9 py-4 flex flex-col lg:justify-center lg:pr-20 md:pr-8"
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
            className="mb-2 flex lg:hidden">My Creations</motion.p>
          <div className="flex flex-col  col-span-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-10 lg:py-8 lg:pr-8 py-4 pr-4 pl-2">
              <h1 className="text-3xl hidden lg:flex font-medium mb-10 font-mokoto uppercase">
                My Collections
              </h1>
              <Table className="lg:ml-10"
                columns={["Collection Title", "Items", "Created", "Edit"]}
                data={MockData.biddingActivityTableData}
                title="Collections"
                icon={
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.86231 1.70173C2.20915 1.40802 2.82471 1.4299 3.22154 1.81734L3.47151 2.07042L4.01833 2.62659L4.55265 2.0548L4.78075 1.81421C5.17134 1.43927 5.77128 1.4049 6.14936 1.70798C6.59307 2.08605 6.61181 2.74844 6.21185 3.15151L4.00271 5.36367L1.78419 3.15151C1.38423 2.74844 1.40298 2.08292 1.85918 1.70485L1.86231 1.70173ZM0.899907 0.551905C-0.2406 1.49863 -0.29372 3.189 0.7218 4.2076L3.17779 6.65722C3.63712 7.12902 4.37455 7.09778 4.81825 6.66972L4.82762 6.66035L7.27424 4.2076C8.29289 3.189 8.23664 1.50176 7.11176 0.555029L7.10239 0.545656C6.16811 -0.213603 4.88387 -0.138615 3.99958 0.51441C3.1153 -0.13549 1.81856 -0.216728 0.899907 0.551905ZM15.9983 0.751874C15.9983 0.526908 15.8983 0.314441 15.7234 0.170713C15.5484 0.0269849 15.3203 -0.0292565 15.1016 0.0144869L10.1021 1.01433C9.75211 1.0862 9.49901 1.39553 9.49901 1.75172V5.04809C9.33965 5.01685 9.17092 5.00122 8.99907 5.00122C7.89606 5.00122 6.99927 5.673 6.99927 6.50099C6.99927 7.32899 7.89606 8.00077 8.99907 8.00077C10.1021 8.00077 10.9989 7.32899 10.9989 6.50099V2.36725L14.4985 1.66736V4.04824C14.3391 4.017 14.1704 4.00138 13.9985 4.00138C12.8955 4.00138 11.9988 4.67315 11.9988 5.50115C11.9988 6.32915 12.8955 7.00092 13.9985 7.00092C15.1016 7.00092 15.9983 6.32915 15.9983 5.50115V0.751874ZM3.34028 9.67239L3.42464 9.50054H5.5713L5.65566 9.67239C5.90876 10.1817 6.43058 10.5004 6.99615 10.5004C7.27112 10.5004 7.4961 10.7253 7.4961 11.0003V13.9998C7.4961 14.2748 7.27112 14.4998 6.99615 14.4998H1.99979C1.72482 14.4998 1.49984 14.2748 1.49984 13.9998V11.0003C1.49984 10.7253 1.72482 10.5004 1.99979 10.5004C2.56848 10.5004 3.08718 10.1786 3.34028 9.67239ZM6.99927 9.00061L6.7743 8.55381C6.60556 8.21636 6.25873 8.00077 5.88064 8.00077H3.11843C2.74034 8.00077 2.3935 8.21323 2.22477 8.55381L1.99979 9.00061C0.896782 9.00061 0 9.89735 0 11.0003V13.9998C0 15.1028 0.896782 15.9995 1.99979 15.9995H6.99927C8.10228 15.9995 8.99907 15.1028 8.99907 13.9998V11.0003C8.99907 9.89735 8.10228 9.00061 6.99927 9.00061ZM5.99938 12.2501C5.99938 11.8524 5.84136 11.4709 5.56008 11.1896C5.27881 10.9084 4.89732 10.7503 4.49953 10.7503C4.10175 10.7503 3.72026 10.9084 3.43898 11.1896C3.15771 11.4709 2.99969 11.8524 2.99969 12.2501C2.99969 12.6479 3.15771 13.0294 3.43898 13.3106C3.72026 13.5919 4.10175 13.7499 4.49953 13.7499C4.89732 13.7499 5.27881 13.5919 5.56008 13.3106C5.84136 13.0294 5.99938 12.6479 5.99938 12.2501ZM14.7922 8.09763C14.6047 7.96015 14.3454 7.97264 14.1704 8.12575L10.1708 11.6252C10.0146 11.7627 9.95834 11.9814 10.0333 12.1783C10.1083 12.3751 10.2927 12.5032 10.502 12.5032H12.2425L11.0426 15.3059C10.952 15.5215 11.0207 15.7715 11.2082 15.9058C11.3957 16.0402 11.655 16.0308 11.83 15.8777L15.8296 12.3782C15.9858 12.2407 16.0421 12.022 15.9671 11.8252C15.8921 11.6283 15.7077 11.5002 15.4984 11.5002H13.7579L14.9578 8.69753C15.0484 8.48194 14.9797 8.23198 14.7922 8.09763Z"
                      fill="white"
                    />
                  </svg>
                }
              />
              <h1 className="text-3xl hidden lg:flex font-medium mb-10 font-mokoto uppercase">
                Minted NFTs
              </h1>
              <Table className="lg:ml-10"
                columns={[
                  "Item",
                  "Title",
                  "Collection",
                  "Items Sold",
                  "Price",
                  "Royalty",
                  "Status",
                  "Edit",
                ]}
                data={MockData.biddingActivityTableData}
                title="Minted NFTs"
                icon={
                  <svg
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.71429 12.9375H13.7143C14.0286 12.9375 14.2857 12.6844 14.2857 12.375V4.5H12.5714C11.9393 4.5 11.4286 3.99727 11.4286 3.375V1.6875H5.71429C5.4 1.6875 5.14286 1.94062 5.14286 2.25V12.375C5.14286 12.6844 5.4 12.9375 5.71429 12.9375ZM13.7143 14.625H5.71429C4.45357 14.625 3.42857 13.616 3.42857 12.375V2.25C3.42857 1.00898 4.45357 0 5.71429 0H11.625C12.2321 0 12.8143 0.235547 13.2429 0.657422L15.3321 2.71406C15.7607 3.13594 16 3.70898 16 4.30664V12.375C16 13.616 14.975 14.625 13.7143 14.625ZM0.857143 3.375C1.33214 3.375 1.71429 3.75117 1.71429 4.21875V13.2188C1.71429 14.9273 3.12143 16.3125 4.85714 16.3125H11.7143C12.1893 16.3125 12.5714 16.6887 12.5714 17.1562C12.5714 17.6238 12.1893 18 11.7143 18H4.85714C2.175 18 0 15.859 0 13.2188V4.21875C0 3.75117 0.382143 3.375 0.857143 3.375Z"
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

export default MyCreations;
