import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';
import ThemeToggle from './components/ThemeToggle';
import Hero from './sections/Hero';
import About from './sections/About';
import FeaturedProject from './sections/FeaturedProject';
import ProjectsGrid from './sections/ProjectsGrid';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Metrics from './sections/Metrics';
import Contact from './sections/Contact';

function App() {
  return (
    <SmoothScroll>
      <div className="relative bg-background text-primary selection:bg-purple-600/30 transition-colors duration-700">
        <CustomCursor />
        <ThemeToggle />
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Experience />
          <FeaturedProject />
          <ProjectsGrid />
          <Skills />
          <Metrics />
          <Contact />
        </main>

        {/* Floating background elements for depth */}
        <div className="fixed inset-0 pointer-events-none -z-10">
          <div className="absolute top-[20%] left-[10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[20%] right-[10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
        </div>
      </div>
    </SmoothScroll>
  );
}

export default App;
