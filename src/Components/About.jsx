import { Lato } from 'next/font/google';
import Link from 'next/link';
import React from 'react'
import { FiDownload } from "react-icons/fi";
import { FaCode, FaServer, FaDatabase } from "react-icons/fa";

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin']
});

const highlights = [
  { icon: <FaCode />, title: "Frontend", desc: "HTML5, CSS3, JavaScript, React.js, Next.js, Tailwind CSS, Bootstrap" },
  { icon: <FaServer />, title: "Backend", desc: "Node.js, Express.js, RESTful APIs" },
  { icon: <FaDatabase />, title: "Database", desc: "MongoDB, Data Modeling" },
];

const About = () => {
  return (
    <section id="about" className='pb-16 md:pb-25'>
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className='text-center'>
          <h2 className={`${lato.className} font-bold text-[#FEFEFE] text-[28px] md:text-[40px] pb-4.5`}>
            About Me
          </h2>
          <p className={`${lato.className} font-medium text-[#707070] text-[16px] md:text-[20px]`}>
            Full Stack Web Developer — MERN Stack
          </p>
        </div>

        {/* Content */}
        <div className="pt-12 md:pt-16 max-w-4xl mx-auto">

          <p className={`${lato.className} text-[#959595] text-[16px] md:text-[20px] font-medium leading-[180%] text-justify pb-5`}>
            Hello! My name is Md. Sifat Ullah. I am a Full Stack Web Developer who recently completed hands-on training in building responsive, user-friendly web applications using the MERN Stack — MongoDB, Express.js, React.js, and Node.js.
          </p>

          <p className={`${lato.className} text-[#959595] text-[16px] md:text-[20px] font-medium leading-[180%] text-justify pb-5`}>
            I have a strong foundation in HTML, CSS, JavaScript, React.js, and Next.js for building clean, modern interfaces, and I work confidently with Node.js and Express.js to build secure, scalable RESTful APIs backed by MongoDB.
          </p>

          <p className={`${lato.className} text-[#959595] text-[16px] md:text-[20px] font-medium leading-[180%] text-justify pb-10`}>
            I'm eager to contribute to real-world projects while continuously improving my technical and problem-solving skills, with the goal of building fast, modern, and user-friendly web applications from front to back.
          </p>

          {/* Highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pb-10">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] rounded-2xl p-6 text-center hover:bg-[rgba(255,255,255,0.07)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-[rgb(93,85,210)] text-[32px] flex justify-center pb-4">
                  {h.icon}
                </div>
                <h3 className={`${lato.className} font-bold text-white text-[18px] pb-2`}>
                  {h.title}
                </h3>
                <p className={`${lato.className} text-[#8A8A8A] text-[14px] leading-relaxed`}>
                  {h.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="flex justify-center">
            <a
              href="/cv/MD_Sifat_Ullah_CV.pdf"
              download="MD_Sifat_Ullah_CV.pdf"
              className='flex w-fit py-3 px-6 md:px-7.5 rounded-lg gap-2 items-center bg-[rgb(93,85,210)] hover:bg-[#4740b0] transition-colors duration-300 shadow-[0_10px_25px_rgba(93,85,210,0.35)]'
            >
              <FiDownload className='text-white'/>
              <span className={`${lato.className} font-bold text-white text-[16px] md:text-[20px]`}>
                Download CV
              </span>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About;
