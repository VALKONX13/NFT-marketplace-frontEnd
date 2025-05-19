import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import MockData from "@/utils/mockData";
import MintOptions from "@/components/MintOptions";
import ArtworkDetailsForm from "@/components/ArtworkDetailsForm";
import RedarkButton from "@/components/RedarkButton";
import { Dropdown, DropdownItem } from "flowbite-react";
import BalanceWarningModal from "@/components/BalanceWarningModal";
import Header from "@/components/Header";
import PaginationContainer from "@/components/PaginationContainer";
import { motion } from 'framer-motion';

const tabTitles = [
  "1. Step: Choose Minting",
  "2. Step: Artwork Details",
  "3. Step: Set Collections",
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

function CreateNft() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedMintOption, setSelectedMintOption] = useState("");
  const [agreed, setAgreed] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [balance, setBalance] = useState(100);
  const [modal, setModal] = useState(false);

  const handleOptionSelect = (option: string) => {
    setSelectedMintOption(option);
    if (balance >= 100) setActiveTab(1);
    else setModal(!modal); // move to next step
  };

  const handleArtworkSubmitSuccess = () => {
    setActiveTab(2); // Go to Step 3
  };

  return (
    <div className="bg-redark-navy grid md:grid-cols-12 sm:grid-cols-8 grid-cols-5 lg:gap-8 gap-2 h-auto min-h-screen">
      <Sidebar
        dividerTitles={["Marketplace", "Account"]}
        navItems={[MockData.marketplace, MockData.accountItems]}
        button={true}
        className="col-span-1 md:col-span-2 lg:col-span-3 2xl:col-span-2"
      />
      <div className="md:col-span-10 lg:col-span-9 2xl:col-span-10 sm:col-span-7 col-span-4">
        <Header className="hidden xl:flex" searchBar={true} wallet={true} searchIcon={false} />
        {/* Mobile Header */}
        <Header className="xl:hidden" searchBar={false} wallet={false} searchIcon={true} />
        <div className="col-span-10 lg:pr-8 lg:py-16 pl-1 pr-2 py-4">
          <h1 className="font-mokoto lg:text-4xl text-xs lg:text-start text-center font-medium lg:mt-10 lg:mb-8 my-5">
            Create Your Unique NFT
          </h1>

          {/* Tabs Header */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="gap-4 mb-6 hidden lg:flex">
            {tabTitles.map((title, index) => (
              <button
                key={index}
                onClick={() => {
                  // Only allow going back to previous steps
                  if (index <= activeTab) setActiveTab(index);
                }}
                className={`text-white text-sm px-4 py-2 rounded-3xl border-2 transition-colors ${activeTab === index
                  ? "bg-redark-purple border-redark-purple"
                  : "border-redark-purple bg-transparent"
                  }`}
              >
                {title}
              </button>
            ))}
          </motion.div>
          {/* Mobile tab Headers */}
          <PaginationContainer title="" itemsPerPage={1} className="bg-transparent lg:hidden relative" nextButton="absolute top-[20%] left-[0%]" prevButton="absolute top-[20%] right-[0%]" indicators="hidden">
            {tabTitles.map((title, index) => (
              <motion.button
                initial="initial"
                animate="animate"
                variants={fadeInUp}
                key={index}
                onClick={() => {
                  // Only allow going back to previous steps
                  if (index <= activeTab) setActiveTab(index);
                }}
                className={`text-white text-sm px-4 py-2 rounded-3xl border-2 transition-colors ${activeTab === index
                  ? "bg-redark-purple border-redark-purple"
                  : "border-redark-purple bg-transparent"
                  }`}
              >
                {title}
              </motion.button>
            ))}
          </PaginationContainer>

          {/* Tab Content */}
          <div className="text-white lg:py-8">
            {/* Tab 1 */}
            {activeTab === 0 && <MintOptions onSelect={handleOptionSelect} />}
            {modal ? <BalanceWarningModal /> : null}
            {/* Tab 2 */}
            {activeTab === 1 && (
              <div>
                <ArtworkDetailsForm
                  selectedMintOption={selectedMintOption}
                  onSuccess={handleArtworkSubmitSuccess}
                />
              </div>
            )}
            {/* Tab 3 */}
            {activeTab === 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="rounded-xl text-white mx-auto space-y-6 lg:px-12">
                <motion.div initial="initial"
                  animate="animate"
                  variants={fadeInUp}
                  className="grid grid-cols-2 lg:gap-8 gap-4 lg:mb-10">
                  {/* Existing Collections */}
                  <Dropdown
                    label="Choose from Existing Collections"
                    color="#"
                    className="w-full h-[72px] bg-white/25 col-span-2 lg:col-span-1 !justify-between rounded-full text-white"
                    dismissOnClick={true}
                  >
                    <DropdownItem className=" text-white hover:bg-white/25">
                      Collection 1
                    </DropdownItem>
                    <DropdownItem className=" text-white hover:bg-white/25">
                      Collection 2
                    </DropdownItem>
                  </Dropdown>
                  <Dropdown
                    label="Choose from Existing Categories"
                    color="#"
                    className="w-full h-[72px] bg-white/25 col-span-2 lg:col-span-1 !justify-between rounded-full text-white"
                    dismissOnClick={true}
                  >
                    <DropdownItem className=" text-white hover:bg-white/25">
                      Collection 1
                    </DropdownItem>
                    <DropdownItem className=" text-white hover:bg-white/25">
                      Collection 2
                    </DropdownItem>
                  </Dropdown>

                  {/* New Collection Input */}
                  <motion.div
                    initial="initial"
                    animate="animate"
                    variants={fadeInUp}
                    className="relative col-span-2 lg:col-span-1">
                    <input
                      type="text"
                      placeholder="Add a new Collection"
                      className="bg-white/25 h-[72px] text-sm text-white placeholder:text-white placeholder:text-center lg:placeholder:text-start p-4 rounded-full w-full pr-10 focus:outline-none"
                    />
                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-xl">
                      +
                    </button>
                  </motion.div>

                  {/* New Category Input */}
                  <motion.div
                    initial="initial"
                    animate="animate"
                    variants={fadeInUp}
                    className="relative col-span-2 lg:col-span-1">
                    <input
                      type="text"
                      placeholder="Add a new Category"
                      className="bg-white/25 h-[72px] text-sm text-white placeholder:text-white placeholder:text-center lg:placeholder:text-start p-4 rounded-full w-full pr-10 focus:outline-none"
                    />
                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-xl">
                      +
                    </button>
                  </motion.div>
                </motion.div>
                <motion.div
                  initial="initial"
                  animate="animate"
                  variants={fadeInUp}
                  className="flex items-center gap-2 font-azeret text-white lg:mb-10 mb-6 lg:mt-0 mt-10 px-2">
                  <label className="flex items-center space-x-2 cursor-pointer gap-2">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={() => setAgreed(!agreed)}
                      name="terms"
                      className="hidden peer \"
                    />
                    <div
                      className={`w-4 h-4 rounded-sm aspect-square border border-white peer-checked:bg-redark-purple peer-checked:border-white transition
                    `}
                    />
                    <p className="font-azeret text-[14px]">
                      I hereby declare that I agree with all the Terms &
                      Conditions.
                    </p>
                  </label>
                </motion.div>
                <RedarkButton title="SUBMIT FINAL" disabled={!agreed} className="flex mx-auto text-xs lg:text-md" />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateNft;
