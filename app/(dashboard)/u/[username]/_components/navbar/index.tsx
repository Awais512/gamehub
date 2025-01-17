import React from "react";
import { Logo } from "./logo";
import { Actions } from "./actions";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-20 z-[49] bg-[#252731] px-2 lg:p-4 flex justify-between items-center shadow-sm">
      <Logo />
      <Actions />
    </nav>
  );
};

export default Navbar;
