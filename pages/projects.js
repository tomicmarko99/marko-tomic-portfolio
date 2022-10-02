import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import { ProjectList } from "../helpers/ProjectList";

const projects = () => {
  return (
    <div>
      <Head>
        <title>Marko Tomic - Projects</title>
      </Head>
      <Navbar />
      <div className="bg-[url('https://i.ibb.co/V9863Yy/hero-background.png')] bg-center bg-no-repeat bg-cover w-full flex flex-col justify-center items-center px-4 py-[100px] min-h-[100vh]">
        <div className="max-w-[1280px] w-full flex flex-col items-center">
          <h1 className="text-3xl font-bold text-[#333333]">My Projects</h1>
          <h2 className="text-sm font-[500] text-[#666666] my-[10px]">
            Dive into my diverse portfolio and discover projects I realized
          </h2>
          <div className="ApisGrid grid grid-cols-1 md:grid-cols-2 gap-[20px]  gap-[50px] w-full  mt-[50px]">
            {ProjectList.map((Project) => {
              return (
                <ProjectCard
                  key={Project.title}
                  title={Project.title}
                  img={Project.image}
                  technologies={Project.technologies}
                  description={Project.description}
                  demo={Project.demo}
                  github={Project.github}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default projects;
