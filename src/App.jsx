import { useState, useEffect, useRef } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  const [preloaderFadeOut, setPreloaderFadeOut] = useState(false);
  const cursorRef = useRef(null);
  const cursorFollowerRef = useRef(null);
  const scrollProgressRef = useRef(null);

  useEffect(() => {
    // Initialize AOS
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
      });
    }

    // Preloader
    const preloaderTimeout = setTimeout(() => {
      setPreloaderFadeOut(true);
    }, 1000);

    // Current year
    document.getElementById('current-year') && (document.getElementById('current-year').textContent = new Date().getFullYear());

    // Custom Cursor
    const cursor = cursorRef.current;
    const cursorFollower = cursorFollowerRef.current;

    const handleMouseMove = (e) => {
      if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      }
      setTimeout(() => {
        if (cursorFollower) {
          cursorFollower.style.left = e.clientX + 'px';
          cursorFollower.style.top = e.clientY + 'px';
        }
      }, 100);
    };

    const handleMouseDown = () => {
      if (cursor) {
        cursor.style.width = '15px';
        cursor.style.height = '15px';
      }
      if (cursorFollower) {
        cursorFollower.style.width = '30px';
        cursorFollower.style.height = '30px';
      }
    };

    const handleMouseUp = () => {
      if (cursor) {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
      }
      if (cursorFollower) {
        cursorFollower.style.width = '40px';
        cursorFollower.style.height = '40px';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Hover on links
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        if (cursor) {
          cursor.style.width = '30px';
          cursor.style.height = '30px';
          cursor.style.background = 'rgba(79, 70, 229, 0.2)';
        }
        if (cursorFollower) {
          cursorFollower.style.width = '50px';
          cursorFollower.style.height = '50px';
          cursorFollower.style.borderColor = 'rgba(79, 70, 229, 0.6)';
        }
      });

      link.addEventListener('mouseleave', () => {
        if (cursor) {
          cursor.style.width = '20px';
          cursor.style.height = '20px';
          cursor.style.background = 'rgba(79, 70, 229, 0.3)';
        }
        if (cursorFollower) {
          cursorFollower.style.width = '40px';
          cursorFollower.style.height = '40px';
          cursorFollower.style.borderColor = 'var(--primary)';
        }
      });
    });

    // Scroll Progress
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollProgress = (scrollTop / scrollHeight) * 100;
      if (scrollProgressRef.current) {
        scrollProgressRef.current.style.width = scrollProgress + '%';
      }

      // Header shrink
      const header = document.getElementById('header');
      if (header) {
        if (scrollTop > 50) {
          header.classList.add('py-2');
          header.classList.remove('py-4');
        } else {
          header.classList.add('py-4');
          header.classList.remove('py-2');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Tilt Effect
    const tiltElements = document.querySelectorAll('.tilt');
    tiltElements.forEach(element => {
      element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const xc = rect.width / 2;
        const yc = rect.height / 2;
        const dx = x - xc;
        const dy = y - yc;
        element.style.transform = `perspective(1000px) rotateX(${dy / -20}deg) rotateY(${dx / 20}deg)`;
      });

      element.addEventListener('mouseleave', () => {
        element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
      });
    });

    // Animated Background
    const animatedBg = document.querySelector('.animated-bg');
    if (animatedBg) {
      for (let i = 0; i < 15; i++) {
        const span = document.createElement('span');
        span.style.width = Math.random() * 30 + 10 + 'px';
        span.style.height = span.style.width;
        span.style.left = Math.random() * 100 + '%';
        span.style.animationDelay = Math.random() * 5 + 's';
        span.style.animationDuration = Math.random() * 20 + 10 + 's';
        animatedBg.appendChild(span);
      }
    }

    return () => {
      clearTimeout(preloaderTimeout);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('scroll', handleScroll);
      links.forEach(link => {
        link.removeEventListener('mouseenter', () => {});
        link.removeEventListener('mouseleave', () => {});
      });
      tiltElements.forEach(element => {
        element.removeEventListener('mousemove', () => {});
        element.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <>
      <div className={`preloader ${preloaderFadeOut ? 'fade-out' : ''}`}>
        <div className="loader"></div>
      </div>
      
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-follower" ref={cursorFollowerRef}></div>
      
      <div className="scroll-progress" ref={scrollProgressRef}></div>
      
      <Header />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;