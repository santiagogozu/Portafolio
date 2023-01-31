import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home'
import Project from './Components/Project/Project'
import { ParallaxProvider } from 'react-scroll-parallax';
function App() {
  return (
    <div>
      <ParallaxProvider>
      {/* <Navigaton></Navigaton> */}
      <Home/>
      <About/>
      <Project/>
      <Contact/>
      </ParallaxProvider>
    </div>
  );
}

export default App;
