import { useState, useEffect } from 'react';


const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const skillsData = {
    frontend: {
      title: "Frontend Development",
      description: "My frontend skills focus on creating responsive, accessible, and visually appealing user interfaces. I'm proficient in modern JavaScript frameworks and have a keen eye for design details.",
      radarSkills: [
        { name: "HTML/CSS", percent: 90 },
        { name: "JavaScript", percent: 80 },
        { name: "React", percent: 80 },
        { name: "Tailwind", percent: 85 },
        { name: "UI/UX", percent: 80 }
      ],
      progressSkills: [
        { name: "HTML/CSS", percent: 90 },
        { name: "JavaScript", percent: 80 },
        { name: "React", percent: 80 }
      ],
      cards: [
        { icon: "fab fa-html5", title: "HTML5", subtitle: "Semantic Markup", experience: "3+ years", mastery: 5 },
        { icon: "fab fa-css3-alt", title: "CSS3", subtitle: "Responsive Design", experience: "3+ years", mastery: 5 },
        { icon: "fab fa-js", title: "JavaScript", subtitle: "ES6+", experience: "2+ years", mastery: 4 },
        { icon: "fab fa-react", title: "React", subtitle: "Hooks & Context", experience: "2+ years", mastery: 4 }
      ]
    },
    backend: {
      title: "Backend Development",
      description: "My backend development skills focus on building scalable, efficient, and secure server-side applications. I'm experienced in creating RESTful APIs, database design, and server management.",
      bars: [
        { name: "Node.js", icon: "fab fa-node-js", height: 80 },
        { name: "Express.js", icon: "fab fa-js", height: 75 },
        { name: "MongoDB", icon: "fas fa-database", height: 70 },
        { name: "SQL", icon: "fas fa-table", height: 75 },
        { name: "REST APIs", icon: "fas fa-server", height: 70 }
      ],
      circles: [
        { title: "Server-Side", subtitle: "Node.js & Express", percent: 75 },
        { title: "Databases", subtitle: "MongoDB & SQL", percent: 75 },
        { title: "API Development", subtitle: "REST & GraphQL", percent: 65 }
      ],
      bubbles: [
        { icon: "fab fa-node-js", percent: 80 },
        { icon: "fab fa-js", percent: 80 },
        { icon: "fas fa-database", percent: 75 },
        { icon: "fas fa-server", percent: 70 }
      ]
    },
    tools: {
      categories: [
        {
          title: "Development Tools",
          skills: [
            { name: "VS Code", icon: "fas fa-code", percent: 85 },
            { name: "Git", icon: "fab fa-git-alt", percent: 80 },
            { name: "GitHub", icon: "fab fa-github", percent: 85 },
            { name: "CLI", icon: "fas fa-terminal", percent: 75 }
          ]
        },
        {
          title: "Cloud & Deployment",
          skills: [
            { name: "Vercel", icon: "fas fa-cloud", percent: 70 },
            { name: "GitHub Pages", icon: "fab fa-github", percent: 80 },
            { name: "FireBase", icon: "fas fa-fire", percent: 75 },
          ]
        },
        {
          title: "Programming & Scripting Languages",
          skills: [
            { name: "JavaScript", icon: "fab fa-js", percent: 85 },
            { name: "Python", icon: "fab fa-python", percent: 70 },
            { name: "Java", icon: "fab fa-java", percent: 65 },
            { name: "C", icon: "fas fa-code", percent: 60 }
          ]
        }
      ]
    }
  };

  useEffect(() => {
    const initAnimations = () => {
      if (activeTab === 'frontend') {
        initFrontendAnimations();
      } else if (activeTab === 'backend') {
        initBackendAnimations();
      }
    };

    const timer = setTimeout(initAnimations, 100);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const initFrontendAnimations = () => {
    // Radar chart animation
    const polygon = document.getElementById('frontend-polygon');
    const skillLabels = document.querySelectorAll('.skill-label');
    
    if (polygon) {
      const points = skillsData.frontend.radarSkills.map((skill, index) => {
        const angle = (360 / skillsData.frontend.radarSkills.length) * index;
        const radius = (skill.percent / 100) * 120;
        const x = 150 + radius * Math.cos((angle - 90) * Math.PI / 180);
        const y = 150 + radius * Math.sin((angle - 90) * Math.PI / 180);
        return `${x},${y}`;
      }).join(' ');
      
      polygon.setAttribute('points', points);
      
      // Position skill labels
      skillLabels.forEach((label, index) => {
        const angle = (360 / skillsData.frontend.radarSkills.length) * index;
        const radius = 140;
        let x = 150 + radius * Math.cos((angle - 90) * Math.PI / 180);
        let y = 150 + radius * Math.sin((angle - 90) * Math.PI / 180);

        if (index === 1) { 
          x -= 35;
        }
        if (index === 4) { 
          x += 30;
        }

        label.setAttribute('x', x);
        label.setAttribute('y', y);
      });
    }

    // Progress bars animation
    const progressBars = document.querySelectorAll('.skill-level-progress');
    setTimeout(() => {
      progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
      });
    }, 500);
  };

  const initBackendAnimations = () => {
    // Bar chart animation
    const bars = document.querySelectorAll('.skill-bar');
    bars.forEach((bar, index) => {
      setTimeout(() => {
        bar.style.height = bar.getAttribute('data-height');
      }, index * 200);
    });

    // Circle progress animation
    const circles = document.querySelectorAll('.skill-circle-progress');
    circles.forEach((circle, index) => {
      setTimeout(() => {
        const percent = parseInt(circle.getAttribute('data-percent'));
        const circumference = 2 * Math.PI * 54;
        const offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = offset;
      }, index * 300);
    });
  };

  const tabs = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'tools', label: 'Tools & Others' }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-indigo-50 relative">
      <div className="skill-wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-2">My <span className="gradient-text">Skills</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">I've developed expertise in various technologies throughout my journey as a developer. Here's a visual representation of my technical skills.</p>
        </div>
        
        <div className="skill-tabs" data-aos="fade-up">
          {tabs.map(tab => (
            <div 
              key={tab.id}
              className={`skill-tab ${activeTab === tab.id ? 'active' : ''}`} 
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </div>
          ))}
        </div>
        
        {/* Frontend Skills */}
        <div className={`skill-content ${activeTab === 'frontend' ? 'active' : ''}`} data-aos="fade-up" data-aos-delay="100">
          <div className="flex flex-col md:flex-row items-center justify-center mb-16">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="skill-radar-chart" id="frontend-radar">
                <svg viewBox="0 0 300 300">
                  {[120, 90, 60, 30].map(radius => (
                    <circle key={radius} cx="150" cy="150" r={radius} />
                  ))}
                  <polygon id="frontend-polygon" points="150,30 150,150" stroke-dasharray="565" stroke-dashoffset="565" />
                  {skillsData.frontend.radarSkills.map((skill, index) => (
                    <text key={index} x="150" y="150" textAnchor="middle" className="text-xs skill-label">
                      {skill.name} ({skill.percent}%)
                    </text>
                  ))}
                </svg>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">{skillsData.frontend.title}</h3>
              <p className="text-gray-600 mb-6">{skillsData.frontend.description}</p>
              <div className="space-y-4">
                {skillsData.frontend.progressSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-800">{skill.name}</span>
                      <span className="text-indigo-600">{skill.percent}%</span>
                    </div>
                    <div className="skill-level-bar">
                      <div className="skill-level-progress" data-width={`${skill.percent}%`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skillsData.frontend.cards.map((card, index) => (
              <div key={index} className="skill-card-container" data-aos="flip-left" data-aos-delay={100 * (index + 1)}>
                <div className="skill-card-3d">
                  <div className="skill-card-front">
                    <i className={`${card.icon} skill-card-icon`}></i>
                    <h4 className="skill-card-title">{card.title}</h4>
                    <p className="skill-card-subtitle">{card.subtitle}</p>
                  </div>
                  <div className="skill-card-back">
                    <h4 className="skill-card-title">{card.title}</h4>
                    <p className="skill-card-subtitle">{card.experience}</p>
                    <div className="skill-mastery">
                      {Array.from({ length: 5 }, (_, i) => (
                        <div key={i} className={`skill-mastery-dot ${i < card.mastery ? 'active' : ''}`}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Backend Skills */}
        <div className={`skill-content ${activeTab === 'backend' ? 'active' : ''}`}>
          <div className="flex justify-center mb-16">
            <div className="skill-bar-container w-full max-w-3xl flex justify-around items-end">
              {skillsData.backend.bars.map((bar, index) => (
                <div key={index} className="skill-bar" style={{ left: `${10 + index * 20}%`, height: '0%' }} data-height={`${bar.height}%`}>
                  <div className="skill-bar-icon">
                    <i className={bar.icon}></i>
                  </div>
                  <div className="skill-bar-label">{bar.name}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
            {skillsData.backend.circles.map((circle, index) => (
              <div key={index} className="text-center" data-aos="zoom-in" data-aos-delay={100 * (index + 1)}>
                <div className="skill-circle">
                  <svg viewBox="0 0 120 120">
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#4f46e5" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                    <circle className="skill-circle-bg" cx="60" cy="60" r="54" />
                    <circle className="skill-circle-progress" cx="60" cy="60" r="54" strokeDasharray="339.3" strokeDashoffset="339.3" data-percent={circle.percent} />
                  </svg>
                  <div className="skill-circle-text">{circle.percent}%</div>
                </div>
                <h4 className="text-lg font-semibold mt-4">{circle.title}</h4>
                <p className="text-gray-600">{circle.subtitle}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-6 text-center gradient-text">Backend Technologies</h3>
            <p className="text-gray-600 text-center mb-10">{skillsData.backend.description}</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skillsData.backend.bubbles.map((bubble, index) => (
                <div key={index} className="skill-bubble" data-percent={`${bubble.percent}%`} data-aos="zoom-in" data-aos-delay={100 * (index + 1)}>
                  <i className={bubble.icon}></i>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Tools Skills */}
        <div className={`skill-content ${activeTab === 'tools' ? 'active' : ''}`}>
          <div className="max-w-5xl mx-auto">
            {skillsData.tools.categories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="skill-category" data-aos="fade-up">
                <h3 className="skill-category-title mx-auto text-center">{category.title}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-10">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-center" data-aos="zoom-in" data-aos-delay={100 * (skillIndex + 1)}>
                      <div className="skill-hexagon">
                        <i className={skill.icon}></i>
                        <span className="skill-percent">{skill.percent}%</span>
                      </div>
                      <p className="skill-name">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;