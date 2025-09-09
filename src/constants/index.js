import {
	mobile,
	mobileWebp,
	creator,
	creatorWebp,
	web,
	webWebp,
	boosta,
	sombra,
	freelance,
	desire,
	techstore,
	lpg,
	learnVue,
	findjob,
	airbnb,
	oculus,
	countries,
	companies,
	comfortmasters,
	portfolio,
	blog,
	ticket,
	lpgWebp,
	chatAi,
	mern,
	learnVueWebp,
	findjobWebp,
	techstoreWebp,
	airbnbWebp,
	desireWebp,
	oculusWebp,
	countriesWebp,
	companiesWebp,
	comfortmastersWebp,
	portfolioWebp,
	blogWebp,
	ticketWebp,
	chatAiWebp,
	mernWebp,
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
			"Developed a website from scratch and successfully integrated it within an existing project, ensuring seamless functionality and user experience.",
		],
		tags: [
			"TypeScript",
			"React.js",
			"jQuery",
			"JavaScript",
			"Twig",
			"SCSS",
			"Git",
			"Docker",
			"Figma",
		],
	},
	{
		title: "Fronted Developer",
		company_name: "Freelance",
		icon: freelance,
		iconBg: "#E6DEDD",
		date: "Jan 2024 - Jan 2025",
		points: [
			"Developed a full-stack project for a building reconstruction company, an accessible and responsive custom website with a high performance.",
			"Created a personal portfolio using React, React-three to showcase projects and skills, enhancing visibility to potential clients and employers.",
			"Developed a full-stack commericial project, utilizing Next.js, MongoDb, Prisma, Nodemailer. Presentation website aimed at promoting through Google Ads.",
			"Developed an e-commerce shopping platform using Next.js with integrated sandbox environments for PayPal and Stripe payment methods, ensuring secure and seamless transactions.",
			"Built a non-commercial full-stack home rent web application using the latest web development technologies including Next.js, Tailwind, Prisma, MongoDB, and NextAuth",
		],
		tags: [
			"React.js",
			"Next.js",
			"TypeScript",
			"JavaScript",
			"Tailwind",
			"SCSS",
			"Git",
			"Google Apps Script",
		],
	},
	{
		title: "Software Engineer",
		company_name: "Sombra",
		icon: sombra,
		iconBg: "#E6DEDD",
		date: "Feb 2025 - Present",
		points: [
			"Worked on corporate website development project, rebuilding the existing Sombra website with a new design and WordPress integration for streamlined content management.",
			"Implemented a fully adaptive design using Tailwind CSS, SCSS, and JavaScript, with a strong focus on accessibility, performance, and cross-browser compatibility.",
			"Contributed to PHP code for dynamic HTML generation and Gutenberg block integration, supporting flexible and modular content editing",
			"Worked closely with the marketing team, supporting them in content migration to the new WordPress-based CMS.",
			"Customized the WordPress dashboard to simplify content updates and empower non-technical users to manage pages independently.",
		],
		tags: [
			"JavaScript",
			"WordPress",
			"PHP",
			"Tailwind CSS",
			"SCSS",
			"Git",
			"Figma",
		],
	},
];

