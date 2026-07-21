"use client"
import { Lato } from 'next/font/google';
import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Image from 'next/image';

import {
  allImages, allNames, allCategories, allLinks,
  frontendImages, frontendNames, frontendCategories, frontendLinks,
  ecommerceImages, ecommerceNames, ecommerceCategories, ecommerceLinks,
  webAppImages, webAppNames, webAppCategories, webAppLinks,
  dashboardImages, dashboardNames, dashboardCategories, dashboardLinks,
} from '../projectsData';

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin']
});

const tabs = [
  "All",
  "Frontend Development",
  "Ecommerce Development",
  "Web Application",
  "Dashboard Development"
];

const projectImages = [
  allImages,
  frontendImages,
  ecommerceImages,
  webAppImages,
  dashboardImages,
];

const projectNames = [
  allNames,
  frontendNames,
  ecommerceNames,
  webAppNames,
  dashboardNames,
];

const projectCategories = [
  allCategories,
  frontendCategories,
  ecommerceCategories,
  webAppCategories,
  dashboardCategories,
];

const projectLinks = [
  allLinks,
  frontendLinks,
  ecommerceLinks,
  webAppLinks,
  dashboardLinks,
];

const Portfolio = () => {

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <section id="portfolio" className='pb-10 md:pb-37.5 px-4 md:px-10'>
      <div className="container">

        <div className='text-center'>
          <h2 className={`${lato.className} font-bold text-white text-[28px] md:text-[40px] pb-6 md:pb-10`}>
            Portfolio
          </h2>
        </div>

        <Tabs selectedIndex={selectedIndex} onSelect={(i) => setSelectedIndex(i)}>

          <div className="md:hidden pb-6 relative">

            <div
              onClick={() => setOpenDropdown(!openDropdown)}
              className="w-full bg-[#1f1f1f] text-white p-3 rounded-full border border-[rgba(255,255,255,0.08)] cursor-pointer flex justify-between items-center"
            >
              {tabs[selectedIndex]}
              <span>▼</span>
            </div>

            {openDropdown && (
              <div className="absolute top-full left-0 w-full mt-2 bg-[#1f1f1f] rounded-xl border border-[rgba(255,255,255,0.08)] overflow-hidden z-50 shadow-lg">

                {tabs.map((tab, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setSelectedIndex(i);
                      setOpenDropdown(false);
                    }}
                    className={`px-4 py-3 cursor-pointer transition-all
                      ${selectedIndex === i
                        ? 'bg-[rgb(93,85,210)] text-white'
                        : 'text-[#ccc] hover:bg-[rgba(255,255,255,0.05)]'}
                    `}
                  >
                    {tab}
                  </div>
                ))}

              </div>
            )}

          </div>

          <TabList className="hidden md:flex flex-wrap justify-center gap-4 pb-12 list-none">

            {tabs.map((tab, index) => (
              <Tab
                key={index}
                className={`${lato.className}
                  cursor-pointer px-6 py-3 rounded-full
                  text-[#C6C6C6]
                  bg-[rgba(255,255,255,0.05)]
                  border border-[rgba(255,255,255,0.08)]
                  transition-all duration-300
                  hover:bg-[rgb(93,85,210)]
                  hover:text-white
                  hover:scale-105
                `}
                selectedClassName={`${lato.className}
                  !bg-[rgb(93,85,210)]
                  !text-white
                  shadow-[0_0_20px_rgba(93,85,210,0.4)]
                  scale-105
                `}
              >
                {tab}
              </Tab>
            ))}

          </TabList>

          {tabs.map((tab, tabIndex) => (
            <TabPanel key={tabIndex}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">

                {projectImages[tabIndex].map((img, i) => (
                  <a
                    key={i}
                    href={projectLinks[tabIndex][i]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='group transition-all duration-300 hover:-translate-y-2 block'
                  >

                    <div className="overflow-hidden rounded-xl">
                      <Image
                        className='w-full group-hover:scale-110 transition duration-500'
                        src={img}
                        alt={projectNames[tabIndex][i]}
                      />
                    </div>

                    <div className='bg-[rgba(255,255,255,0.05)] p-3 flex flex-col md:flex-row md:justify-between md:items-center gap-1 rounded-xl mt-1'>
                      <span className={`${lato.className} font-bold text-[#C6C6C6] text-[12px] md:text-[14px] leading-snug`}>
                        {projectNames[tabIndex][i]}
                      </span>
                      <span className={`${lato.className} font-bold text-[#8a8a8a] md:text-[#C6C6C6] text-[11px] md:text-[14px] leading-snug`}>
                        {projectCategories[tabIndex][i]}
                      </span>
                    </div>

                  </a>
                ))}

              </div>
            </TabPanel>
          ))}

        </Tabs>

      </div>
    </section>
  )
}

export default Portfolio