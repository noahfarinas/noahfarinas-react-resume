import Education from "./Education";
import Work from "./Work";
import Header from "./Header";
import About from "./About";
import Careergoal from "./Careergoal";
import Skills from "./Skills";
import Contact from "./Contact";

export default function App() {
  const HEAD = "Noah Farinas";
  const SUB = "Aspiring Front-End Developer";
  const ABOUT = [
    "About Me",
    "	I value being a self-starter to achieve the goals I have set for myself.  Having gotten accepted into the Computer Science program at Seattle Pacific University, I became more interested in Front-end development.  To immerse myself further, I began exploring alternative ways of learning Front-end development through Udemy, Google, Youtube, and creating projects on Github pages.  Through my own curiosity I’ve found Front-end development to be an exciting and challenging field to pursue."
  ];
  const GOAL = [
    "Career Goal",
    "I want to be able to create web pages for businesses that can have more engagement from their target audience. I beleive that businesses should set up their on line presence and platforms to predict customer behaviors and track how consumers click through the wesbite. I am determined to apply my current knowledge to a company that will I encourage me to broaden my skills and grow as a front-End Developer. "
  ];

  const CONTACT = [
    {
      type: "Contact",
      link: "https://www.noahnigelphotos.com/",
      name: "Photogrpahy Website"
    },
    {
      type: "Contact",
      link: "https://noahfarinas.github.io/",
      name: "Social Links"
    },
    {
      type: "Contact",
      link: "https://github.com/noahfarinas",
      name: "Github"
    },
    {
      type: "Contact",
      link: "https://codesandbox.io/u/noahfarinas",
      name: "CodeSandbox"
    },
    {
      type: "Contact",
      link: "https://www.linkedin.com/in/noah-farinas-b3b9571b0/",
      name: "LinkedIn"
    }
  ];

  const SCHOOLDATA = [
    {
      category: "Education",
      schoolName: "Colt Steele Web Development Bootcamp",
      location: "Online",
      time: "July 2021 - December 2021"
    },
    {
      category: "Education",
      schoolName: "Seattle Pacific University",
      location: "Seattle, WA",
      time: "January 2021 - January 2022"
    },
    {
      category: "Education",
      schoolName: "National University",
      location: "San Diego, CA",
      time: "June 2018 - February 2020"
    }
  ];

  const JOBS = [
    {
      category: "Work",
      time: "October 2016 - Present",
      title: "Professional Photographer",
      company: "Noah Nigel Photos"
    },
    {
      category: "Work",
      time: "September 2021 - Present",
      title: "Retail Specialist",
      company: "Rad Power Bikes"
    },
    {
      category: "Work",
      time: "February 2015 - June 2021",
      title: "Lead Med-to-Bed Pharmacy Technician ",
      company: "UCSD Hillcrest Discharge Pharmacy"
    },
    {
      category: "Work",
      time: "February 2013 - February 2016",
      title: "Staff Pharmacy Technician",
      company: "Rite Aid Pharmacy"
    }
  ];

  const SKILLS = [
    {
      skill: "Skills",
      type: "Languages",
      data: "HTML"
    },
    {
      skill: "Skills",
      type: "Languages",
      data: "CSS"
    },
    {
      skill: "Skills",
      type: "Languages",
      data: "Javascript"
    },
    {
      skill: "Skills",
      type: "Libraries",
      data: "ReactJS"
    },
    {
      skill: "Skills",
      type: "Tools",
      data: "Git"
    },
    {
      skill: "Skills",
      type: "Tools",
      data: "Visual Studio Code"
    },
    {
      skill: "Skills",
      type: "Tools",
      data: "CodeSandbox"
    },
    {
      skill: "Skills",
      type: "Tools",
      data: "ITerm2"
    },
    {
      skill: "Skills",
      type: "Tools",
      data: "Adobe Photoshop"
    },
    {
      skill: "Skills",
      type: "Tools",
      data: " Adobe Lightroom Classic"
    }
  ];

  return (
    <div className="App">
      <div className="header">
        <Header headline={HEAD} newprop={SUB} />
      </div>

      <div className="contact">
        <Contact reach={CONTACT} />
      </div>

      <div className="schoolwork">
        <h1>Education</h1>
        <Education data={SCHOOLDATA} />
        <Work trabajo={JOBS} />
      </div>

      <div className="aboutme">
        <About me={ABOUT} />
      </div>

      <div className="careergoal">
        <Careergoal workgoal={GOAL} />
      </div>

      <div className="skills">
        <Skills attribute={SKILLS} />
      </div>

    </div>
  );
}
