import { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    // Typing Animation
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
      const textArray = ["Full-Stack Developer", "B.Tech Student", "Web Designer", "Problem Solver"];
      let textIndex = 0;
      let charIndex = 0;
      let isDeleting = false;

      const type = () => {
        const currentText = textArray[textIndex];

        if (isDeleting) {
          typingText.textContent = currentText.substring(0, charIndex - 1);
          charIndex--;
        } else {
          typingText.textContent = currentText.substring(0, charIndex + 1);
          charIndex++;
        }

        if (!isDeleting && charIndex === currentText.length) {
          isDeleting = true;
          setTimeout(type, 1500);
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % textArray.length;
          setTimeout(type, 500);
        } else {
          setTimeout(type, isDeleting ? 50 : 100);
        }
      };

      setTimeout(type, 1000);
    }
  }, []);

  const socialLinks = [
    { icon: "fab fa-github", href: "https://github.com/Durgaprasad2408", hoverColor: "hover:bg-[#333]" },
    { icon: "fab fa-linkedin-in", href: "https://www.linkedin.com/in/durga-prasad-pandiripalli-5b97ab264", hoverColor: "hover:bg-[#0077b5]" },
    { icon: "fab fa-twitter", href: "#", hoverColor: "hover:bg-[#1da1f2]" },
    { icon: "fas fa-envelope", href: "mailto:durgaprasadpandiripalli@outlook.com", hoverColor: "hover:bg-[#ea4335]" }
  ];

  return (
    <section id="home" className="px-32 relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="animated-bg">
        {Array.from({ length: 20 }, (_, i) => (
          <span key={i} style={{ '--i': 11 + i }}></span>
        ))}
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-32">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right" data-aos-duration="1000">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-gray-800">Hi, I'm </span>
              <span className="gradient-text">DurgaPrasad</span>
            </h1>
            <div className="h-12 flex items-center">
              <h2 className="text-2xl md:text-3xl text-gray-600 typing-text inline-block">Full-Stack Developer</h2>
            </div>
            <p className="text-gray-600 mb-8 text-lg mt-6">
              I build responsive web applications with modern technologies and am passionate about creating elegant solutions to complex problems.
            </p>
            <div className="flex space-x-4">
              <a href="#projects" className="btn-primary">View My Work</a>
              <a href="#contact" className="btn-secondary">Contact Me</a>
            </div>
            <div className="flex mt-8 space-x-4">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className={`social-icon bg-gray-100 text-gray-700 ${social.hoverColor} hover:text-white transition`}>
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center" data-aos="fade-left" data-aos-duration="1000">
            <div className="relative floating">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-0 border-white shadow-2xl bg-gradient-to-br from-indigo-600 to-purple-600 p-2">
                <img 
                  src="/photo.jpg" 
                  alt="DurgaPrasad" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-500 hover:text-gray-700 transition">
          <i className="fas fa-chevron-down text-2xl"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;