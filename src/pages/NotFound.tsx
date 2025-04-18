import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-5"
    >
      <div className="text-center max-w-2xl relative z-10">
        {/* 404 Text */}
        <motion.div
          initial={{ scale: 0.8, y: -50 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-amber-400 to-pink-500 bg-clip-text text-transparent mb-4">
            404
          </h1>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Oops! Page Not Found</h2>
          <p className="text-lg md:text-xl text-gray-300">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
            className="bg-gradient-to-r from-amber-400 to-pink-500 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg"
          >
            Return Home
          </motion.button>
        </motion.div>

        {/* Decorative Elements */}
        <motion.img
          src="https://assets.codepen.io/1538474/astronaut.svg"
          alt="astronaut"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 50 }}
          className="absolute w-32 md:w-40 -left-10 md:-left-16 top-60 -translate-y-1/2 z-0"
        />
        
        <motion.img
          src=" https://assets.mediamodifier.com/icons/626fa1dc2257bef764970798/Earth.svg"
          alt="planet"
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 50 }}
          className="absolute w-40 md:w-48 -right-10 md:-right-28 top-0 z-0"
        />
      </div>
    </motion.div>
  );
};

export default NotFoundPage;