/* eslint-disable @next/next/no-img-element */
import MainBanner from "@/components/MainBanner";
import RedarkButton from "@/components/RedarkButton";
import MockData from "@/utils/mockData";
import React from "react";

function ArkhiveNFTs() {
  return (
    <div className="bg-redark-navy">
      {/* Banner */}
      <div className="bg-[url('/assets/img/ark-space-banner.jpg')] bg-cover bg-center h-[400px] flex flex-col justify-center">
        <h1 className="font-mokoto text-4xl w-fit mx-auto">
          Own the future of Creativity
        </h1>
        <p className="font-azeret w-fit mx-auto max-w-[900px] text-center pt-5">
          When you hold an ARKHIVE NFT, you unlock more than digital ownership –
          you gain access to a curated ecosystem of rewards, visibility and
          physical experiences.
        </p>
      </div>

      {/* Owner perks */}
      <div className="bg-redark-navy py-18 px-28 h-[780px]">
        <img
          src="/assets/img/subtract.svg" alt="logo"
          className="absolute left-[22vw] top-[36%]"
        />
        <p className="font-mokoto text-4xl w-fit mx-auto mb-18">Owner Perks</p>
        <div>
          <div className="grid grid-cols-4 gap-16 p-8">
            {MockData.ownerPerks.map((item, index) => (
              <div
                key={index}
                className="col-span-1 flex flex-col items-end max-w-[400px] relative"
              >
                <p className="font-mokoto text-xl max-w-[80%] self-start mb-8">
                  {item.title}
                </p>
                <p className="font-azeret text-sm pb-4 max-w-[80%] self-start">
                  {item.desc}
                </p>
                <img
                  src="/assets/img/line.svg" alt="circles"
                  className="opacity-20 absolute top-[40%]"
                />
              </div>
            ))}
          </div>
          <div className="w-fit mx-auto">
            <p className="font-mokoto text-4xl text-center mb-8 mt-16">
              Crafting Process
            </p>
            <p className="font-azeret text-xs">
              Every ARKHIVE NFT is maticulously crafted theough 2 visionary
              channels
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="bg-redark-purple/50 col-span-1 h-[350px] flex flex-col items-center justify-center">
          <div className="max-w-[70%]">
            <p className="font-mokoto text-3xl mb-10 text-start">Core Team</p>
            <p className="font-azeret text-sm">
              Designed by the ecosystem’s own creators, combining technology
              with artistic innovation.
            </p>
          </div>
        </div>
        <div className="bg-redark-purple/13 col-span-1 h-[350px] flex flex-col items-center justify-center">
          <div className="max-w-[70%]">
            <p className="font-mokoto text-3xl mb-10 text-start">
              Handpicked Collaborators
            </p>
            <p className="font-azeret text-sm">
              Crafter by selective artist – personally chosen fot their
              groundbreaking style and alignment with ARKHIVE vision.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[url('/assets/img/ark-space-banner-2.jpg')] bg-center bg-cover h-[390px]">
        <p className="text-4xl font-bold max-w-[350px] ml-28 pt-20 pb-10">
          Become an Affiliated Artist
        </p>
        <div className="grid grid-cols-12 gap-3 px-36">
          {MockData.affiliatedArtistBenefits.map((item, index) => (
            <div
              key={index}
              className="bg-[#4F2F99] border mt-10 border-white col-span-3 rounded-[20px] px-10 py-16 max-w-[400px]"
            >
              <p className="font-mokoto text-xl mb-6">{item.title}</p>
              <p className="font-azeret text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className=" h-[290px] flex flex-col items-center justify-end pb-8">
        <p className="font-azeret text-sm mb-5">
          To become an Affiliated Artist
        </p>
        <RedarkButton
          title="apply here"
          className="!bg-redark-purple !text-white !text-sm border border-white !hover:bg-white"
        />
      </div>
      <div className="bg-redark-purple/25 px-26 py-10">
        <MainBanner />
      </div>
    </div>
  );
}

export default ArkhiveNFTs;
