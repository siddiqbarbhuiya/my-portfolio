import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Experience from './Pages/Experience';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ProjectDisplay from './Pages/ProjectDisplay';
import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
    // setTheme((curr) => ((curr) === "light" ? "dark" : "light"))
    // localStorage.setItem("theme", theme);
  }

  useEffect(() => {
    // setTheme(localStorage.getItem("theme"));
    const existingPreference = localStorage.getItem("theme");
    if (existingPreference) {
     ( existingPreference === "light")
        ? setTheme("light")
        : setTheme("dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  }, []);

  return (
    <ThemeContext.Provider value={{theme, setTheme, toggleTheme}}>
      <div className="App" id={theme}>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/:id' element={<ProjectDisplay />} />
          <Route path='/experience' element={<Experience />} />
        </Routes>
        <Footer />
      </Router>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
