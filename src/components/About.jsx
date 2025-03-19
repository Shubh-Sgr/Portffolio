import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-900">
            <div className="max-w-5xl mx-auto px-4">
                <motion.h2
                    className="text-3xl font-bold text-indigo-400 mb-6 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    About Me
                </motion.h2>
                <motion.p
                    className="text-gray-300 text-center max-w-3xl mx-auto"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    I’m a passionate and results-driven Software Engineer with over 3+ years of experience in building scalable, high-performance web applications and services. My expertise spans both frontend and backend development, allowing me to contribute across the full technology stack. I have a strong command of programming languages such as Java, C++, Python, JavaScript, and TypeScript, and I’m proficient in frameworks like React.js, Node.js, and Spring Boot.

                    I’m highly experienced in developing modern, responsive user interfaces with React.js, managing complex state with Redux and React Query, and building robust backend services and APIs. I’ve worked extensively with REST APIs, Microservices, and CI/CD pipelines, and I’m familiar with tools like Docker, Jenkins, and GitHub for efficient DevOps and deployment.

                    I’m also adept at leveraging cloud services, including AWS and Google Cloud Platform, and have hands-on experience with databases like SQL, MySQL, MongoDB, and Redis. I take pride in writing clean, maintainable code and following test-driven development practices with tools like Jest and Mocha.

                    Beyond coding, I value collaboration, problem-solving, and delivering products that provide real value to users. I’m always eager to learn new technologies and continuously improve my skills to stay ahead in this ever-evolving tech landscape.
                </motion.p>
            </div>
        </section>
    );
};

export default About;
