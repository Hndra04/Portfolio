import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  figma,
  jcc,
  narrativenest,
  diabetest,
  python,
  gdsc,
  music,
  brain,
  hology,
  beatbuddy
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Works",
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
    title: "Data Scientist",
    icon: mobile,
  },
  {
    title: "Front-end Programmer",
    icon: backend,
  },
  {
    title: "ML/AI Engineer",
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "python",
    icon: python,
  },
];

const experiences = [
  {
    title: "Data Scientist / Machine Learning Path",
    company_name: "GDSC",
    icon: gdsc,
    iconBg: "#383E56",
    date: "October 2023 - July 2024",
    points: [
      "Doing tasks as part of the Google Developer Student Clubs (GDSC) Machine Learning path. The tasks cover a variety of machine learning applications, from image classification to natural language processing and research on AI.",
    ],
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
    name: "Narrative Nest",
    description:
      "Narrative-Nest is an app designed to make process of creating storyboards easier and faster. Users can prompt an AI to generate storyboard frames using SDXL Lightning API, making storyboard creation quick and efficient.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: narrativenest,
    source_code_link: "https://github.com/HanCreation/narrative-nest ",
  },
  {
    name: "Diabetest",
    description:
      "Diabetest is an app designed to predicting diabetes using few parameter to help diagnose diabetes probability quickly and easy using Machine Learning model.",
    tags: [
      {
        name: "html",
        color: "purple-text-gradient",
      },
      {
        name: "python",
        color: "yellow-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: diabetest,
    source_code_link: "https://github.com/Hndra04/Diabetest",
  },
  {
    name: "Brain Tumors Prediction from MRI using LMFRNet",
    description:
      "This project study looks into the use of Wan and Yao's lightweight image classification model, LMFRNet, for brain tumor classification using magnetic resonance imaging (MRI).",
    tags: [
      {
        name: "python",
        color: "yellow-text-gradient",
      },
    ],
    image: brain,
    source_code_link: "",
  },
  {
    name: "Music Genre Classification",
    description:
      "This model is designed to classifying music genre classification using feature from the music dataset, like mfcc, spectral bandwith, chroma stft, etc. Where the goal of this model is to help users to classifying a song with ease.",
    tags: [
      {
        name: "python",
        color: "yellow-text-gradient",
      },
    ],
    image: music,
    source_code_link: "https://github.com/Hndra04/MusicGenreClassification",
  },
  {
    name: "Multi-label Image Classification",
    description:
      "This model is designed to predicting  color and type of shirt from the image by extracting images features. This model using CNN and VGG-16 Architecture to help predicting image.",
    tags: [
      {
        name: "python",
        color: "yellow-text-gradient",
      },
    ],
    image: hology,
    source_code_link: "https://github.com/Hndra04/CompetitionHology7.0",
  },
  {
    name: "BeatBuddy",
    description:
      "BeatBuddy is a music recommender system made with react & flask. The front-end made with react accept user's request and forward it to the server manage by flask containing the machine learning model.",
    tags: [
      {
        name: "python",
        color: "yellow-text-gradient",
      },
    ],
    image: beatbuddy,
    source_code_link: "https://github.com/dewennn/BeatBuddy",
  },
  {
    name: "JCC",
    description:
      "JCC is a simple website designed to provide key info about conference spaces and let you easily book events. You can check out the rooms offer, the features available, and quickly make a reservation online. Whether it’s for a small meet-up or a larger event.",
    tags: [
      {
        name: "html",
        color: "purple-text-gradient",
      },
      {
        name: "figma",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: jcc,
    source_code_link: "https://github.com/Hndra04/JCC",
  },
];

export { services, technologies, experiences, testimonials, projects };
