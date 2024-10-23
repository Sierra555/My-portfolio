import {
    mobile,
    mobileWebp,
    creator,
    creatorWebp,
    web,
    webWebp,
    boosta,
    freelance,
    desire,
    oculus,
    countries,
    comfortmasters,
    portfolio,
    blog,
    desireWebp,
    oculusWebp,
    countriesWebp,
    comfortmastersWebp,
    portfolioWebp,
    blogWebp,
  } from "../assets";
  

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
      webpIcon: webWebp,
    },
    {
      title: "React Developer",
      icon: mobile,
      webpIcon: mobileWebp,
    },
    {
      title: "Content Creator",
      icon: creator,
      webpIcon: creatorWebp,
    },
  ];
  
  const experiences = [
    {
      title: "Fronted Developer",
      company_name: "Boosta",
      icon: boosta,
      iconBg: "#383E56",
      date: "Nov 2022 - Dec 2023",
      points: [
        "Maintaining and contributing to a legacy monolithic project that aggregates over 35 sites and serves thousands of active clients each month.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products. Consulting them on project details from a front-end perspective and proposing own ideas.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers. Visiting lectures, presentations and pair programming sessions",
      ],
      tags: ["TypeScript", "React.js", "jQuery", "JavaScript", "Twig", "SCSS", "Git", "Docker"],
    },
    {
      title: "Fronted Developer",
      company_name: "Freelance",
      icon: freelance,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Developed a full-stack project, implementing responsive design."
      ],
      tags: ["React.js", "JavaScript", "Html", "SCSS", "Tailwind", "Git", "Google Apps Script"],
    },
  ];
  
  
  const projects = [
    {
      name: "Oculus",
      description: "The site serves for users to explore Oculus services, tailored for virtual reality experiences. Project was completed with educational aim.",
      tags: [
        {
          name: "javascript",
        },
        {
          name: "css",
        },
      ],
      image: oculus,
      imageWebp: oculusWebp,
      source_code_link: "https://github.com/Sierra555/Oculus",
    },
    {
      name: "Comfort Masters",
      description:
        "The site enables users to get the estimation of reconstruction price, check the testimonials and view the services catalog.",
      tags: [
        {
          name: "javascript",
        },
        {
          name: "node.js",
        },
        {
          name: "scss",
        },
      ],
      image: comfortmasters,
      imageWebp: comfortmastersWebp,
      source_code_link: "https://github.com/Sierra555/comfort-masters",
    },
    {
      name: "Portfolio",
      description:
        "Here you can check the source code of the current portfolio.",
      tags: [
        {
          name: "react",
        },
        {
          name: "reactThree",
        },
        {
          name: "tailwind",
        },
      ],
      image: portfolio,
      imageWebp: portfolioWebp,
      source_code_link: "https://github.com/Sierra555/Oculus",
    }, 
    {
      name: "Desire",
      description:
        "A comprehensive platform that allows users to browse the furniture catalog, visit the store blog, and leave a message. Project was completed with educational aim.",
      tags: [
        {
          name: "javascript",
        },
        {
          name: "scss",
        },
      ],
      image: desire,
      imageWebp: desireWebp,
      source_code_link: "https://github.com/Sierra555/desire",
    },
    {
      name: "REST Countries API",
      description:
        "Web application that enables users to search for a country, filter by region, toggle the color scheme between light and dark mode.",
      tags: [
        {
          name: "react",
        },
        {
          name: "restapi",
        },
        {
          name: "scss",
        },
      ],
      image: countries,
      imageWebp: countriesWebp,
      source_code_link: "https://github.com/Sierra555/rest-countries-api-with-color-theme-switcher-master",
    }, 
    {
      name: "Blog Project",
      description: "It is an interactive MDX-based blog using Next.js. This project is provided as part of the Joy of React course",
      tags: [
        {
          name: "next.js",
        },
        {
          name: "mdx",
        },
        {
          name: "framer-motion",
        },
      ],
      image: blog,
      imageWebp: blogWebp,
      source_code_link: "https://github.com/Sierra555/project-blog-main/tree/main",
    },  
  ];
  
  export { services, experiences, projects };