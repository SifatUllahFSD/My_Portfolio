"use client"

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { HiDotsVertical } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import Logo from './Logo';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About me' },
  { href: '#skills', label: 'Skills' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact me' },
];

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);

      // scrolling down past the hero -> float away
      // scrolling up (even slightly) -> float back in
      if (y > lastY.current && y > 140) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // close the drawer on Escape too
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <nav
        className={`fixed top-4 md:top-6 left-4 right-4 md:left-8 md:right-8 lg:left-12 lg:right-12 z-50
        transition-transform duration-500 ease-in-out
        ${hidden ? '-translate-y-[160%]' : 'translate-y-0'}`}
      >
        <div
          className={`mx-auto max-w-6xl flex items-center justify-between gap-3
          rounded-2xl border border-white/10 bg-[#18181a]/80 backdrop-blur-xl
          px-4 md:px-7 py-3 md:py-3.5
          transition-shadow duration-500
          ${scrolled ? 'shadow-[0_15px_45px_rgba(0,0,0,0.5)]' : 'shadow-[0_8px_30px_rgba(0,0,0,0.3)]'}`}
        >

          {/* LOGO — always left */}
          <Logo />

          {/* DESKTOP MENU — center */}
          <div className="menu hidden md:block">
            <ul className='flex items-center gap-6 lg:gap-9'>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[14px] lg:text-[15px] whitespace-nowrap hover:text-[rgb(93,85,210)] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* DESKTOP RIGHT ACTIONS */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href='https://wa.me/8801705068950'
              target="_blank"
              aria-label="Chat on WhatsApp"
              className='w-10 h-10 flex items-center justify-center rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors duration-300'
            >
              <FaWhatsapp className="text-[18px]" />
            </Link>
            <Link
              href="#contact"
              className='py-2.5 px-6 text-white bg-[rgb(93,85,210)] hover:bg-[#4740b0] transition-colors duration-300 rounded-lg font-semibold text-[14px] whitespace-nowrap shadow-[0_8px_20px_rgba(93,85,210,0.35)]'
            >
              Hire Me
            </Link>
          </div>

          {/* MOBILE: three-dot floating menu trigger — right side */}
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="md:hidden w-10 h-10 shrink-0 flex items-center justify-center rounded-full
            bg-white/5 border border-white/10 text-white active:scale-90
            transition-transform duration-200"
          >
            <HiDotsVertical className="text-[20px]" />
          </button>

        </div>
      </nav>

      {/* MOBILE DRAWER — slides in from the right, premium glass panel */}
      <div
        className={`md:hidden fixed inset-0 z-[60] transition-opacity duration-500
        ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {/* overlay */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        {/* panel */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute top-0 right-0 h-full w-[78%] max-w-[300px]
          bg-[#161617]/95 backdrop-blur-2xl border-l border-white/10
          shadow-[-20px_0_60px_rgba(0,0,0,0.55)]
          flex flex-col
          transition-transform duration-500 ease-in-out
          ${open ? 'translate-x-0' : 'translate-x-full'}`}
        >

          <div className="flex items-center justify-between px-5 pt-6 pb-4 border-b border-white/10">
            <Logo variant="mark" />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white active:scale-90 transition-transform duration-200"
            >
              <IoClose className="text-[20px]" />
            </button>
          </div>

          <ul className='flex flex-col px-5 pt-6 gap-1'>
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                className={`transition-all duration-500 ease-out ${open ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}
                style={{ transitionDelay: open ? `${100 + i * 60}ms` : '0ms' }}
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-[16px] text-[#E4E4E4] border-b border-white/5 hover:text-[rgb(93,85,210)] hover:pl-2 transition-all duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto px-5 pb-8 pt-4 flex flex-col gap-3">
            <Link
              href='https://wa.me/8801705068950'
              target="_blank"
              onClick={() => setOpen(false)}
              className='flex items-center justify-center gap-2 py-3 rounded-lg bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-semibold text-[14px]'
            >
              <FaWhatsapp className="text-[18px]" /> WhatsApp Me
            </Link>
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className='text-center py-3 rounded-lg bg-[rgb(93,85,210)] text-white font-semibold text-[14px] shadow-[0_8px_20px_rgba(93,85,210,0.35)]'
            >
              Hire Me
            </Link>
          </div>

        </div>
      </div>
    </>
  )
}

export default Navbar
