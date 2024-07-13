export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience"},
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Explore my portfolio to see what I can do",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] ", 
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/work.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
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
    // title: "I am an experienced Frontend Developer proficient in Next.js and React.js. My expertise in Tailwind CSS allows me to craft visually appealing and highly functional designs.",
    description: "Who am I?",
    title: "I am a dedicated frontend developer with a passion for creating seamless web experiences",
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

export const getProjectById = (id:number) => {
  return projects.find(project => project.id === id);
}

export const projects = [
  {
    id: 1,
    title: "Amanyaman Travel Insurance",
    subtitle: "Travel Insurance Reinvented: Amanyaman’s Journey to Seamless Protection and Booking",
    overview: `Amanyaman aims to revolutionize the travel insurance market in Indonesia by integrating insurance services with flight and travel package bookings. The main goal was to develop a robust, user-friendly system for both sales and claims processes. Key features include:
    A Sales App for travel agents to offer insurance alongside booking flights and packages.
    A Claim App for clients to submit insurance claims with supporting documents.
    A comprehensive backend system using Java Spring Boot microservices and a frontend built with React and Tailwind CSS.
    Key outcomes include streamlined insurance sales, automated claim processing, and an improved user experience for both travel agents and clients.`,
    problem: `To provide a seamless and integrated platform for travel insurance services that combines insurance sales with travel bookings, enhancing the convenience for travel agents and clients.`,
    reflection:"",
    learning:"",
    challenge:"",
    future:"",
    des: "Developed the App for Amanyaman, a travel insurance company, enabling travel agents to offer various travel insurance plans. The application supports personal, family, and group insurance options for both domestic and international travel",
    img: ["/porto1.png", "/porto1_1.png", "/porto1_2.png", "/porto1_3.png", "/porto1_4.png"],
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/gsap.svg", "/chakra.svg"],
    link: ["https://sales-amanyaman.vercel.app", "https://claim-amanyaman.vercel.app"],
  },
  {
    id: 2,
    title: "Agrodana Client Area",
    subtitle: "Travel Insurance Reinvented: Amanyaman’s Journey to Seamless Protection and Booking",
    overview: `Developed the Client Area website application, serving as a portal for users to log in and create trading accounts. The application integrates with MetaTrader 4 and MetaTrader 5, allowing users to deposit and withdraw trading profits seamlessly.`,
    des: "Developed the Client Area website application, serving as a portal for users to log in and create trading accounts. The application integrates with MetaTrader 4 and MetaTrader 5, allowing users to deposit and withdraw trading profits seamlessly.",
    img: ["/porto2.png"],
    iconLists: ["/thymeleaf.png", "/springio-icon.svg", "/java.svg"],
    link: ["https://clientarea.agrodana-futures.com"],
  },
  {
    id: 3,
    title: "Blockleader.io",
    subtitle: "Pioneer the future with AI and Blockchain",
    overview: `To provide a seamless and integrated platform for travel insurance services that combines insurance sales with travel bookings, enhancing the convenience for travel agents and clients.`,
    problem: `To provide a seamless and integrated platform for travel insurance services that combines insurance sales with travel bookings, enhancing the convenience for travel agents and clients.`,
    des: "BlockLeader.io, a comprehensive platform highlighting our team's portfolio",
    img: ["/porto3.png"],
    iconLists: ["/next.svg", "/re.svg", "/css.svg", "/ts.svg"],
    link: ["https://blockleader.io"],
  },
  {
    id: 4,
    title: "Devlegion.io",
    subtitle: "AI Powered, Integrity Driven, Full Stack Development",
    overview: `Web application that allows clients to view reports on the work completed`,
    // problem: `To provide a seamless and integrated platform for travel insurance services that combines insurance sales with travel bookings, enhancing the convenience for travel agents and clients.`,
    des: "Developed a web application that allows clients to view reports on the work completed",
    img: ["/porto4.png"],
    iconLists: ["/next.svg", "/re.svg", "/css.svg", "/ts.svg"],
    link: ["https://devlegion.io"],
  },
  {
    id: 5,
    title: "onxdc.io",
    subtitle: "A Central HUB for XDC Community",
    // overview: `To provide a seamless and integrated platform for travel insurance services that combines insurance sales with travel bookings, enhancing the convenience for travel agents and clients.`,
    // problem: `To provide a seamless and integrated platform for travel insurance services that combines insurance sales with travel bookings, enhancing the convenience for travel agents and clients.`,
    des: "Developed a A Central HUB for the XDC Community",
    img: ["/porto5.png"],
    iconLists: ["/next.svg", "/re.svg", "/css.svg", "/ts.svg"],
    link: ["https://onxdc.io"],
  },
  {
    id: 6,
    title: "d0p3clubnft",
    subtitle: "Multichain NFT Project",
    overview: `DØP3 Club NFT is a multi-chain NFT projet minting exclusive collections across every major blockchain.`,
    // problem: `To provide a seamless and integrated platform for travel insurance services that combines insurance sales with travel bookings, enhancing the convenience for travel agents and clients.`,
    des: "Developed a UI Project to minting NFT",
    img: ["/porto6.png"],
    iconLists: ["/next.svg", "/re.svg", "/css.svg", "/ts.svg"],
    link: ["https://www.d0p3clubnft.com"],
  },
  {
    id: 7,
    title: "Ebase",
    // subtitle: "Travel Insurance Reinvented: Amanyaman’s Journey to Seamless Protection and Booking",
    // overview: `Amanyaman aims to revolutionize the travel insurance market in Indonesia by integrating insurance services with flight and travel package bookings. The main goal was to develop a robust, user-friendly system for both sales and claims processes. Key features include:
    // A Sales App for travel agents to offer insurance alongside booking flights and packages.
    // A Claim App for clients to submit insurance claims with supporting documents.
    // A comprehensive backend system using Java Spring Boot microservices and a frontend built with React and Tailwind CSS.
    // Key outcomes include streamlined insurance sales, automated claim processing, and an improved user experience for both travel agents and clients.`,
    // problem: `To provide a seamless and integrated platform for travel insurance services that combines insurance sales with travel bookings, enhancing the convenience for travel agents and clients.`,
    des: "Developed a web application that allows user to interact smart contract from web UI",
    img: ["/porto7.png", "/porto7_1.png"],
    iconLists: ["/next.svg", "/re.svg", "/css.svg", "/ts.svg"],
    link: ["https://ebase-qa.vercel.app"]
  },
  {
    id: 8,
    title: "Trublox",
    subtitle: "Experience Unparalleled Security with Blockchain-Powered Document Management",
    overview: `Effortless Document Workflow with Seamless Integration and Unassailable Trust`,
    // problem: `To provide a seamless and integrated platform for travel insurance services that combines insurance sales with travel bookings, enhancing the convenience for travel agents and clients.`,
    des: "Developed a platform for integrating NFTs into legal documents.",
    img: ["/porto8.png", "/porto8_1.png"],
    iconLists: ["/next.svg", "/re.svg", "/css.svg", "/ts.svg"],
    link: ["https://trublox-ui.vercel.app"]
  },
  {
    id: 9,
    title: "Anime Banks",
    subtitle: "Journey Through the Fascinating Anime Universe",
    overview: `Anime Banks, a personal project showcasing a list of popular anime titles`,
    // problem: `To provide a seamless and integrated platform for travel insurance services that combines insurance sales with travel bookings, enhancing the convenience for travel agents and clients.`,
    des: "Developed Anime Banks, a personal project showcasing a list of popular anime titles",
    img: ["/porto9.png"],
    iconLists: ["/next.svg", "/re.svg", "/css.svg", "/ts.svg"],
    link: ["https://anime-banks.vercel.app"]
  },
    {
    id: 10,
    title: "Nike Landing Page",
    subtitle: "Travel Insurance Reinvented: Amanyaman’s Journey to Seamless Protection and Booking",
    overview: `Amanyaman aims to revolutionize the travel insurance market in Indonesia by integrating insurance services with flight and travel package bookings. The main goal was to develop a robust, user-friendly system for both sales and claims processes. Key features include:
    A Sales App for travel agents to offer insurance alongside booking flights and packages.
    A Claim App for clients to submit insurance claims with supporting documents.
    A comprehensive backend system using Java Spring Boot microservices and a frontend built with React and Tailwind CSS.
    Key outcomes include streamlined insurance sales, automated claim processing, and an improved user experience for both travel agents and clients.`,
    problem: `To provide a seamless and integrated platform for travel insurance services that combines insurance sales with travel bookings, enhancing the convenience for travel agents and clients.`,
    des: "Developed a personal project, the Nike Clone, to replicate the user interface and functionality of the Nike website",
    img: ["/porto10.png"],
    iconLists: ["/next.svg", "/re.svg", "/css.svg", "/ts.svg"],
    link: ["https://nike-clone-dusky.vercel.app/"]
  },
];

