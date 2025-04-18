
import { useEffect, useState, useRef } from 'react';
import { Code, Palette, GitBranch, Server, Globe, Zap } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  const skills = [
    { name: "HTML & CSS", level: 90, icon: <Globe className="w-6 h-6" /> },
    { name: "JavaScript", level: 85, icon: <Code className="w-6 h-6" /> },
    { name: "React", level: 80, icon: <Zap className="w-6 h-6" /> },
    { name: "Node.js", level: 70, icon: <Server className="w-6 h-6" /> },
    { name: "Python", level: 75, icon: <Palette className="w-6 h-6" /> },
    { name: "Git & Github", level: 80, icon: <GitBranch className="w-6 h-6" /> }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
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
    <section ref={sectionRef} id="skills" className="py-24 relative overflow-hidden h-full md:h-screen">
      {/* Abstract background shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-b from-purple-50 to-transparent rounded-bl-full opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gradient-to-t from-orange-50 to-transparent rounded-tr-full opacity-70"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-50 rounded-full opacity-30"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">MY EXPERTISE</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-800">
            Technical Skills
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some technologies and tools I've been working with recently
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className={`bg-white p-5 rounded-xl shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-10 transform ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              } hover:-translate-y-2`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-purple-50 rounded-lg text-purple-600 mr-4">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{skill.name}</h3>
                  <p className="text-gray-500 text-sm">{skill.level}% Proficiency</p>
                </div>
              </div>
              
              <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 relative"
                  style={{ 
                    width: isVisible ? `${skill.level}%` : '0%',
                    transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    transitionDelay: `${index * 150 + 300}ms`
                  }}
                >
                  <div className="absolute inset-0 bg-white/20 w-full h-full bg-[length:10px_10px] bg-[-10px_0] animate-shimmer"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
