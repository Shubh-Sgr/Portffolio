import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-indigo-400 mb-10 text-center">Contact Me</h2>
        <motion.form 
          className="flex flex-col space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <input 
            type="text"
            placeholder="Your Name"
            className="p-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input 
            type="email"
            placeholder="Your Email"
            className="p-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <textarea 
            rows="5"
            placeholder="Your Message"
            className="p-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button 
            type="submit"
            className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-full transition duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
