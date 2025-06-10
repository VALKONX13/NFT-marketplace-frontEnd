"use client";

import AccessLevels from '@/components/AccessLevels';
import Sidebar from '@/components/Sidebar';
import MockData from '@/utils/mockData';
import Image from 'next/image';
import React from 'react'
import { motion } from 'framer-motion';
import CountdownTimer from '@/components/CountdownTimer';
import Header from '@/components/Header';


function ArkStatusReport() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className='bg-redark-navy flex md:gap-8 gap-2 h-auto'>
            <Sidebar
                dividerTitles={["My Account"]}
                navItems={[MockData.userAccountSideBarItems]}
                button={false}
                className="col-span-1 lg:col-span-3 2xl:col-span-2 !h-auto"
            />
            <div className='md:col-span-11 2xl:col-span-10 lg:col-span-9 sm:col-span-7 col-span-4 xl:-ml-9 2xl:ml-0 w-full'>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                    className='justify-between pt-8 lg:pl-8 lg:pr-16 hidden lg:flex'>
                    <p>Access Level Program Progress</p>
                    <button className='uppercase bg-gradient-to-b from-redark-purple to-[#543199] border border-white rounded-full font-mokoto lg:px-6 px-3 lg:pt-3 lg:pb-2 pt-2 pb-1 !text-xs'>Wallet</button>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                    className='lg:hidden'>
                    <Header wallet={false} searchBar={false} />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="2xl:pr-10 lg:pr-4 pr-2 min-h-screen text-white col-span-10 py-4 flex flex-col justify-center">
                    <AccessLevels />
                    <section className="lg:px-4 px-2 pb-10 space-y-8 text-white">
                        {/* Balances Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="flex flex-wrap lg:justify-between justify-center items-center gap-4 bg-white/25 text-sm px-7 py-5 lg:rounded-[40px] rounded-[20px]">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="flex lg:flex-row flex-col items-center gap-6">
                                <div className='flex items-center gap-5'>
                                    <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 0C1.34531 0 0 1.34531 0 3V18C0 19.6547 1.34531 21 3 21H21C22.6547 21 24 19.6547 24 18V7.5C24 5.84531 22.6547 4.5 21 4.5H3.75C3.3375 4.5 3 4.1625 3 3.75C3 3.3375 3.3375 3 3.75 3H21C21.8297 3 22.5 2.32969 22.5 1.5C22.5 0.670312 21.8297 0 21 0H3ZM19.5 11.25C19.8978 11.25 20.2794 11.408 20.5607 11.6893C20.842 11.9706 21 12.3522 21 12.75C21 13.1478 20.842 13.5294 20.5607 13.8107C20.2794 14.092 19.8978 14.25 19.5 14.25C19.1022 14.25 18.7206 14.092 18.4393 13.8107C18.158 13.5294 18 13.1478 18 12.75C18 12.3522 18.158 11.9706 18.4393 11.6893C18.7206 11.408 19.1022 11.25 19.5 11.25Z" fill="white" />
                                    </svg>
                                    <p className='lg:text-md text-xs'>Total ARKV Balance:</p>
                                </div>
                                <p className="font-mokoto -mb-1 text-white text-lg">0.00 ARKV</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="flex lg:flex-row flex-col items-center gap-6">
                                <div className='flex items-center gap-5'>
                                    <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.4062 7.125C18.577 7.125 18.7514 7.13242 18.9184 7.14355C18.3506 3.10605 14.8809 0 10.6875 0C10.3535 0 10.0938 0.282031 10.0938 0.616016V8.90625H13.9234C15.0924 7.80039 16.6695 7.125 18.4062 7.125ZM11.875 13.6562C11.875 12.5875 12.1311 11.5781 12.5875 10.6875H8.3125V2.4752C8.3125 1.78867 7.72988 1.23945 7.0582 1.38047C3.02441 2.23027 0 5.80762 0 10.0938C0 15.0145 3.98926 19 8.90625 19C10.5316 19 12.0531 18.5658 13.3631 17.8051C12.4316 16.677 11.875 15.2334 11.875 13.6562ZM23.75 13.6562C23.75 12.239 23.187 10.8798 22.1849 9.87765C21.1827 8.8755 19.8235 8.3125 18.4062 8.3125C16.989 8.3125 15.6298 8.8755 14.6276 9.87765C13.6255 10.8798 13.0625 12.239 13.0625 13.6562C13.0625 15.0735 13.6255 16.4327 14.6276 17.4349C15.6298 18.437 16.989 19 18.4062 19C19.8235 19 21.1827 18.437 22.1849 17.4349C23.187 16.4327 23.75 15.0735 23.75 13.6562ZM17.5453 12.4465C17.5305 12.4725 17.5119 12.5059 17.5156 12.5801C17.5156 12.5801 17.5156 12.5801 17.5156 12.5838C17.5156 12.5986 17.5156 12.6543 17.6938 12.7508C17.9016 12.8621 18.1947 12.9437 18.5807 13.0551H18.5881C18.9332 13.1516 19.3711 13.2777 19.7199 13.4818C20.0984 13.7045 20.4621 14.0793 20.4807 14.6805C20.4992 15.3559 20.1207 15.8086 19.6754 16.0498C19.4602 16.1648 19.2264 16.2391 18.9963 16.2799V16.6807C18.9963 17.0072 18.7291 17.2744 18.4025 17.2744C18.076 17.2744 17.8088 17.0072 17.8088 16.6807V16.2576C17.4896 16.1945 17.1891 16.098 16.9293 16.0127C16.8662 15.9904 16.8031 15.9719 16.7437 15.9533C16.432 15.8568 16.2539 15.5229 16.3541 15.2111C16.4543 14.8994 16.7846 14.7213 17.0963 14.8215C17.1705 14.8438 17.241 14.866 17.3115 14.8883C17.7346 15.0219 18.0686 15.1295 18.4211 15.1406C18.6697 15.148 18.9332 15.0998 19.1076 15.007C19.1893 14.9625 19.2338 14.918 19.2561 14.8846C19.2746 14.8549 19.2969 14.8066 19.2932 14.7176C19.2932 14.6656 19.2857 14.6062 19.1187 14.5098C18.9221 14.3947 18.64 14.3094 18.2578 14.2018L18.191 14.1832C17.8607 14.0904 17.4563 13.9754 17.1297 13.801C16.7623 13.6043 16.3652 13.2555 16.3281 12.6617C16.2836 11.9641 16.6992 11.515 17.1371 11.2812C17.3486 11.1662 17.5824 11.092 17.8051 11.0475V10.6949C17.8051 10.3684 18.0723 10.1012 18.3988 10.1012C18.7254 10.1012 18.9926 10.3684 18.9926 10.6949V11.0437C19.2264 11.0771 19.449 11.1291 19.6568 11.1811C19.976 11.259 20.1689 11.5818 20.091 11.901C20.0131 12.2201 19.6902 12.4131 19.3711 12.3352C19.026 12.2498 18.6957 12.1867 18.3914 12.183C18.1613 12.1793 17.8867 12.2312 17.6975 12.3314C17.6084 12.3797 17.5639 12.4242 17.5416 12.4576L17.5453 12.4465Z" fill="white" />
                                    </svg>
                                    <p className='lg:text-md text-xs'>Your Coin Worth at Launch:</p>
                                </div>
                                <p className="font-mokoto -mb-1 text-white text-lg">0.00 ARKV</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="flex lg:flex-row flex-col items-center gap-6">
                                <div className='flex items-center gap-5'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 4.5H9L6.77813 1.16719C6.44531 0.665625 6.80156 0 7.40156 0H16.5984C17.1984 0 17.5547 0.665625 17.2219 1.16719L15 4.5ZM9 6H15C15.1781 6.11719 15.3797 6.24844 15.6094 6.39375C18.2672 8.09531 24 11.7609 24 19.5C24 21.9844 21.9844 24 19.5 24H4.5C2.01562 24 0 21.9844 0 19.5C0 11.7609 5.73281 8.09531 8.39062 6.39375C8.61563 6.24844 8.82187 6.11719 9 6ZM12.9375 10.125C12.9375 9.60938 12.5156 9.1875 12 9.1875C11.4844 9.1875 11.0625 9.60938 11.0625 10.125V10.7812C10.7063 10.8609 10.35 10.9875 10.0219 11.1797C9.37031 11.5688 8.80781 12.2484 8.8125 13.2375C8.81719 14.1891 9.375 14.7891 9.97031 15.1453C10.4859 15.4547 11.1281 15.6516 11.6391 15.8016L11.7188 15.825C12.3094 16.0031 12.7406 16.1437 13.0312 16.3266C13.2703 16.4766 13.3031 16.5797 13.3078 16.7109C13.3125 16.9453 13.2234 17.0859 13.0312 17.2031C12.7969 17.3484 12.4266 17.4375 12.0281 17.4234C11.5078 17.4047 11.0203 17.2406 10.3828 17.025C10.275 16.9875 10.1625 16.95 10.0453 16.9125C9.55313 16.7484 9.02344 17.0156 8.85938 17.5031C8.69531 17.9906 8.9625 18.525 9.45 18.6891C9.53906 18.7172 9.6375 18.75 9.73594 18.7875C10.125 18.9234 10.575 19.0781 11.0578 19.1813V19.8656C11.0578 20.3812 11.4797 20.8031 11.9953 20.8031C12.5109 20.8031 12.9328 20.3812 12.9328 19.8656V19.2188C13.3078 19.1391 13.6828 19.0078 14.0203 18.7969C14.6906 18.3797 15.1969 17.6672 15.1828 16.6875C15.1687 15.7359 14.6344 15.1219 14.0297 14.7375C13.4906 14.4 12.8156 14.1937 12.2906 14.0344L12.2578 14.025C11.6578 13.8422 11.2312 13.7109 10.9312 13.5328C10.6875 13.3875 10.6828 13.3031 10.6828 13.2188C10.6828 13.0453 10.7484 12.9141 10.9734 12.7828C11.2266 12.6328 11.6109 12.5438 11.9813 12.5484C12.4313 12.5531 12.9281 12.6516 13.4437 12.7922C13.9453 12.9234 14.4562 12.6281 14.5922 12.1266C14.7281 11.625 14.4281 11.1141 13.9266 10.9781C13.6219 10.8984 13.2844 10.8188 12.9375 10.7578V10.1063V10.125Z" fill="white" />
                                    </svg>
                                    <p className='lg:text-md text-xs'>Referral Earnings:</p>
                                </div>
                                <p className="font-mokoto -mb-1 text-white text-lg">0.00 ARKV</p>
                            </motion.div>
                        </motion.div>

                        {/* Vested Tokens + Leaderboard Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="grid md:grid-cols-2 gap-8">
                            {/* Vested Tokens Box */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.2 }}>
                                <h2 className="lg:text-xl text-xs text-center lg:text-start font-mokoto tracking-wider mb-6">VESTED TOKENS</h2>
                                <div className='bg-white/13 rounded-[16px] pt-8 pb-6'>
                                    <div className='flex justify-between items-center'>
                                        <div className="lg:flex items-center hidden gap-4 mb-4 bg-redark-purple/25 w-fit py-3 2xl:pl-12 xl:pl-6 pl-4 pr-9 rounded-tr-full rounded-br-full">
                                            <Image src="/assets/img/astronaut.png" alt="User Character" width={48} height={48} />
                                            <div className='flex flex-col gap-2'>
                                                <p className="text-sm">User Level: <span className="font-semibold">ORBITER</span></p>
                                                <p className="text-xs">Batch 28 – Phase 130</p>
                                            </div>
                                        </div>
                                        {/* Countdown */}
                                        <div className='flex-col w-fit pl-5 2xl:pr-10 pr-6 hidden xl:flex'>
                                            <p>Countdown to  Unlock 100%</p>
                                            <CountdownTimer
                                                startTime={Date.now()}
                                                duration={30} // Converting months to days
                                                static={false}
                                                loop={true}
                                            />
                                        </div>
                                    </div>
                                    <div className='lg:p-6 2xl:px-20 lg:px-8 px-2 2xl:pt-10 2xl:pb-3 p-4 pb-0'>
                                        {/* Progress Bar */}
                                        <motion.div initial={{ opacity: 0, y: 50 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                            viewport={{ once: true, amount: 0.2 }} className="relative w-full h-[42px] bg-white/25 rounded-full mt-6 scale-x-[-1]">
                                            <div className="absolute left-0 top-0 h-full w-[50%] bg-gradient-to-r from-purple-500 to-purple-700 rounded-full" />
                                            <div className='absolute scale-x-[-1] bottom-[40%] lg:right-[30%] right-[10%]'>
                                                <svg width="183" height="63" viewBox="0 0 183 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 62L61.3721 1L182.5 1" stroke="white" />
                                                </svg>
                                                <div className="absolute left-[50%] top-[-25%] text-xs text-end">
                                                    <p>Locked Tokens:</p>
                                                    <p className="text-white">$127,557.67</p>
                                                </div>
                                            </div>
                                            <div className='absolute top-[50%] xl:right-[50%] lg:right-[29%] sm:right-[25%] right-[12%]'>
                                                <svg className='scale-y-[-1]' width="183" height="63" viewBox="0 0 183 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 62L61.3721 1L182.5 1" stroke="white" />
                                                </svg>
                                                <div className="absolute right-2 top-[70%] text-xs text-start scale-x-[-1]">
                                                    <p>Unlocked Tokens:</p>
                                                    <p className="text-white">$127,557.67</p>
                                                </div>
                                            </div>
                                        </motion.div>

                                        {/* Claim Button */}
                                        <motion.div initial={{ opacity: 0, y: 50 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                            viewport={{ once: true, amount: 0.2 }}
                                            className="mt-22 flex flex-col justify-center items-center">
                                            <button className="bg-gradient-to-r from-redark-purple to-[#543199] border-2 border-white font-mokoto hover:bg-purple-900 text-white px-7 pt-3 pb-2 lg:text-sm text-xs rounded-full">
                                                CLAIM UNLOCKED
                                            </button>
                                            <p className="text-xs mt-3">Unclaimed: 1,678.879 ARKV</p>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Leaderboard Box */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.2 }}>
                                <h2 className="lg:text-xl text-xs text-center lg:text-start font-mokoto tracking-wider mb-6">LEADERBOARD</h2>
                                <div className='bg-white/13 rounded-[16px]'>
                                    <p className="text-sm mb-2 py-6 px-8 text-gray-400 border-b border-white/10 pb-4">Top ARKV Spenders</p>

                                    <div className="space-y-3 text-sm">
                                        {[1, 2, 3, 4, 5].map((rank) => (
                                            <div
                                                key={rank}
                                                className="flex justify-between items-center py-2 lg:px-8 px-4 text-xs lg:text-md mb-0 border-b border-white/10"
                                            >
                                                <div className='flex flex-col gap-2'>
                                                    <p className="text-redark-purple">#{`0${rank}`}</p>
                                                    <p className="text-gray-300">0x2222...5c1</p>
                                                </div>
                                                <div className='flex flex-col gap-2'>
                                                    <p className='lg:text-md text-sm'>Total Transactions</p>
                                                    <p className="text-white font-extralight text-right">$3,601,224.67</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </section>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default ArkStatusReport;