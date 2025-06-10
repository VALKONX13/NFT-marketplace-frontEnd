'use client';

import Link from "next/link";
import { ReactElement, useEffect, useState } from "react";
import RedarkButton from "@/components/RedarkButton/index";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";

type NavItem = {
  title: string;
  href: string;
  icon: ReactElement;
};

type SidebarProps = {
  className?: string;
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
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false); 
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  
  useEffect(() => {
    const handleResize = () => {
      const large = window.innerWidth >= 1024;
      setIsLargeScreen(large);
      
      if (!large) {
        setCollapsed(true); // Force collapse on small screens
      }
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setCollapsed(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const toggleSidebar = () => {
    if (isLargeScreen) {
      setCollapsed(prev => !prev);
    }
  };

  const renderNavSection = (items: NavItem[]) =>
    items.map(({ title, icon, href }, index) => {
      const normalizedHref = href === '/user-account' ? '/user-account/personal-details' : href;
      const isActive = pathname === normalizedHref;

      return (
        <Link
          key={index}
          href={normalizedHref}
          className={clsx(
            "relative group flex items-center py-2 rounded-md text-white hover:text-redark-purple transition-all duration-300",
            collapsed ? "justify-center px-4" : isLargeScreen ? "pl-10 mx-0 gap-3" : ""
          )}
        >
          {!collapsed && (
            <span className="lg:absolute hidden lg:flex left-0 h-full items-center">
              <span
                className={clsx(
                  "w-6 h-8 bg-redark-purple rounded-r-[10px] transition-transform origin-left duration-300",
                  isActive ? "scale-100" : "scale-0 group-hover:scale-100"
                )}
              />
            </span>
          )}
          <span
            className={clsx(
              "text-xl transition-colors",
              isActive ? "!fill-redark-purple" : "!group-hover:fill-redark-purple fill-white"
            )}
          >
            {icon}
          </span>
          <span
            className={clsx(
              "hidden lg:inline-block transition-opacity duration-300",
              collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100 ml-2",
              isActive ? "text-redark-purple" : "group-hover:text-redark-purple"
            )}
          >
            {title}
          </span>
        </Link>
      );
    });

  return (
    <div
      className={clsx(
        className,
        "h-full transition-all duration-300",
        isLargeScreen ? (collapsed ? "lg:w-[80px]" : "w-[300px]") : "w-[50px] md:w-[60px]"
      )}
    >
      <div className="flex flex-col items-center w-full h-full lg:py-24 overflow-hidden text-white lg:bg-[#1F144F] bg-[#4B309F] rounded relative transition-all duration-300">
        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="absolute hidden lg:flex top-4 -right-4 z-50 w-[60px] bg-redark-purple text-white p-1 rounded-full shadow-md"
        >
          {collapsed ?
            <Image
              src="/assets/img/icons/icons8-expand-30.png"
              alt="Expand icon"
              width={30}
              height={30}
            />
            :
            <Image
              className="scale-x-[-1]"
              src="/assets/img/icons/icons8-expand-30.png"
              alt="Expand icon"
              width={30}
              height={30}
            />}
        </button>

        {/* <Link
          className="flex items-center justify-center gap-4 w-full md:px-3 mt-3 lg:mb-16"
          href="/"
        >
          <div className="relative lg:w-[42px] lg:h-[42px] w-[33px] h-[33px] flex items-center justify-center">
            <div className="absolute inset-0 lg:bg-redark-purple bg-white rounded-full transition-colors" />
            <svg
              className="z-10"
              width="21"
              height="24"
              viewBox="0 0 21 24"
              fill="lg:white #4B309F"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.13226 21.3933C2.69106 21.8111 1.30867 22.3684 0 23.0478L10.4895 0V0.246636L10.5 0L20.9878 23.0478C19.6791 22.3684 18.2967 21.8111 16.8555 21.3933L16.5317 21.0817L10.4992 7.93011L10.4886 7.77651V7.93011L4.45613 21.0817L4.13226 21.3933ZM15.4158 21.0264C13.8306 20.6771 12.184 20.4919 10.4936 20.4919C8.79871 20.4919 7.14862 20.678 5.55908 21.0291L7.48215 16.8362H13.4936L15.4158 21.0264Z"
                fill="lg:white #4B309F"
              />
            </svg>
          </div>
          <p className={clsx(
            "ml-2 text-sm font-mokoto hidden lg:block transition-opacity duration-300",
            collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
          )}>
            ARKHIVE
          </p>
        </Link> */}

        {button && !collapsed && (
          <RedarkButton
            title="CREATE NFT"
            href="/ark-tools/nft-mint-tool"
            className="!mx-3 xl:!px-4 2xl:!px-12 hidden lg:block transition-opacity duration-300"
          />
        )}

        <div className={`w-full lg:pt-12 ${!collapsed ? 'lg:pr-6' : ""} pt-5 mb-5 flex flex-col h-[-webkit-fill-available] transition-all duration-300`}>
          <div className={`flex flex-col ${!collapsed ? 'items-baseline' : "items-center"} w-full mt-3 gap-4 grow`}>
            {!collapsed && (
              <p className="text-white text-[16px] lg:pl-10 hidden lg:flex transition-opacity duration-300">
                {dividerTitles[0] || ""}
              </p>
            )}
            {renderNavSection(navItems[0])}
            {!collapsed && dividerTitles[1] && (
              <p className="text-white text-[16px] lg:pl-10 hidden lg:flex transition-opacity duration-300">
                {dividerTitles[1]}
              </p>
            )}
            {dividerTitles[1] && isLargeScreen && renderNavSection(navItems[1])}
          </div>

          {!collapsed && (
            <p className="max-w-[155px] ml-12 mr-3 mt-18 font-azeret text-[14px] text-gray-400 hidden lg:block transition-opacity duration-300">
              © 2025 RedArk Made By Dapponics
            </p>
          )}

          <div className="inline lg:hidden w-fit mx-auto">
            <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.906425 10.9091L0 10.0027L0.906425 9.09624L9.09624 0.906425L10.0027 0L11.8102 1.80752L10.9038 2.71394L4.90003 8.72301H22.5433H23.823V11.2823H22.5433H4.90003L10.9091 17.2861L11.8155 18.1925L10.008 20L9.10157 19.0936L0.906425 10.9091Z" fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
