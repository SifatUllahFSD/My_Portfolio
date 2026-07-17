import { Lato } from 'next/font/google';
import Link from 'next/link';
import React from 'react';

const lato = Lato({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
});

/**
 * Premium brand mark for MD. Sifat Ullah — Full Stack Developer.
 * A hand-built inline SVG hexagon badge (not a raster image), designed to feel
 * calm and confident rather than busy: one quiet idle "breathing" glow, a
 * pulsing availability dot, and a single elegant shine sweep on hover.
 *
 * variant="full"  -> mark + wordmark (used in Navbar)
 * variant="mark"  -> icon only (used in Footer / mobile drawer header)
 */
const Logo = ({ variant = 'full', className = '' }) => {
  return (
    <Link href="#home" className={`group flex items-center gap-2.5 md:gap-3 select-none shrink-0 ${className}`}>

      <span className="relative w-10 h-10 md:w-12 md:h-12 shrink-0">

        {/* quiet breathing glow behind the hexagon — the only idle motion */}
        <span
          className="absolute inset-0 rounded-full bg-[rgb(93,85,210)] blur-lg animate-breathe pointer-events-none"
          aria-hidden="true"
        />

        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative w-full h-full transition-transform duration-500 ease-out group-hover:-translate-y-0.5 group-hover:scale-[1.04]"
        >
          <defs>
            <linearGradient id="hexFill" x1="6" y1="3" x2="38" y2="41" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#8F86F2" />
              <stop offset="45%" stopColor="rgb(93,85,210)" />
              <stop offset="100%" stopColor="#2A2480" />
            </linearGradient>
            <linearGradient id="hexEdge" x1="22" y1="1" x2="22" y2="43" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#C7C0FF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#5D55D2" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="hexSheen" x1="22" y1="3" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
            <clipPath id="hexClip">
              <path d="M22 2.3 L39.4 12.15 L39.4 31.85 L22 41.7 L4.6 31.85 L4.6 12.15 Z" />
            </clipPath>
          </defs>

          {/* outer thin gradient frame, slightly larger for a "bordered" premium look */}
          <path
            d="M22 1 L40.6 11.5 L40.6 32.5 L22 43 L3.4 32.5 L3.4 11.5 Z"
            stroke="url(#hexEdge)"
            strokeWidth="1"
            fill="none"
            opacity="0.8"
          />

          {/* main hexagon */}
          <path
            d="M22 2.3 L39.4 12.15 L39.4 31.85 L22 41.7 L4.6 31.85 L4.6 12.15 Z"
            fill="url(#hexFill)"
          />

          <g clipPath="url(#hexClip)">
            {/* soft top sheen for depth */}
            <path d="M22 2.3 L39.4 12.15 L39.4 20 L22 12 L4.6 20 L4.6 12.15 Z" fill="url(#hexSheen)" />

            {/* monogram */}
            <text
              x="22" y="27.5"
              textAnchor="middle"
              fontFamily="Lato, sans-serif"
              fontWeight="900"
              fontSize="15.5"
              letterSpacing="0.5"
              fill="white"
              style={{ filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.35))' }}
            >
              SU
            </text>

            {/* thin underline accent beneath the monogram — a small "coded" detail */}
            <rect x="16" y="30.5" width="12" height="1.4" rx="0.7" fill="white" opacity="0.5" />

            {/* one-shot shine sweep, clipped neatly to the hexagon on hover */}
            <rect className="logo-shine" x="-12" y="-10" width="16" height="64" fill="white" opacity="0" />
          </g>
        </svg>

        {/* availability status dot */}
        <span className="absolute bottom-0 -right-0.5 w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-[#161617] flex items-center justify-center z-10">
          <span className="relative w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#3ED598]">
            <span className="absolute inset-0 rounded-full bg-[#3ED598] animate-ping opacity-70" />
          </span>
        </span>
      </span>

      {variant === 'full' && (
        <span className="flex flex-col leading-tight min-w-0">
          <span className={`${lato.className} font-black text-[16px] md:text-[19px] text-white tracking-wide whitespace-nowrap`}>
            SIFAT<span className="text-[rgb(93,85,210)]">.</span>ULLAH
          </span>
          <span className={`${lato.className} font-semibold text-[8px] md:text-[9.5px] text-[#9089DE] tracking-[0.14em] md:tracking-[0.22em] uppercase whitespace-nowrap`}>
            Full Stack Developer
          </span>
        </span>
      )}
    </Link>
  );
};

export default Logo;