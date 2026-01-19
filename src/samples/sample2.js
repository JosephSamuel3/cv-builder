const sample2_CV = {
  personalInformation: {
    firstName: "Jamie",
    lastName: "Lee",
    email: "jamie.lee@email.com",
    phone: "555-987-6543",
    linkedIn: "linkedin.com/in/jamielee",
    github: "github.com/jamielee",
  },

  experience: [],

  project: [
    {
      id: "proj-1",
      title: "CV Generator Web App",
      description:
        "Built a resume builder application using React that allows users to dynamically add, edit, and preview resume sections.",
      technologies: ["React", "JavaScript", "CSS"],
      link: "github.com/jamielee/cv-generator",
    },
    {
      id: "proj-2",
      title: "Task Tracker",
      description:
        "Developed a task management app with CRUD functionality and local storage persistence.",
      technologies: ["JavaScript", "HTML", "CSS"],
      link: "github.com/jamielee/task-tracker",
    },
    {
      id: "proj-3",
      title: "Weather Dashboard",
      description:
        "Created a weather dashboard that fetches real-time data from a public API and displays current conditions and forecasts.",
      technologies: ["JavaScript", "API", "CSS"],
      link: "github.com/jamielee/weather-dashboard",
    },
  ],

  education: [
    {
      id: "edu-1",
      school: "Community College of Technology",
      degree: "Diploma in Software Development",
      startDate: "2022-09-01",
      endDate: "2024-06-01",
      location: "Vancouver, BC",
    },
  ],

  skills: {
    languages: ["JavaScript", "HTML", "CSS"],
    frameworks: ["React"],
  },
};


export default sample2_CV;
