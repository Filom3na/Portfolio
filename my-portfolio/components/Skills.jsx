import React from 'react';
import { FaReact, FaNode, FaPython, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaNpm, FaSass, FaUserCircle, FaComment, FaLightbulb, FaUsers, FaCode, FaServer, FaDatabase, FaCog, FaCloud, FaTools } from 'react-icons/fa';
import { SiDjango, SiTailwindcss, SiMongodb, SiPostgresql, SiNextdotjs, SiExpress, SiInsomnia, SiNetlify, SiHeroku, SiJquery, SiJest } from 'react-icons/si';

const skillCategories = {
  "Frontend": [
    { name: "React.js", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "SASS", icon: <FaSass /> },
  ],
  "Backend": [
    { name: "Node.js", icon: <FaNode /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "Django REST Framework", icon: <SiDjango /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
  ],
  "Tools & Platforms": [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGitAlt /> },
    { name: "Insomnia", icon: <SiInsomnia /> },
    { name: "Netlify", icon: <SiNetlify /> },
    { name: "Heroku", icon: <SiHeroku /> },
    { name: "Cloudinary", icon: <FaCloud /> },
    { name: "npm", icon: <FaNpm /> },
    { name: "Pipenv", icon: <FaPython /> },
    { name: "jQuery", icon: <SiJquery /> },
    { name: "Jest", icon: <SiJest /> },
  ],
  "Other Skills": [
    { name: "Agile Methodologies", icon: <FaCog /> },
    { name: "Scrum", icon: <FaUsers /> },
    { name: "Blockchain", icon: <FaDatabase /> },
    { name: "JSON", icon: <FaCode /> },
    { name: "API Testing", icon: <FaTools /> },
    { name: "Knex.js", icon: <FaDatabase /> },
  ],
  "Soft Skills": [
    { name: "Communication", icon: <FaComment /> },
    { name: "Problem Solving", icon: <FaLightbulb /> },
    { name: "Teamwork", icon: <FaUsers /> },
    { name: "Team Spirit", icon: <FaUsers /> },
    { name: "User Experience (UX)", icon: <FaUserCircle /> },
    { name: "Front-end Engineering", icon: <FaCode /> },
    { name: "Back-end", icon: <FaServer /> },
    { name: "Full-Stack Development", icon: <FaCode /> },
  ],
};

const SkillItem = ({ name, icon }) => (
  <div className="flex items-center gap-2 bg-secondary/60 rounded-lg p-3 hover:scale-105 transition-all duration-300">
    <span className="text-2xl text-accent">{icon}</span>
    <span className="text-white/80">{name}</span>
  </div>
);

const Skills = () => {
  return (
    <section className="py-12 bg-primary">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="border border-accent rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-accent mb-4">{category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <SkillItem key={skill.name} name={skill.name} icon={skill.icon} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;