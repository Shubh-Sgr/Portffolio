import { motion } from "framer-motion";

const skills = [
  "C", "C++", "Java", "Python", "JavaScript", "TypeScript", "React.js", "React Query",
  "Router", "Context API", "Redux", "ReactJs", "NodeJs", "SpringBoot", "Mocha", "Jenkins",
  "GitHub", "Git", "Visual Studio Code", "Jira", "npm", "yarn", "Docker", "Microsoft Teams",
  "Amazon Web Services (AWS)", "Google Cloud Platform (GCP)", "Postman", "SQL", "Chrome DevTools",
  "Confluence", "Swagger", "DBeaver", "IntelliJ IDEA", "MongoDB Compass", "Database", "User Requirements",
  "Splunk", "Caching", "MySQL", "OAuth", "CloudFront", "Enterprise SaaS", "Business Intelligence",
  "ECS", "Jest", "Next.js", "Slack", "CI/CD", "Kubernetes", "Kafka", "Cloud", "CSS3", "HTML5",
  "Communication Skills", "Product Design", "Full Stack Development", "Information Security",
  "Microservices", "Relationship Building", "Data Structures", "Version Control", "DOM", "ES6",
  "Founder", "jQuery", "UX Patterns", "Web Design", "PHP", "REST APIs", "Open Source",
  "Customer Engagement", "End-to-End Development", "Product Management", "NoSQL", "Cloud Infrastructure",
  "Code Review", "Redis", "Prototypes", "Unit Test", "Non-relational Databases", "Test-Driven Development"
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-indigo-400 mb-10 text-center">Skills</h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-gray-700 rounded-lg py-6 text-center hover:bg-indigo-500 transition duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
