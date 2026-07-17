import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MD. Sifat Ullah | Full Stack Web Developer",
  description: "Portfolio of MD. Sifat Ullah — Full Stack Web Developer specializing in the MERN Stack (MongoDB, Express.js, React.js, Node.js), Next.js and Tailwind CSS.",
  keywords: ["Sifat Ullah", "Full Stack Developer", "MERN Stack Developer", "React Developer", "Next.js Developer", "Web Developer Bangladesh"],
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
