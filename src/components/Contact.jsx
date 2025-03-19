import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-indigo-400 mb-10">Get in Touch</h2>
        
        <p className="mb-8 text-gray-300">
          Feel free to connect with me on these platforms or drop me an email!
        </p>

        <div className="flex justify-center gap-6 text-3xl">
          
          {/* GitHub */}
          <motion.a
            href="https://github.com/Shubh-Sgr"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-gray-300 hover:text-white transition"
          >
            <FaGithub />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/shubham-sgr/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-gray-300 hover:text-white transition"
          >
            <FaLinkedin />
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:shubhamsagar9191@gmail.com"
            whileHover={{ scale: 1.2 }}
            className="text-gray-300 hover:text-white transition"
          >
            <FaEnvelope />
          </motion.a>

          {/* LeetCode */}
          <motion.a
            href="https://leetcode.com/u/shubh_sagar91/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-gray-300 hover:text-yellow-400 transition"
          >
            <SiLeetcode />
          </motion.a>

          {/* GeeksforGeeks */}
          <motion.a
            href="https://www.geeksforgeeks.org/user/sagar9191/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-gray-300 hover:text-green-400 transition"
          >
            <SiGeeksforgeeks />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
