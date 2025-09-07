const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-10 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Durga<span className="text-indigo-400">Prasad</span></h2>
            <p className="text-gray-400 mt-2">Full-Stack Developer & B.Tech Student</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/Durgaprasad2408" target="_blank" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-github text-xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/durga-prasad-pandiripalli-5b97ab264" target="_blank" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
            <a href="#" target="_blank" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="mailto:durgaprasadpandiripalli@outlook.com" target="_blank" className="text-gray-400 hover:text-white transition">
              <i className="fas fa-envelope text-xl"></i>
            </a>
          </div>
        </div>
        <hr className="border-gray-800 my-8" />
        <div className="text-center text-gray-400">
          <p>&copy; <span id="current-year"></span> DurgaPrasad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;