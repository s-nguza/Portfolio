import Navbar from "./components/navbar";
import Intro from "./components/intro/intro";
import About from './components/About/about';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
    </div>
  );
}

export default App;