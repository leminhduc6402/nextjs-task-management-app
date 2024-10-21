import React from "react";
import { Search } from "lucide-react";

const Navbar = () => {
  return (
    <div className="dark: flex items-center justify-between bg-white px-4 py-3 dark:bg-black">
      {/* Search Bar */}
      <div className="flex items-center gap-6">
        <div className="relative flex h-min w-[200px]">
          <Search></Search>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
