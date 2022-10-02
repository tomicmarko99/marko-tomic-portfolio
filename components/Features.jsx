import React from "react";
import Image from "next/image";
import Frontend from "../public/frontend-icon.png";
import Server from "../public/server-side.png";
import Seo from "../public/seo-icon.png";
import Deployment from "../public/deployment-icon.png";
import { Slide } from "react-reveal";

const Features = () => {
  return (
    <div className="FeaturesSection bg-[#fafafa] w-full flex justify-center items-center px-4">
      <div className="FeaturesBox max-w-[1280px] w-full py-[50px] flex flex-col items-center">
        <h1 className="text-3xl font-bold text-[#333333]">Top Features</h1>
        <Slide left>
          <div className="FeaturesGrid text-[#333333] bg-[#fff] p-[30px] rounded shadow-md grid grid-cols-1 md:grid-cols-4 w-full gap-[50px] mt-[40px]">
            <div className="Card flex flex-col">
              <div className="w-[30%] mb-[15px] flex">
                <Image
                  objectFit="contain"
                  alt="Hexullu APIs"
                  src={Frontend}
                ></Image>
              </div>
              <div>
                <h1 className="text-2xl font-bold mb-[10px]">
                  client-side rendering websites
                </h1>
                <p>
                  Client-side rendering (CSR) means rendering pages directly in
                  the browser using JavaScript. All logic, data fetching,
                  templating and routing are handled on the client rather than
                  the server.
                </p>
              </div>
            </div>
            <div className="Card flex flex-col">
              <div className="w-[30%] mb-[15px] flex">
                <Image
                  objectFit="contain"
                  alt="Hexullu APIs"
                  src={Server}
                ></Image>
              </div>
              <div>
                <h1 className="text-2xl font-bold mb-[10px]">
                  server-side rendering websites
                </h1>
                <p>
                  Server rendering generally produces a fast First Paint (FP)
                  and First Contentful Paint (FCP). Running page logic and
                  rendering on the server makes it possible to avoid sending
                  lots of JavaScript to the client, which helps achieve a fast
                  Time to Interactive (TTI).
                </p>
              </div>
            </div>
            <div className="Card flex flex-col">
              <div className="w-[30%] mb-[15px] flex">
                <Image objectFit="contain" alt="Hexullu APIs" src={Seo}></Image>
              </div>
              <div>
                <h1 className="text-2xl font-bold mb-[10px]">
                  seo-friendly websites
                </h1>
                <p>
                  Making a website SEO-friendly means that Google and other
                  search engines can crawl each page on the website efficiently,
                  interpret the content effectively, and index it in their
                  database. SEO-friendly websites usually get more traffic than
                  websites that ignore search engines.
                </p>
              </div>
            </div>
            <div className="Card flex flex-col">
              <div className="w-[30%] mb-[15px] flex">
                <Image
                  objectFit="contain"
                  alt="Hexullu APIs"
                  src={Deployment}
                ></Image>
              </div>
              <div>
                <h1 className="text-2xl font-bold mb-[10px]">
                  website deployment
                </h1>
                <p>
                  Website deployment is the phase where the website is moved
                  from the local environment to the live servers. This is called
                  your live website.
                </p>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Features;
