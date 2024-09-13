"use client";

import { easeIn, motion } from 'framer-motion';
import React, { useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [{
  num: "01",
  category: "1 week - Solo",
  title: "Jungle Snake",
  description: "A responsive web-based reimagining of the classic Snake game, featuring a jungle theme, dynamic scoring, and adaptive difficulty. This project showcases interactive gameplay, sound integration, and responsive design for both desktop and mobile platforms.",
  stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "Javascript" }],
  image: require("./snake.gif"),
  live: "https://filom3na.github.io/Project1-Snake/",
  github: "https://github.com/Filom3na/Project1-Snake",
},
{
  num: "02",
  category: "48 hours - Group(2 people)",
  title: "CineTrack",
  description: "CineTrack is a dynamic web application that enables users to explore, categorize, and track their movie preferences, offering features to mark favorites and watched films while providing genre-based filtering.",
  stack: [
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "SCSS" },
    { name: "Javascript" },
    { name: "React.js" },
    { name: "Bootstrap" },
  ],
  image: require("./movie.gif"),
  live: "https://ornate-dodol-ceff50.netlify.app/",
  github: "https://github.com/Filom3na/Project-2-react",
},
{
  num: "03",
  category: "2 weeks - Group(3 people)",
  title: "PupPal",
  description: "PupPal is an interactive web application designed for dog lovers to create profiles for their furry friends, share details about their pets, and connect with other dog owners. The platform allows users to add, view, and manage dog profiles with features like birthday tracking and breed information.",
  stack: [
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "SCSS" },
    { name: "React.js" },
    { name: "Node.js" },
    { name: "Express.js" },
    { name: "MongoDB" },
    { name: "Cloudinary" },
    { name: "Heroku" }
  ],
  image: require('./puppals.gif'),
  live: "https://puppals-f25422820259.herokuapp.com/",
  github: "https://github.com/Filom3na/Project-3---PupPals"
},
{
  num: "04",
  category: "7 days - Solo Project",
  title: "SpotiMood",
  description: "SpotiMood is a web app that combines mood tracking with music recommendations. Users log their daily moods and receive personalized song suggestions from a curated database. It offers a unique, mood-responsive music discovery experience.",
  stack: [
    { name: "React.js" },
    { name: "Django" },
    { name: "PostgreSQL" },
    { name: "Python" },
    { name: "SCSS" },
    { name: "HTML5" },
    { name: "JWT Authentication" },
    { name: "Heroku" }
  ],
  image: require('./spotimood.gif'),
  live: "https://spotimood-12bff2675e3a.herokuapp.com/",
  github: "https://github.com/Filom3na/SpotiMood",
}



]
const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <div className="flex flex-col gap-2">
                <ul className="flex flex-wrap gap-4">
                  {project.stack.slice(0, 3).map((item, index) => (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== 2 && ","}
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-wrap gap-4">
                  {project.stack.slice(3).map((item, index) => (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.slice(3).length - 1 && ","}
                    </li>
                  ))}
                </ul>
              </div>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
