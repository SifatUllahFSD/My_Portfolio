import p1 from '../public/images/a1.png';
import b1 from '../public/images/b1.png';
import c1 from '../public/images/c1.png';

export const frontendImages = [p1];
export const frontendNames = [
  "Anniversary Website",
];
export const frontendCategories = [
  "Frontend Development",
];
export const frontendLinks = [
  "https://anniversary-website-demo.vercel.app",
];

export const ecommerceImages = [b1,c1];
export const ecommerceNames = [
  "E-Commerce (React)",
  "E-Commerce (Next.js)",
];
export const ecommerceCategories = [
  "Ecommerce Development",
  "Ecommerce Development",
];
export const ecommerceLinks = [
  "https://e-commerce-website-react-eta.vercel.app/",
  "https://e-commerce-website-next-js-three.vercel.app/",
];

export const webAppImages = [];
export const webAppNames = [];
export const webAppCategories = [];
export const webAppLinks = [];

export const dashboardImages = [];
export const dashboardNames = [];
export const dashboardCategories = [];
export const dashboardLinks = [];

export const allImages = [...frontendImages, ...ecommerceImages, ...webAppImages, ...dashboardImages];
export const allNames = [...frontendNames, ...ecommerceNames, ...webAppNames, ...dashboardNames];
export const allCategories = [...frontendCategories, ...ecommerceCategories, ...webAppCategories, ...dashboardCategories];
export const allLinks = [...frontendLinks, ...ecommerceLinks, ...webAppLinks, ...dashboardLinks];