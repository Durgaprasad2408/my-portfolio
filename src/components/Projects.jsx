
import { useEffect, useState, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Hands-United",
      description: "A platform where users can exchange skills between one another",
      image: "/handsunited.png",
      tags: ["React", "Supabase", "Javascript", "TailwindCSS"],
      link: "https://hands-united.vercel.app/",
      github: "https://github.com/Durgaprasad2408/Hands-United"
    },
    {
      id: 2,
      title: "Resume Builder",
      description: "Resume Builer with ATS compatibility",
      image: "/resume-builder.png",
      tags: ["React", "Typescript", "TailwindCSS"],
      link: "https://ats-resume-builder-v1.vercel.app/",
      github: "https://github.com/Durgaprasad2408/ATS-Resume-Builder"
    },
    {
      id: 3,
      title: "Lesson PLanner",
      description: "An application where users can plan their lessons",
      image: " ",
      tags: ["React", "Gemini API", "TailwindCSS", "Typescript"],
      link: "#",
      github: "#"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add projects one by one with a delay
          projects.forEach((project, index) => {
            setTimeout(() => {
              setVisibleProjects(prev => [...prev, project.id]);
            }, index * 200);
          });
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
    <section ref={sectionRef} id="projects" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-3/4 bg-gradient-to-bl from-purple-50 to-transparent rounded-bl-[100px] opacity-80"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-orange-50 to-transparent rounded-tr-[100px] opacity-80"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">MY WORK</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-800">
            Recent Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Check out some of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-700 transform ${
                visibleProjects.includes(project.id) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-16 opacity-0'
              } hover:-translate-y-2 hover:shadow-xl`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-between p-6">
                  <a 
                    href={project.link} 
                    className="text-white px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg flex items-center gap-2 hover:bg-white/30 transition-colors" target='_blank'
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                  <a 
                    href={project.github} 
                    className="text-white px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg flex items-center gap-2 hover:bg-white/30 transition-colors" target='_blank'
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="font-bold text-xl mb-2 text-gray-800 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-sm px-3 py-1 bg-purple-50 text-purple-600 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
