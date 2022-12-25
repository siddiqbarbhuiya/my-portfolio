import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import { ThemeContext } from "../App";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [expandNavbar, setExpandNabvar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNabvar(false);
  }, [location]);

  return (
    <div className="main">
      <div className="navbar" id={expandNavbar ? "open" : "close"}>
        <div className="toggleButton">
          <button onClick={() => setExpandNabvar((prev) => !prev)}>
            <ReorderIcon />
          </button>
        </div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/experience">Experience</Link>
        </div>
        {/* <ReactSwitch className="switch" onChange={toggleTheme} checked={theme === "dark"}/> */}
        {/* <LightModeIcon className="switch" /> */}
        {theme === "dark" ? (
          <LightModeIcon
            className="switch"
            sx={{ color: "white", border: "1px solid #3b444c" }}
            onClick={toggleTheme}
          />
        ) : (
          <DarkModeIcon
            className="switch"
            sx={{ color: "black", backgroundColor: "#cbd4d2", border: "1px solid black" }}
            onClick={toggleTheme}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
