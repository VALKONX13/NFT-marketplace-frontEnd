"use client";

import { motion } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import RedarkButton from "@/components/RedarkButton";
import MockData from '@/utils/mockData';
import RedarkInput from "@/components/RedarkInput";


export default function GeneralSettings() {

  return (
    <div className="bg-redark-navy grid md:grid-cols-12 sm:grid-cols-8 grid-cols-5 md:gap-8 gap-2 h-auto min-h-screen">
      <Sidebar
        dividerTitles={["Admin Settings", "Blog Settings"]}
        navItems={[MockData.adminSettingsSideBarItems, MockData.blogSettingsSideBarItems]}
        button={false}
        className="col-span-1 lg:col-span-3 2xl:col-span-2"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="md:col-span-11 2xl:col-span-10 lg:col-span-9 sm:col-span-7 col-span-4">
        <div className="py-6 px-4 text-white space-y-6 2xl:max-w-[50%] xl:max-w-[70%] pt-26 mb-18">
          {/* Title */}
          <h2 className="text-xl md:text-4xl tracking-widest mokoto-regular mb-10">GENERAL SETTINGS</h2>
          {/* Genesis Whitelist */}
          <section>
            <h3 className="md:text-xl text-lg tracking-widest mokoto-regular mb-6">GENESIS WHITELIST</h3>
            <RedarkInput placeholder="Addresss" />
            <div className="flex md:flex-row flex-col md:gap-12 gap-4 mt-5 mb-8">
              <RedarkButton title="Add Genesis" className="!text-[15px]" />
              <RedarkButton title="Remove Genesis" className="!text-[15px]" />
            </div>
          </section>

          {/* Quantum Whitelist */}
          <section>
            <h3 className="md:text-xl text-lg tracking-widest mokoto-regular mb-6">QUANTUM WHITELIST</h3>
            <RedarkInput placeholder="Addresss" />
            <div className="flex md:flex-row flex-col md:gap-12 gap-4 mt-5 mb-8">
              <RedarkButton title="Add Quantum" className="!text-[15px]" />
              <RedarkButton title="Remove Quantum" className="!text-[15px]" />
            </div>
          </section>

          {/* Tier Qualifications */}
          <section>
            <h3 className="md:text-xl text-lg tracking-widest mokoto-regular mb-6">TIER QUALIFICATIONS</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <RedarkInput placeholder="Ascend Tokens" />
              <RedarkInput placeholder="Ascend NFTs" />
              <RedarkInput placeholder="Genesis Tokens" />
              <RedarkInput placeholder="Genesis NFTs" />
            </div>
          </section>

          {/* Submit Button */}
          <div>
            <RedarkButton title="Apply Changes" className="!text-[15px]" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
