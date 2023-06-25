import React, { useState } from "react";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { Link, animateScroll as scroll } from 'react-scroll';

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Accueil",
    page: "home",
  },
  {
    label: "A propos",
    page: "about",
  },
  {
    label: "Expériences",
    page: "pro",
  },
  {
    label: "Alternance",
    page: "alternance",
  },
  {
    label: "Projets",
    page: "school",
  },
  {
    label: "Contact",
    page: "contact",
  },
];

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
    setNavbar(false);
  };

  return (
    <header className={`w-full mx-auto px-4 bg-gradient-to-r from-gray-900  to-purple-900 text-white shadow fixed top-0 z-50 
         ${currentTheme === "dark" ? "dark:bg-stone-900 dark:border-b-stone-600 " : "" }`}>
      <div className="justify-between md:items-center md:flex">
        <div className="flex items-center justify-between py-3">
          <div className="md:py-5 md:block">
            <h2 className="text-2xl font-bold">William Penet</h2>
          </div>
          <div className="md:hidden">
            <button onClick={() => setNavbar(!navbar)}>
              {navbar ? <IoMdClose size={30}/> : <IoMdMenu size={30}/>}
            </button>
          </div>
        </div>
        <div>
          <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            navbar ? "block" : "hidden"
          }`}>
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 hover:cursor-pointer text-sm sm:text-lg">
              {NAV_ITEMS.map((item, index) => (
                <Link
                  key={index}
                  to={item.page}
                  smooth={true}
                  duration={500}
                  className="block lg:inline-block hover:text-neutral-500"
                  onClick={() => setNavbar(false)}
                >
                  {item.label}
                </Link>
              ))}
              {currentTheme === "dark" ? (
                <button onClick={() => setTheme("light")} className="bg-purple-600 p-2 rounded-xl">
                  <RiSunLine size={25} color="white" />
                </button>
              ) : (
                <button onClick={() => setTheme("dark")} className="bg-purple-600 p-2 rounded-xl">
                  <RiMoonFill />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;