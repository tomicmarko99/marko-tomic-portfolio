import Image from "next/image";
import React from "react";
import ProfilePicture from "../public/profile-picture.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Slide } from "react-reveal";

const AboutBox = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/V9863Yy/hero-background.png')] bg-center bg-no-repeat bg-cover w-full flex flex-col justify-center items-center px-4 py-[100px]">
      <h1 className="text-3xl font-bold text-[#333333]">About Me</h1>
      <h2 className="text-sm font-[500] text-[#666666] mt-[10px]">
        Find out more about me and my skills
      </h2>
      <div className="flex items-center bg-froggy-green max-w-[200px] p-2 rounded-full my-[30px]">
        <Image
          objectFit="contain"
          alt="Marko Tomic"
          src={ProfilePicture}
        ></Image>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-2xl text-[#333333] font-[500]">Marko Tomic</h3>
        <h4 className="text-[#666666] font-[500]">
          IT Engineer & Frontend Developer
        </h4>
        <h5 className="text-md text-[#333333] flex justify-center items-center gap-1 mt-2">
          <FaMapMarkerAlt /> Cacak, central Serbia
        </h5>
      </div>
      <div className="max-w-[1280px] w-full grid grid-cols-1 md:grid-cols-2 gap-[80px] mt-[50px]">
        <div className="flex flex-col justify-center gap-5">
          <h2 className="text-xl text-[#333333] font-[500]">Summary</h2>
          <p>
            I am an IT engineer with rich experience developing intuitive and
            powerfull web applications. I&apos;ve been a React.js developer for
            the past four years, and I&apos;ve completed over 130 profitable
            projects. I have a broad knowledge of software engineering and
            e-business. My experiences include cutting-edge technologies such as
            React.js, Next.js, Tailwind.css, Bootstrap, MUI, Styled components,
            MongoDB, Node.js, and many more.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-5">
          <h2 className="text-xl text-[#333333] font-[500]">Skills</h2>
          <Slide bottom duration={2000}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="CARD bg-[#ffffff] shadow-md rounded w-full px-5 py-2">
                <p className="text-md font-[500] text-[#333333] mb-1">HTML</p>
                <div className="w-full bg-[#80e0d7] rounded-full">
                  <div className="bg-froggy-green w-[85%] h-[10px] rounded-full"></div>
                </div>
              </div>
              <div className="CARD bg-[#ffffff] shadow-md rounded w-full px-5 py-2">
                <p className="text-md font-[500] text-[#333333] mb-1">CSS</p>
                <div className="w-full bg-[#80e0d7] rounded-full">
                  <div className="bg-froggy-green w-[90%] h-[10px] rounded-full"></div>
                </div>
              </div>
              <div className="CARD bg-[#ffffff] shadow-md rounded w-full px-5 py-2">
                <p className="text-md font-[500] text-[#333333] mb-1">
                  JavaScript
                </p>
                <div className="w-full bg-[#80e0d7] rounded-full">
                  <div className="bg-froggy-green w-[85%] h-[10px] rounded-full"></div>
                </div>
              </div>
              <div className="CARD bg-[#ffffff] shadow-md rounded w-full px-5 py-2">
                <p className="text-md font-[500] text-[#333333] mb-1">
                  React.js
                </p>
                <div className="w-full bg-[#80e0d7] rounded-full">
                  <div className="bg-froggy-green w-[82%] h-[10px] rounded-full"></div>
                </div>
              </div>
              <div className="CARD bg-[#ffffff] shadow-md rounded w-full px-5 py-2">
                <p className="text-md font-[500] text-[#333333] mb-1">
                  Next.js
                </p>
                <div className="w-full bg-[#80e0d7] rounded-full">
                  <div className="bg-froggy-green w-[78%] h-[10px] rounded-full"></div>
                </div>
              </div>
              <div className="CARD bg-[#ffffff] shadow-md rounded w-full px-5 py-2">
                <p className="text-md font-[500] text-[#333333] mb-1">
                  Tailwind css
                </p>
                <div className="w-full bg-[#80e0d7] rounded-full">
                  <div className="bg-froggy-green w-[97%] h-[10px] rounded-full"></div>
                </div>
              </div>
              <div className="CARD bg-[#ffffff] shadow-md rounded w-full px-5 py-2">
                <p className="text-md font-[500] text-[#333333] mb-1">jQuery</p>
                <div className="w-full bg-[#80e0d7] rounded-full">
                  <div className="bg-froggy-green w-[82%] h-[10px] rounded-full"></div>
                </div>
              </div>
              <div className="CARD bg-[#ffffff] shadow-md rounded w-full px-5 py-2">
                <p className="text-md font-[500] text-[#333333] mb-1">SEO</p>
                <div className="w-full bg-[#80e0d7] rounded-full">
                  <div className="bg-froggy-green w-[87%] h-[10px] rounded-full"></div>
                </div>
              </div>
              <div className="CARD bg-[#ffffff] shadow-md rounded w-full px-5 py-2">
                <p className="text-md font-[500] text-[#333333] mb-1">
                  Node.js
                </p>
                <div className="w-full bg-[#80e0d7] rounded-full">
                  <div className="bg-froggy-green w-[52%] h-[10px] rounded-full"></div>
                </div>
              </div>
              <div className="CARD bg-[#ffffff] shadow-md rounded w-full px-5 py-2">
                <p className="text-md font-[500] text-[#333333] mb-1">
                  Express.js
                </p>
                <div className="w-full bg-[#80e0d7] rounded-full">
                  <div className="bg-froggy-green w-[50%] h-[10px] rounded-full"></div>
                </div>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
