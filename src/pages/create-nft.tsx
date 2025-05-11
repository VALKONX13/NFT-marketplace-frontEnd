import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import MockData from "@/utils/mockData";
import MintOptions from "@/components/MintOptions";

const tabTitles = [
  "1. Step: Choose Minting",
  "2. Step: Artwork Details",
  "3. Step: Set Collections",
];

function CreateNft() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedMintOption, setSelectedMintOption] = useState("");

  const handleOptionSelect = (option: string) => {
    setSelectedMintOption(option);
    setActiveTab(1); // move to next step
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
        <div className="text-white">
          {activeTab === 0 && (
            <MintOptions onSelect={handleOptionSelect} />
          )}
          {activeTab === 1 && (
            <div>
              <p className="mb-4">
                Selected option: <strong>{selectedMintOption}</strong>
              </p>
              {/* Next button to go to Step 3 */}
              <button
                onClick={() => setActiveTab(2)}
                className="bg-purple-600 px-4 py-2 rounded-lg mt-4"
              >
                Continue to Step 3
              </button>
            </div>
          )}
          {activeTab === 2 && (
            <p>Step 3 content goes here.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CreateNft;
