// src/components/Projects.jsx
import { useState } from 'react';

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projectsData = [
    {
      id: 1,
      title: "Hotel Booking Platform",
      description: "A full-stack e-commerce platform with product catalog, user authentication, and payment integration.",
      image: "/GrandSuite.png",
      gradient: "from-indigo-500 to-purple-600",
      technologies: ["React", "Node.js","Express.js", "MongoDB", "Stripe"],
      github: "https://github.com/Durgaprasad2408/Hotel_Booking",
      live: "https://grand-suite.vercel.app/"
    },
    {
      id: 2,
      title: "Hands-United",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      image: "/HandsUnited.png",
      gradient: "from-green-500 to-teal-600",
      technologies: ["React", "Supabase", "SQL", "Tailwind CSS"],
      github: "https://github.com/Durgaprasad2408/Hands-United",
      live: "https://hands-united.vercel.app"
    },
    {
      id: 3,
      title: "NeuroEase - Mood Journal APP",
      description: "An interactive analytics dashboard with data visualization and real-time metrics tracking.",
      image: '/Neuroease.png',
      gradient: "from-yellow-500 to-orange-600",
      technologies: ["React", "Tailwind CSS", "FireBase", "SQL"],
      github: "https://github.com/Durgaprasad2408/Neuro",
      live: "https://neuroease-v1.vercel.app"
    },
    {
      id: 4,
      title: "Music Player",
      description: "A modern portfolio website with smooth animations and responsive design.",
      image: "/Harmony.png",
      gradient: "from-purple-500 to-indigo-600",
      technologies: ["React", "Tailwind CSS", "Supabase", "Vite"],
      github: "https://github.com/Durgaprasad2408/harmony",
      live: "https://harmony-green.vercel.app"
    },
    {
      id: 5,
      title: "MuseAI App",
      description: "A modern social media platform with real-time messaging, posts, and user interactions.",
      image: "/MuseAI.png",
      gradient: "from-pink-500 to-red-600",
      technologies: ["React", "Supabase", "Bolt", "SQL"],
      github: "https://github.com/Durgaprasad2408/MuseAI",
      live: "https://museai-v1.vercel.app"
    },
    {
      id: 6,
      title: "Spotify Clone",
      description: "A responsive weather application with location-based forecasts and interactive maps.",
      image: "/Spotify.png",
      gradient: "from-blue-500 to-cyan-600",
      technologies: ["React", "TailwindCSS", "", "CSS3"],
      github: "https://github.com/Durgaprasad2408/Spotify-Clone",
      live: "https://spotify-clone-kappa-drab.vercel.app"
    },
    
  ];

  // Function to get visible projects based on screen size and showAll state
  const getVisibleProjects = () => {
    if (showAllProjects) {
      return projectsData;
    }
    
    // Show 2 projects on mobile/tablet, 3 on desktop by default
    if (typeof window !== 'undefined') {
      const isLargeScreen = window.innerWidth >= 1024;
      return projectsData.slice(0, isLargeScreen ? 3 : 2);
    }
    
    return projectsData.slice(0, 3); // Default fallback
  };

  const ProjectCard = ({ project, index }) => (
    <div className="project-card border rounded-xl" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={100 * (index + 1)}>
      <div className="project-img-container h-56 rounded-t-xl overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-80`}></div>
        
        <div className="project-overlay">
          <div className="text-white text-center px-4">
            <h4 className="text-xl font-bold mb-2">{project.title}</h4>
            <p className="mb-4">{project.description}</p>
            <div className="flex justify-center space-x-4">
              <a href={project.github} target='_blank' className="bg-white text-indigo-600 w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-90 transition">
                <i className="fab fa-github"></i>
              </a>
              <a href={project.live} target='_blank' className="bg-white text-indigo-600 w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-90 transition">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 bg-white rounded-b-xl">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <span key={techIndex} className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const visibleProjects = getVisibleProjects();
  const hasMoreProjects = projectsData.length > visibleProjects.length;

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-2">My <span className="gradient-text">Projects</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        {(hasMoreProjects || showAllProjects) && (
          <div className="text-center mt-12" data-aos="fade-up" data-aos-duration="1000">
            <button 
              type="button"
              onClick={() => {setShowAllProjects(!showAllProjects);
                if (showAllProjects) {
                // Scroll back to top of projects when collapsing
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="btn-primary"
            >
              {showAllProjects ? (
                <>Show Less <i className="fas fa-arrow-up ml-2"></i></>
              ) : (
                <>View All Projects <i className="fas fa-arrow-right ml-2"></i></>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;