const projects = [
	{
		name: "MERN Authentication boilerplace",
		description:
			"This is a starter app for a MERN stack application with authentication",
		tags: [
			{
				name: "Node.js(Express)",
			},
			{
				name: "MongoDB",
			},
			{
				name: "React.js",
			},
			{
				name: "React-Bootstrap",
			},
		],
		image: mern,
		imageWebp: mernWebp,
		source_code_link:
			"https://github.com/Sierra555/mern/tree/main",
		app_link: "https://mern-24ql.onrender.com/",
	},
	{
		name: "Chat-ai",
		description:
			"A full stack app that works similar to ChatGPT and answers prompts and keeps the context throughout the conversation, based on Gemini AI",
		tags: [
			{
				name: "vue.js",
			},
			{
				name: "express",
			},
			{
				name: "typescript",
			},
			{
				name: "neon db",
			},
			{
				name: "prisma",
			},
			{
				name: "tailwind",
			},
			{
				name: "pinia",
			},
		],
		image: chatAi,
		imageWebp: chatAiWebp,
		source_code_link:
			"https://github.com/Sierra555/chat-ai-api",
		app_link: "https://chat-ai-ui-azure.vercel.app/",
	},
	{
		name: "Techstore",
		description:
			"An e-commerce shopping platform using Next.js with integrated sandbox environments for PayPal and Stripe payment methods, ensuring secure and seamless transactions. In development 🛠️",
		tags: [
			{
				name: "next.js",
			},
			{
				name: "typescript",
			},
			{
				name: "prisma",
			},
			{
				name: "tailwind",
			},
			{
				name: "shadcn/ui",
			},
		],
		image: techstore,
		imageWebp: techstoreWebp,
		source_code_link:
			"https://github.com/Sierra555/techstore",
		app_link: "https://techstore-woad.vercel.app/",
	},
	{
		name: "Ticket system",
		description:
			"A simple and fast support ticket system built with Next.js 14, TypeScript, Prisma ORM, Neon Postgres database, and Sentry for error tracking and performance monitoring.",
		tags: [
			{
				name: "next.js",
			},
			{
				name: "typescript",
			},
			{
				name: "sentry",
			},
			{
				name: "neon db",
			},
			{
				name: "prisma",
			},
		],
		image: ticket,
		imageWebp: ticketWebp,
		source_code_link:
			"https://github.com/Sierra555/ticket-system",
		app_link:
			"https://ticket-system-b1r1yqvjc-sierra555s-projects.vercel.app/",
	},
	{
		name: "Rent Home App",
		description:
			"The site connects hosts who have accommodations or activities to offer with guests looking for unique places to stay or things to do",
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
		source_code_link:
			"https://github.com/Sierra555/my-airbnb",
		app_link: "https://rent-properties-eight.vercel.app/",
	},
	{
		name: "GasMaster",
		description:
			"The site provides info about lpg service and the form to contact the master",
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
		source_code_link:
			"https://github.com/Sierra555/lpg-service",
		app_link: "https://gas-master.vercel.app/",
	},
	{
		name: "Find Job",
		description:
			"Find Vue Job is a job listing application to find or post a job vacancies.",
		tags: [
			{
				name: "vue.js",
			},
			{
				name: "express",
			},
			{
				name: "mongoDb",
			},
			{
				name: "tailwind",
			},
		],
		image: findjob,
		imageWebp: findjobWebp,
		source_code_link:
			"https://github.com/Sierra555/my-vue-app",
		app_link: "https://find-vue-job.onrender.com/",
	},
	{
		name: "Learn Vue with AI",
		description:
			"Platform, which integrates with an AI service to generate various types of coding tasks related to Vue.js 3.",
		tags: [
			{
				name: "vue.js",
			},
			{
				name: "express",
			},
			{
				name: "node.js",
			},
			{
				name: "tailwind",
			},
			{
				name: "primevue/ui",
			},
		],
		image: learnVue,
		imageWebp: learnVueWebp,
		source_code_link:
			"https://github.com/Sierra555/learn-vue-app",
		app_link: "https://learn-vue-app.onrender.com/",
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
		source_code_link:
			"https://github.com/Sierra555/comfort-masters",
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
		source_code_link:
			"https://github.com/Sierra555/My-portfolio",
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
		source_code_link:
			"https://github.com/Sierra555/rest-countries-api-with-color-theme-switcher-master",
		app_link:
			"https://rest-countries-api-with-color-theme-switcher-master-lake.vercel.app/",
	},
	{
		name: "Oculus",
		description:
			"The site serves for users to explore Oculus services, tailored for virtual reality experiences. Project was completed with educational aim. Non-commercial",
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
		source_code_link:
			"https://github.com/Sierra555/companies",
		app_link: "https://companies-mosaic-app.vercel.app/",
	},
	{
		name: "Blog Project",
		description:
			"It is an interactive MDX-based blog using Next.js. This project is provided as part of the Joy of React course",
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
		source_code_link:
			"https://github.com/Sierra555/project-blog-main/tree/main",
	},
];

export { services, experiences, projects };
