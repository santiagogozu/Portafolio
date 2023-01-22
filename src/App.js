import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Hero from './Components/Hero/Hero'
import Navigaton from './Components/Navagation/Navagation'
function App() {
  return (
    <div>
      {/* <Navigaton></Navigaton> */}
      <Hero/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
