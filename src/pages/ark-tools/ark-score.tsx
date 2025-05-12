import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import MockData from "@/utils/mockData";
import MainBanner from "@/components/MainBanner";

export default function ArkScore() {
  const formik = useFormik({
    initialValues: {
      url1: "",
      url2: "",
    },
    validationSchema: Yup.object({
      url1: Yup.string().url("Invalid URL").required("URL1 is required"),
      url2: Yup.string().url("Invalid URL").required("URL2 is required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="bg-redark-navy grid grid-cols-12 gap-8">
      <Sidebar
        dividerTitles={["Marketplace", "Account"]}
        navItems={[MockData.marketplace, MockData.accountItems]}
        button={true}
        className="col-start-1 col-end-3"
      />
      <div className="col-span-10 text-white min-h-screen flex flex-col items-center justify-center p-8">
        <MainBanner />
        <h2 className="text-2xl font-mokoto uppercase tracking-widest mt-20 mb-8">
          Create New Score
        </h2>

        {/* Form Box */}
        <form
          onSubmit={formik.handleSubmit}
          className="bg-redark-purple/6 border border-redark-purple rounded-[20px] px-8 py-14 w-full max-w-[60%]"
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
              <p className="text-red-500 text-xs mt-1">{formik.errors.url1}</p>
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
              <p className="text-red-500 text-xs mt-1">{formik.errors.url2}</p>
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
        <div className="bg-redark-purple/6 border border-redark-purple rounded-xl px-8 py-5 w-full max-w-3xl text-center relative">
          <div className="pb-4">
            <p className="text-xs mb-1 font-azeret text-gray-400">Analysis</p>
            <p className="text-sm font-semibold tracking-wide font-azeret">
              SCORE SIGNIFICANCE
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mt-6 flex items-center justify-center relative">
            <div className="w-[90%] h-8 bg-[#3A3457] rounded-full overflow-hidden relative flex">
              <div className="w-[30%] bg-[#C9AEFF]" />
              <div className="w-[40%] bg-redark-purple" />
              <div className="w-[30%]" />
            </div>

            {/* Astronaut & Label */}
            <div className="absolute -top-5 left-[65%] flex flex-col items-center">
              <div className="absolute top-[-45%]">
                <p className="text-xs font-mokoto absolute">801</p>
                <svg
                  className="absolute left-[30%] z-10"
                  width="84"
                  height="51"
                  viewBox="0 0 84 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 50L49.1816 1L84 1" stroke="white" />
                </svg>
              </div>
              <Image
                className="z-20 mt-4"
                src="/assets/img/astronaut.png"
                alt="score"
                width={40}
                height={40}
              />
            </div>
          </div>

          {/* Labels */}
          <div className="mt-4 flex justify-between text-xs px-12 font-azeret">
            <div>
              <p>EXPLORER TIER</p>
              <p className="text-gray-400">300-599</p>
            </div>
            <div>
              <p>CORE OPERATOR</p>
              <p className="text-gray-400">600-799</p>
            </div>
            <div>
              <p>ELITE ARCORBITER</p>
              <p className="text-gray-400">800-999</p>
            </div>
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          onClick={() => formik.handleSubmit}
          className="mt-6 px-10 py-4 rounded-full border-4 border-white bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600 text-white text-xl font-mokoto tracking-widest"
        >
          INITIATE SCAN
        </button>
      </div>
    </div>
  );
}
