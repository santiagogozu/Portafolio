import React from "react";
import "./Home.css";
import {useCallback} from "react";
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";
import Navigaton from "../Navagation/Navagation";
import {Typewriter} from "react-simple-typewriter";


const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div id="hero">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: {min: 1, max: 5},
            },
          },
          detectRetina: true,
        }}
      />
      <Navigaton></Navigaton>

      <section className="containerPresentation" id="home">
        {/* <div className="perfilImg">
                <img src={myImg} alt="" />
            </div> */}
        <div className="containerName">
          <p>Santiago Gonzalez Zuluaga</p>
          <div className="presentation">
            <h1>Technologies:</h1>
            <div className="Typewriter">
              <Typewriter
                words={[
                  "Full Stack Web Developer",
                  "HTML5",
                  "CSS",
                  "Javascript",
                  "React",
                  "Node",
                ]}
                loop={true}
                cursor
                cursorStyle="</>"
                typeSpeed={50}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
