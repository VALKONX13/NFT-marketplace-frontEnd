import React from "react";
import { TabItem, Tabs } from "flowbite-react";
import Sidebar from "@/components/Sidebar";
import MockData from "@/utils/mockData";
import { ThemeProvider, createTheme } from "flowbite-react";
import MintOptions from "@/components/MintOptions";

const customTheme = createTheme({
  button: {
    color: {
      primary: "!bg-redark-purple hover:bg-red-600",
      secondary: "!bg-redark-purple hover:bg-blue-600",
    },
    size: {
      lg: "px-6 py-3 text-lg",
    },
  },
  
  pills: {
    base: "",
    active: {
      on: "rounded-lg !bg-redark-purple text-white",
      off: "rounded-lg hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white",
    },
  },
});

function CreateNft() {
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
        <ThemeProvider theme={customTheme}>
          <Tabs aria-label="Pills" variant="pills">
            <TabItem color="primary" className="!bg-redark-purple" active title="1. Step: Choose Minting">
              <p className="text-sm text-white ">
                <MintOptions />
              </p>
            </TabItem>
            <TabItem title="2. Step: Artwork Details">
              <p className="text-sm text-white">Content 2</p>
            </TabItem>
            <TabItem title="3. Step: Set Collections">
              <p className="text-sm text-white">Content 3</p>
            </TabItem>
          </Tabs>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default CreateNft;
