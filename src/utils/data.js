import {
    FaReact,
    FaHtml5,
    FaCss3,
    FaNodeJs,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa"
import {BiLogoJavascript} from "react-icons/bi"
import {SiExpress, SiCoreldraw, SiMongodb, SiMysql, SiWebpack} from "react-icons/si"
import {
    VscVscode,
    VscCommentUnresolved,
    VscTerminalPowershell,
} from "react-icons/vsc"
import { FaGitAlt, FaTwitter, FaDribbble } from "react-icons/fa"
import {MdGroup} from "react-icons/md"
import PROJECT_IMG_1 from "../assets/images/image1.png"
import PROJECT_IMG_2 from "../assets/images/image2.png"
import PROJECT_IMG_3 from "../assets/images/image3.png"
import PROJECT_IMG_4 from "../assets/images/image.png"
import PROJECT_IMG_5 from "../assets/images/image5.png"
import PROJECT_IMG_6 from "../assets/images/image4.png"
import PROJECT_IMG_7 from "../assets/images/image6.jpg"
import PROJECT_IMG_8 from "../assets/images/image7.jpg"
import PROJECT_IMG_9 from "../assets/images/imageApp.jpg"
import DESIGN_IMG_1 from "../assets/images/designimage1.jpg"
import DESIGN_IMG_2 from "../assets/images/designimage2.jpg"
import DESIGN_IMG_3 from "../assets/images/designimage3.jpg"
import DESIGN_IMG_4 from "../assets/images/designimage4.jpg"
import DESIGN_IMG_5 from "../assets/images/designimage5.jpg"
import DESIGN_IMG_6 from "../assets/images/designimage6.jpg"
import DESIGN_IMG_7 from "../assets/images/designimage7.jpg"
import DESIGN_IMG_8 from "../assets/images/designimage8.jpg"
import DESIGN_IMG_9 from "../assets/images/designimage9.jpg"
import DESIGN_IMG_10 from "../assets/images/designimage10.jpg"
import DESIGN_IMG_11 from "../assets/images/designimage11.jpg"
import DESIGN_IMG_12 from "../assets/images/designimage12.jpg"
import DESIGN_IMG_13 from "../assets/images/designimage13.jpg"
import DESIGN_IMG_14 from "../assets/images/designimage14.jpg"
import DESIGN_IMG_15 from "../assets/images/designimage15.jpg"
import DESIGN_IMG_16 from "../assets/images/designimage16.jpg"
import DESIGN_IMG_17 from "../assets/images/designimage17.jpg"
import DESIGN_IMG_18 from "../assets/images/designimage18.jpg"
import DESIGN_IMG_19 from "../assets/images/designimage19.jpg"
import DESIGN_IMG_20 from "../assets/images/designimage20.jpg"
import DESIGN_IMG_21 from "../assets/images/designimage21.jpg"
import DESIGN_IMG_22 from "../assets/images/designimage22.jpg"
import DESIGN_IMG_23 from "../assets/images/designimage23.jpg"
import DESIGN_IMG_24 from "../assets/images/Liveth.jpg"
import DESIGN_IMG_25 from "../assets/images/ELLA_NAAS.jpg"
import DESIGN_IMG_26 from "../assets/images/madam_Ify.jpg"
import react from "../assets/images/react-removebg-preview.png"
import html from "../assets/images/html-removebg-preview.png"
import css from "../assets/images/css-removebg-preview.png"
import js from "../assets/images/Js-removebg-preview.png"
import corel from "../assets/images/corel-removebg-preview.png"
import vs from "../assets/images/visual-studio-code-removebg-preview.png"
import git from "../assets/images/github.png"
import node from "../assets/images/nodejsDark.jpg"
import express from "../assets/images/express.jpg"
import mongo from "../assets/images/mongo.jpg"


export const PAGES = [
    {
      id: "01",
      label: "HomePage",
      path: "/home",
    },

    {
        id: "02",
        label: "ViewallWorks",
        path: "/viewall",
      },
]

export const MENU_LINKS = [
    {id: "01", label: "Home", offset: -100, to: "hero", path: "/#hero" },
    {id: "02", label: "Skills", offset: -80, to: "skills", path: "/#skills"},
    {id: "03", label: "About Me", offset: -80, to: "about", path: "/#about"},
    {id: "04", label: "Projects", offset: -80, to: "projects", path: "/#projects"},
    {id: "05", label: "Contact", offset: -80, to: "contact", path: "/#contact"},
]

export const STATS = [
    {id: "01", count: "4+", add: "+", label: `Years of \nExperience`},
    {id: "02", count: "4", label: `Certifications \nEarned`},
    {id: "03", count: "29+", add: "+", label: `Projects \nCompleted`},
    {id: "04", count: "19", label: `Happy  \nClients`},
]

export const SKILL_TABS = [
    {id: "01", label: "All", value: "all"},
    {id: "02", label: "Frontend", value: "frontend"},
    {id: "03", label: "Backend", value: "backend"},
    // {id: "03", label: "Design", value: "graphic-design"},
    {id: "04", label: "Tools", value: "tools"},
    {id: "05", label: "Skills", value: "soft-skills"},
]

export const SKILLS = [
    {
        id: "01",
        icon: FaReact,
        skill: "React JS",
        progress: 95,
        type: "frontend",
        description:
        "Experienced in building scalable, component-driven web applications using React.Js"
    },

    {
        id: "02",
        icon: FaHtml5,
        skill: "HTML",
        progress: 99,
        type: "frontend",
        description:
        "Expert in structuring web content with semantic HTML, ensuring accessibility and SEO optimization."
    },

    {
        id: "03",
        icon: FaCss3,
        skill: "CSS",
        progress: 90,
        type: "frontend",
        description:
        "Proficient in designing visually appealing and responsive layouts using CSS and pre-processors"
    },

    {
        id: "04",
        icon: BiLogoJavascript,
        skill: "JavaScript",
        progress: 88,
        type: "frontend",
        description:
        "Skilled in writing clean, moudles and sufficient JavaScript code to creat interactive web functions"
    },

    {
        id: "05",
        icon: FaNodeJs,
        skill: "Node JS",
        progress: 75,
        type: "backend",
        description:
        "Skilled in building scalable and high-performance server-side applications using Node.js."
    },

    {
        id: "06",
        icon: SiExpress,
        skill: "Express JS",
        progress: 78,
        type: "backend",
        description:
        "Proficient in developing RESTFUL APIs and middleware using Express.js."
    },

    {
        id: "07",
        icon: SiMongodb,
        skill: "MongoDB",
        progress: 90,
        type: "backend",
        description:
        "Experienced in designing and managing NoSql databases using MongoDB. Skilled in schema design."
    },

    // {
    //     id: "08",
    //     icon: SiMysql,
    //     skill: "SQL",
    //     progress: 90,
    //     type: "backend",
    //     description:
    //     "Proficient in working with relation databases using SQL, Experienced in writing complex queries."
    // },
    
    {
        id: "09",
        icon: VscTerminalPowershell,
        skill: "RESTful APIs & JSON",
        progress: 75,
        type: "soft-skills",
        description:
        "Proficient in developing RESTFUL APIs and middleware using Express.js."
    },

    {
        id: "10",
        icon: FaGitAlt,
        skill: "Git & Github",
        progress: 75,
        type: "tools",
        description:
        "Experienced in version control and colloborative development using Git and Github. Proficient in branching strategies, pull requests and maintaining clean commit histories"
    },

    {
        id: "11",
        icon: SiCoreldraw,
        skill: "CorelDraw",
        progress: 98,
        type: "tools",
        description:
        "Well versed in using Corel Draw in designing vector illustrations, branding materials, UI components, and print media that communicate effectively."
    },

    {
        id: "12",
        icon: VscVscode,
        skill: "Visual Studio Code",
        progress: 95,
        type: "tools",
        description:
        "Well versed in using Visual Studio Code with custom extensions and debugging tools for a smooth development workflow. Optimized for productivity with shortcuts and automation"
    },
    {
        id: "13",
        icon: MdGroup,
        skill: "Collaboration",
        progress: 95,
        type: "soft-skills",
        description:
        "Experienced in working within teams, contributing ideas and integrating feedback. Effective communication ensures smooth project execution and shared success"
    },

    // {
    //     id: "14",
    //     icon: SiCoreldraw,
    //     skill: "CorelDraw",
    //     progress: 98,
    //     type: "graphic-design",
    //     description:
    //     "Well versed in using Corel Draw in designing vector illustrations, branding materials, UI components, and print media that communicate effectively."
    // },
]

export const ABOUT_ME = {
    content: `My Name is Chibueze Ndubuisi Adibe and i am a passionate Frontend Developer and Graphics Designer   with a deep understanding of how design and functionality come together to create engaging user experiences. My expertise in React.js allows me to develop dynamic, high-performance web applications, while my proficiency in CorelDraw helps me design visually stunning graphics that elevate brands.
    
    \nWith a keen eye for detail and problem-solving mindset, i thrive on transforming ideas into interactive digital solutions that are not only aesthetically appealing but also highly functional. Whether it's building responsive websites, or designing captivating visuals, I am committed to delivering high-quality work that meets user needs and industry standards.`,
    socialLinks: [
        {
            id: "01", label: "Facebook", icon: FaFacebook, Link: "https://facebook.com/paul.adibe.754",
        },
        {
            id: "02", label: "Instagram", icon: FaInstagram, Link: "https://instagram.com/paul.adibe.754",
        },
        {
            id: "03", label: "Twitter", icon: FaTwitter, Link: "https://twitter.com/paul_adibe",
        },
        {
            id: "04", label: "LinkedIn", icon: FaLinkedin, Link: "https://linkedin.com/in/chibueze-adibe-280126282",
        }, 
        // {
        //     id: "01", label: "Dribble", icon: FaDribbble, Link: "#",
        // },
    ],
    email: "Email",
    phone: "Phone Number",
    website: "paulofph.onrender.com",
    instagram: "Instagram",
    github: "Github"
}

export const PROJECTS = [
    {
        id: 1,
        title:
            "Undergraduate Project Full Stack Anonymous Poll App | MongoDB, Express, React JS, Node JS, CSS",
            image: PROJECT_IMG_1,
            tags:["REACT","CSS", "NODE.JS", "EXPRESS.JS", "MongoDB"],
            Link:"https://pollapp-ovb9.onrender.com"
    },
    {
        id: 5,
        title:
            "ImageApp Project | REACT JS, CSS, NODE JS, EXPRESS JS, CLOUDINARY, MONGO DB",
            image: PROJECT_IMG_9,
            tags:["REACT JS", "CSS", "NODE JS", "EXPRESS JS", "CLOUDINARY", "MONGO DB"],
            Link:"https://imageapp-8ufl.onrender.com",
    },

    {
        id: 2,
          title:
            "API PROJECTS  | REACT JS, CSS, API'S",
            image: PROJECT_IMG_8,
            tags:["React", "CSS", "HARRY POTTER API", "NEWS API"],
            Link:"https://github.com/Paul1ofph/ChurchLocator",
    },
    {
        id: 3,
         title:
            "Bento Box Design Layout | REACT JS, CSS,",
            image: PROJECT_IMG_7,
            tags:["REACT", "CSS",],
            Link:"https://github.com/Paul1ofph/betobox",
    },

    {
        id: 4,
        title:
            "Atech Books | REACT JS, CSS",
            image: PROJECT_IMG_5,
            tags:["REACT", "CSS"],
            Link:"https://reactproject-b07j.onrender.com",
    },
    {
        id: 6,
        title:
            "Atech Image | HTML, CSS, JAVASCRIPT",
            image: PROJECT_IMG_6,
            tags:["HTML", "CSS", "JAVASCRIPT"],
            Link:"https://reactproject-b07j.onrender.com",
    },

    {
        id: 7,
        title:
            "Group Hackathon landing page Project for MRsoft furniture store | HTML, CSS, JAVASCRIPT",
            image: PROJECT_IMG_2,
            tags:["HTML", "CSS", "JAVASCRIPT"],
            Link:"https://hackathon-t5nl.onrender.com",
    },

    {
        id: 8,
        title:
            "Landing Page for a WristWatch Brand | HTML, CSS, JAVASCRIPT",
            image: PROJECT_IMG_3,
            tags:["HTML", "CSS", "JAVASCRIPT"],
            Link:"https://zircon-accesories.onrender.com",
    },
    {
        id: 9,
        title:
            "Group Hackathon Budget Calculator Project | HTML, CSS, JAVASCRIPT",
            image: PROJECT_IMG_4,
            tags:["HTML", "CSS", "JAVASCRIPT"],
            Link:"https://budget-calculator-azaa.onrender.com",
    },

]

export const DESIGNPROJECTS = [
    {
        id: 1,
        title:
            "ATECH GRAPHICS BRAND Flyer Design | Corel Draw",
            image: DESIGN_IMG_1,
            tags:["Corel Draw"],
    },

    {
        id: 2,
        title:
            "MIPO GADGETS BRAND Flyer Design | Corel Draw",
            image: DESIGN_IMG_2,
            tags:["Corel Draw"],
    },

    {
        id: 3,
        title:
            "Tricees Couture BRAND Flyer Design | Corel Draw",
            image: DESIGN_IMG_24,
            tags:["Corel Draw"],
    },
    {
        id: 4,
        title:
            "National Association of Adventist Students (NAAS) OGUN ZONE | Corel Draw",
            image: DESIGN_IMG_25,
            tags:["Corel Draw"],
    },
    {
        id: 5,
        title:
            "Code Explorer Summer Code Camp | Corel Draw",
            image: DESIGN_IMG_26,
            tags:["Corel Draw"],
    },

    //{
        //id: 6,
        //title:
          //  "MIPO GADGETS BRAND Flyer Design | Corel Draw",
            //image: DESIGN_IMG_6,
            //tags:["Corel Draw"],
  //  },

 //   {
        //id: 7,
        //title:
         //   "MIPO GADGETS BRAND Flyer Design | Corel Draw",
            //image: DESIGN_IMG_7,
            //tags:["Corel Draw"],
    //},

    {
        id: 8,
        title:
            "NAILS BY PRESH-WALTZ BRAND Flyer Design | Corel Draw",
            image: DESIGN_IMG_8,
            tags:["Corel Draw"],
    },

    {
        id: 9,
        title:
            "SOU_SLEEK BRAND Logo Design | Corel Draw",
            image: DESIGN_IMG_9,
            tags:["Corel Draw"],
    },

    // {
    //     id: 10,
    //     title:
    //         "MIPO GADGETS BRAND Business Card Design | Corel Draw",
    //         image: DESIGN_IMG_10,
    //         tags:["Corel Draw"],
    // },

    {
        id: 11,
        title:
            "ZINA MEDIA BRAND Flyer Design | Corel Draw",
            image: DESIGN_IMG_11,
            tags:["Corel Draw"],
    },

    {
        id: 12,
        title:
            "NIGERIAN ASSOCIATION OF ADVENTIST STUDENTS (NAAS) ADELEKE UNIVERSITY CHAPTER Flyer Design | Corel Draw",
            image: DESIGN_IMG_12,
            tags:["Corel Draw"],
    },

    {
        id: 13,
        title:
            "MIPO GADGETS Flyer Design | Corel Draw",
            image: DESIGN_IMG_13,
            tags:["Corel Draw"],
    },

    {
        id: 14,
        title:
            "HEPH BRAND Logo Design | Corel Draw",
            image: DESIGN_IMG_14,
            tags:["Corel Draw"],
    },

    {
        id: 15,
        title:
            "BELLAURA BRAND Logo Design | Corel Draw",
            image: DESIGN_IMG_15,
            tags:["Corel Draw"],
    },

    {
        id: 16,
        title:
            "EQUITY CHAMBERS, FACULTY OF LAW, IMO STATE UNIVERSITY. Flyer Design | Corel Draw",
            image: DESIGN_IMG_16,
            tags:["Corel Draw"],
    },

    {
        id: 17,
        title:
            "MIPO GADGETS BRAND Flyer Design | Corel Draw",
            image: DESIGN_IMG_17,
            tags:["Corel Draw"],
    },

    {
        id: 18,
        title:
            "MIPO GADGETS BRAND Flyer Design | Corel Draw",
            image: DESIGN_IMG_18,
            tags:["Corel Draw"],
    },

    {
        id: 19,
        title:
            "NAILS BY PRESH-WALTZ BRAND Flyer Design | Corel Draw",
            image: DESIGN_IMG_19,
            tags:["Corel Draw"],
    },

    {
        id: 20,
        title:
            "SAVERA AFRICA GENDER INITIATIVE (SAGI) Flyer Design | Corel Draw",
            image: DESIGN_IMG_20,
            tags:["Corel Draw"],
    },

    {
        id: 21,
        title:
            "NAILS BY PRESH-WALTZ BRAND Flyer Design | Corel Draw",
            image: DESIGN_IMG_21,
            tags:["Corel Draw"],
    },

    {
        id: 22,
        title:
            "SOU_SLEEK BRAND Flyer Design | Corel Draw",
            image: DESIGN_IMG_22,
            tags:["Corel Draw"],
    },

    {
        id: 23,
        title:
            "MIPO GADGETS BRAND Flyer Design | Corel Draw",
            image: DESIGN_IMG_23,
            tags:["Corel Draw"],
    },
    {
        id: 24,
        title:
            "RAE'S OUTLET BRAND Flyer Design | Corel Draw",
            image: DESIGN_IMG_3,
            tags:["Corel Draw"],
    },

    {
        id: 25,
        title:
            "SAVERA AFRICA GENDER INITIATIVE (SAGI) Flyer Design | Corel Draw",
            image: DESIGN_IMG_4,
            tags:["Corel Draw"],
    },

    {
        id: 26,
        title:
            "VALLEYVIEW SEVENTH-DAY ADVENTIST CHURCH Flyer Design | Corel Draw",
            image: DESIGN_IMG_5,
            tags:["Corel Draw"],
    },

]

export const collabApps = [
    {
      id: "0",
      title: "React",
      icon: react,
      width: 46,
      height: 36,
    },
    {
      id: "1",
      title: "HTML",
      icon: html,
      width: 34,
      height: 36,
    },
    {
      id: "2",
      title: "CSS",
      icon: css,
      width: 46,
      height: 28,
    },
    {
      id: "3",
      title: "JavaScript",
      icon: js,
      width: 55,
      height: 35,
    },
    // {
    //   id: "4",
    //   title: "API",
    //   icon: api,
    //   width: 34,
    //   height: 34,
    // },
    {
      id: "5",
      title: "Github",
      icon: git,
      width: 34,
      height: 34,
    },
    {
      id: "6",
      title: "CorelDraw",
      icon: corel,
      width: 46,
      height: 34,
    },
    {
      id: "7",
      title: "VsCode",
      icon: vs,
      width: 38,
      height: 32,
    },
    {
        id: "8",
        title: "Node js",
        icon: node,
        width: 38,
        height: 32,
      },
      {
        id: "9",
        title: "Express js",
        icon: express,
        width: 38,
        height: 32,
      },
      {
        id: "10",
        title: "Mongo DB",
        icon: mongo,
        width: 38,
        height: 32,
      },
  ];