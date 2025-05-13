import CountdownTimer from "@/components/CountdownTimer";
import RedarkButton from "@/components/RedarkButton";
import React from "react";
import MockData from "@/utils/mockData";
import Image from "next/image";

function TheHive() {
  return (
    <div className="bg-redark-navy">
      {/* COUNTDOWN BANNER */}
      <div className="bg-[url('/assets/img/hive-banner.jpg')] bg-cover bg-center">
        <h1>arkhive // the hive</h1>
        <p>Ever-evolving command center for the ARK Protocol</p>
        <RedarkButton title="Enter" />
        <CountdownTimer />
        <h2>countdown to the next ark event</h2>
      </div>

      {/* top orbiters */}
      <div>
        <p>top orbiters</p>
        <div className="w-full max-w-3xl mx-auto mt-10 bg-[#1A103D] rounded-2xl border border-white/30">
          <table className="w-full text-left text-white text-sm md:text-base">
            <thead className="uppercase text-gray-400 border-b border-white/20">
              <tr>
                <th className="px-4 py-4 font-medium">Name</th>
                <th className="px-4 py-4 font-medium">Points</th>
                <th className="px-4 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {MockData.orbiters.map((orbiter) => (
                <tr
                  key={orbiter.id}
                  className="border-b border-white/10 last:border-0"
                >
                  <td className="px-4 py-4 flex items-center gap-2">
                    <span className="text-purple-400 font-semibold">
                      {orbiter.id}
                    </span>
                    {orbiter.name}
                  </td>
                  <td className="px-4 py-4">{orbiter.points}</td>
                  <td className="px-4 py-4 font-bold">{orbiter.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="w-full flex justify-center py-5">
            <button className="bg-white text-purple-700 font-bold py-2 px-6 rounded-full shadow hover:bg-gray-200 transition">
              ENTER
            </button>
          </div>
        </div>
      </div>
      {/* REWARDS */}
      <div className="bg-[#543199]/25">
        <p>Rewards</p>
        <section className="bg-[#0e0826] text-white px-4 py-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MockData.rewards.map((reward, index) => (
              <div
                key={index}
                className="bg-[#1b1240] border border-purple-500 rounded-xl p-6 relative"
              >
                <div className="absolute -top-6 left-6 bg-[#1b1240] p-2 rounded-full border border-purple-500">
                  <Image src={reward.icon} alt="" width={40} height={40} />
                </div>
                <h3 className="text-xl font-bold mt-6">{reward.title}</h3>
                <p className="text-sm text-purple-300 mb-2">
                  {reward.subtitle}
                </p>
                <p className="text-sm text-gray-300 mb-4">
                  {reward.description}
                </p>
                <ul className="text-sm mb-4">
                  {reward.stats.map((stat, i) => (
                    <li key={i} className="flex justify-between">
                      <span>{stat.label}</span>
                      <span className="text-purple-400">{stat.value}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="text-sm text-purple-400 underline block mb-4"
                >
                  {reward.link}
                </a>
                <button className="w-full bg-purple-600 text-white font-semibold py-2 rounded-xl hover:bg-purple-700 transition">
                  WITHDRAW & CLAIM
                </button>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-[#1a0d44] text-white px-4 py-12">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row border border-purple-500 rounded-xl overflow-hidden relative">
            {/* Icon */}
            <div className="absolute -top-6 left-6 bg-[#1a0d44] p-2 rounded-full border border-purple-500">
              <Image
                src="/assets/icons/nft.svg"
                alt="NFT Icon"
                width={40}
                height={40}
              />
            </div>

            {/* Left Content */}
            <div className="flex-1 p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">
                  NFT LEADERBOARD (NFTM SYSTEM)
                </h3>
                <a href="#" className="text-sm text-purple-400 underline">
                  Learn More
                </a>
              </div>

              <p className="text-sm text-gray-300 mb-4">
                <span className="inline-block mr-2 text-purple-400">✔</span>
                Compete for top positions in the Hive. Top traders unlock ARK
                rewards and exclusive ecosystem ranks.
              </p>

              <ul className="text-sm mb-6 space-y-1">
                <li className="flex justify-between">
                  <span>Your Rank:</span>
                  <span className="text-purple-400">UNRANKED</span>
                </li>
                <li className="flex justify-between">
                  <span>Current Pool Total:</span>
                  <span className="text-purple-400">$0.00</span>
                </li>
              </ul>

              <button className="w-full bg-purple-600 text-white font-semibold py-2 rounded-xl hover:bg-purple-700 transition">
                WITHDRAW & CLAIM
              </button>
            </div>

            {/* Right Panel - Rank Rewards */}
            <div className="bg-purple-700/20 lg:w-64 p-6 border-l border-purple-500">
              <h4 className="text-lg font-bold mb-4 text-purple-300">
                RANK REWARDS
              </h4>
              <ul className="text-sm space-y-2">
                <li className="flex justify-between">
                  <span>Top #1:</span>
                  <span className="text-white font-semibold">GENESIS</span>
                  <span className="text-purple-400">+2.0%</span>
                </li>
                <li className="flex justify-between">
                  <span>Top #2:</span>
                  <span className="text-white font-semibold">ASCEND</span>
                  <span className="text-purple-400">+1.0%</span>
                </li>
                <li className="flex justify-between">
                  <span>Top #3:</span>
                  <span className="text-white font-semibold">ASCEND</span>
                  <span className="text-purple-400">+0.5%</span>
                </li>
                <li className="flex justify-between">
                  <span>Top #4:</span>
                  <span className="text-white font-semibold">ASCEND</span>
                  <span className="text-purple-400">+0.5%</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      {/* Hive Updates & Insights */}
      <div>
        <p>Hive Updates & Insights</p>
        <section className="bg-[#0f0a2c] text-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {MockData.updates.map((update, idx) => (
                <div
                  key={idx}
                  className="border border-purple-400 rounded-xl p-6 text-sm flex flex-col justify-between h-full"
                >
                  <div>
                    <h3 className="text-lg font-bold uppercase">
                      {update.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1 mb-4">
                      {update.date}
                    </p>
                    <p className="text-gray-300">{update.description}</p>
                  </div>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="text-purple-400 hover:underline text-sm"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <button className="bg-white text-purple-600 text-sm font-semibold px-6 py-2 rounded-full hover:bg-purple-100 transition">
                VIEW ALL UPDATES
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default TheHive;
