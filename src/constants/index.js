import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  mongodb,
  git,
  docker,
  jenkins,
  bash,
  firebase,
  python,
  carrent,
  jobit,
  tripguide,
  vmware,
  moogle,
  benzag_labs,
  kubernetes
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: creator,
  },
];

const technologies = [
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "jenkins",
    icon: jenkins,
  },
  {
    name: "bash script",
    icon: bash
  },
  {
    name: "python",
    icon: python
  },
  {
    name: "firebase",
    icon: firebase
  },
];

const experiences = [
  {
    title: "Full Stack Web Developer Intern",
    company_name: "Benzag Labs",
    icon: benzag_labs,
    iconBg: "#383E56",
    date: "Aug 2020 - Nov 2020",
    points: [
      "Worked with React, Reselect, Redux, Firebase, Razorpay Api, Node-Sass, SailsJS, REST Apis and MongoDB.",
      "Implemented state and async code management using redux and saga, dynamic loading SVG animation generator.",
      "Implemented server functionalities using best practies regarding REST api and sailsJS."
    ],
  },
  {
    title: "Software  Developer Intern",
    company_name: "Moogle",
    icon: moogle,
    iconBg: "#E6DEDD",
    date: "Mar 2021 - May 2021",
    points: [
      "Switched basic app framework from VueJS to ReactJS and implemented provided AdobeXD design Upgrades.",
      "Applied multi-threading using web-worker for reoccurring tasks on react.",
      "Implemented multiple lambda functions, ses templates for the company’s AWS server.",
      "Worked on optimising and increasing the page speed score of previously built applications",
    ],
  },
  {
    title: "Intern",
    company_name: "VMware",
    icon: vmware,
    iconBg: "#383E56",
    date: "Jan-2022 - July-2022",
    points: [
      "Worked on super-collider to gather data using vdkcli and python scripting and creating charts to monitor data.",
      "Worked with python scripting to automate data collection through super-collider job which was previously done manually",
      "Worked with tools like wavefront, bigpanda, logz to monitor, maintain and remediate alerts for customer sddc’s"
    ],
  },
  {
    title: "Member of Technicla Staff - 1",
    company_name: "VMware",
    icon: vmware,
    iconBg: "#E6DEDD",
    date: "July 2022 - Present",
    points: [
      "Worked on automating & patching activity for different components of the project using python and Jenkins.",
      "Day to day activities involved monitoring, remediating and escalating customer’s software defined data center alerts",
      "Authored RTS(Remediation & Troubleshooting Service) scripts which use python scripting for automating common day to day alerts triaging and remediation",
      "Developed and maintained monitoring capabilities for diffent aspects of the project like backup failure, vm snapshot analysis, cert expiry etc. using python and jenkins"
    ],
  }
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };