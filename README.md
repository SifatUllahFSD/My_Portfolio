# MD. Sifat Ullah — Full Stack Developer Portfolio

Built with Next.js, Tailwind CSS and a custom animated SVG logo.

## 🔗 Live Demo

[![Open Live Project](https://img.shields.io/badge/Live%20Demo-Click%20Here-blueviolet?style=for-the-badge)](https://my-portfolio-taupe-xi-27.vercel.app/)

---

## 🚀 Getting started locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## 📦 Deploying

Push this repo to GitHub and import it on [vercel.com](https://vercel.com) — no extra configuration needed.

## 📄 Download CV

The "Download CV" buttons link to `public/cv/MD_Sifat_Ullah_CV.pdf`. To update your CV, replace that file with a new PDF of the same name (or update the `href` in `src/Components/About.jsx` and `src/Components/Banner.jsx`).

## ✉️ Contact form → email delivery

The Contact form (`src/Components/Contact.jsx`) sends every submission straight to **info.sifatullah@gmail.com** using [FormSubmit](https://formsubmit.co) — a free, keyless form-to-email relay (no backend/server needed).

**One-time activation step:** the very first time someone submits the form, FormSubmit sends a confirmation email to info.sifatullah@gmail.com. Open that email and click **"Activate Form"** — after that, every future submission is delivered automatically and silently.

If you'd prefer a different provider later (e.g. Formspree, Web3Forms, EmailJS, or your own API route), just swap out the `FORM_ENDPOINT` and `fetch` body at the top of `Contact.jsx`.

## 🎨 Logo

The brand mark is a hand-built inline SVG component at `src/Components/Logo.jsx` (not a raster image), so it stays perfectly sharp at any size and can be recolored or animated via CSS/Tailwind.
