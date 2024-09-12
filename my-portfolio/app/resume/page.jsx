"use client";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";


// about me page
const about = {
  title: "About me",
  description:
    "I'm a junior software developer with a diverse background, including a master's in Intelligence and Security Studies and experience in headhunting. After becoming a parent, I decided to pivot to a more flexible and innovative career. I completed the Software Engineering Immersive course at General Assembly, immersing myself in this exciting field. My analytical skills from intelligence studies and problem-solving abilities translate perfectly into coding. With expertise in JavaScript, Python, React, and Django, I'm fascinated by how I can use these languages to build impactful technologies. I aim to apply my unique perspective and newly acquired skills in an environment where I can continue to learn, grow, and create solutions that make a positive difference, while maintaining a healthy work-life balance.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Filomena Murgo",
    },
    {
      fieldName: "Email",
      fieldValue: "filomenamurgo@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Italian, French, Spanish",
    },
  ],
};

// experience
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  items: [
    {
      company: "General Assembly",
      position: "Software Engineering Immersive",
      duration: "March 2024 - June 2024",
      description: [
        "Completed a full-time 3-month intensive course covering full-stack web development fundamentals, taught by industry professionals.",
        "Built and deployed four projects, including two full-stack applications, utilizing JavaScript, React.js, HTML, CSS, Python, SQL, and MongoDB.",
        "Engaged in daily stand-ups, pair programming, and project presentations to simulate real-world development environments.",
        "Participated in group-based weeklong projects, gaining experience in agile methodologies and team collaboration.",
        "Learned best practice principles such as SOLID, DRY, Object-Oriented Programming, and Functional Programming.",
        "Developed skills in both front-end and back-end engineering, working on individual, paired, and group projects."
      ]
    },
    {
      company: "Caspar Alexander",
      position: "Graduate Associate",
      duration: "September 2021 – March 2022",
      description: [
        "Sourced and screened software engineering candidates using various tools including LinkedIn Recruiter, GitHub, and Stack Overflow.",
        "Partnered with account managers to meet requirements for high-profile clients such as Blacklane, Graphy, and Miro.",
        "Managed end-to-end interview and offer negotiation processes.",
        "Utilised Excel, Tableau, and PowerBI to analyse recruiting metrics, implementing data-driven strategies that reduced time-to-hire by 20%.",
        "Collaborated with hiring managers to refine job descriptions and conducted market research on salary benchmarks and skill demand."
      ],
    },
    {
      company: "Ms Risk Ltd.",
      position: "Intelligence Analyst",
      duration: "October 2020 – September 2021",
      description: [
        "Specialised in Latin American security analysis, leveraging Spanish language skills for in-depth research and reporting.",
        "Conducted open-source research for monthly Global Security Reports, focusing on Latin American countries.",
        "Performed statistical analysis using R on global security data to identify regional trends.",
        "Authored monthly analysis pieces and produced country-specific PMESTLE reports for key Latin American nation.",
        "Utilised Spanish skills to analyse local sources, providing unique insights for risk assessments.",
        "Presented findings to clients, offering strategic recommendations for operating in complex regional markets.",
      ],
    },
  ],
};


// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  items: [
    {
      institution: "Brunel University",
      degree: "MA Intelligence and Security Studies",
      duration: "September 2020 - September 2021",
      description: [
        "Focused on data analysis and modelling for intelligence purposes",
        "Used Python and R for statistical analysis of security threats",
        "Completed thesis using quantitative methods to compare intelligence measures in genocide events",
        "Served as Student Representative"
      ]
    },
    {
      institution: "Brunel University",
      degree: "BSc International Politics",
      duration: "September 2017 - July 2020",
      description: [
        "Studied Research Methods in Quantitative and Qualitative Political Science",
        "Completed Advanced Applied Quantitative Methods course",
        "Introduced to Data Science with Python and R",
        "Developed expertise in statistical analysis using SPSS and Excel",
        "Dissertation: Compared cases of elections where fake media was used as political propaganda",
        "Achieved Upper Second Class Honours (2:1)"
      ]
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const interests = {
  title: "My Interests",
  description: "Beyond my professional pursuits, I'm passionate about exploring the world and enriching my life through various activities.",
  bio: "I love to travel and explore new places, immersing myself in different cultures, histories, and traditions. Reading is a constant companion, allowing me to dive into diverse genres and perspectives. My passion for languages extends beyond my professional life, as I enjoy learning new ways to communicate. Music plays a significant role in my life; I play piano and guitar, and have studied opera in Italy. To stay active, I'm a regular at the gym and have a background in competitive fencing, having competed nationally in Italy. These diverse interests reflect my curiosity for learning, appreciation for culture, and balance of artistic and athletic pursuits."
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="interests">Interests</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col lg:items-start gap-1"
                        >
                          <div className="mb-2">
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl font-semibold">{item.position}</h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.company}</p>
                            </div>
                          </div>
                          <ul className="text-sm text-white/60 list-disc pl-4">
                            {item.description.map((desc, descIndex) => (
                              <li key={descIndex}>{desc}</li>
                            ))}
                          </ul>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col lg:items-start gap-1"
                        >
                          <div className="mb-2">
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl font-semibold">{item.degree}</h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.institution}</p>
                            </div>
                          </div>
                          <ul className="text-sm text-white/60 list-disc pl-4">
                            {item.description.map((desc, descIndex) => (
                              <li key={descIndex}>{desc}</li>
                            ))}
                          </ul>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>


            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent
              value="interests"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{interests.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {interests.description}
                </p>
                <div className="bg-[#232329] p-6 rounded-xl">
                  <p className="text-white/80 leading-relaxed">
                    {interests.bio}
                  </p>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume