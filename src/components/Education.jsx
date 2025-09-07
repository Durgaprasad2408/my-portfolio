const Education = () => {
  return (
    <section id="education" className="px-32 py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-2">My <span className="gradient-text">Education</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="timeline-item" data-aos="fade-up" data-aos-duration="1000">
            <div className="timeline-dot"></div>
            <div className="bg-white p-6 rounded-lg shadow-md ml-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                  <i className="fas fa-graduation-cap text-indigo-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-indigo-600">B.Tech in Computer Science</h3>
                  <p className="text-gray-600">GMR Institute of Technology</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                  <i className="fas fa-calendar-alt text-indigo-600"></i>
                </div>
                <p className="text-gray-600">2022 - Present</p>
              </div>
              <p className="text-gray-600 ml-11">
                Currently pursuing my bachelor's degree with a focus on software development, data structures, and algorithms. Participating in various coding competitions and hackathons.
              </p>
            </div>
          </div>
          
          <div className="timeline-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <div className="timeline-dot"></div>
            <div className="bg-white p-6 rounded-lg shadow-md ml-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                  <i className="fas fa-school text-indigo-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-indigo-600">Intermediate</h3>
                  <p className="text-gray-600">Sri Chaitanya Junior College</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                  <i className="fas fa-calendar-alt text-indigo-600"></i>
                </div>
                <p className="text-gray-600">2020 - 2022</p>
              </div>
            </div>
          </div>
          
          <div className="timeline-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <div className="timeline-dot"></div>
            <div className="bg-white p-6 rounded-lg shadow-md ml-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                  <i className="fas fa-book text-indigo-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-indigo-600">Secondary Education</h3>
                  <p className="text-gray-600">Vivekananda High School</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                  <i className="fas fa-calendar-alt text-indigo-600"></i>
                </div>
                <p className="text-gray-600">2019 - 2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;