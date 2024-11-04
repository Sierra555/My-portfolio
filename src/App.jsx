import { BrowserRouter as Router } from 'react-router-dom';
import { About, Contact, Experience, Hero, Projects } from './sections';
import { MotionConfig } from "framer-motion"
import { StarsCanvas, Navbar } from './components';
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <Router>
      <MotionConfig reducedMotion='user'>
      <div className='relative z-0 bg-primary'>
        <div className='relative'>
          <Navbar />
          <Hero />
          <About />
          <StarsCanvas />
        </div>
        <Experience />
        <Projects />
        <div className='relative z-0 violet-gradient'>
          <Contact />
        </div> 
      </div>
      </MotionConfig>
      <Analytics />
    </Router>
  );
}

export default App;
