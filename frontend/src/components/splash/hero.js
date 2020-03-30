import React from "react";
import Particles from "react-particles-js";
import Background from './splash.png';
import SplashFooter from './splash_footer';

class Hero extends React.Component {

  render() {
    // https://vincentgarreau.com/particles.js/#bubble Custom made json from self input
    const particleOpt = {
      particles: {
        number: {
          value: 19,
          density: {
            enable: true,
            value_area: 1000
          }
        },
        color: {
          value: "#d1d4e6"
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#ac9db6"
          },
          polygon: {
            nb_sides: 6
          }
        },
        opacity: {
          value: 0.3,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 27.620167457129543,
          random: true,
          anim: {
            enable: true,
            speed: 10,
            size_min: 40,
            sync: false
          }
        },
        line_linked: {
          enable: false
        },
        move: {
          enable: true,
          speed: 8,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: false,
            mode: "grab"
          },
          onclick: {
            enable: false,
            mode: "bubble"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: false
    };
    return (
      <div className="hero-section">
        <div className="first-title">
          <div className="second-title">
            <div className="splash-title">Software Engineering</div>
            <div className="splash-title">Employment Time Tracker</div>
          </div>
        </div>
        <div className="first">
          <div className="second column">
            <div className="float-down-1 splash-text">Floating aimlessly?</div>
            <div className="float-down-2 splash-text">Get on track now!</div>
            <button
              onClick={this.props.signup}
              className="float-down-3 splash-text"
            >
              Get Started
            </button>
          </div>
        </div>
        <Particles
          params={particleOpt}
          style={{
            height: "100vh",
            width: "100vw",
            backgroundSize: "cover",
            position: "absolute",
            backgroundImage: `url(${Background})`
          }}
        />
        {/* <SplashFooter /> */}
      </div>
    );
  }
}

export default Hero;
