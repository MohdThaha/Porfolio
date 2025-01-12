import { motion } from 'framer-motion';

const Skills = () => {
  const skillsets = {
    backend: [
      'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL',
      'Redis', 'RESTful APIs', 'GraphQL'
    ],
    devops: [
      'Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Jenkins',
      'Terraform', 'Linux', 'Shell Scripting'
    ],
    frontend: [
      'React.js', 'Redux', 'JavaScript', 'TypeScript',
      'HTML5', 'CSS3', 'Tailwind CSS'
    ],
    tools: [
      'Git', 'GitHub', 'Jira', 'Confluence', 'Postman',
      'VS Code', 'MongoDB Compass'
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-16 pt-24"
    >
      <h2 className="text-3xl font-bold text-text-light dark:text-text-dark mb-8">
        Skills
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skillsets).map(([category, skills]) => (
          <motion.div
            key={category}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-primary-light dark:bg-primary-dark p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-4 capitalize">
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map(skill => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-accent-light/10 text-accent-light rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;