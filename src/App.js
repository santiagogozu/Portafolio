import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home'
import Project from './Components/Project/Project'
import Navigaton from "./Components/Navagation/Navagation";
function App() {
  return (
    <div>
      <Navigaton></Navigaton>
      <Home />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
