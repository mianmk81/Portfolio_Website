import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoReact,
  IoLogoNodejs,
  IoLogoPython,
  IoLogoCss3,
} from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";

export const PROFILE_DATA = {
  profilePicture: "https://via.placeholder.com/150",
  name: "Mubashar Mian",
  tagline: `Driven Computer Science student with a strong foundation in software development, committed to creating innovative solutions and tackling challenging problems.`,
  jobTitle: "CS Major",
  location: "Atlanta, GA",
  yearsOfExperience: 4,
  skills: [
    "Python",
    "SQL",
    "C",
    "JavaScript",
    "HTML",
    "CSS",
  ],
  email: "mianmk81@gmail.com",
  phone: "+1 (470) 301-1134",
};

export const SKILLS = [
  {
    id: "01",
    icon: IoLogoPython,
    title: "Python",
    comment: `Python is my go-to language for data analysis and software development. With years of experience, I've used Python to build everything from simple scripts to complex data-driven applications, leveraging its powerful libraries and straightforward syntax`,
  },
  {
    id: "02",
    icon: IoLogoCss3,
    title: "CSS",
    comment: `CSS is what brings my web applications to life. I use it to craft responsive, visually appealing designs that enhance user experience across all devices, ensuring consistency and aesthetic quality`,
  },
  {
    id: "03",
    icon: IoLogoJavascript,
    title: "JavaScript",
    comment: `JavaScript is at the core of my web development toolkit. With proficiency in both front-end and back-end development, I've built dynamic and interactive web applications, using JavaScript to bring ideas to life across various platforms.`,
  },
  {
    id: "04",
    icon: IoLogoHtml5,
    title: "HTML",
    comment: `HTML lays the groundwork for every web project I undertake. My deep understanding of its structure and semantics ensures that the web applications I build are not only visually appealing but also well-structured and accessible to all users.`,
  },
  {
    id: "05",
    icon: IoLogoReact,
    title: "React.js",
    comment: `React.js is central to my front-end development process. With its component-based architecture, I've built dynamic and interactive user interfaces for various web applications. React's efficiency in managing state and rendering updates allows me to create scalable and maintainable projects.`,
  },
  {
    id: "06",
    icon: RiTailwindCssFill,
    title: "Tailwind CSS",
    comment: `Tailwind CSS has revolutionized the way I approach front-end styling. Its utility-first approach allows me to rapidly build responsive and beautifully designed interfaces without writing custom CSS.`,
  },
  {
    id: "06",
    icon: "RiTailwindCssFill",
    title: "Libraries",
    comment: `I leverage a diverse set of libraries to enhance my development projects. Pandas and NumPy are crucial for data manipulation and numerical computations, allowing me to handle large datasets and perform complex analyses. Matplotlib helps me visualize data through detailed charts and plots, while TensorFlow enables me to build and deploy sophisticated machine learning models. For image processing, I use CV2 to handle tasks such as object detection and feature extraction. Additionally, Tarfile facilitates efficient management of compressed file archives, and Json is my go-to for data interchange and integration.`,
  },
  {
    id: "06",
    icon: "RiTailwindCssFill",
    title: "Soft Skills",
    comment: `Effective communication and teamwork are crucial to my development process. I excel in problem-solving and adaptability, always approaching challenges with a creative mindset and attention to detail. My leadership and time management skills help me efficiently handle projects and collaborate with others, ensuring successful outcomes.`,
  },
];

export const WORK_EXPERIENCE = [
  {
    id: "01",
    company: "Griffin & Strong, PC.",
    position: "Data Analyst - Intern ",
    duration: "August 2024 - Present",
    description:
      "Managed and cleaned large data sets, utilizing Python to filter and correct code problems.	Assisted in data collection and analysis, interpreting results using statistical techniques. Produced ongoing reports for internal teams and external clients, identifying and analyzing trends in complex data sets. Developed an understanding of disparity research methodology and worked on ad hoc requests and special studies",
  },
  {
    id: "02",
    company: "Resilience, Inc",
    position: "Web Development Project Manager - Intern",
    duration: "March 2024 - July 2024",
    description:
      "Managed and updated websites by fixing errors. Updating plugins and uploading content. Developed IT projects to promote the social-emotional curriculum and added functionality to WordPress sites. Directed website updates, design content and resolved issues identified through customer feedback and testing. ",
  },
  {
    id: "03",
    company: "Freelancer Computer Science Projects",
    position: "Solo",
    duration: "March 2022 - Feburary 2024",
    description:
      "Completed various computer science-related jobs for clients, including data analysis, web development and software development. Demonstrated versatility and expertise in different are of computer science. Maintained high satisfaction through effective communication and quality work. ",
  },
];


export const ABOUT_ME_DATA = {
  introduction: "Hi, I'm Mubashar K Mian, a dedicated Computer Science junior at Georgia State University with a strong passion for developing innovative software solutions and tackling complex problems with code",
  skills: "I'm proficient in several programming languages, including Python, SQL, C, HTML, CSS, and JavaScript. I'm experienced with various software tools such as Microsoft/Google Suite, Oracle Database, GitHub, Visual Studio, VS Code, PyCharm, and Eclipse. Additionally, I have strong expertise in libraries like Json, Pandas, NumPy, Matplotlib, TensorFlow, CV2, and Tarfile. My other skills include communication, teamwork, problem-solving, adaptability, leadership, and critical thinking.",
  projects: "I’ve developed an Employee Management System using Java and JavaFX, designed a Python-based Text Adventure Game with interactive player features, and created a classic Snake game with smooth animations and difficulty levels. Additionally, I’ve worked on various smaller projects, including a Tic Tac Toe game, Simon Game, Thermometer application, and an Appointment Form.",
  interests: "Outside of coding, I have a passion for exploring futuristic web design, playing strategy-based games, and staying updated with the latest tech trends. I also enjoy traveling, experimenting with new technologies, and engaging in team-based projects.",
  careerGoals: "In In the future, I aim to continue refining my skills as a developer, delve deeper into emerging technologies, and contribute to innovative projects that have a positive impact on both individuals and communities.",

  stats: {
    yearsOfExperience: '4+',
    numberOfProjects: '10+',
    certificationsEarned: '2',
  },
};
