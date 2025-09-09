import React from 'react'
import './TechnicalSkill.css';
import { useEffect } from "react";
import { FaHtml5, FaJs, FaReact, FaBootstrap, FaGithub} from 'react-icons/fa';
import { SiMongodb, SiTailwindcss } from 'react-icons/si';
import AOS from "aos";
import "aos/dist/aos.css";
const skills = [
  { name: 'HTML', icon: <FaHtml5 />, color: '#e44d26' },
  { name: 'JavaScript', icon: <FaJs />, color: '#f0db4f' },
  { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952b3' },
  { name: 'React JS', icon: <FaReact />, color: '#61dafb' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#38BDF8' },
  { name: 'GitHub', icon: <FaGithub />, color: 'white' },
];


export default function TechnicalSkill() {
   useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
  return (
        <section className="skills-section" id="skills" >
      <h2 className="skills-heading" data-aos="fade-up">Technical <span className='skill'>Skills</span> </h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
