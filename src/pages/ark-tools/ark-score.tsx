import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Sidebar from "@/components/Sidebar";
import MockData from "@/utils/mockData";
import MainBanner from "@/components/MainBanner";
import ScanReport from "@/components/ScanReport";
import ScoreAnalysis from "@/components/ScoreAnalysis";

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
    <div className="bg-redark-navy grid grid-cols-12 gap-8">
      <Sidebar
        dividerTitles={["Marketplace", "Account"]}
        navItems={[MockData.marketplace, MockData.accountItems]}
        button={true}
        className="col-start-1 col-end-3"
      />
      <div className="col-span-10 text-white min-h-screen flex flex-col items-center justify-center py-8 pr-8">
        <MainBanner />
        {!isScanning ? (
          <div className="w-[60%] flex flex-col items-center">
            <h2 className="text-2xl font-mokoto uppercase tracking-widest mt-20 mb-8">
              Create New Score
            </h2>

            {/* Form Box */}
            <form
              onSubmit={formik.handleSubmit}
              className="bg-redark-purple/6 border border-redark-purple rounded-[20px] px-8 py-14 w-full"
            >
              <div className="flex flex-col gap-6 px-20">
                <input
                  name="url1"
                  placeholder="URL1"
                  value={formik.values.url1}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full bg-white/25 h-[72px] rounded-full px-8 py-6 outline-none text-sm placeholder-white"
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
                  className="w-full bg-white/25 h-[72px] rounded-full px-8 py-6 outline-none text-sm placeholder-white"
                />
                {formik.touched.url2 && formik.errors.url2 && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.url2}
                  </p>
                )}
              </div>
            </form>
            <svg
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
            <div className="relative flex flex-col items-center mt-10">
              {/* Vertical Line */}
              <div className="w-[1px] h-10 bg-redark-purple absolute top-[-40px]"></div>

              {/* Button */}
              <button
                type="submit"
                onClick={() => {
                  formik.handleSubmit();
                  setIsScanning(true);
                }}
                className="px-10 pt-[22px] pb-4 uppercase rounded-full border-4 border-white bg-[url('/assets/img/scan-bttn-bg.jpg')] bg-center text-white text-xl font-mokoto tracking-widest"
              >
                INITIATE SCAN
              </button>
            </div>
          </div>
        ) : (
          <div>
            <ScanReport />
            <div className="relative flex flex-col items-center mt-10">
              {/* Vertical Line */}
              <div className="w-[1px] h-10 bg-redark-purple absolute top-[-40px]"></div>

              {/* Button */}
              <button
                onClick={() => setIsScanning(false)}
                className="px-10 pt-[22px] pb-4 rounded-full border-4 border-white bg-[url('/assets/img/scan-bttn-bg.jpg')]
            bg-center text-white text-xl font-mokoto tracking-widest uppercase"
              >
                RESCAN
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
