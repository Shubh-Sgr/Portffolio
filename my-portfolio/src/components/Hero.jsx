import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-black pt-20" id="home">
      <motion.div 
        className="text-center space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-indigo-400"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Hey, I'm Shubham Sagar
        </motion.h1>
        <motion.p 
          className="text-lg md:text-2xl text-gray-300"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.6 }}
        >
          A Full Stack Developer with 3 years of experience.
        </motion.p>
        <motion.a 
          href="#projects"
          className="inline-block px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-full transition duration-300"
          whileHover={{ scale: 1.1 }}
        >
          View Projects
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
