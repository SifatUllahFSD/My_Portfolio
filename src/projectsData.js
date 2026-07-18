import p1 from '../public/images/a1.png';
import b1 from '../public/images/b1.png';
import p3 from '../public/images/p3.png';

export const frontendImages = [p1];
export const frontendNames = [
  "Anniversary Website",
  "Project Name 2",
  "Project Name 3",
  "Project Name 4",
  "Project Name 5",
];
export const frontendCategories = [
  "Frontend Development",
  "Frontend Development",
  "Frontend Development",
  "Frontend Development",
  "Frontend Development",
];
export const frontendLinks = [
  "https://anniversary-website-demo.vercel.app",
  "https://project2.vercel.app",
  "https://project3.vercel.app",
  "https://project4.vercel.app",
  "https://project5.vercel.app",
];

export const ecommerceImages = [b1];
export const ecommerceNames = [
  "E-Commerce (React)",
  "Project Name 2",
  "Project Name 3",
];
export const ecommerceCategories = [
  "Ecommerce Development",
  "Ecommerce Development",
  "Ecommerce Development",
];
export const ecommerceLinks = [
  "https://e-commerce-website-react-eta.vercel.app/",
  "https://project2.vercel.app",
  "https://project3.vercel.app",
];

export const webAppImages = [];
export const webAppNames = [
  "Project Name 1",
  "Project Name 2",
  "Project Name 3",
  "Project Name 4",
];
export const webAppCategories = [
  "Web Application",
  "Web Application",
  "Web Application",
  "Web Application",
];
export const webAppLinks = [
  "https://project1.vercel.app",
  "https://project2.vercel.app",
  "https://project3.vercel.app",
  "https://project4.vercel.app",
];

export const dashboardImages = [];
export const dashboardNames = [
  "Project Name 1",
  "Project Name 2",
];
export const dashboardCategories = [
  "Dashboard Development",
  "Dashboard Development",
];
export const dashboardLinks = [
  "https://project1.vercel.app",
  "https://project2.vercel.app",
];

export const allImages = [...frontendImages, ...ecommerceImages, ...webAppImages, ...dashboardImages];
export const allNames = [...frontendNames, ...ecommerceNames, ...webAppNames, ...dashboardNames];
export const allCategories = [...frontendCategories, ...ecommerceCategories, ...webAppCategories, ...dashboardCategories];
export const allLinks = [...frontendLinks, ...ecommerceLinks, ...webAppLinks, ...dashboardLinks];