export const otherProjects = [
  {
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 2,
    title: "Fullstack Developer",
    company: "ATI Business Group",
    date: "December 2015 - Now",
    desc: "Designed and developed RESTful APIs and microservices using Java Spring Boot, ensuring high performance and scalability. Implemented frontend solutions with React and Next.js.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.png",
  },
  {
    id: 3,
    title: "Frontend Developer (Remote)",
    company: "Freelance",
    desc: "Converted Figma designs into clean and efficient React components for web applications. Communicated effectively with clients worldwide to understand and meet design expectations.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp1.svg",
  },
  {
    id: 4,
    title: "Lead Developer (Remote)",
    company: "Blockleader.io",
    date: "March 2021 - March 2023",
    desc: "Managed a team of frontend and backend developers, ensuring code quality, performance, and adherence to project timelines.",
    className: "md:col-span-2",
    thumbnail: "/exp3.png",
  },
  {
    id: 1,
    title: "Frontend Developer (Remote)",
    company: "Rootkit.finance",
    date: "September 2020 - March 2021",
    desc: "Developed and maintained web applications using HTML, CSS, JavaScript, and frameworks like React.js and Next.js.",
    className: "md:col-span-2",
    thumbnail: "/exp1.png",
  },
  {
    id: 5,
    title: "Android Developer",
    company: "Adfin Bureau Indonesia",
    date: "January 2015 - December 2015",
    desc: "Design, implement and maintain Java Android Application. Take part in software and architectural development activities",
    className: "md:col-span-2",
    thumbnail: "/exp5.png",
  },
    {
    id: 5,
    title: "Frontend Developer",
    company: "Carsurin",
    date: "December 2012 - December 2013",
    desc: "Design, implement Laboratory Information Management System using HTML, CSS, Javascript and jQUery",
    className: "md:col-span-2",
    thumbnail: "/exp6.png",
  },

];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/billy93"
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/billy_impact"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://linkedin.com/in/billy93"
  },
];
