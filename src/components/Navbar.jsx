import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex 
    items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div
        className="w-full flex justify-between 
      items-center max-w-7xl mx-auto"
      >
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setToggle(false);
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* <img
            src={logo}
            alt="logo"
            className="w-9
          h-9 object-contains"
          /> */}
          <p
            className="text-white text-[18px]
          font-bold cursor-pointer flex"
          >
            Piyush Agrawal &nbsp;
            {/* <span className="sm:block hidden">| SE-1 @TCS</span> */}
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          <li
            key="resume-download"
            className={`text-secondary hover:text-white text[-18px] font-medium cursor-pointer`}
          >
            <a
              download
              href={`https://drive.google.com/file/d/1Ap4fzaT-8VYXNgmY40-8xVxfwNTCzULf/view?usp=sharing`}
              target="_blank"
            >
              Resume
            </a>
          </li>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text[-18px] font-medium cursor-pointer`}
            >
              <a href={`#${link.id}`} onClick={() => setActive(link.title)}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-conatin cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient 
          absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              <li
                key="resume-download"
                className={`text-secondary hover:text-white text[-18px] font-medium cursor-pointer`}
              >
                <a
                  download
                  href={`https://drive.google.com/file/d/1Ap4fzaT-8VYXNgmY40-8xVxfwNTCzULf/view`}
                  target="_blank"
                >
                  Resume
                </a>
              </li>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-popines font-medium cursor-pointer text-[16px]`}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
