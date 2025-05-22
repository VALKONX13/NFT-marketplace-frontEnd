import Image from "next/image";
import PaginationContainer from "../PaginationContainer";
import { motion } from 'framer-motion';

const accesslevels = [
    {
        title: "ORBITER",
        icon: "/assets/img/icons/orb.png",
        requirements: [
            "Hold min 100 ARKV Tokens",
            "Complete 1 Protocol Missions",
            "Own min. 1 ORBITER NFT",
        ],
        benefits: [
            "Basic Protocol Governance",
            "Guaranteed allocation in Launches",
            "ASCEND NFT Eligibility",
        ],
    },
    {
        title: "ASCEND",
        icon: "/assets/img/icons/ascend.png",
        requirements: [
            "Hold min 100 ARKV Tokens",
            "Complete 1 Protocol Missions",
            "Own min. 1 ORBITER NFT",
        ],
        benefits: [
            "Basic Protocol Governance",
            "Guaranteed allocation in Launches",
            "ASCEND NFT Eligibility",
        ],
    },
    {
        title: "GENESIS",
        icon: "/assets/img/icons/genesis.png",
        requirements: [
            "Hold min 100 ARKV Tokens",
            "Complete 1 Protocol Missions",
            "Own min. 1 ORBITER NFT",
        ],
        benefits: [
            "Basic Protocol Governance",
            "Guaranteed allocation in Launches",
            "ASCEND NFT Eligibility",
        ],
    },
    {
        title: "QUANTUM",
        icon: "/assets/img/icons/quantum.png",
        requirements: [
            "Hold min 100 ARKV Tokens",
            "Complete 1 Protocol Missions",
            "Own min. 1 ORBITER NFT",
        ],
        benefits: [
            "Basic Protocol Governance",
            "Guaranteed allocation in Launches",
            "ASCEND NFT Eligibility",
        ],
    },
];

