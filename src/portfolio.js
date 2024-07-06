/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import HtmlIcon from "../src/assets/images/stack-icons/html.svg";
import CssIcon from "../src/assets/images/stack-icons/css.svg";
import SaasIcon from "../src/assets/images/stack-icons/sass.svg";
import JsIcon from "../src/assets/images/stack-icons/javascript.svg";
import ReactIcon from "../src/assets/images/stack-icons/react.svg";
import NodeIcon from "../src/assets/images/stack-icons/node.svg";
import NextIcon from "../src/assets/images/stack-icons/next.svg";
import GitIcon from "../src/assets/images/stack-icons/git.svg";
import BIcon from "../src/assets/images/stack-icons/bootstrap.svg";
import MIcon from "../src/assets/images/stack-icons/materialui.svg";
import TIcon from "../src/assets/images/stack-icons/tailwind.svg";
import TyIcon from "../src/assets/images/stack-icons/typescript.svg";
import PIcon from "../src/assets/images/stack-icons/python-5.svg";
import FIcon from "../src/assets/images/stack-icons/firebase.svg";
import NpmIcon from "../src/assets/images/stack-icons/npm.svg";
import SqlIcon from "../src/assets/images/stack-icons/sql-svgrepo-com.svg";
import AwsIcon from "../src/assets/images/stack-icons/aws-svgrepo-com.svg";
import ReduxIcon from "../src/assets/images/stack-icons/redux.svg";
import DockerIcon from "../src/assets/images/stack-icons/docker2-svgrepo-com.svg";
import JIcon from "../src/assets/images/stack-icons/jira-svgrepo-com.svg";
import LIcon from "../src/assets/images/stack-icons/linux-svgrepo-com.svg";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Devanshu Dudhia",
  title: "Hi all, I'm Devanshu",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs  and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1DuuKqOKqGtiBVKwjLt6yLUJoYT7gT_u2/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  gmail: "devanshudd4@gmail.com",
  linkedin: "https://www.linkedin.com/in/devanshudd/",
  github: "https://github.com/Devanshudd",
  // gitlab: ,
  // facebook: ,
  // medium: ,
  // stackoverflow:,
  // Instagram: "",
  // twitter: "https://twitter.com/dudhia_d",
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Developing interactive front-end/UI for web apps"),
    emoji(
      "⚡ Hosting and maintaining websites on virtual machines with database integration"
    ),
    emoji(
      "⚡ Crafting responsive UIs with modern JavaScript frameworks like React"
    ),
    emoji("⚡ Integrating third-party services such as Firebase/AWS"),
    emoji(
      "⚡ Implementing CI/CD for seamless integration and automated deployment"
    ),
    emoji(
      "⚡ Managing code with Git and collaborating using platforms like GitHub"
    ),
    emoji(
      "⚡ Innovatively solving technical challenges to deliver effective solutions"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Html5",
      icon: HtmlIcon
    },
    {
      skillName: "Css3",
      icon: CssIcon
    },
    {
      skillName: "Saas",
      icon: SaasIcon
    },
    {
      skillName: "JavaScript",
      icon: JsIcon
    },
    {
      skillName: "ReactJs",
      icon: ReactIcon
    },
    {
      skillName: "NodeJs",
      icon: NodeIcon
    },
    {
      skillName: "Typescript",
      icon: TyIcon
    },
    {
      skillName: "NextJs",
      icon: NextIcon
    },
    {
      skillName: "Redux",
      icon: ReduxIcon
    },
    {
      skillName: "Bootstrap",
      icon: BIcon
    },
    {
      skillName: "Material-UI",
      icon: MIcon
    },
    {
      skillName: "Tailwind Css",
      icon: TIcon
    },
    {
      skillName: "npm",
      icon: NpmIcon
    },
    {
      skillName: "Sql- Database",
      icon: SqlIcon
    },
    {
      skillName: "Aws",
      icon: AwsIcon
    },
    {
      skillName: "Docker",
      icon: DockerIcon
    },
    {
      skillName: "Python",
      icon: PIcon
    },
    {
      skillName: "Firebase",
      icon: FIcon
    },
    {
      skillName: "Git / GitHub",
      icon: GitIcon
    },
    {
      skillName: "Jira",
      icon: JIcon
    },
    {
      skillName: "Linux",
      icon: LIcon
    }

    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Sardar Vallabhbhai National Institute of Technology (SVNIT)",
      logo: require("./assets/images/svnit.png"),
      subHeader: "Master of Technology in Computer Science - (8.45 / 10)",
      duration: "August 2021 - June 2023",
      desc: "Published paper in Springer Nature Group about Sentiment analysis on native languages"
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Lok Jagruti University",
      logo: require("./assets/images/lj.jpeg"),
      subHeader: "Bachelor of Technology in Computer Science - (8.86 / 10)",
      duration: "August 2016 - June 2020",
      desc: "Ranked top 10% in the Coding competitions. Took courses about Software Engineering, Data Structure, Operating Systems and learn new technologies."
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Bosch Global Software Technolgies",
      companylogo: require("./assets/images/bosch123.jpeg"),
      date: "July 2023 – Present",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Contributed to the development of Bosch’s Hiring Portal, a robust SaaS platform designed to streamline the recruitment process for businesses and organizations",
        "Spearheaded and maintained responsive user interfaces using HTML, CSS, JavaScript, React.js, and Material-UI .Implemented real-time notifications for application statuses, interview schedules, and feedback to enhance user experience with timely updates and communication",
        "Collaborated closely with the product team to understand and translate user requirements into practical frontend features, which improved the recruitment workflow and candidate management experience",
        "Used Node.js for back-end development to build efficient API endpoints that enable real-time data fetching and integration with third-party services, boosting the portal’s performance and scalability"
      ]
    },
    {
      role: "Project Trainee",
      company: "Bosch Global Software Technolgies",
      companylogo: require("./assets/images/bosch123.jpeg"),
      date: "June 2022 – April 2023",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Migrated the graphical user interface for the DOL Player, an application for the analysis of automated driving,from QT to React with Material-UI",
        "Developed a sophisticated resume parsing tool utilizing Python and this innovative tool boasts the capability to extract critical information from a wide range of resume formats,  significantly reducing the burden of manual review during the hiring process",
        "By leveraging automation and intelligent algorithms, it achieves a remarkable 60% reduction in the time required for manual review and it  actively improves the quality of candidate selection by achieving a 30% improvement in screening accuracy. "
      ]
    }
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/portfolio/gg.png"),
      projectName: "Gadgets Galore",
      projectDesc:
        "Full-featured Gadgets Gallery website with Payment gateway using stripe api and Sanity for managing database",
      _footerLink: [
        {
          name: "Visit Website",
          url: "https://gadgetsgalore.vercel.app/"
        },
        {
          name: "⭐Star Me On Github ",
          url: "https://github.com/Devanshudd/Ecommerce_Sanity_Stripe"
        }
      ],
      get footerLink() {
        return this._footerLink;
      },
      set footerLink(value) {
        this._footerLink = value;
      }
    },
    {
      image: require("./assets/images/portfolio/ch.png"),
      projectName: "Chizos",
      projectDesc:
        " A food delivery app built with React,Redux Toolkit,React Router DOM & Tailwind CSS!",
      _footerLink: [
        {
          name: "Visit Website",
          url: "https://chizos.vercel.app/"
        },
        {
          name: "⭐Star Me On Github ",
          url: "https://github.com/Devanshudd/Chizos-Food-Delivery-App"
        }
      ],
      get footerLink() {
        return this._footerLink;
      },
      set footerLink(value) {
        this._footerLink = value;
      }
    },
    {
      image: require("./assets/images/portfolio/Scratch.png"),
      projectName: "Scratch",
      projectDesc:
        "A Learning App for children (Ages 8-16) empowers them to learn coding in an engaging and interactive way, using a popular visual programming language approach in React",
      _footerLink: [
        {
          name: "Visit Website",
          url: "https://updated-scratch.vercel.app/"
        },
        {
          name: "⭐Star Me On Github ",
          url: "https://github.com/Devanshudd/updated_scratch"
        }
      ],
      get footerLink() {
        return this._footerLink;
      },
      set footerLink(value) {
        this._footerLink = value;
      }
    },
    {
      image: require("./assets/images/portfolio/teegen.png"),
      projectName: "Tee Genius",
      projectDesc:
        "3D Tshirt Customization App using React.js and Three.js, with OpenAI integration for AI-generated logos and textures.",
      _footerLink: [
        {
          name: "Visit Website",
          url: "https://teegenius-by-ai.netlify.app/"
        },
        {
          name: "⭐Star Me On Github ",
          url: "https://github.com/Devanshudd/TeeGenius-by-AI"
        }
      ],
      get footerLink() {
        return this._footerLink;
      },
      set footerLink(value) {
        this._footerLink = value;
      }
    },
    {
      image: require("./assets/images/portfolio/gym.png"),
      projectName: "Fit4Work",
      projectDesc:
        "A gym exercise application using materialUI and rapidapi in order to get all those exercise data and youtube videos as well",
      _footerLink: [
        {
          name: "Visit Website",
          url: "https://fit4work.vercel.app/"
        },
        {
          name: "⭐Star Me On Github ",
          url: "https://github.com/Devanshudd/Fitness_App"
        }
      ],
      get footerLink() {
        return this._footerLink;
      },
      set footerLink(value) {
        this._footerLink = value;
      }
    },
    {
      image: require("./assets/images/portfolio/pp.png"),
      projectName: "Popcorn premiere",
      projectDesc:
        "Cinemate application built with vanilla JavaScript with TMDB API",
      _footerLink: [
        {
          name: "Visit Website",
          url: " https://popcorn-premiere.vercel.app/"
        },
        {
          name: "⭐Star Me On Github ",
          url: "https://github.com/Devanshudd/POPCORN-PREMIERE"
        }
      ],
      get footerLink() {
        return this._footerLink;
      },
      set footerLink(value) {
        this._footerLink = value;
      }
    },
    {
      image: require("./assets/images/portfolio/sa.png"),
      projectName: "Sentiment Analysis",
      projectDesc:
        "Sentiment Analysis in Gujarati Language with own dictionary approach using different classification Algorithm",
      _footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1Ijj0oQYuhjVjPM4v16LoivIn-O9f2CaQ/view"
        },
        {
          name: "⭐Star Me On Github ",
          url: "https://github.com/Devanshudd/Sentiment-Analysis"
        }
      ],
      get footerLink() {
        return this._footerLink;
      },
      set footerLink(value) {
        this._footerLink = value;
      }
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "SPRINGER LNNS CERTIFICATE OF PRESENTATION",
      subtitle:
        "Created Gujarati tweets dataset which obtained through targeted hashtag crawling and conducted rigorous pre-processing steps to prepare the data for sentiment analysis.Top of it Applied a dictionary approach, where manually created dictionaries of positive and negative words, forming the foundation for training and testing datasets. ",
      image: require("./assets/images/Certificates/Springer.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1Ijj0oQYuhjVjPM4v16LoivIn-O9f2CaQ/view"
        },
        {
          name: "View Github Code",
          url: "https://github.com/Devanshudd/Sentiment-Analysis"
        }
      ]
    },
    {
      title: "IEEE CERTIFICATE OF PRESENTATION",
      subtitle:
        "Self attentive product recommendation is one such technique which focuses on automated form for recommendation which is independent of a dataset and its data type. Also examined other approaches for joining different calculations for predicting client evaluations and furthermore examine a few outcomes from the investigation of different procedures utilized by earlier analysts and discover answers for them.",
      image: require("./assets/images/Certificates/Ieee.png"),
      imageAlt: "Ieee Certificate of Presentation",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1Ijj0oQYuhjVjPM4v16LoivIn-O9f2CaQ/view"
        },
        {
          name: "View Published Paper",
          url: "https://ieeexplore.ieee.org/document/9154034"
        }
      ]
    },

    {
      title: "HACKERRANK REACT DEVELOPER",
      subtitle: "Completed Certifcation from Hackerank for React ",
      image: require("./assets/images/Certificates/FR.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.hackerrank.com/certificates/387259b303c8"
        }
      ]
    },

    {
      title: "HACKERRANK REACT CERTIFICATE",
      subtitle: "Completed Certifcation from Hackerank for React ",
      image: require("./assets/images/Certificates/RB.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.hackerrank.com/certificates/03715925a29a"
        }
      ]
    },

    {
      title: "NAMASTEDEV REACT CERTIFICATE",
      subtitle: "Completed Certifcation from NamasteDev for React ",
      image: require("./assets/images/Certificates/NR.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://namastedev.com/nirbhaykachhadiya44/certificates/namaste-react"
        }
      ]
    },

    {
      title: "NAMASTEDEV JAVASCRIPT CERTIFICATE",
      subtitle: "Completed Certifcation from NamasteDev for JavaScript ",
      image: require("./assets/images/Certificates/NJ.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://namastedev.com/devanshudd4/certificates/namaste-javascript"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7383437034"
  // email_address: "devanshudd4@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
