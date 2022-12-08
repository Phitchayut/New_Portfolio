import React from "react";
import propertyImg from "../public/assets/projects/property.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";
import cryptoImg from "../public/assets/projects/crypto.jpg";


import ProjectItems from './ProjectItems'

const Project = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="tracking-widest uppercase text-[#5651e5]">Projects</p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
            <ProjectItems title='Property Finder' backgroundImg={propertyImg} projectUrl='/'/>
            <ProjectItems title='Netflix App' backgroundImg={netflixImg} projectUrl='/'/>
            <ProjectItems title='Twitch App' backgroundImg={twitchImg} projectUrl='/'/>
            <ProjectItems title='Crypto App' backgroundImg={cryptoImg} projectUrl='/'/>
        </div>
      </div>
    </div>
  );
};

export default Project;
