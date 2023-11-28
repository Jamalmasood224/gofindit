import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//images

import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";

//components
import Wrapper from "../Wrapper";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [show, setShow] = useState("translate-y-0");
  const [lastYScroll, setLastYScroll] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const controlNav = () => {
    if (window.scrollY > 200 && window.innerWidth >= 768) {
      if (window.scrollY > lastYScroll) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else setShow("translate-y-0");

    setLastYScroll(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNav);

    return () => {
      window.removeEventListener("scroll", controlNav);
    };
  }, [lastYScroll, controlNav]);

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center 
            justify-between z-20 sticky top-0 transition-transform duration-300 ${show} `}
    >
      <Wrapper className="flex justify-between items-center">
        <Link to={"/"}>
          <h1 class="text-5xl p-4 text-center font-bold from-amber-500 to-pink-500 bg-gradient-to-r bg-clip-text text-transparent drop-shadow-xl">
            GOFINDIT
          </h1>
        </Link>
        <Menu />

        {mobileMenu && <MobileMenu setMobileMenu={setMobileMenu} />}

        <div className="flex items-center gap-2 text-black  ">
          <button
            type="button"
            class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 "
          >
            {" "}
            New Listing
          </button>
          <button class="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Sign In
            </span>
          </button>
          <div
            className="md:hidden h-8 w-8 md:h-12 md:w-12 rounded-full flex  justify-center items-center relative
                 hover:bg-black/[0.04] cursor-pointer"
          >
            {mobileMenu ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[20px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
