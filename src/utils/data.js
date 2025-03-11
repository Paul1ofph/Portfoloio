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
import {SiExpress, SiMongodb, SiMysql, SiWebpack} from "react-icons/si"
import {
    VscVscode,
    VscCommentUnresolved,
    VscTerminalPowershell,
} from "react-icons/vsc"
import { FaGitAlt, FaTwitter, FaDribbble } from "react-icons/fa"
import {MdGroup} from "react-icons/md"

export const MENU_LINKS = [
    {id: "01", label: "Home", offset: -100, to: "hero"},
    {id: "02", label: "Skills", offset: -80, to: "skills"},
    {id: "03", label: "About Me", offset: -80, to: "about"},
    {id: "04", label: "Projects", offset: -80, to: "projects"},
    {id: "05", label: "Contact", offset: -80, to: "contact"},
]

export const STATS = [
    {id: "01", count: "10", label: `Years of \nExperience`},
    {id: "02", count: "12", label: `Certifactaions \nEarned`},
    {id: "03", count: "143", label: `Projects \nCompleted`},
    {id: "04", count: "37+", label: `Happily  \nClients`},
]

export const SKILL_TABS = [
    {id: "01", label: "All", value: "all"},
    {id: "02", label: "Frontend", value: "frontend"},
    {id: "03", label: "Backend", value: "backend"},
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
        progress: 65,
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
        progress: 95,
        type: "backend",
        description:
        "Skilled in building scalable and high-performance server-side applications using Node.js."
    },

    {
        id: "06",
        icon: SiExpress,
        skill: "Express JS",
        progress: 98,
        type: "backend",
        description:
        "Proficient in developing RESTFUL APIs and middleware using Express.js."
    },

    {
        id: "07",
        icon: SiMongodb,
        skill: "MongoDB",
        progress: 75,
        type: "backend",
        description:
        "Experienced in designing and managing NoSql databases using MongoDB. Skilled in schema design."
    },

    {
        id: "08",
        icon: SiMysql,
        skill: "SQL",
        progress: 90,
        type: "backend",
        description:
        "Proficient in working with relation databases using SQL, Experienced in writing complex queries."
    },
    
    {
        id: "09",
        icon: FaGitAlt,
        skill: "GitHub JS",
        progress: 98,
        type: "backend",
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
        icon: VscVscode,
        skill: "Visual Studio Code",
        progress: 95,
        type: "tools",
        description:
        "Well versed in using Visual Studio Code with custom extensions and debugging tools for a smooth development workflow. Optimized for productivity with shortcuts and automation"
    },
    {
        id: "12",
        icon: MdGroup,
        skill: "Collaboration",
        progress: 95,
        type: "soft-skills",
        description:
        "Experienced in working within teams, contributing ideas and integrating feedback. Effective communication ensures smooth project execution and shared success"
    },
]

export const ABOUT_ME = {
    content: `I'm a passionate Frontend Developer with a strong foundation in building responsive, user-friendly web applications. With a keen eye for design and performances, I specialize in crafting seamless digital experiences using modern technologies like React js, JavaScript, and Tailwinf CSS. My goal is to bridge the gap between aesthetics and functionality, ensuring every project i work on is both visually appealing and highly performant.
    
    \nMy journey in web development started witha  simple curisoity-how does the web work? Fast forward to today i have built dynamic applications, collaborated with teams and honed my skills in frontend development. i love tackling challenges, optimizing user experiences, and bringing creative ideas to life through code. lets build something amzing together`,
    socialLinks: [
        {
            id: "01", label: "Facebook", icon: FaFacebook, Link: "#",
        },
        {
            id: "02", label: "Instagram", icon: FaInstagram, Link: "#",
        },
        {
            id: "03", label: "Twitter", icon: FaTwitter, Link: "#",
        },
        {
            id: "04", label: "LinkedIn", icon: FaLinkedin, Link: "#",
        }, 
        {
            id: "01", label: "Dribble", icon: FaDribbble, Link: "#",
        },
    ],
    email: "pauladibe24@gmail.com",
    phone: "+234 8109817134",
    website: "#"
}

export const PROJECTS = [
    {
        id: 1,
        title:
            "Full Stack Poll App Undergraduate Project | MongoDB, Express, React JS, Node JS",
            image: "PROJECT_IMG_1",
            tags:["React", "Node.js", "Express.js", "MongoDB"],
    },

    {
        id: 2,
        title:
            "Project 2 | MongoDB, Express, React JS, Node JS",
            image: "PROJECT_IMG_1",
            tags:["React", "Node.js", "Express.js", "MongoDB"],
    },
    {
        id: 3,
        title:
            "Project 3 | MongoDB, Express, React JS, Node JS",
            image: "PROJECT_IMG_1",
            tags:["React", "Node.js", "Express.js", "MongoDB"],
    },
    {
        id: 4,
        title:
            "Project 4 | MongoDB, Express, React JS, Node JS",
            image: "PROJECT_IMG_1",
            tags:["React", "Node.js", "Express.js", "MongoDB"],
    },
    {
        id: 5,
        title:
            "Project 5 | MongoDB, Express, React JS, Node JS",
            image: "PROJECT_IMG_1",
            tags:["React", "Node.js", "Express.js", "MongoDB"],
    },
    {
        id: 6,
        title:
            "Project 6 | MongoDB, Express, React JS, Node JS",
            image: "PROJECT_IMG_1",
            tags:["React", "Node.js", "Express.js", "MongoDB"],
    },
]