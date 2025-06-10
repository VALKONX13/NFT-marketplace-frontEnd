import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Sidebar from "@/components/Sidebar";
import MockData from "@/utils/mockData";
import MainBanner from "@/components/MainBanner";
import ScanReport from "@/components/ScanReport";
import ScoreAnalysis from "@/components/ScoreAnalysis";
import Header from "@/components/Header";
import { motion } from 'framer-motion';

export default function ArkScore() {
  const formik = useFormik({
    initialValues: {
      url1: "",
      url2: "",
    },
    validationSchema: Yup.object({
      // url1: Yup.string().url("Invalid URL").required("URL1 is required"),
      // url2: Yup.string().url("Invalid URL").required("URL2 is required"),
      url1: Yup.string().required("URL1 is required"),
      url2: Yup.string().required("URL2 is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const [isScanning, setIsScanning] = useState(false);

  return (
    <div className="bg-redark-navy flex lg:gap-8">
      <Sidebar
        dividerTitles={["Marketplace", "Account"]}
        navItems={[MockData.marketplaceSidebar, MockData.accountItems]}
        button={true}
        className="col-span-1 lg:col-span-3 2xl:col-span-2 !h-auto"
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="md:col-span-11 lg:col-span-9 2xl:col-span-10 sm:col-span-7 col-span-4 w-full">
        <Header className="hidden lg:flex" searchBar={true} wallet={true} searchIcon={false} />
        {/* Mobile Header */}
        <Header className="lg:hidden pl-2" userIcon={false} searchBar={false} wallet={false} searchIcon={false} />

        <div className="col-span-10 text-white min-h-screen flex flex-col items-center lg:justify-center py-8 lg:pr-8">
          <p className="font-azeret pl-2 text-gray-400 self-baseline mb-5 lg:text-md text-xs">ARKHive / Art Tools / ARK Score</p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="mx-4 w-full px-3">
            <MainBanner />
          </motion.div>
          {!isScanning ? (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="2xl:w-[68%] lg:w-[90%] w-[-webkit-fill-available] flex flex-col items-center">
              <h2 className="lg:text-2xl text-sm font-mokoto uppercase tracking-widest lg:mt-20 mt-9 lg:mb-8 mb-4">
                Create New Score
              </h2>

              {/* Form Box */}
              <motion.form
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                onSubmit={formik.handleSubmit}
                className="bg-redark-purple/6 lg:border lg:border-redark-purple border-t border-b border-t-redark-purple border-b-redark-purple lg:rounded-[20px] lg:px-8 md:px-12 sm:px-10 px-4 lg:py-14 py-4 w-full"
              >
                <div className="flex flex-col gap-6 lg:px-20">
                  <input
                    name="url1"
                    placeholder="URL1"
                    value={formik.values.url1}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full bg-white/25 lg:h-[72px] h-[40px] rounded-full px-8 py-6 outline-none text-sm placeholder-white"
                  />
                  {formik.touched.url1 && formik.errors.url1 && (
                    <p className="text-red-500 text-xs mt-1">
                      {formik.errors.url1}
                    </p>
                  )}

                  <input
                    name="url2"
                    placeholder="URL2"
                    value={formik.values.url2}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full bg-white/25 lg:h-[72px] h-[40px] rounded-full px-8 py-6 outline-none text-sm placeholder-white"
                  />
                  {formik.touched.url2 && formik.errors.url2 && (
                    <p className="text-red-500 text-xs mt-1">
                      {formik.errors.url2}
                    </p>
                  )}
                </div>
              </motion.form>
              {/* Mobile vertical line */}
              <svg className="lg:hidden" width="2" height="22" viewBox="0 0 2 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 0L1 22" stroke="#8C52FF" stroke-opacity="0.53" />
              </svg>


              <svg className="md:w-[90%] md:h-[90%] hidden lg:flex"
                width="795"
                height="141"
                viewBox="0 0 795 141"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 0V33.2598C1 55.3512 18.9086 73.2598 41 73.2598H366C388.091 73.2598 406 91.1684 406 113.26M406 113.26V141M406 113.26C406 91.1684 423.909 73.2598 446 73.2598H754C776.091 73.2598 794 55.3512 794 33.2598V0M234 0V73M561 0V73"
                  stroke="#8C52FF"
                  stroke-opacity="0.53"
                />
              </svg>

              {/* Score Box */}
              <ScoreAnalysis />

              {/* Button */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="relative flex flex-col items-center mt-10">
                {/* Vertical Line */}
                <div className="w-[1px] h-10 bg-redark-purple absolute top-[-40px]"></div>

                {/* Button */}
                <button
                  type="submit"
                  onClick={() => {
                    formik.handleSubmit();
                    setIsScanning(true);
                  }}
                  className="lg:px-10 px-4 lg:pt-[22px] lg:pb-4 pt-3 pb-2 uppercase rounded-full border-4 border-white bg-[url('/assets/img/scan-bttn-bg.jpg')] bg-center text-white lg:text-xl text-lg font-mokoto tracking-widest"
                >
                  INITIATE SCAN
                </button>
              </motion.div>
            </motion.div>
          ) : (
            <div className="w-full">
              <ScanReport />
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="relative flex flex-col items-center mt-10">
                {/* Vertical Line */}
                <div className="w-[1px] h-10 bg-redark-purple/25 absolute top-[-40px] "></div>

                {/* Button */}
                <button
                  onClick={() => setIsScanning(false)}
                  className="px-10 pt-[22px] pb-4 rounded-full border-4 border-white bg-[url('/assets/img/scan-bttn-bg.jpg')]
                  bg-center text-white text-xl font-mokoto tracking-widest uppercase"
                >
                  RESCAN
                </button>
              </motion.div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
