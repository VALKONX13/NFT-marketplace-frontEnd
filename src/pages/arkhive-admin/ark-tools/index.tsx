"use client";

import { motion } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import RedarkButton from "@/components/RedarkButton";
import MockData from '@/utils/mockData';
import RedarkInput from "@/components/RedarkInput";


export default function ArkToolsSettings() {

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
                    <h2 className="text-xl md:text-4xl tracking-widest mokoto-regular mb-10">ark tools settings</h2>
                    {/* Minting tool prices */}
                    <section>
                        <h3 className="md:text-2xl text-lg tracking-widest mokoto-regular mb-6">Minting tool prices (ARKV)</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <RedarkInput placeholder="Orbiter Price" />
                            <RedarkInput placeholder="Ascend Price" />
                            <RedarkInput placeholder="Genesis Price" />
                            <RedarkInput placeholder="Quantum Price" />
                        </div>
                        <RedarkButton title="Apply Changes" className="!text-[15px] mt-5 mb-6" />
                    </section>

                    {/* Minting tool prices */}
                    <section>
                        <h3 className="md:text-2xl text-lg tracking-widest mokoto-regular mb-6">Minting tool prices (3 tries)</h3>
                        <RedarkInput placeholder="Generate Images Price" />
                        <RedarkButton title="Apply Changes" className="!text-[15px] mt-5 mb-6" />
                    </section>

                    {/* Minting tool prices */}
                    <section>
                        <h3 className="md:text-2xl text-lg tracking-widest mokoto-regular mb-6">Minting tool prices (ARKV)</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <RedarkInput placeholder="Orbiter Price" />
                            <RedarkInput placeholder="Ascend Price" />
                            <RedarkInput placeholder="Genesis Price" />
                            <RedarkInput placeholder="Quantum Price" />
                        </div>
                        <RedarkButton title="Apply Changes" className="!text-[15px] mt-5 mb-6" />
                    </section>
                </div>
            </motion.div>
        </div>
    );
}
