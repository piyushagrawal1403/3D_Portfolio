import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Educations from "./components/Educations";
import Experience from "./components/Experience";
import { styles } from "./styles";

const App = () => {
  const [activeSection, setActiveSection] = useState("education");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-color bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        &nbsp;
        {/* Toggle Buttons */}
        <div className="flex justify-center mt-4">
          <div
            style={{
              cursor: "pointer",
              marginRight: "10px",
              color: activeSection === "education" ? "#6a5acd" : "white", // Change this color for inactive state
              fontWeight: activeSection === "education" ? "bold" : "normal", // Optional: Change font weight for active state
            }}
            onClick={() => handleSectionClick("education")}
          >
            <p className={styles.heroSubText1}>Qualification</p>
          </div>
          {/* &nbsp; */}
          <p className={styles.heroSubText1}> | </p>
          &nbsp;
          <div
            style={{
              cursor: "pointer",
              color: activeSection === "experience" ? "#6a5acd" : "white", // Change this color for inactive state
              fontWeight: activeSection === "experience" ? "bold" : "normal", // Optional: Change font weight for active state
            }}
            onClick={() => handleSectionClick("experience")}
          >
            <p className={styles.heroSubText1}> Experience</p>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <div
            className={`cursor-pointer mr-4 ${
              activeSection == "education" ? "text-blue-500" : ""
            }`}
            onClick={() => handleSectionClick("education")}
          ></div>
          <div
            className={`cursor-pointer ${
              activeSection == "experience" ? "text-blue-500" : ""
            }`}
            onClick={() => handleSectionClick("experience")}
          ></div>
        </div>
        {/* Conditional Rendering based on activeSection */}
        {activeSection == "education" ? <Educations /> : null}
        {activeSection == "experience" ? <Experience /> : null}
        <About />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
