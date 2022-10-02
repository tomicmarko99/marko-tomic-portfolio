import Image from "next/image";
import React from "react";
import RapidApi from "../public/rapid-api.png";
import Github from "../public/github.png";
import Vercel from "../public/vercel.png";
import Binance from "../public/binance.png";

const Partners = () => {
  return (
    <div className="w-full bg-[#e6e6e6] flex justify-center align-items items-center px-4 py-3">
      <div className="max-w-[1280px] w-full grid grid-cols-2 md:grid-cols-4 gap-[20px] md:gap-[120px]">
        <div className="flex">
          <Image
            objectFit="contain"
            alt="Marko Tomic Frontend Developer"
            src={RapidApi}
          ></Image>
        </div>
        <div className="flex">
          <Image
            objectFit="contain"
            alt="Marko Tomic Frontend Developer"
            src={Github}
          ></Image>
        </div>
        <div className="flex">
          <Image
            objectFit="contain"
            alt="Marko Tomic Frontend Developer"
            src={Vercel}
          ></Image>
        </div>
        <div className="flex">
          <Image
            objectFit="contain"
            alt="Marko Tomic Frontend Developer"
            src={Binance}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Partners;
