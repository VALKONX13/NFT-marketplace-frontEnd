"use client";

import { motion } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import RedarkButton from "@/components/RedarkButton";
import MockData from '@/utils/mockData';

export default function IcoSettings() {

    return (
        <div className="bg-redark-navy grid md:grid-cols-12 sm:grid-cols-8 grid-cols-5 md:gap-8 gap-2 h-auto min-h-screen">
            <Sidebar
                dividerTitles={["Admin Settings", "Blog Settings"]}
                navItems={[MockData.adminSettingsSideBarItems, MockData.blogSettingsSideBarItems]}
                button={false}
                className="col-span-1 lg:col-span-3 2xl:col-span-2"
            />
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="md:col-span-11 2xl:col-span-10 lg:col-span-9 sm:col-span-7 col-span-4">
                <div className="py-6 px-4 text-white space-y-6 2xl:max-w-[50%] xl:max-w-[70%] pt-14 mb-18">
                    {/* Title */}
                    <h2 className="text-xl md:text-4xl tracking-widest mokoto-regular mb-10">ICO SALE settings</h2>
                    {/* WITHDRAW */}
                    <section>
                        <h3 className="md:text-2xl text-lg tracking-widest mokoto-regular mb-8">CLOSE ICO AND WITHDRAW FUNDS</h3>
                        <label className="flex items-center gap-8 space-x-2 cursor-pointer mb-10">
                            <input
                                type="checkbox"
                                name="terms"
                                className="hidden peer"
                            />
                            <div className={`w-4 h-4 aspect-square rounded-sm border border-white/25 bg-white/25 peer-checked:bg-redark-purple peer-checked:border-redark-purple transition`}
                            />
                            <p className="font-azeret text-[15px]">
                                I understand this action is not reversible.
                            </p>
                        </label>
                        <RedarkButton title="END ICO & Withdraw funds" className="!text-[15px]" />
                    </section>
                </div>
            </motion.div>
        </div>
    );
}
