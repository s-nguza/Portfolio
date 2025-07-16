import Navbar from "./components/navbar";
import Intro from "./components/intro/intro";
import About from './components/About/about';
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/Contact";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;