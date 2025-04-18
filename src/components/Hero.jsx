import { Github, Linkedin, Mail, ExternalLink, Download } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient Blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-white z-0"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob opacity-70"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob opacity-70 animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob opacity-70 animation-delay-4000"></div>
      </div>

      <div className="container mx-auto mt-24 md:mt-0 flex flex-col-reverse lg:flex-row items-center justify-between relative z-10">
        {/* Text Content */}
        <div className={`mx-auto md:ml-28 text-left lg:w-1/2 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
          <p className="mb-4 text-lg md:text-xl font-medium text-purple-700 bg-purple-100 py-2 px-4 rounded-xl inline-block shadow">
            👋 Hello! Everyone, This is 
          </p>


          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500">
            Durga Prasad
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
          I’m a Full-Stack developer who loves building easy-to-use and user-friendly web applications that make life simpler.
          </p>

          {/* Social Icons */}
          <div className="flex flex-wrap gap-6 mb-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 p-2 bg-white rounded-full shadow-md hover:shadow-lg hover:text-purple-600 transition-all duration-300 transform hover:scale-105">
              <Github className="h-5 w-5" />
              <span className="font-medium">GitHub</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 p-2 bg-white rounded-full shadow-md hover:shadow-lg hover:text-purple-600 transition-all duration-300 transform hover:scale-105">
              <Linkedin className="h-5 w-5" />
              <span className="font-medium">LinkedIn</span>
            </a>
            <a href="mailto:your.email@example.com"
              className="flex items-center gap-2 p-2 bg-white rounded-full shadow-md hover:shadow-lg hover:text-purple-600 transition-all duration-300 transform hover:scale-105">
              <Mail className="h-5 w-5" />
              <span className="font-medium">Email</span>
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <a href="#projects"
              className="group inline-flex items-center bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 font-medium">
              View My Work
              <ExternalLink className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* Replace below link with actual resume URL */}
            <a href="/DurgaPrasad_Resume.pdf" download
              className="group inline-flex items-center px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-xl hover:bg-purple-50 transition-all duration-300 hover:-translate-y-1 font-medium">
              Download Resume
              <Download className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
            </a>
          </div>
        </div>

        {/* Profile Image Section */}
        <div className={`lg:w-1/2 flex justify-center mb-10 lg:mb-0 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
          <div className="relative">
            <div className="absolute -bottom-6 -right-6 w-64 h-64 rounded-full border-8 border-purple-200 -z-10"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 rounded-full border-8 border-orange-200 -z-10"></div>

            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
              <img
                src="/pic.jpg"
                alt="Student Web Developer"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-500 hover:text-purple-600 transition-colors">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
