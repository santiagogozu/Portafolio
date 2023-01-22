import React from 'react';
import './Hero.css'
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Navigaton from '../Navagation/Navagation'
import { Typewriter } from 'react-simple-typewriter'
import myImg from '../../img/perfil.jpg'

const Hero = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
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
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
        <Navigaton></Navigaton>
        
        <div className="containerPresentation">
            <div className="perfilImg">
                <img src={myImg} alt="" />
            </div>
            <div className='containerName'>
                <h1>Santiago Gonzalez Zuluaga</h1>
                <div className='presentation'>
                    <h1>I'm</h1>
                    <Typewriter
                    words={['Full Stack Web Developer', 'HTML5', 'CSS', 'Javascript', 'React']}
                    loop= {true}
                    cursor
                    cursorStyle='_'
                    typeSpeed={50}
                    deleteSpeed={20}
                    delaySpeed={2000}
                />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Hero;