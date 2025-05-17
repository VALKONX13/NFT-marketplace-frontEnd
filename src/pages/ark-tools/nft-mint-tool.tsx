import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import MockData from "@/utils/mockData";
import MintOptions from "@/components/MintOptions";
import ArtworkDetailsForm from "@/components/ArtworkDetailsForm";
import RedarkButton from "@/components/RedarkButton";
import { Dropdown, DropdownItem } from "flowbite-react";
import BalanceWarningModal from "@/components/BalanceWarningModal";

const tabTitles = [
  "1. Step: Choose Minting",
  "2. Step: Artwork Details",
  "3. Step: Set Collections",
];

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
    <div className="bg-redark-navy grid grid-cols-12 gap-8 h-auto min-h-screen">
      <Sidebar
        dividerTitles={["Marketplace", "Account"]}
        navItems={[MockData.marketplace, MockData.accountItems]}
        button={true}
        className="col-start-1 col-end-3"
      />
      <div className="col-span-10 px-8 py-16">
        <h1 className="font-mokoto text-4xl font-medium mt-10 mb-8">
          Create Your Unique NFT
        </h1>

        {/* Custom Tabs Header */}
        <div className="flex gap-4 mb-6">
          {tabTitles.map((title, index) => (
            <button
              key={index}
              onClick={() => {
                // Only allow going back to previous steps
                if (index <= activeTab) setActiveTab(index);
              }}
              className={`text-white text-sm px-4 py-2 rounded-3xl border-2 transition-colors ${
                activeTab === index
                  ? "bg-redark-purple border-redark-purple"
                  : "border-redark-purple bg-transparent"
              }`}
            >
              {title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="text-white py-8">
          {activeTab === 0 && <MintOptions onSelect={handleOptionSelect} />}
          {modal ? <BalanceWarningModal/> : null}
          {activeTab === 1 && (
            <div>
              <ArtworkDetailsForm
                selectedMintOption={selectedMintOption}
                onSuccess={handleArtworkSubmitSuccess}
              />
            </div>
          )}
          {activeTab === 2 && (
            <div className="rounded-xl text-white mx-auto space-y-6 px-12">
              <div className="grid grid-cols-2 gap-8 mb-10">
                {/* Existing Collections */}
                <Dropdown
                  label="Choose from Existing Collections"
                  color="#"
                  className="w-full h-[72px] bg-white/25 !justify-between rounded-full text-white"
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
                  className="w-full h-[72px] bg-white/25 !justify-between rounded-full text-white"
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
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Add a new Collection"
                    className="bg-white/25 h-[72px] text-sm text-white p-4 rounded-full w-full pr-10 focus:outline-none"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-xl">
                    +
                  </button>
                </div>

                {/* New Category Input */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Add a new Category"
                    className="bg-white/25 h-[72px] text-sm text-white p-4 rounded-full w-full pr-10 focus:outline-none"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-xl">
                    +
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2 font-azeret text-gray-400 mb-10">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={() => setAgreed(!agreed)}
                    name="terms"
                    className="hidden peer"
                  />
                  <div
                    className={`w-4 h-4 rounded-sm border border-white peer-checked:bg-redark-purple peer-checked:border-white transition
                    `}
                  />
                  <p className="font-azeret text-[14px]">
                    I hereby declare that I agree with all the Terms &
                    Conditions.
                  </p>
                </label>
              </div>
              <RedarkButton title="SUBMIT FINAL" disabled={!agreed}/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CreateNft;
