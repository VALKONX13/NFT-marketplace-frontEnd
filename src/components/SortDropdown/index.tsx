import {
  Dropdown,
  DropdownItem,
  ThemeProvider,
} from "flowbite-react";
import { useState } from "react";


export default function Component() {
  const [SortMode, setSortMode] = useState("Recently Added");
  return (
    <ThemeProvider >
      <div className="flex items-center border-1 lg:py-2 py-1.5 md:gap-3 lg:px-6 px-2 lg:gap-3 !bg-transparent p-0 border-redark-purple rounded-[40px] w-fit">
        <svg
          width="17"
          height="14"
          viewBox="0 0 17 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 1.16667C0 0.521354 0.521354 0 1.16667 0H15.1667C15.812 0 16.3333 0.521354 16.3333 1.16667C16.3333 1.81198 15.812 2.33333 15.1667 2.33333H1.16667C0.521354 2.33333 0 1.81198 0 1.16667ZM0 7C0 6.35469 0.521354 5.83333 1.16667 5.83333H10.5C11.1453 5.83333 11.6667 6.35469 11.6667 7C11.6667 7.64531 11.1453 8.16667 10.5 8.16667H1.16667C0.521354 8.16667 0 7.64531 0 7ZM7 12.8333C7 13.4786 6.47865 14 5.83333 14H1.16667C0.521354 14 0 13.4786 0 12.8333C0 12.188 0.521354 11.6667 1.16667 11.6667H5.83333C6.47865 11.6667 7 12.188 7 12.8333Z"
            fill="white"
          />
        </svg>
        <Dropdown
          className="focus:ring-0 text-white"
          color="transparent"
          label={
            <span className="hidden md:inline text-sm">{`Sort by: ${SortMode}`}</span>
          }
          size="custom"
          dismissOnClick={false}
        >
          <DropdownItem
            onClick={() => setSortMode("Recently Added")}
          >
            Recently Added
          </DropdownItem>
          <DropdownItem onClick={() => setSortMode("Most Popular")}>
            Most Popular
          </DropdownItem>
          <DropdownItem onClick={() => setSortMode("Highest Rated")}>
            Highest Rated
          </DropdownItem>
          <DropdownItem onClick={() => setSortMode("Alphabetical")}>
            Alphabetical
          </DropdownItem>
        </Dropdown>
      </div>
    </ThemeProvider>
  );
}
