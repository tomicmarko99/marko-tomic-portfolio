import Image from "next/image";
import React from "react";
import SeoF from "../public/seo-friendly.svg";
import { AiOutlineRight } from "react-icons/ai";
import { Slide } from "react-reveal";

const SeoFriendly = () => {
  return (
    <div className=" w-full bg-[#fafafa] flex flex-col justify-center items-center px-4 pt-[20px] pb-[100px]">
      <div className="max-w-[1280px] w-full grid grid-cols-1 md:grid-cols-2 gap-[50px] items-center">
        <Slide bottom duration={300}>
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold text-[#333333]">
              SEO Friendly Websites
            </h1>
            <h2 className="text-2xl text-froggy-green">
              search-engine-optimisation
            </h2>
            <p className="text-lg mt-[10px]">
              I develop SEO Friendly websites that are indexed at the very top
              of the search results. Well-optimized websites enable long-term
              organic growth for the company without the need for continuous
              investment like in advertising.
            </p>
            <div className="btnBox flex justify-start mt-[20px] cursor-pointer">
              <a
                href="https://searchengineland.com/guide/what-is-seo"
                target="_blank"
                rel="noreferrer"
                className="bg-froggy-green hover:bg-froggy-green-dark text-white px-8 py-1 rounded-full transition ease-in duration-150 flex items-center gap-1"
              >
                Read More <AiOutlineRight />
              </a>
            </div>
          </div>
        </Slide>
        <div className="flex items-center">
          <Image objectFit="contain" alt="Marko Tomic" src={SeoF}></Image>
        </div>
      </div>
    </div>
  );
};

export default SeoFriendly;
