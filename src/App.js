import React from 'react';
import CustomNavbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';
// import Certifications from './components/Certifications';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <CustomNavbar />
      <main>
        <About />
        <Education/>
        <Skills />
        <Experience />
        <Projects />
        {/* <Certifications/> */}
        <Contact />
      </main>
    </>
  );
}

export default App;
