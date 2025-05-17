import Link from "next/link";
import { ReactElement } from "react";
import RedarkButton from "@/components/RedarkButton/index";
import { usePathname } from "next/navigation";
import clsx from "clsx";


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

  const pathname = usePathname();

  const renderNavSection = (items: NavItem[]) =>
    items.map(({ title, icon, href }, index) => {

      if (href === '/user-account') { href = '/user-account/personal-details' };
      const isActive = pathname === href;

      return (
        <Link
          key={index}
          href={href}
          className={clsx(
            "relative lg:pl-10 mx-auto lg:mx-0 group flex items-center gap-3 py-2 rounded-md text-white hover:text-redark-purple transition-all",
            isActive && "text-redark-purple font-semibold"
          )}
        >
          {/* Left active/hover bar */}
          <span className="lg:absolute hidden lg:flex left-0 h-full items-center">
            <span
              className={clsx(
                "w-6 h-8 bg-redark-purple rounded-r-[10px] transition-transform origin-left",
                isActive ? "scale-100" : "scale-0 group-hover:scale-100"
              )}
            />
          </span>
          {/* Icon */}
          <span
            className={clsx(
              "text-xl transition-colors",
              isActive ? "!fill-redark-purple" : "!group-hover:fill-redark-purple fill-white"
            )}
          >
            {icon}
          </span>
          {/* Title */}
          <span className={clsx(
            "transition-colors hidden lg:flex",
            isActive ? "text-redark-purple" : "group-hover:text-redark-purple"
          )}>{title}</span>
        </Link>
      );
    });

  return (
    <div className={className}>
      {/* <!-- Component Start --> */}
      <div className="flex flex-col items-center w-full h-full py-8 overflow-hidden text-white lg:bg-[#1F144F] bg-[#4B309F] rounded">
        <Link
          className="flex items-center justify-center gap-4 w-full md:px-3 mt-3 lg:mb-16"
          href="/">
          <div className="relative lg:w-[42px] lg:h-[42px] w-[33px] h-[33px] flex items-center justify-center">
            <div className="absolute inset-0 lg:bg-redark-purple bg-white rounded-full" />
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
          <p className="ml-2 text-sm font-mokoto hidden lg:block">ARKHIVE</p>
        </Link>
        {button ? <RedarkButton title="CREATE NFT" href="/ark-tools/nft-mint-tool" className="!mx-3 xl:px-4 2xl:px-7 hidden lg:block" /> : null}
        <div className="w-full lg:pt-12 pt-5 mb-5 flex flex-col h-[-webkit-fill-available]">
          <div className="flex flex-col items-baseline w-full mt-3 gap-4 grow ">
            <p className="text-white text-[14px] lg:pl-10 hidden lg:flex">
              {dividerTitles[0] || ""}
            </p>
            {renderNavSection(navItems[0])}
            <p className="text-white text-[14px] lg:pl-10 hidden lg:flex">
              {dividerTitles[1] || ''}
            </p>
            {dividerTitles[1] ? renderNavSection(navItems[1]) : null}
          </div>
          <p className="max-w-[155px] ml-12 mr-3 mt-18 font-azeret text-[14px] text-gray-400 hidden lg:block">
            © 2025 RedArk Made By Dapponics
          </p>
          <div className="inline lg:hidden w-fit mx-auto">
            <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.906425 10.9091L0 10.0027L0.906425 9.09624L9.09624 0.906425L10.0027 0L11.8102 1.80752L10.9038 2.71394L4.90003 8.72301H22.5433H23.823V11.2823H22.5433H4.90003L10.9091 17.2861L11.8155 18.1925L10.008 20L9.10157 19.0936L0.906425 10.9091Z" fill="white" />
            </svg>
          </div>
        </div>
      </div>
      {/* <!-- Component End  --> */}
    </div>
  );
}
