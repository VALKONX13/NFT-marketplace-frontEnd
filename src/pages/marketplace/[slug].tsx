import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  LineChart,
  Line,
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FaHeart, FaChartLine } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import RedarkButton from "@/components/RedarkButton";

const priceHistory = [
  { name: "Jan", value: 60, bar: 60 },
  { name: "Feb", value: 180, bar: 200 },
  { name: "Mar", value: 100, bar: 100 },
  { name: "Apr", value: 150, bar: 180 },
  { name: "May", value: 70, bar: 70 },
  { name: "Jun", value: 90, bar: 110 },
  { name: "Jul", value: 40, bar: 50 },
];

export default function NFTDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  // Separate title and artist
  const [title, artist] = ((slug as string) || "").split("_");
  const [favorites, setFavorites] = useState(10);

  return (
    <div className="bg-redark-navy grid grid-cols-12 gap-8">
      <Sidebar className="col-start-1 col-end-3" />
      <div className="col-span-10 grid grid-cols-8 gap-5  px-8 py-16">
        <div className="col-span-4 relative aspect-[4/5]">
          <div className="z-10 absolute top-[5%] left-[6%] bg-redark-purple p-6 rounded-full border-2 border-white w-[80px] h-[80px] flex items-center">
            <svg
              width="31"
              height="36"
              viewBox="0 0 31 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.9802 29.3344C17.8524 29.0039 16.6901 28.568 15.5 28.0406C14.3169 28.568 13.1475 28.9969 12.0198 29.3344C13.2928 32.0273 14.6075 32.625 15.5 32.625C16.3925 32.625 17.7072 32.0273 18.9802 29.3344ZM18.06 22.9008C19.084 22.275 20.0458 21.6281 20.9245 20.9602C20.9937 20.0109 21.0352 19.0195 21.0352 18C21.0352 16.9805 21.0006 15.9891 20.9245 15.0398C20.0388 14.3789 19.084 13.725 18.06 13.0992C17.1951 12.5719 16.3372 12.1008 15.5 11.6789C14.6628 12.1008 13.8049 12.5719 12.94 13.0992C11.916 13.725 10.9542 14.3719 10.0755 15.0398C10.0063 15.9891 9.96482 16.9805 9.96482 18C9.96482 19.0195 9.99942 20.0109 10.0755 20.9602C10.9612 21.6211 11.916 22.275 12.94 22.9008C13.8049 23.4281 14.6628 23.8992 15.5 24.3211C16.3372 23.8992 17.1951 23.4281 18.06 22.9008ZM26.3974 20.6367C25.6916 21.3539 24.9236 22.057 24.0864 22.7391C23.9204 24.1523 23.6851 25.4953 23.3738 26.7469C25.9476 26.9016 26.9647 26.107 27.373 25.3617C27.8227 24.5391 27.9403 23.0555 26.3974 20.6367ZM30.2789 9C31.7112 11.6086 30.9293 14.8219 28.646 18C30.9293 21.1781 31.7112 24.3914 30.2789 27C28.8813 29.5523 25.9546 30.4664 22.3083 30.0375C20.7861 33.7008 18.4613 36 15.5 36C12.5387 36 10.2139 33.7008 8.69173 30.0375C5.04543 30.4664 2.11871 29.5594 0.721073 27C-0.711154 24.3914 0.0706897 21.1781 2.35395 18C0.0706897 14.8219 -0.711154 11.6086 0.721073 9C2.11871 6.44766 5.04543 5.53359 8.69173 5.9625C10.2139 2.29922 12.5387 0 15.5 0C18.4613 0 20.7861 2.29922 22.3083 5.9625C25.9546 5.53359 28.8813 6.44062 30.2789 9ZM3.62704 25.3617C4.03526 26.107 5.05235 26.9086 7.62621 26.7469C7.31486 25.4953 7.07961 24.1523 6.91355 22.7391C6.08328 22.057 5.30835 21.3469 4.60262 20.6367C3.05969 23.0484 3.17039 24.5391 3.62704 25.3617ZM4.60262 15.3633C5.30835 14.6461 6.07636 13.943 6.91355 13.2609C7.07961 11.8477 7.31486 10.5047 7.62621 9.25313C5.05235 9.09141 4.03526 9.89297 3.62704 10.6383C3.17731 11.4609 3.05969 12.9445 4.60262 15.3633ZM15.5 7.95937C16.6831 7.43203 17.8524 7.00313 18.9802 6.66563C17.7072 3.97266 16.3925 3.375 15.5 3.375C14.6075 3.375 13.2928 3.97266 12.0198 6.66563C13.1475 6.99609 14.3099 7.43203 15.5 7.95937ZM24.0934 13.2609C24.9236 13.943 25.6986 14.6531 26.4043 15.3633C27.9472 12.9516 27.8296 11.4609 27.3799 10.6383C26.9717 9.89297 25.9546 9.09141 23.3807 9.25313C23.6921 10.5047 23.9273 11.8477 24.0934 13.2609ZM15.5 15.75C16.0872 15.75 16.6504 15.9871 17.0656 16.409C17.4808 16.831 17.7141 17.4033 17.7141 18C17.7141 18.5967 17.4808 19.169 17.0656 19.591C16.6504 20.0129 16.0872 20.25 15.5 20.25C14.9128 20.25 14.3496 20.0129 13.9344 19.591C13.5192 19.169 13.2859 18.5967 13.2859 18C13.2859 17.4033 13.5192 16.831 13.9344 16.409C14.3496 15.9871 14.9128 15.75 15.5 15.75Z"
                fill="white"
              />
            </svg>
          </div>
          <Image
            src="/assets/img/NFT-art.png"
            alt="NFT ARTWORK"
            fill
            className="object-cover rounded-xl !h-auto"
          />
        </div>
        <div className="text-white col-span-4 font-azeret pb-8 pr-8 space-y-6">
          {/* Header */}
          <div className="text-center space-y-1">
            <a href="#" className="text-sm text-[#84A1FF]">
              @JACKODREEYCollection05
            </a>
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-sm text-gray-400">
              Owned by <span className="text-white">{artist}</span>
            </p>
            <div className="flex justify-center gap-3 text-xs mt-2">
              <div className="flex items-center gap-1 bg-redark-purple/13 px-3 py-1 rounded-full">
                <AiFillEye /> <span>200 Views</span>
              </div>
              <div className="flex items-center gap-1 bg-redark-purple/13 px-3 py-1 rounded-full">
                <BsGraphUp /> <span>Trending #3</span>
              </div>
              <div className="flex items-center gap-1 bg-redark-purple/13 px-3 py-1 rounded-full">
                <FaHeart /> <span>{favorites} Favorites</span>
              </div>
            </div>
          </div>

          {/* Price Card */}
          <div className="bg-redark-purple/13 p-4 rounded-xl space-y-2">
            <p className="text-xs text-gray-400">
              Sale Ends 2025 May 22 07:30 AM EST
            </p>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs text-gray-400">Current Price</p>
                <p className="text-xl font-bold">32.027 SOL</p>
                <p className="text-xs text-gray-500">$841.07</p>
              </div>
              <RedarkButton title="PLACE BID" />
            </div>
          </div>

          {/* Description */}
          <div className="bg-redark-purple/13 p-4 rounded-xl">
            <h2 className="text-lg font-semibold mb-2 font-mokoto">
              DESCRIPTION
            </h2>
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              tempor lobortis purus, non tempus neque. Nulla molestie, neque
              venenatis iaculis sagittis, lacus mi finibus lacus, id fringilla
              leo justo scelerisque lorem.
            </p>
          </div>

          {/* Price History */}
          <div className="bg-[#474747]/13 p-4 rounded-xl">
            <h2 className="text-lg font-semibold mb-4">Price History</h2>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={priceHistory}>
                <CartesianGrid strokeDasharray="3 3" stroke="#342359" />
                <XAxis dataKey="name" stroke="#aaa" />
                <YAxis stroke="#aaa" />
                <Tooltip />
                <Bar
                  dataKey="bar"
                  fill="#A48DF4"
                  radius={[4, 4, 0, 0]}
                  barSize={24}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#fff"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Details */}
          <div className="bg-[#474747]/13 p-4 rounded-xl">
            <h2 className="text-lg font-semibold mb-2">Details</h2>
            <div className="text-sm space-y-1 text-gray-300">
              <p>
                <span className="text-gray-500">Contract Address:</span>{" "}
                0x1987...c81f
              </p>
              <p>
                <span className="text-gray-500">Token ID:</span> 027068
              </p>
              <p>
                <span className="text-gray-500">Standard:</span> ERC-721
              </p>
              <p>
                <span className="text-gray-500">Chain:</span> SOLANA
              </p>
              <p>
                <span className="text-gray-500">Last Updated:</span> 8 months
                ago
              </p>
              <p>
                <span className="text-gray-500">Creator Earnings:</span> 8.04%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
