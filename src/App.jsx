import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./style.scss";

const App = () => {
  // Initialize lightMode state based on localStorage or default to false
  const [lightMode, setLightMode] = useState(() => {
    const savedMode = localStorage.getItem("lightMode");
    return savedMode === "true"; // Convert string to boolean
  });

  // Function to toggle the light mode
  const toggleTheme = () => {
    setLightMode((prevMode) => !prevMode);
  };

  // useEffect to manage body class based on lightMode state
  useEffect(() => {
    if (lightMode) {
      document.body.classList.add("light");
    } else {
      document.body.classList.add("dark");
    }

    // Save the current mode to localStorage
    localStorage.setItem("lightMode", lightMode);

    // Cleanup function to remove classes when component unmounts or state changes
    return () => {
      document.body.classList.remove("dark");
    };
  }, [lightMode]); // Dependency array: run this effect when lightMode changes

  return (
    <div className={`box ${lightMode ? "light" : "dark"}`}>
      {" "}
      <h1>Welcome to the Light and Dark Mode Demo!</h1>
      <h3>
        You can toggle between light and dark modes using the button below.
      </h3>
      <button onClick={toggleTheme}>
        {lightMode ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>
    </div>
  );
};

export default App;
