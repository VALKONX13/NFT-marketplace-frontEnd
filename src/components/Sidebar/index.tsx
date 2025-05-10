import Link from "next/link";
import { ReactElement } from "react";
import RedarkButton from "@/components/RedarkButton/index";

type NavItem = {
  title: string;
  href: string;
  icon: ReactElement;
};

type SidebarProps = {
  className: string;
  button: boolean;
  dividerTitles: string[];
  navItems: NavItem[][];
};

export default function Sidebar({
  className,
  button,
  dividerTitles,
  navItems,
}: SidebarProps) {
  return (
    <div className={className}>
      {/* <!-- Component Start --> */}
      {/* <div className="flex flex-col md:hidden items-center w-16 h-full overflow-hidden text-gray-700 bg-redark-purple rounded">
        <Link className="flex items-center justify-center mt-3" href="#">
          <svg
            className="w-8 h-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
          </svg>
        </Link>
        <div className="flex flex-col items-center mt-3 border-t border-gray-300">
          <Link
            className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-300"
            href="#"
          >
            <svg
              className="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </Link>
          <Link
            className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-300"
            href="#"
          >
            <svg
              className="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </Link>
          <Link
            className="flex items-center justify-center w-12 h-12 mt-2 bg-gray-300 rounded"
            href="#"
          >
            <svg
              className="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </Link>
          <Link
            className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-300"
            href="#"
          >
            <svg
              className="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
              />
            </svg>
          </Link>
        </div>
        <div className="flex flex-col items-center mt-2 border-t border-gray-300">
          <Link
            className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-300"
            href="#"
          >
            <svg
              className="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </Link>
          <Link
            className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-300"
            href="#"
          >
            <svg
              className="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </Link>
          <Link
            className="relative flex items-center justify-center w-12 h-12 mt-2 hover:bg-gray-300"
            href="#"
          >
            <svg
              className="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
            <span className="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span>
          </Link>
        </div>
        <Link
          className="flex items-center justify-center w-16 h-16 mt-auto bg-gray-200 hover:bg-gray-300"
          href="#"
        >
          <svg
            className="w-6 h-6 stroke-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </Link>
      </div> */}
      {/* <!-- Component End  --> */}

      {/* <!-- Component Start --> */}
      <div className="flex flex-col items-center w-full h-full py-8 overflow-hidden text-white bg-[#1F144F] rounded">
        <Link
          className="flex items-center justify-center gap-4 w-full px-3 mt-3 mb-16"
          href="/"
        >
          <div className="relative w-[42px] h-[42px] flex items-center justify-center">
            <div className="absolute inset-0 bg-redark-purple rounded-full" />
            <svg
              className="z-10"
              width="21"
              height="24"
              viewBox="0 0 21 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.13226 21.3933C2.69106 21.8111 1.30867 22.3684 0 23.0478L10.4895 0V0.246636L10.5 0L20.9878 23.0478C19.6791 22.3684 18.2967 21.8111 16.8555 21.3933L16.5317 21.0817L10.4992 7.93011L10.4886 7.77651V7.93011L4.45613 21.0817L4.13226 21.3933ZM15.4158 21.0264C13.8306 20.6771 12.184 20.4919 10.4936 20.4919C8.79871 20.4919 7.14862 20.678 5.55908 21.0291L7.48215 16.8362H13.4936L15.4158 21.0264Z"
                fill="white"
              />
            </svg>
          </div>
          <p className="ml-2 text-sm font-bold font-mokoto">ARKHIVE</p>
        </Link>
        {button ? <RedarkButton title="CREATE NFT" href="/create-nft" /> : null}
        <div className="w-full pt-12 mb-5 flex flex-col h-[-webkit-fill-available]">
          <div className="flex flex-col items-baseline w-full mt-3 gap-4 grow">
            <p className="text-white font-bold text-[14px] pl-10">
              {dividerTitles[0] || ""}
            </p>
            {navItems[0]?.map(({ title, icon, href }, index) => (
              <Link
                key={index}
                href={href}
                className="relative pl-10 group flex items-center gap-3 py-2 rounded-md text-white hover:text-redark-purple"
              >
                {/* Left hover bar */}
                <span className="absolute left-0 h-full flex items-center">
                  <span className="w-6 h-8 bg-redark-purple rounded-r-[10px] scale-0 group-hover:scale-100 transition-transform origin-left" />
                </span>
                {/* Icon with hover color */}
                <span className="text-xl transition-colors group-hover:text-redark-purple">
                  {icon}
                </span>
                {/* Title text */}
                <span className="text-sm font-medium">{title}</span>
              </Link>
            ))}
            <p className="text-white font-bold text-[14px] pl-10">
              {dividerTitles[1] || ""}
            </p>
            {navItems[1]?.map(({ title, icon, href }, index) => (
              <Link
                key={index}
                href={href}
                className="relative pl-10 group flex items-center gap-3 py-2 rounded-md text-white hover:text-redark-purple"
              >
                {/* Left hover bar */}
                <span className="absolute left-0 h-full flex items-center">
                  <span className="w-6 h-8 bg-redark-purple rounded-r-[10px] scale-0 group-hover:scale-100 transition-transform origin-left" />
                </span>
                {/* Icon with hover color */}
                <span className="text-xl transition-colors group-hover:text-redark-purple">
                  {icon}
                </span>
                {/* Title text */}
                <span className="text-sm font-medium">{title}</span>
              </Link>
            ))}
          </div>
          <p className="max-w-[155px] ml-12 mt-18 font-azeret text-[14px] text-gray-400">
            © 2025 RedArk Made By Dapponics
          </p>
        </div>
      </div>
      {/* <!-- Component End  --> */}
    </div>
  );
}
