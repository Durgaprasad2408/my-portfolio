// src/components/About.jsx
const About = () => {
  const personalInfo = [
    { icon: "fas fa-user", label: "Name", value: "DurgaPrasad Pandiripalli" },
    { icon: "fas fa-envelope", label: "Email", value: "durgaprasadpandiripalli@outlook.com" },
    { icon: "fas fa-graduation-cap", label: "Education", value: "B.Tech in Computer Science" },
    { icon: "fas fa-map-marker-alt", label: "Location", value: "Rajam, Vizianagaram" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-2">About <span className="gradient-text">Me</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/5 mb-8 md:mb-0" data-aos="fade-right" data-aos-duration="1000">
            <div className="relative">
              <div className="tilt bg-gradient-to-br from-indigo-600 to-purple-600 p-1 rounded-lg max-w-md mx-auto">
                <div className="tilt-inner bg-white p-6 rounded-lg shadow">
                  <img 
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="DurgaPrasad" 
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-4/6 md:pl-10" data-aos="fade-left" data-aos-duration="1000">
            <h3 className="text-2xl font-semibold mb-4 gradient-text">Full-Stack Developer & B.Tech Student</h3>
            <p className="text-gray-600 mb-4">
              I'm a passionate full-stack developer currently pursuing my B.Tech degree. With a strong foundation in both frontend and backend technologies, I enjoy creating seamless user experiences and robust server-side solutions.
            </p>
            <p className="text-gray-600 mb-6">
              My journey in tech began during my first year of college, and since then, I've been constantly learning and building projects that solve real-world problems. I believe in clean code, user-centered design, and continuous improvement.
            </p>
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-x-0 gap-y-6">
              {personalInfo.map((info, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                    <i className={`${info.icon} text-indigo-600`}></i>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{info.label}:</p>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="/All.pdf" target="_blank" className="inline-block mt-8 btn-primary">
              Download Resume <i className="fas fa-download ml-2"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;