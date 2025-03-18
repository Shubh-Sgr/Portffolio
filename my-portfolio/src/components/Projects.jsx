import { motion } from "framer-motion";

const projects = [
  {
    title: "CineExplore",
    desc: "A sleek and responsive web application that allows users to search for movies, explore trending films, and view detailed movie information in real-time.",
    link: "https://github.com/Shubh-Sgr/movies_search",
  },
  {
    title: "LogicMerge(2048)",
    desc: "A terminal-based implementation of the classic 2048 game, developed in C++. This project demonstrates strong knowledge of arrays, input handling, and object-oriented programming (OOP) principles.",
    link: "https://github.com/Shubh-Sgr/2048Game",
  },
  {
    title: "StrategicGrid(TicTacToe)",
    desc: "A simple yet fully functional Tic-Tac-Toe game built with C++, running in the terminal/console. This project demonstrates 2-player gameplay, board management, and basic AI logic (optional). It uses fundamental programming concepts, object-oriented design (optional), and clean console output for an intuitive user experience..",
    link: "https://github.com/Shubh-Sgr/TicTacToe",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-indigo-400 mb-10 text-center">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800 rounded-lg p-6 hover:bg-indigo-500 transition duration-300 flex flex-col justify-between"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.desc}</p>
              <a href={project.link} className="text-indigo-300 hover:text-white" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
