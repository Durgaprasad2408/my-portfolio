import { useEffect, useState, useRef } from 'react';
import { GraduationCap, Award } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative h-full md:h-screen bg-gradient-to-br from-purple-50 via-white to-orange-100 overflow-hidden"
    >
      {/* Floating background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 opacity-20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300 opacity-20 rounded-full blur-3xl animate-pulse-slow"></div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 h-full flex flex-col justify-center items-center text-center">
        <div>
          <span className="inline-block px-4 py-1 bg-purple-200 text-purple-800 rounded-full text-sm font-medium shadow">
            ABOUT ME
          </span>
          <h2 className="mt-4 text-5xl font-extrabold bg-gradient-to-r from-purple-700 to-purple-900 text-transparent bg-clip-text">
            My Journey
          </h2>
          <p className="mt-4 text-gray-700 max-w-xl mx-auto text-lg">
            Explore my passion, growth, and love for building meaningful web experiences.
          </p>
        </div>

        {/* Cards */}
        <div
          className={`mt-16 grid md:grid-cols-2 gap-10 w-full max-w-5xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* About Me */}
          <div className="bg-white/40 backdrop-blur-md border border-white/30 p-6 md:p-8 rounded-3xl shadow-2xl hover:shadow-purple-500 transition transform hover:-translate-y-1">
            <p className="text-gray-800 text-lg mb-4">
            I’m a passionate web developer with experience in building user-friendly and efficient web applications using technologies like React, Node.js, MongoDB, Firebase, and Django. 
            I enjoy turning ideas into responsive and impactful digital products, and I’m always eager to learn and grow with every project.
            </p>
            <p className="text-gray-800 text-lg">
              I’m especially drawn to crafting UIs with <strong className="text-purple-700">React</strong> and
              modern technologies design principles.
            </p>
          </div>

          {/* Education */}
          <div className="bg-white/40 backdrop-blur-md border border-white/30 p-6 md:p-8 rounded-3xl shadow-2xl hover:shadow-orange-500 transition transform hover:-translate-y-1 space-y-6">
            <h3 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">
              Education & Certification
            </h3>

            <div className="flex gap-4 items-start">
              <div className="bg-purple-100 text-purple-700 p-3 rounded-full shadow">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-purple-800">B.Tech in Computer Science</h4>
                <p className="text-gray-700">GMR Institute of Technology, Rajam</p>
                <p className="text-sm text-gray-500 mt-1">2022 – Present</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-purple-100 text-purple-700 p-3 rounded-full shadow">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-purple-800">Web Development Bootcamp</h4>
                <p className="text-gray-700">Bootcamp Name</p>
                <p className="text-sm text-gray-500 mt-1">2023</p>
              </div>
            </div>
          </div>
        </div>

        {/* Connect Button */}
        <div className="mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-700 text-white font-medium text-lg rounded-full shadow-lg hover:bg-purple-800 transition"
          >
            Let’s Connect
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
