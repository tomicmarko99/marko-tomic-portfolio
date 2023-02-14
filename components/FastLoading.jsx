import Image from "next/image";
import React from "react";
import FastL from "../public/fast-loading.svg";
import { AiOutlineRight } from "react-icons/ai";
import { Slide } from "react-reveal";

const FastLoading = () => {
  return (
    <div className=" w-full bg-[#fafafa] flex flex-col justify-center items-center px-4 pb-[20px] pt-[100px]">
      <div className="max-w-[1280px] w-full grid grid-cols-1 md:grid-cols-2 gap-[50px] items-center">
        <div className="flex items-center">
          <Image objectFit="contain" alt="Marko Tomic" src={FastL}></Image>
        </div>
        <Slide bottom duration={300}>
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold text-[#333333]">
              Fast Loading Websites
            </h1>
            <h2 className="text-2xl text-froggy-green">
              server-side-rendering
            </h2>
            <p className="text-lg mt-[10px]">
              I develop server-side rendering websites with lightning-fast
              loading times. Server-side rendering refers to an application’s
              ability to display the web-page on the server rather than
              rendering it in the browser. A server-side rendered application
              enables pages to load faster, improving the user experience.
            </p>
            <div className="btnBox flex justify-start mt-[20px] cursor-pointer">
              <a
                href="https://web.dev/rendering-on-the-web/"
                target="_blank"
                rel="noreferrer"
                className="bg-froggy-green hover:bg-froggy-green-dark text-white px-8 py-1 rounded-full transition ease-in duration-150 flex items-center gap-1"
              >
                Read More <AiOutlineRight />
              </a>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default FastLoading;
