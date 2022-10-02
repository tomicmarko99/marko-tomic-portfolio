import React from "react";
import Image from "next/image";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

const ProjectCard = ({
  title,
  img,
  technologies,
  description,
  demo,
  github,
}) => {
  return (
    <div className="test-[#333333] w-full flex flex-col bg-[#fff] shadow-md p-5 rounded">
      <div className="flex items-center">
        <Image objectFit="contain" alt="Marko Tomic" src={img}></Image>
      </div>
      <h1 className="mb-1 mt-3 text-xl font-[500]">{title}</h1>
      <h2 className="text-[#666666]">{technologies}</h2>
      <p className="my-3">{description}</p>
      <div className="flex gap-[15px] text-xl text-[#e6e6e6]">
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="bg-[#222222] hover:text-froggy-green p-3 rounded-full transition ease-in duration-150"
          >
            <AiFillEye />
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="bg-[#222222] hover:text-froggy-green p-3 rounded-full transition ease-in duration-150"
          >
            <AiFillGithub />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
