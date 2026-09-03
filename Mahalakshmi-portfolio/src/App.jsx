import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import "./App.css";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Project";
import Journey from "./Components/Journey";
import Contact from "./Components/Contact";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Contact />
    </>
  );
}

export default App;