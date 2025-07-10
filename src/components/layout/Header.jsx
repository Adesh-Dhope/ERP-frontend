import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <div className="pb-2">
      <div className="w-full p-4 bg-white shadow-md rounded-md">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Title */}
          <div className="text-lg md:text-3xl font-semibold text-black">
            Warehouse Management
          </div>

          {/* Search */}
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
