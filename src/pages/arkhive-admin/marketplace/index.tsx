"use client";

import { motion } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import RedarkButton from "@/components/RedarkButton";
import MockData from '@/utils/mockData';
import RedarkInput from "@/components/RedarkInput";


export default function MarketplaceSettings() {

    return (
        <div className="bg-redark-navy flex md:gap-8 gap-2 h-auto min-h-screen">
            <Sidebar
                dividerTitles={["Admin Settings", "Blog Settings"]}
                navItems={[MockData.adminSettingsSideBarItems, MockData.blogSettingsSideBarItems]}
                button={false}
                className="col-span-1 lg:col-span-3 2xl:col-span-2 !h-auto"
            />
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="md:col-span-11 2xl:col-span-10 lg:col-span-9 sm:col-span-7 col-span-4 w-full">
                <div className="py-6 px-4 text-white space-y-6 2xl:max-w-[50%] xl:max-w-[70%] pt-14 mb-18">
                    {/* Title */}
                    <h2 className="text-xl md:text-4xl tracking-widest mokoto-regular mb-12">Marketplace settings</h2>
                    {/* royalty  */}
                    <section className="mb-8">
                        <h3 className="md:text-2xl text-lg tracking-widest mokoto-regular mb-6">trading royalty</h3>
                        <RedarkInput placeholder="New trading royalty" />
                        <RedarkButton title="update royalty" className="!text-[15px] mt-5 mb-8" />
                    </section>

                    {/* Promote or hide nft */}
                    <section>
                        <h3 className="md:text-2xl text-lg tracking-widest mokoto-regular mb-6">Promote or hide nft</h3>
                        <RedarkInput placeholder="NFT URL" />
                        <RedarkButton title="Promote nft" className="!text-[15px] mt-5 mb-8" />
                        <RedarkInput placeholder="NFT URL" />
                        <RedarkButton title="Hide nft" className="!text-[15px] mt-5 mb-8" />
                    </section>
                </div>
            </motion.div>
        </div>
    );
}
