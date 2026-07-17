import { Lato } from 'next/font/google';
import React from 'react'
import { HiOutlineCodeBracket } from "react-icons/hi2";
import { TbServer2, TbApi, TbDatabase, TbDeviceMobileCode, TbGitBranch } from "react-icons/tb";

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin']
});

const services = [
  {
    icon: <HiOutlineCodeBracket />,
    title: "Frontend Development",
    desc: "Responsive, pixel-perfect interfaces built with React.js, Next.js, Tailwind CSS and Bootstrap — fast, accessible and mobile-first.",
  },
  {
    icon: <TbServer2 />,
    title: "Backend Development",
    desc: "Secure, well-structured server-side logic with Node.js and Express.js, built to scale and easy to maintain.",
  },
  {
    icon: <TbApi />,
    title: "RESTful API Development",
    desc: "Clean, documented REST APIs that connect your frontend and backend smoothly, tested end-to-end with Postman.",
  },
  {
    icon: <TbDatabase />,
    title: "Database Design (MongoDB)",
    desc: "Efficient MongoDB schemas and data modeling for applications that stay fast as they grow.",
  },
  {
    icon: <TbDeviceMobileCode />,
    title: "Full-Stack Web Applications",
    desc: "End-to-end MERN Stack products — from database and API to a polished, production-ready UI.",
  },
  {
    icon: <TbGitBranch />,
    title: "Version Control & Deployment",
    desc: "Organized Git & GitHub workflows, plus tooling with VS Code, npm and Figma for a smooth build-to-launch process.",
  },
];

const Services = () => {
  return (
    <section id="services" className='py-16 md:py-28'>
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className='text-center max-w-2xl mx-auto'>
          <span className={`${lato.className} inline-block text-[13px] md:text-[14px] font-bold tracking-[0.2em] uppercase text-[rgb(93,85,210)] pb-3`}>
            What I Offer
          </span>
          <h2 className={`${lato.className} font-bold text-[#FEFEFE] text-[26px] md:text-[40px] pb-4`}>
            Services
          </h2>
          <p className={`${lato.className} font-medium text-[#707070] text-[15px] md:text-[18px] leading-relaxed`}>
            I don't just offer services — I build modern, scalable solutions that help your brand grow and stand out in the digital world.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pt-12 md:pt-16">

          {services.map((service, i) => (
            <div
              key={i}
              className='group relative bg-[rgba(255,255,255,0.04)] text-center rounded-3xl py-10 px-6 border border-white/5
              hover:bg-[rgba(255,255,255,0.07)] hover:border-[rgba(93,85,210,0.4)] hover:-translate-y-2
              transition-all duration-300 overflow-hidden'
            >
              {/* corner index number — subtle premium detail */}
              <span className={`${lato.className} absolute top-4 right-5 text-[13px] font-bold text-white/10 group-hover:text-[rgba(93,85,210,0.4)] transition-colors duration-300`}>
                0{i + 1}
              </span>

              <div className="mx-auto w-[70px] h-[70px] md:w-[76px] md:h-[76px] rounded-2xl flex items-center justify-center
              bg-[rgba(93,85,210,0.1)] group-hover:bg-[rgb(93,85,210)] transition-colors duration-300">
                <span className='text-[32px] md:text-[36px] text-[rgb(93,85,210)] group-hover:text-white transition-colors duration-300'>
                  {service.icon}
                </span>
              </div>

              <h3 className={`${lato.className} font-bold text-[19px] md:text-[22px] text-white pt-6 pb-3`}>
                {service.title}
              </h3>
              <p className={`${lato.className} text-[14px] md:text-[16px] text-[#8A8A8A] leading-[160%]`}>
                {service.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Services;
