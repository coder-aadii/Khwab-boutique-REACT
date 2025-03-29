import React, { useState, useEffect } from 'react';
import './css/HeroSection.css'; // Assuming you have a separate CSS file for styling

const HeroSection = () => {
  const [time, setTime] = useState({
    days: '00',
    hours: '00',
    minutes: '00'
  });

  useEffect(() => {
    // Particles.js initialization
    const particlesJS = window.particlesJS;
    if (particlesJS) {
      particlesJS('particles-js', {
        particles: {
          number: {
            value: 120,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: '#ffd700'  // Gold color as requested
          },
          shape: {
            type: 'circle'
          },
          opacity: {
            value: 1,
            random: true, // Random opacity for twinkling effect
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.5,
              sync: false
            }
          },
          size: {
            value: 5,
            random: true,
            anim: {
              enable: true,
              speed: 3,
              size_min: 0.5,
              sync: false
            }
          },
          line_linked: {
            enable: false
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'bubble' // Changed to bubble for a more star-like effect
            },
            onclick: {
              enable: true,
              mode: 'push'
            },
            resize: true
          },
          modes: {
            bubble: {
              distance: 200,
              size: 6,
              duration: 2,
              opacity: 0.8,
              speed: 3
            }
          }
        },
        retina_detect: true
      });
    }
  }, []);

  useEffect(() => {
    const countdownDate = new Date('2025-09-01T00:00:00').getTime(); // Set your target date for the sale

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      if (distance < 0) {
        clearInterval(interval);
        setTime({ days: '00', hours: '00', minutes: '00' });
      } else {
        setTime({
          days: days < 10 ? `0${days}` : days,
          hours: hours < 10 ? `0${hours}` : hours,
          minutes: minutes < 10 ? `0${minutes}` : minutes
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='hero-section'>
      {/* Sale/Promotion Banner */}
      <div className="sale-banner">
        <div className="sale-content">
          <div className="sale-text">
            <h2>Summer Sale</h2>
            <p>Up to 50% OFF on Selected Items</p>
          </div>
          <div className="countdown-timer">
            <div className="time-block">
              <span>{time.days}</span>
              <label>Days</label>
            </div>
            <div className="time-block">
              <span>{time.hours}</span>
              <label>Hours</label>
            </div>
            <div className="time-block">
              <span>{time.minutes}</span>
              <label>Minutes</label>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero" id="hero">
        <div id="particles-js"></div> {/* Interactive particle background */}
        <div className="hero-text">
          <h1>Welcome to Khwab!</h1>
          <p>Discover Our Latest Collections</p>
          <a href="#collections" className="btn">Book Now</a>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
