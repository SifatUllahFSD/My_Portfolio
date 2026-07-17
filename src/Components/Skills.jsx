"use client";

import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma } from "react-icons/fa"
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress, SiBootstrap, SiPostman, SiNpm, SiCanva } from "react-icons/si"
import { VscVscode } from "react-icons/vsc"

const skillsData = [
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <FaReact />, name: "React.js" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiTailwindcss />, name: "Tailwind" },
  { icon: <SiBootstrap />, name: "Bootstrap" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaGithub />, name: "GitHub" },
  { icon: <VscVscode />, name: "VS Code" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <SiNpm />, name: "npm" },
  { icon: <FaFigma />, name: "Figma" },
  { icon: <SiCanva />, name: "Canva" },
]

const Skills = () => {
  return (
    <section id="skills" className='pb-20 md:pb-37.5'>
      <div className="container mx-auto px-4">

        {/* HEADING */}
        <div className='text-center pb-12 md:pb-16'>
          <h2 className='text-[28px] md:text-[40px] font-bold text-white'>
            My <span className='text-[rgb(93,85,210)]'>Skills</span>
          </h2>

          <p className='text-[#707070] text-[14px] md:text-[18px] pt-3'>
            Technologies I use to build modern and scalable full stack web applications
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-12">

          {skillsData.map((skill, i) => (

            <div key={i} className='text-center group transition-all duration-300 hover:-translate-y-2'>

              {/* Rotating gradient ring — a full, continuous circle (no percentage) */}
              <div className='relative w-20 h-20 md:w-28 md:h-28 mx-auto'>

                <div
                  className='absolute inset-0 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow'
                  style={{
                    background: 'conic-gradient(from 0deg, rgba(93,85,210,0.15), rgb(93,85,210), rgba(93,85,210,0.15))'
                  }}
                />

                {/* Inner */}
                <div className='absolute inset-[6px] md:inset-2
                bg-[#1b1b1d] backdrop-blur-md
                border border-[rgba(255,255,255,0.06)]
                rounded-full flex items-center justify-center
                transition-transform duration-500 group-hover:scale-110'>

                  <span
                    className={`text-[26px] md:text-[42px] text-white transition-all duration-300
                    ${skill.name === "VS Code" ? "scale-110 drop-shadow-[0_0_6px_rgba(93,85,210,0.6)]" : ""}`}
                  >
                    {skill.icon}
                  </span>

                </div>
              </div>

              {/* Name */}
              <h4 className='font-bold text-[13px] md:text-[18px] text-[#959595] pt-4 group-hover:text-[rgb(93,85,210)] transition-colors duration-300'>
                {skill.name}
              </h4>

            </div>

          ))}

        </div>
      </div>
    </section>
  )
}

export default Skills
