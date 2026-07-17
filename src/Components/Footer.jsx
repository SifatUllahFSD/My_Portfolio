import { Lato } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa"
import Logo from './Logo'

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin']
})

const Footer = () => {
  return (
    <footer className="relative bg-[#111] pt-14 pb-10 mt-10 md:mt-20 overflow-hidden">

      {/* subtle top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[rgb(93,85,210)] to-transparent" />

      <div className="container mx-auto px-4 text-center">

        {/* Logo */}
        <div className="flex justify-center pb-6">
          <Logo />
        </div>

        {/* Menu */}
        <ul className="flex flex-wrap justify-center gap-4 md:gap-6 pb-6 text-[#707070] text-sm md:text-base">
          <li><Link href="#home" className="hover:text-[rgb(93,85,210)] transition-colors">Home</Link></li>
          <li><Link href="#services" className="hover:text-[rgb(93,85,210)] transition-colors">Services</Link></li>
          <li><Link href="#about" className="hover:text-[rgb(93,85,210)] transition-colors">About me</Link></li>
          <li><Link href="#skills" className="hover:text-[rgb(93,85,210)] transition-colors">Skills</Link></li>
          <li><Link href="#portfolio" className="hover:text-[rgb(93,85,210)] transition-colors">Portfolio</Link></li>
          <li><Link href="#contact" className="hover:text-[rgb(93,85,210)] transition-colors">Contact me</Link></li>
        </ul>

        {/* Social */}
        <div className="flex justify-center gap-4 pb-6 text-white text-lg">
          <Link href='https://github.com/SifatUllahFSD' target="_blank" className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center hover:bg-[rgb(93,85,210)] hover:border-[rgb(93,85,210)] transition-colors duration-300">
            <FaGithub className='text-[#BABABA] text-[18px]' />
          </Link>
          <Link href='https://www.facebook.com/share/17Rs3YTknF/' target="_blank" className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center hover:bg-[rgb(93,85,210)] hover:border-[rgb(93,85,210)] transition-colors duration-300">
            <FaFacebookF className='text-[#BABABA] text-[18px]' />
          </Link>
          <Link href='https://www.instagram.com/s_i_f_a_t__u_l_l_a_h?igsh=YzZqMzB3aGhhYTV1' target="_blank" className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center hover:bg-[rgb(93,85,210)] hover:border-[rgb(93,85,210)] transition-colors duration-300">
            <FaInstagram className='text-[#BABABA] text-[18px]' />
          </Link>
          <Link href='https://www.linkedin.com/in/md-sifat-ullah-556384390/' target="_blank" className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center hover:bg-[rgb(93,85,210)] hover:border-[rgb(93,85,210)] transition-colors duration-300">
            <FaLinkedinIn className='text-[#BABABA] text-[18px]' />
          </Link>
          <Link href='https://wa.me/8801705068950' target="_blank" aria-label="Chat on WhatsApp" className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center hover:bg-[#25D366] hover:border-[#25D366] transition-colors duration-300">
            <FaWhatsapp className='text-[#BABABA] text-[18px]' />
          </Link>
        </div>

        {/* Contact Info */}
        <div className="text-[#707070] text-xs md:text-sm pb-3 space-y-1">
          <p>Email: info.sifatullah@gmail.com</p>
          <p>Phone: +880 1705 068 950</p>
        </div>

        <p className={`${lato.className} text-[#4a4a4a] text-xs pt-4`}>
          © {new Date().getFullYear()} MD. Sifat Ullah — All rights reserved.
        </p>

      </div>
    </footer>
  )
}

export default Footer
