import { url } from "inspector";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize delivering the best outcomes in every task, within the given time frame.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible working anywhere around the globe, remotely",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently winding up on an upgrade suggestion website for a company, free solution",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "CloudStore, File management app",
    des: "A cloud storage app that allows users to store, manage, and share files securely. Built with Next.js, Tailwind CSS, Flask and TypeScript.",
    img: "/cloudstore.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/python.png"],
    url: "https://cloud-store-54gn.vercel.app/",
  },
  {
    id: 2,
    title: "Snowflake Advisor, mobile advice app",
    des: "A sleek mobile app that provides random advice and motivational quotes. Built with React.js and Tailwind CSS",
    img: "/advisor.png",
    iconLists: ["/re.svg","/tail.svg", "/ts.svg",],
    url: "https://advice-app-ebon.vercel.app/",
  },
  {
    id: 3,
    title: "UsafiPlus Company Website",
    des: "Designed and developed a responsive website for a client, showcasing their services and portfolio.",
    img: "/usafiplus.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg","/python.png"],
    url: "https://usafi-app.vercel.app/",
  },
  // {
  //   id: 4,
  //   title: "Animated Apple Iphone 3D Website",
  //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
  //   img: "/p4.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  //   link: "/ui.apple.com",
  // },
];

export const testimonials = [
  {
    quote:
      "I highly recommend Felix Kiprotich Cheruiyot for his exceptional skills in software development and problem-solving. He is reliable, quick to learn, and consistently delivers high-quality work. Felix would be a great asset to any team.",
    name: "Sarah Wangeshi",
    title: "Lecturer, Strathmore University",
  },
  {
    quote:
      "I have had the pleasure of working with Felix Kiprotich Cheruiyot, and I can confidently say he is dedicated, innovative, and results-driven. His ability to solve complex problems with ease is truly impressive. Felix brings great value to any project or team he joins.",
    name: "Emmanuel Baraka",
    title: "CEO, Meraki creatives",
  },
  {
    quote:
      "Working with Felix Kiprotich Cheruiyot has been an absolute privilege—he consistently delivers high-quality work with creativity and precision. His professionalism and strong technical skills set him apart. I fully recommend him for any opportunity that requires excellence and commitment.",
    name: "Jaffer Haider",
    title: "CEO, PosterMywall",
  },
 
  
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "Cloudinary",
  },
 
  {
    id: 3,
    name: "Amazon Web Services",
    img: "/aws.png",
    nameImg: "Aws",
  },
  {
    id: 4,
    name: "Github",
    img: "/git.png",
    nameImg: "GitHub",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "Docker",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "FullStack Engineer Volunteer - RedCross, Kenya",
    desc: "Assisted in the development of a disaster management platform using Next.js and Flask, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Engineer, Moringa School, Class Final project",
    desc: "Designed a sleek digital storage application, mimicing Google Drive, for seamless file management.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Seasoned Graphics Designer, PosterMywall",
    desc: "Created visually captivating posters, flyers, and banners for diverse clients. Featured in the company's designer leaderboard for exceptional design work.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/Tech-goodat",
  },
  {
    id: 2,
    img: "/twit.svg",
    url: "https://x.com/Tech_GoodAt",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/kiprotich-felix-b87a11228/",
  },
];
