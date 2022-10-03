import React, { useState, useEffect } from "react";
import { saveAs } from "file-saver";
import {
  AiOutlineAlignRight,
  AiOutlineClose,
  AiFillPhone,
  AiFillHome,
  AiFillExperiment,
  AiOutlineCloudDownload,
} from "react-icons/ai";
import { FaInfo } from "react-icons/fa";
import { RiLinkedinFill, RiGithubFill, RiInstagramFill } from "react-icons/ri";
import Link from "next/link";
import styled from "styled-components";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [shadow, setShadow] = useState("");

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 60) {
        setColor("#ffffff");
        setShadow(
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
        );
      } else {
        setColor("transparent");
        setShadow("");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const saveFile = () => {
    saveAs("https://i.ibb.co/PrrVDXW/marko-tomic-cv.png", "marko-tomic-cv.png");
  };

  return (
    <NavBar
      style={{ backgroundColor: `${color}`, boxShadow: `${shadow}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300 flex justify-center p-4"
    >
      <div className="max-w-[1280px] w-full flex justify-between items-center">
        <div className="text-2xl text-[#333333] font-[600]">
          <span className="text-froggy-green">M</span>arko
          <span className="text-froggy-green">T</span>omic
          <span className="text-froggy-green">.</span>
        </div>

        <div className="MENU md:flex hidden gap-6 text-md text-[#333333] font-[500] items-center">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <div className="userAccBtns flex items-center gap-6 ">
            <button
              onClick={saveFile}
              rel="noreferrer"
              className="text-froggy-green flex items-center gap-1"
            >
              <AiOutlineCloudDownload /> CV
            </button>
            <a
              href="tel:+381642478696"
              rel="noreferrer"
              className="bg-froggy-green hover:bg-froggy-green-dark text-white px-8 py-1 rounded-full transition ease-in duration-150 flex items-center gap-1"
            >
              <AiFillPhone />
              Call Now
            </a>
          </div>
        </div>

        <div className="hamburger text-2xl text-[#333333] flex relative md:hidden">
          {nav ? (
            <AiOutlineClose onClick={() => handleNav()} />
          ) : (
            <AiOutlineAlignRight onClick={() => handleNav()} />
          )}
        </div>

        <div
          className={`mobileMenu z-10 md:hidden fixed top-0 ${
            nav ? "right-0" : "-right-[150%] bg-[#333333]"
          } w-[70vw] h-screen py-6 shadow-2xl bg-white flex flex-col list-none transition-all duration-[.3s] ease-linear`}
        >
          <li className="text-xl text-[#333333] w-full my-2 px-5">
            <AiOutlineClose onClick={() => handleNav()} />
          </li>
          <div className="mobileMenuBox flex flex-col mt-10 text-xl text-[#333333] font-[500]">
            <li
              onClick={handleNav}
              className="px-5 py-2 hover:text-gray-500 hover:bg-[#f5f5f5] w-full"
            >
              <Link onClick={handleNav} href="/">
                <div className="flex gap-3 items-center">
                  <AiFillHome className="mobileMenuIcon" />
                  Home
                </div>
              </Link>
            </li>
            <li
              onClick={handleNav}
              className="px-5 py-2 hover:text-gray-500 hover:bg-[#f5f5f5] w-full"
            >
              <Link href="/projects">
                <div className="flex gap-3 items-center">
                  <AiFillExperiment className="mobileMenuIcon" />
                  Projects
                </div>
              </Link>
            </li>

            <li
              onClick={handleNav}
              className="px-5 py-2 hover:text-gray-500 hover:bg-[#f5f5f5] w-full"
            >
              <Link href="/about">
                <div className="flex gap-3 items-center ">
                  <FaInfo className="mobileMenuIcon" />
                  About
                </div>
              </Link>
            </li>
          </div>
          <div className="SOCIALBTNS text-2xl text-[#fafafa] flex justify-start items-center gap-[20px] p-5">
            <a
              onClick={handleNav}
              href="https://www.linkedin.com/in/marko-tomic-web-developer/"
              target="_blank"
              rel="noreferrer"
              className="bg-[#333333] hover:text-froggy-green p-3 rounded-full transition ease-in duration-150"
            >
              <RiLinkedinFill />
            </a>
            <a
              onClick={handleNav}
              href="https://github.com/tomicmarko99"
              target="_blank"
              rel="noreferrer"
              className="bg-[#333333] hover:text-froggy-green p-3 rounded-full transition ease-in duration-150"
            >
              <RiGithubFill />
            </a>
            <a
              onClick={handleNav}
              href="https://www.instagram.com/markotomic.js/"
              target="_blank"
              rel="noreferrer"
              className="bg-[#333333] hover:text-froggy-green p-3 rounded-full transition ease-in duration-150"
            >
              <RiInstagramFill />
            </a>
          </div>
          <div className="userAccBtns text-sm flex flex-col items-center gap-4 border-t-2 border-b-2 p-5">
            <button
              onClick={saveFile}
              rel="noreferrer"
              className="text-froggy-green font-[500] px-8 py-2 w-full text-center rounded-full border-[2px] border-froggy-green"
            >
              Download CV
            </button>
            <a
              href="tel:+381642478696"
              rel="noreferrer"
              className="bg-froggy-green hover:bg-froggy-green-dark text-white px-8 py-2 w-full text-center rounded-full transition ease-in duration-150 flex gap-1 items-center justify-center"
            >
              <AiFillPhone />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </NavBar>
  );
};

export default Navbar;

const NavBar = styled.div`
  .mobileMenuBox {
    li:hover {
      cursor: pointer !important;
    }
  }

  .mobileMenuBox {
    li:hover {
      .mobileMenuIcon {
        color: #009688 !important;
      }
    }
  }
`;
