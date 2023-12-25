import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  reactjs,
  // redux,
  // nodejs,
  // mongodb,
  git,
  // docker,
  // jenkins,
  // bash,
  // firebase,
  // python,
  java,
  css,
  angular,
  aem,
  // computerNetwork,
  sql,
  swiftui,
  machineLearning,
  // operatingSystem,
  cPlus,
  dsa,
  tcs,
  persistent,
  bvn,
  lncte,
  indira,
  // kubernetes,
  // expense_tracker,
  // crown_clothing,
  // maynooth,
  // yelpcamp,
  movie,
  busmang,
  live,
  airindia,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: creator,
  },
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "iOS App Developer",
    icon: mobile,
  },
  {
    title: "Adobe Experience Manager",
    icon: backend,
  },
];

const technologies = [
  {
    name: "AEM",
    icon: aem,
  },
  {
    name: "SwiftUI",
    icon: swiftui,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "C/C++",
    icon: cPlus,
  },
  {
    name: "Java",
    icon: java,
  },

  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Data Structures And Algorithms",
    icon: dsa,
  },
  {
    name: "Machine Learning",
    icon: machineLearning,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "System Engineer",
    company_name: "Tata Consultancy Services, Kolkata",
    icon: tcs,
    iconBg: "#E6DEDD",
    date: "Oct 2023 - Present",
    points: [
      "Developing a web application built in Angular for AIR INDIA using Adobe Experience Manager technology.",
      "I am handling different parts of making the website, especially how it looks and works with other systems.",
      "Utilized tools such as GitHub, Visual Studio Code, and AEM tool along with cutting-edge technologies, to ensure efficient and effective project development.",
    ],
  },
  {
    title: "System Engineer Intern",
    company_name: "Tata Consultancy Services, Bengaluru",
    icon: tcs,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - June 2023",
    points: [
      "Developed iOS app using Swift UI.",
      "Learned various aspects of app development, including designing the user interface and integrating APIs.",
      "Used tools like GitHub, and Xcode for effective project development.",
    ],
  },
  {
    title: "Martian Virtual Training",
    company_name: "Persistent Systems",
    icon: persistent,
    iconBg: "#E6DEDD",
    date: "May 2022 - June 2022",
    points: [
      "Successfully completed Martial program and earned a spot for further specialized training.",
      "During training learned  full-stack development, covering things like C++, SQL, problem-solving skills (DSA), OOPS, computer networks, operating systems, and web technologies like HTML, CSS, and JavaScript.",
      "Applied learning to real-world projects during the training period, leading to the successful completion and certification of a hands-on live project.",
    ],
  },
];

const educations = [
  {
    title: "B.tech. in Computer Science Engineering",
    company_name: "Lncte, Bhopal",
    icon: lncte,
    iconBg: "#E6DEDD",
    date: "2019 - 2023",
    points: ["CGPA - 8.56"],
  },
  {
    title: "Higher Secondary Education",
    company_name: "Indira Gandhi H.S School, Sabalgarh",
    icon: indira,
    iconBg: "#E6DEDD",
    date: "2018",
    points: ["Percentage - 67.2"],
  },
  {
    title: "Senior Secondary Education",
    company_name: "Bhartiyam Vidya Niketan, Gwalior",
    icon: bvn,
    iconBg: "#E6DEDD",
    date: "2016",
    points: ["CGPA - 9.2"],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Air India",
    description:
      "It is a web application built in Angular using Adobe Experience Manager technology, handling different components of the website, especially how it looks and works with other systems.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "Frontend Development",
        color: "orange-text-gradient",
      },
      {
        name: "Adobe Experience Manager",
        color: "green-text-gradient",
      },
      {
        name: "Apache Maven",
        color: "pink-text-gradient",
      },
      {
        name: "Github",
        color: "orange-text-gradient",
      },
    ],
    image: airindia,
    // source_code_link: "https://github.com/neelesh17/YelpCamp",
  },
  {
    name: "Movie Recommender System",
    description:
      "Used Content-based ML algorithm to recommend movies to a user from dataset of 5000 movies from the TMDB site, As the user provides more inputs or takes actions on the recommender, the engine becomes more accurate.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "orange-text-gradient",
      },
      {
        name: "Jupyter Notebook",
        color: "green-text-gradient",
      },
      {
        name: "Cosine distance",
        color: "blue-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "https://movie-recommendation-system-i3kp.onrender.com/",
  },
  {
    name: "Weather Detection",
    description:
      "Live weather app with dark mode support, allowing users to check the current weather for their location and search for weather in other locations and Integrated networking capabilities with URLSession and parsed JSON using Encodable and Decodable protocols, while also utilizing Core Location for GPS-based location retrieval.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "swiftUi",
        color: "green-text-gradient",
      },
    ],
    image: live,
    source_code_link: "https://github.com/piyushagrawal1403/Live-Weather.git",
  },
  // {
  //   name: "ShopBag E-Commerce Website",
  //   description:
  //     "A Voice automated expense tracker made with the help of react, speechly and chartJS. It is also a Progressive Web App, thus it can also be install as an app in both android and IOS.",
  //   tags: [
  //     {
  //       name: "HTML",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "CSS",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "JavaScript",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "Bootstrap",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: expense_tracker,
  //   source_code_link: "https://piyushagrawal1403.github.io/ShopBag-Ecommerce/",
  // },
  {
    name: "Bus Reservation System",
    description:
      "Used OOPS and File handling concepts for performing various functions like adding/displaying/updating/searching/ deleting bus records, displaying routes of buses, and seats renew.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "File handline",
        color: "green-text-gradient",
      },
      {
        name: "Object-Oriented Programming (OOP)",
        color: "pink-text-gradient",
      },
    ],
    image: busmang,
    source_code_link:
      "https://github.com/piyushagrawal1403/Bus-Reservation-system.git",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  educations,
};
