import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 bg-gray-800 shadow-md z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-400">Shubham Sagar</h1>
        <div className="space-x-6">
          <a href="#about" className="hover:text-indigo-400">About</a>
          <a href="#skills" className="hover:text-indigo-400">Skills</a>
          <a href="#projects" className="hover:text-indigo-400">Projects</a>
          <a href="#contact" className="hover:text-indigo-400">Contact</a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