const AccessLevels = () => {
    return (
        <section className="text-whitpx-4 lg:px-4 lg:py-10 py-4 space-y-6">
            {/* Section Heading */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col gap-4 lg:mt-16">
                <h2 className="lg:text-3xl text-xs font-mokoto tracking-widest">ARK STATUS REPORT</h2>
                <p className="lg:text-xl text-xs lg:font-mokoto tracking-widest mt-1">ACCESS LEVELS</p>
            </motion.div>

            {/* Tier Summary Card */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="lg:border-2 lg:border-white rounded-[20px] lg:p-4 flex flex-col md:flex-row justify-between lg:items-center gap-4">
                <div className="flex items-center lg:gap-3 gap-2 w-[30%]">
                    <div className="bg-redark-purple/25 rounded-full lg:h-[80px] lg:w-[80px] w-[50px] h-[50px] aspect-square flex items-center justify-center">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-w-[50%]">
                            <path d="M25.8865 18.626C22.7584 20.7419 16.7976 23.42 13.5359 24.8119L11.0757 22.3516C12.5097 19.1111 15.237 13.2134 17.3529 10.0924C21.7251 3.65354 28.0023 2.93655 32.4519 3.53404C33.0494 7.98361 32.3324 14.2608 25.8935 18.626H25.8865ZM8.3272 20.2428C8.07414 20.8051 7.84921 21.3112 7.66644 21.733C7.30092 22.5695 7.49071 23.5395 8.13741 24.1862L11.7013 27.7501C12.341 28.3898 13.2969 28.5866 14.1264 28.2351C14.5833 28.0454 15.1316 27.8134 15.7432 27.5463V34.3085C15.7432 34.913 16.0665 35.4754 16.5937 35.7776C17.1209 36.0799 17.7676 36.0729 18.2878 35.7636L24.5087 32.0732C26.0482 31.1594 26.9901 29.5075 26.9901 27.722V21.9509C27.2713 21.7752 27.5314 21.6065 27.7844 21.4378C36.2759 15.6667 36.557 7.09089 35.6151 1.97353C35.4675 1.15812 34.8278 0.525484 34.0124 0.370838C28.8951 -0.571094 20.3193 -0.289921 14.5622 8.20152C14.3935 8.45458 14.2178 8.71467 14.0491 8.99584H8.278C6.49254 8.99584 4.83362 9.93777 3.92683 11.4772L0.23643 17.6982C-0.0728612 18.2183 -0.0798906 18.865 0.222371 19.3922C0.524633 19.9194 1.07995 20.2428 1.68447 20.2428H8.3272ZM28.6771 10.1205C28.6771 9.37481 28.3809 8.65964 27.8536 8.13234C27.3263 7.60503 26.6111 7.3088 25.8654 7.3088C25.1197 7.3088 24.4045 7.60503 23.8772 8.13234C23.3499 8.65964 23.0537 9.37481 23.0537 10.1205C23.0537 10.8663 23.3499 11.5814 23.8772 12.1087C24.4045 12.636 25.1197 12.9323 25.8654 12.9323C26.6111 12.9323 27.3263 12.636 27.8536 12.1087C28.3809 11.5814 28.6771 10.8663 28.6771 10.1205Z" fill="white" />
                        </svg>
                    </div>
                    <div>
                        <p className="uppercase font-mokoto lg:text-lg text-sm">ASCEND TIER (LEVEL 2)</p>
                        <div className="lg:text-sm text-xs font-azeret flex justify-between items-center">
                            <p className="w-max">Wallet ID:</p>
                            <p className="text-redark-purple">0xA1...B74F</p>{" "}
                            <button className="bg-white text-redark-purple font-mokoto h-fit lg:px-2 px-1 pb-0.5 pt-1.5 rounded-full text-[8px] ml-1">
                                ACTIVE
                            </button>
                        </div>
                    </div>
                </div>

                {/* Progress Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="2xl:w-[50%] xl:w-[60%] lg:w-[50%] md:w-[60%]">
                    <div className="text-sm font-azeret flex justify-between items-center lg:mb-3 mb-7">
                        <p>Progress to Next Tier: </p>
                        <p className="text-redark-purple font-mokoto">54%</p>
                    </div>
                    <div className="relative w-full h-[22px] bg-gradient-to-b from-white/0 via-white/50 to-white/0 border border-white rounded-full">
                        <div className="absolute rounded-full h-full bg-gradient-to-b from-white/0 via-white to-white/0 w-[54%]" />
                        <Image
                            src="/assets/img/space-shuttle.png"
                            alt="Spaceship"
                            width={24}
                            height={24}
                            className="absolute w-[68px] top-[-11px] h-[45px] left-[calc(54%-12px)] transition-transform"
                        />
                    </div>
                    <div className="flex justify-between text-xs font-mokoto mt-3">
                        <p className="text-[10px] lg:text-md">ASCEND</p>
                        <p className="text-[10px] lg:text-md">GENESIS</p>
                    </div>
                </motion.div>
            </motion.div>

            {/* Tier Cards */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="hidden lg:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
                {accesslevels.map((tier, index) => (
                    <motion.div initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.2 }}
                        key={tier.title} className="flex flex-col lg:col-span-2 xl:col-span-1">
                        <div
                            className={`${index === 0 ? 'bg-redark-purple/25' : index === 1 ? 'bg-gradient-to-r from-redark-purple/25 to-redark-navy' : 'bg-redark-navy'}
                         border-2 border-white rounded-[20px] pt-10 pb-16 px-10 flex flex-col justify-between min-h-[320px] relative`}>

                            {/* Icon */}
                            {/* Title */}
                            <div className="flex flex-col justify-center items-center gap-6">
                                <div className={`${tier.title === "ASCEND" ? 'bg-redark-purple/25' : tier.title === "QUANTUM" ? "bg-redark-purple/25 border-2 border-white" : tier.title === "GENESIS" ? 'bg-white border-2 border-redark-purple' : 'bg-redark-purple'}
                                 rounded-full p-3 w-[74px] h-[74px] flex items-center justify-center`}>
                                    <Image src={tier.icon} alt={`${tier.title} icon`} width={34} height={34} />
                                </div>
                                <div className="flex justify-center items-center">
                                    <h3 className="text-2xl font-mokoto tracking-wide">{tier.title}</h3>
                                    <div className="flex items-center justify-between mb-13">
                                        {/* Lock Icon */}
                                        {(tier.title === "ORBITER") && (
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 22C13.9174 22 16.7153 20.8411 18.7782 18.7782C20.8411 16.7153 22 13.9174 22 11C22 8.08262 20.8411 5.28473 18.7782 3.22183C16.7153 1.15893 13.9174 0 11 0C8.08262 0 5.28473 1.15893 3.22183 3.22183C1.15893 5.28473 0 8.08262 0 11C0 13.9174 1.15893 16.7153 3.22183 18.7782C5.28473 20.8411 8.08262 22 11 22ZM15.8555 8.98047L10.3555 14.4805C9.95156 14.8844 9.29844 14.8844 8.89883 14.4805L6.14883 11.7305C5.74492 11.3266 5.74492 10.6734 6.14883 10.2738C6.55273 9.87422 7.20586 9.86992 7.60547 10.2738L9.625 12.2934L14.3945 7.51953C14.7984 7.11562 15.4516 7.11562 15.8512 7.51953C16.2508 7.92344 16.2551 8.57656 15.8512 8.97617L15.8555 8.98047Z" fill="white" />
                                            </svg>
                                        )}
                                        {(tier.title === "ASCEND" || tier.title === "GENESIS" || tier.title === "QUANTUM") && (
                                            <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.5 2.75C7.62545 2.75 6.10714 4.28828 6.10714 6.1875V8.25H16.2857C17.7828 8.25 19 9.4832 19 11V19.25C19 20.7668 17.7828 22 16.2857 22H2.71429C1.21719 22 0 20.7668 0 19.25V11C0 9.4832 1.21719 8.25 2.71429 8.25H3.39286V6.1875C3.39286 2.77148 6.12835 0 9.5 0C11.9386 0 14.0379 1.44805 15.0176 3.53633C15.34 4.22383 15.0516 5.04453 14.373 5.3668C13.6944 5.68906 12.8844 5.40117 12.5663 4.71367C12.0192 3.54922 10.8529 2.75 9.5 2.75ZM10.8571 16.5C11.6078 16.5 12.2143 15.8855 12.2143 15.125C12.2143 14.3645 11.6078 13.75 10.8571 13.75H8.14286C7.39219 13.75 6.78571 14.3645 6.78571 15.125C6.78571 15.8855 7.39219 16.5 8.14286 16.5H10.8571Z"
                                                    fill={`${tier.title === "ASCEND" ? 'white' : '#8C52FF'}`} />
                                            </svg>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Requirements */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="font-azeret">
                                <div className="mt-4 text-sm space-y-1">
                                    <p className="font-semibold">Requirements:</p>
                                    {tier.requirements.map((req) => (
                                        <p key={req} className="text-gray-400">{req}</p>
                                    ))}
                                </div>

                                {/* Benefits */}
                                <div className="mt-4 text-sm space-y-1">
                                    <p className="font-semibold">Benefits:</p>
                                    {tier.benefits.map((ben) => (
                                        <p key={ben} className="text-gray-400">{ben}</p>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                        {/* Button */}
                        <button className="bg-gradient-to-r from-redark-purple to-[#543199] hover:bg-purple-900 mx-auto -mt-6 z-10 rounded-full px-8 pt-2.5 pb-1.5 text-white text-sm self-start font-mokoto border-2 border-white">
                            TIER DETAILS
                        </button>
                    </motion.div>
                ))}
            </motion.div>

            {/* Mobile Tier Cards */}
            <PaginationContainer itemsPerPage={1} className="bg-transparent lg:hidden" title="">
                {accesslevels.map((tier, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.2 }}
                        key={tier.title} className="flex flex-col">
                        <div
                            className={`${index === 0 ? 'bg-redark-purple/25' : index === 1 ? 'bg-gradient-to-r from-redark-purple/25 to-redark-navy' : 'bg-redark-navy'}
                         border-2 border-white rounded-[20px] pt-4 pb-12 px-3 flex flex-col justify-between min-h-[320px] relative`}>

                            {/* Icon */}
                            {/* Title */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="flex flex-col justify-center items-center">
                                <div className={`${tier.title === "ASCEND" ? 'bg-redark-purple/25' : tier.title === "QUANTUM" ? "bg-redark-purple/25 border-2 border-white" : tier.title === "GENESIS" ? 'bg-white border-2 border-redark-purple' : 'bg-redark-purple'}
                                 rounded-full p-3 w-[50px] h-[50px] flex items-center justify-center`}>
                                    <Image src={tier.icon} alt={`${tier.title} icon`} width={34} height={34} />
                                </div>
                                <div className="flex justify-center items-center">
                                    <h3 className="text-xl font-mokoto tracking-wide">{tier.title}</h3>
                                    <div className="flex items-center justify-between mb-13">
                                        {/* Lock Icon */}
                                        {(tier.title === "ORBITER") && (
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 22C13.9174 22 16.7153 20.8411 18.7782 18.7782C20.8411 16.7153 22 13.9174 22 11C22 8.08262 20.8411 5.28473 18.7782 3.22183C16.7153 1.15893 13.9174 0 11 0C8.08262 0 5.28473 1.15893 3.22183 3.22183C1.15893 5.28473 0 8.08262 0 11C0 13.9174 1.15893 16.7153 3.22183 18.7782C5.28473 20.8411 8.08262 22 11 22ZM15.8555 8.98047L10.3555 14.4805C9.95156 14.8844 9.29844 14.8844 8.89883 14.4805L6.14883 11.7305C5.74492 11.3266 5.74492 10.6734 6.14883 10.2738C6.55273 9.87422 7.20586 9.86992 7.60547 10.2738L9.625 12.2934L14.3945 7.51953C14.7984 7.11562 15.4516 7.11562 15.8512 7.51953C16.2508 7.92344 16.2551 8.57656 15.8512 8.97617L15.8555 8.98047Z" fill="white" />
                                            </svg>
                                        )}
                                        {(tier.title === "ASCEND" || tier.title === "GENESIS" || tier.title === "QUANTUM") && (
                                            <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.5 2.75C7.62545 2.75 6.10714 4.28828 6.10714 6.1875V8.25H16.2857C17.7828 8.25 19 9.4832 19 11V19.25C19 20.7668 17.7828 22 16.2857 22H2.71429C1.21719 22 0 20.7668 0 19.25V11C0 9.4832 1.21719 8.25 2.71429 8.25H3.39286V6.1875C3.39286 2.77148 6.12835 0 9.5 0C11.9386 0 14.0379 1.44805 15.0176 3.53633C15.34 4.22383 15.0516 5.04453 14.373 5.3668C13.6944 5.68906 12.8844 5.40117 12.5663 4.71367C12.0192 3.54922 10.8529 2.75 9.5 2.75ZM10.8571 16.5C11.6078 16.5 12.2143 15.8855 12.2143 15.125C12.2143 14.3645 11.6078 13.75 10.8571 13.75H8.14286C7.39219 13.75 6.78571 14.3645 6.78571 15.125C6.78571 15.8855 7.39219 16.5 8.14286 16.5H10.8571Z"
                                                    fill={`${tier.title === "ASCEND" ? 'white' : '#8C52FF'}`} />
                                            </svg>
                                        )}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Requirements */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="font-azeret -mt-7">
                                <div className="mt-4 text-xs space-y-1">
                                    <p className="font-semibold">Requirements:</p>
                                    {tier.requirements.map((req) => (
                                        <p key={req} className="text-gray-400">{req}</p>
                                    ))}
                                </div>

                                {/* Benefits */}
                                <div className="mt-4 text-xs space-y-1">
                                    <p className="font-semibold">Benefits:</p>
                                    {tier.benefits.map((ben) => (
                                        <p key={ben} className="text-gray-400">{ben}</p>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Button */}
                        <motion.button
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="bg-gradient-to-r from-redark-purple to-[#543199] hover:bg-purple-900 mx-auto -mt-6 z-10 rounded-full px-6 pt-2.5 pb-1.5 text-white text-xs self-start font-mokoto border-2 border-white">
                            TIER DETAILS
                        </motion.button>
                    </motion.div>
                ))}
            </PaginationContainer>
        </section>
    );
};

export default AccessLevels;
