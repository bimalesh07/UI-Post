import React from 'react'
import { FcSearch } from "react-icons/fc";
import { IoFilter } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
      <>
        <div className="nav-bar">
          <div className="logo">WDM</div>
          <div className="search">
            <div className="left">
              <FcSearch />
              search here
            </div>
            <div className="right">
              <IoFilter />
              Fillters
            </div>
          </div>
          <div className="seller">Become a Seller </div>
        </div>
      </>
    </div>
  );
}

export default Navbar
