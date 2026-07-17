"use client"

import { Lato } from 'next/font/google'
import React, { useState, useEffect } from 'react'
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin']
})

// Submissions are delivered straight to info.sifatullah@gmail.com via FormSubmit —
// a free form-to-email relay that needs no backend server or API key.
// NOTE: the very first submission triggers a one-time confirmation email from
// FormSubmit to info.sifatullah@gmail.com — click "Activate Form" in that email
// once, and every submission after that is delivered automatically.
const FORM_ENDPOINT = "https://formsubmit.co/ajax/info.sifatullah@gmail.com";

const initialState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  timeline: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error | needsContact
  const [shake, setShake] = useState(false);

  // auto-dismiss the toast after a few seconds
  useEffect(() => {
    if (status === "idle" || status === "loading") return;
    const t = setTimeout(() => setStatus("idle"), 4000);
    return () => clearTimeout(t);
  }, [status]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Only one of Email / Phone is required — everything else is optional.
    if (!formData.email.trim() && !formData.phone.trim()) {
      setStatus("needsContact");
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone,
          "Service Of Interest": formData.service,
          Timeline: formData.timeline,
          Message: formData.message,
          _subject: `New portfolio inquiry from ${formData.name || "a visitor"}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData(initialState);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  const contactMissing = status === "needsContact";

  return (
    <section id="contact" className='pb-3 md:pb-25 relative'>
      <div className="container mx-auto px-4">

        <div className="text-center pb-10 md:pb-12">
          <h2 className={`${lato.className} font-bold text-[#FEFEFE] text-[28px] md:text-[40px] pb-3`}>
            Contact me
          </h2>
          <p className={`${lato.className} text-[#707070] text-[16px] md:text-[18px]`}>
            Cultivating Connections: Reach Out And Connect With Me
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto" noValidate>

          {/* grid responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

            <input
              type="text" name="name" placeholder="Name"
              value={formData.name} onChange={handleChange}
              className="bg-[#1E1E1E] p-3 rounded text-white outline-none border border-transparent focus:border-[rgb(93,85,210)] transition-colors" />

            <input
              type="email" name="email"
              placeholder={contactMissing ? "Email or Phone required *" : "Email"}
              value={formData.email} onChange={handleChange}
              className={`bg-[#1E1E1E] p-3 rounded text-white outline-none transition-colors
              ${contactMissing ? `border border-red-500/70 placeholder-red-400/80 ${shake ? 'animate-shake' : ''}` : 'border border-transparent focus:border-[rgb(93,85,210)]'}`} />

            <input
              type="text" name="phone"
              placeholder={contactMissing ? "Email or Phone required *" : "Phone Number"}
              value={formData.phone} onChange={handleChange}
              className={`bg-[#1E1E1E] p-3 rounded text-white outline-none transition-colors
              ${contactMissing ? `border border-red-500/70 placeholder-red-400/80 ${shake ? 'animate-shake' : ''}` : 'border border-transparent focus:border-[rgb(93,85,210)]'}`} />

            <select
              name="service" value={formData.service} onChange={handleChange}
              className="bg-[#1E1E1E] p-3 rounded text-[#707070] outline-none border border-transparent focus:border-[rgb(93,85,210)] transition-colors">
              <option value="">Service Of Interest</option>
              <option>Frontend Web Development</option>
              <option>Backend Web Development</option>
              <option>Full-Stack Web Development</option>
            </select>

            {/* full width */}
            <input
              type="text" name="timeline" placeholder="Timeline"
              value={formData.timeline} onChange={handleChange}
              className="bg-[#1E1E1E] p-3 rounded text-white outline-none md:col-span-2 border border-transparent focus:border-[rgb(93,85,210)] transition-colors" />

            <textarea
              name="message" placeholder="Project Details..." rows={4}
              value={formData.message} onChange={handleChange}
              className="bg-[#1E1E1E] p-3 rounded text-white outline-none md:col-span-2 border border-transparent focus:border-[rgb(93,85,210)] transition-colors">
            </textarea>
          </div>

          {/* button */}
          <div className="text-center md:text-right pt-6">
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center gap-2 border border-[rgb(93,85,210)] px-6 py-2.5 rounded text-white hover:bg-[rgb(93,85,210)] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaPaperPlane className="text-sm" />
              {status === "loading" ? "Sending..." : "Send"}
            </button>
          </div>
        </form>

      </div>

      {/* TOAST — floating popup feedback, replaces inline helper text */}
      {(status === "needsContact" || status === "success" || status === "error") && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[70] w-[92%] max-w-md animate-toast-in">
          <div className={`flex items-start gap-3 rounded-xl px-5 py-4 border backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.5)]
            ${status === "success" ? "bg-[#12271d]/95 border-green-500/30" : ""}
            ${status === "error" ? "bg-[#2a1414]/95 border-red-500/30" : ""}
            ${status === "needsContact" ? "bg-[#241a10]/95 border-amber-500/30" : ""}
          `}>
            {status === "success" && <FaCheckCircle className="text-green-400 text-lg mt-0.5 shrink-0" />}
            {status === "error" && <FaExclamationCircle className="text-red-400 text-lg mt-0.5 shrink-0" />}
            {status === "needsContact" && <FaExclamationCircle className="text-amber-400 text-lg mt-0.5 shrink-0" />}

            <p className={`${lato.className} text-sm text-[#E4E4E4] leading-snug`}>
              {status === "success" && "Message sent successfully — I'll get back to you soon!"}
              {status === "error" && "Something went wrong. Please try again or email me directly."}
              {status === "needsContact" && "Please add your Email or Phone Number so I can reach you back."}
            </p>

            <button
              type="button"
              onClick={() => setStatus("idle")}
              aria-label="Dismiss"
              className="ml-auto text-[#8A8A8A] hover:text-white transition-colors text-lg leading-none"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Contact