import React from "react";
import Link from "next/link";
import { RiLinkedinFill, RiGithubFill, RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="Footer w-full flex flex-col justify-center items-center bg-[#333333]">
      <div className="px-4">
        <div className="FooterBox max-w-[1280px] w-full py-[30px] ">
          <div className="FooterGrid grid grid-cols-1 md:grid-cols-2 gap-[50px] md:gap-[100px] w-full">
            <div className="BrandAbout flex flex-col">
              <h1 className="text-3xl text-froggy-green font-bold mb-[20px]">Marko Tomic</h1>
              <p className="text-[#e6e6e6]">
                IT Engineer & Frontend Developer with broad experience developing fast and powerfull websites.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-[50px]">
              <div className="Links">
                <h3 className="text-3xl text-froggy-green font-bold mb-[20px]">About Me</h3>
                <div className="flex flex-col text-[#e6e6e6] gap-[5px]">
                  <div>
                    <Link href="/">Home</Link>
                  </div>
                  <div>
                    <Link href="/projects">Projects</Link>
                  </div>
                  <div>
                    <Link href="/about">About</Link>
                  </div>
                </div>
              </div>
              <div className="Socials">
                <h3 className="text-3xl text-froggy-green font-bold mb-[20px]">Follow Me</h3>
                <div className="flex gap-[15px] text-[#e6e6e6]">
                  <a
                    href="https://www.linkedin.com/in/marko-tomic-web-developer/"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#222222] hover:text-froggy-green p-3 rounded-full transition ease-in duration-150"
                  >
                    <RiLinkedinFill />
                  </a>
                  <a
                    href="https://github.com/tomicmarko99"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#222222] hover:text-froggy-green p-3 rounded-full transition ease-in duration-150"
                  >
                    <RiGithubFill />
                  </a>
                  <a
                    href="https://www.instagram.com/markotomic.js/"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#222222] hover:text-froggy-green p-3 rounded-full transition ease-in duration-150"
                  >
                    <RiInstagramFill />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="FooterLine text-froggy-green flex justify-center bg-[#222222] w-full py-[20px]">
        Copyright © 2023 Marko Tomic. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
