import Navbar from "./components/Navbar/navbar";
import Intro from "./components/intro/intro";
import About from './components/About/about';
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/footer";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;