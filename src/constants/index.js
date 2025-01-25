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
    lpg,
    airbnb,
    oculus,
    countries,
    companies,
    comfortmasters,
    portfolio,
    blog,
    lpgWebp,
    airbnbWebp,
    desireWebp,
    oculusWebp,
    countriesWebp,
    companiesWebp,
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
        "Developed a website from scratch and successfully integrated it within an existing project, ensuring seamless functionality and user experience."
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
        "Developed a full-stack project for a building reconstruction company, an accessible and responsive custom website with a high performance.",
        "Created a personal portfolio using React, React-three to showcase projects and skills, enhancing visibility to potential clients and employers.",
        "Developed a full-stack commericial project, utilizing Next.js, MongoDb, Prisma, Nodemailer. Presentation website aimed at promoting through Google Ads.",
        "Developed an e-commerce shopping platform using Next.js with integrated sandbox environments for PayPal and Stripe payment methods, ensuring secure and seamless transactions.",
      ],
      tags: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind", "SCSS",  "Git", "Google Apps Script"],
    },
  ];
  
  
  const projects = [
    {
      name: "GasMaster",
      description: "The site provides info about lpg service and the form to contact the master",
      tags: [
        {
          name: "next.js",
        },
        {
          name: "typescript",
        },
        {
          name: "mongoDb",
        },
        {
          name: "prisma",
        },
        {
          name: "tailwind",
        },
        {
          name: "nodemailer",
        },
      ],
      image: lpg,
      imageWebp: lpgWebp,
      source_code_link: "https://github.com/Sierra555/lpg-service",
      app_link: "https://gas-master.vercel.app/",
    },
    {
      name: "Rent Home App",
      description: "The site connects hosts who have accommodations or activities to offer with guests looking for unique places to stay or things to do",
      tags: [
        {
          name: "next.js",
        },
        {
          name: "typescript",
        },
        {
          name: "mongoDb",
        },
        {
          name: "prisma",
        },
        {
          name: "tailwind",
        },
      ],
      image: airbnb,
      imageWebp: airbnbWebp,
      source_code_link: "https://github.com/Sierra555/my-airbnb",
      app_link: "https://rent-properties-eight.vercel.app/",
    },
    {
      name: "Comfort Masters",
      description:
        "The site enables users to get the estimation of reconstruction price, check the testimonials and view the services catalog. *SSL certificates are on the domain owner side",
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
      app_link: "https://comfortmasters.org/",
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
      source_code_link: "https://github.com/Sierra555/My-portfolio",
      app_link: "https://my-portfolio-nu-green.vercel.app/",
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
      app_link: "https://rest-countries-api-with-color-theme-switcher-master-lake.vercel.app/",
    }, 
    {
      name: "Oculus",
      description: "The site serves for users to explore Oculus services, tailored for virtual reality experiences. Project was completed with educational aim. Non-commercial",
      tags: [
        {
          name: "javascript",
        },
        {
          name: "html5",
        },
        {
          name: "css3",
        },
      ],
      image: oculus,
      imageWebp: oculusWebp,
      source_code_link: "https://github.com/Sierra555/Oculus",
      app_link: "https://oculus-blush.vercel.app/",
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
          name: "html5",
        },
        {
          name: "scss",
        },
      ],
      image: desire,
      imageWebp: desireWebp,
      source_code_link: "https://github.com/Sierra555/desire",
      app_link: "https://desire-ynho.vercel.app/",
    },
    {
      name: "Companies Mosaic",
      description:
        "A web application built with React and Tailwind CSS that displays information on companies using a customizable mosaic layout.",
      tags: [
        {
          name: "react-mosaic.ts",
        },
        {
          name: "tailwind",
        },
        {
          name: "docker",
        },
      ],
      image: companies,
      imageWebp: companiesWebp,
      source_code_link: "https://github.com/Sierra555/companies",
      app_link: "https://companies-mosaic-app.vercel.app/",
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