import Image from "next/image";
import React from "react";
import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Github from "../public/assets/skills/github1.png";
import Firebase from "../public/assets/skills/firebase.png";
import NextJS from "../public/assets/skills/nextjs.png";
import AWS from "../public/assets/skills/aws.png";

const skillsImg = [
  {
    skillName: 'HTML',
    skillImg:Html,
  },
  {
    skillName: 'CSS',
    skillImg:Css,
  },
  {
    skillName: 'JavaScript',
    skillImg:Javascript,
  },
  {
    skillName: 'React',
    skillImg:ReactImg,
  },
  {
    skillName: 'Tailwind',
    skillImg:Tailwind,
  },
  {
    skillName: 'Github',
    skillImg:Github,
  },
  {
    skillName: 'Firebase',
    skillImg:Firebase,
  },
  {
    skillName: 'NextJS',
    skillImg:NextJS,
  },
];

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsImg.map((item, id) => (
            <>
              <div
                key={id}
                className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer"
              >
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image src={item.skillImg} width="64px" height="64px" alt="/" />
                  </div>
                  <div className="flex flex-col items-center justify-center ">
                    <h3>{item.skillName}</h3>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
