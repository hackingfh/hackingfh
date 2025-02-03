import React from "react";

import NavbarRight from "./navbarItems/NavbarRight";
import YNavbarLeft from "./navbarItems/YNavbarLeft";

const Navbar = () => {
  return (
    <div className="sticky top-0 shadow-lg z-50 flex items-center justify-between my-5 bg-transparent ">
      <YNavbarLeft />
      <NavbarRight />
    </div>
  );
};

export default Navbar;
