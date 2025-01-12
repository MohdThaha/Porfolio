import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-16 pt-24"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-text-light dark:text-text-dark mb-8">
          About Me
        </h2>
        
        <div className="prose prose-lg dark:prose-invert">
          <p className="text-text-light dark:text-text-dark mb-6">
            I am a passionate MERN Stack Developer with expertise in Backend Engineering and DevOps.
            With several years of experience in building scalable applications and implementing
            robust infrastructure solutions.
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-4">
              What I do
            </h3>
            <ul className="list-disc list-inside space-y-2 text-text-light dark:text-text-dark">
              <li>Develop full-stack applications using MERN technology</li>
              <li>Design and implement scalable backend architectures</li>
              <li>Set up and manage CI/CD pipelines</li>
              <li>Cloud infrastructure management (AWS/Azure/GCP)</li>
              <li>Database design and optimization</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-4">
              Education
            </h3>
            <p className="text-text-light dark:text-text-dark">
              Bachelor's Degree in Computer Science
              <br />
              <span className="text-accent-light">Your University Name</span>
              <br />
              2018 - 2022
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;