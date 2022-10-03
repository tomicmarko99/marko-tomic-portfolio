import Image from "next/image";
import React from "react";
import { saveAs } from "file-saver";
import Avatar from "../public/avatarx.png";
import { FaTelegramPlane } from "react-icons/fa";
import { RiLinkedinFill, RiGithubFill, RiInstagramFill } from "react-icons/ri";
import Slide from "react-reveal/Slide";
import CountUp from "react-countup";
import Typed from "react-typed";

const Hero = () => {
  const saveFile = () => {
    saveAs(
      "http://download857.mediafire.com/d0d1upu6ddbg/8mlaqrb7fvioirm/markotomic.pdf",
      "markotomic-cv.pdf"
    );
  };
  return (
    <div className="HeroSection bg-[url('https://i.ibb.co/V9863Yy/hero-background.png')] bg-center bg-no-repeat bg-cover w-full flex flex-col justify-center items-center px-4 py-[100px]">
      <div className="max-w-[1280px] w-full grid grid-cols-1 md:grid-cols-2 gap-[30px] items-center">
        <div className="FIRST flex flex-col">
          <div className="TEXTBOX flex flex-col">
            <h1 className="text-6xl text-[#333333] font-bold h-[120px] md:h-auto">
              I&apos;m <Typed strings={["Marko Tomic,"]} typeSpeed={60} />
            </h1>
            <h2 className="text-4xl text-froggy-green font-[400] mt-[20px]">
              IT Engineer and Frontend Developer.
            </h2>
          </div>
          <div className="BTNBOX flex gap-[20px] mt-[20px] text-md font-[500] items-center">
            <a
              href="https://www.linkedin.com/in/marko-tomic-web-developer/"
              target="blank"
              rel="noreferrer"
              className="bg-froggy-green hover:bg-froggy-green-dark text-white px-8 py-1 rounded-full transition ease-in duration-150 flex items-center gap-1"
            >
              Contact Me <FaTelegramPlane />
            </a>
            <button
              onClick={saveFile}
              rel="noreferrer"
              className="text-sm text-[#333333] underline font-[500]"
            >
              Download CV
            </button>
          </div>
          <div className="SOCIALBTNS text-2xl text-[#fafafa] flex items-center gap-[20px] mt-[40px] ">
            <a
              href="https://www.linkedin.com/in/marko-tomic-web-developer/"
              target="_blank"
              rel="noreferrer"
              className="bg-[#333333] hover:text-froggy-green p-3 rounded-full transition ease-in duration-150"
            >
              <RiLinkedinFill />
            </a>
            <a
              href="https://github.com/tomicmarko99"
              target="_blank"
              rel="noreferrer"
              className="bg-[#333333] hover:text-froggy-green p-3 rounded-full transition ease-in duration-150"
            >
              <RiGithubFill />
            </a>
            <a
              href="https://www.instagram.com/markotomic.js/"
              target="_blank"
              rel="noreferrer"
              className="bg-[#333333] hover:text-froggy-green p-3 rounded-full transition ease-in duration-150"
            >
              <RiInstagramFill />
            </a>
          </div>
        </div>
        <div className="SECOND flex items-center">
          <Image objectFit="contain" alt="Marko Tomic" src={Avatar}></Image>
        </div>
      </div>
      <div className="StatsGrid max-w-[1280px] w-full grid grid-cols-1 md:grid-cols-4 gap-[20px]  mt-[30px] items-between text-[#333333]">
        <Slide bottom duration={1000}>
          <div className="flex flex-col shadow-md p-3 rounded">
            <h3 className="text-4xl font-bold">
              <span className="text-[#009688]">
                <CountUp start={0} end={100} duration={1} delay={1} />
              </span>
              +
            </h3>
            <p className="font-medium">
              Projects successfully completed and deployed
            </p>
          </div>
        </Slide>
        <Slide bottom duration={1200}>
          <div className="flex flex-col shadow-md p-3 rounded">
            <h3 className="text-4xl font-bold">
              <span className="text-[#009688]">
                <CountUp start={0} end={50} duration={1} delay={1} />
              </span>
              +
            </h3>
            <p className="font-medium">Satisfied customers worldwide</p>
          </div>
        </Slide>
        <Slide bottom duration={1400}>
          <div className="flex flex-col shadow-md p-3 rounded">
            <h3 className="text-4xl font-bold">
              <span className="text-[#009688]">
                <CountUp start={0} end={3} duration={1} delay={1} />
              </span>
              +
            </h3>
            <p className="font-medium">
              Years of experience creating successful projects
            </p>
          </div>
        </Slide>
        <Slide bottom duration={1600}>
          <div className="flex flex-col shadow-md p-3 rounded">
            <h3 className="text-4xl font-bold">
              <span className="text-[#009688]">
                <CountUp start={0} end={4} duration={1} delay={1} />
              </span>
            </h3>
            <p className="font-medium">
              Successfully launched projects last mounth
            </p>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Hero;
