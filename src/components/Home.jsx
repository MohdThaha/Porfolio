import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="flex justify-center mb-8"
        >
          <div className="w-24 h-24 bg-accent-light rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-primary-dark font-bold text-4xl">MTD</span>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-4xl md:text-6xl font-bold text-text-light dark:text-text-dark mb-4"
        >
          Mohammed Thaha Dawood
        </motion.h1>
        <motion.h2 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-accent-light mb-8"
        >
          MERN Stack Developer | Backend Engineer | DevOps
        </motion.h2>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center space-x-6 mb-12"
        >
          <a 
            href="https://github.com/MohdThaha" 
            className="text-text-light dark:text-text-dark hover:text-accent-light transition-colors"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FiGithub size={24} />
          </a>
          <a 
            href="https://linkedin.com/in/mohdthaha" 
            className="text-text-light dark:text-text-dark hover:text-accent-light transition-colors"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FiLinkedin size={24} />
          </a>
          <a 
            href="mailto:your.email@example.com" 
            className="text-text-light dark:text-text-dark hover:text-accent-light transition-colors"
          >
            <FiMail size={24} />
          </a>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-x-4"
        >
          <Link 
            to="/projects"
            className="bg-accent-light text-primary-dark px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            View Projects
          </Link>
          <Link 
            to="/contact"
            className="border border-accent-light text-accent-light px-6 py-3 rounded-lg hover:bg-accent-light hover:text-primary-dark transition-colors"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;