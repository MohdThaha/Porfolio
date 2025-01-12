import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Backend Developer",
      company: "Tech Company",
      period: "2022 - Present",
      description: [
        "Led backend development for multiple high-traffic applications",
        "Implemented microservices architecture using Node.js",
        "Optimized database performance and reduced query times by 40%",
        "Managed team of 5 developers and mentored junior engineers"
      ]
    },
    {
      title: "DevOps Engineer",
      company: "Another Company",
      period: "2020 - 2022",
      description: [
        "Implemented CI/CD pipelines using Jenkins and GitHub Actions",
        "Managed Kubernetes clusters in production environment",
        "Reduced deployment time by 60% through automation",
        "Implemented monitoring and alerting systems"
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-16 pt-24"
    >
      <h2 className="text-3xl font-bold text-text-light dark:text-text-dark mb-8">
        Experience
      </h2>

      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="mb-12 relative pl-8 border-l-2 border-accent-light"
          >
            <div className="absolute w-4 h-4 bg-accent-light rounded-full -left-[9px] top-0" />
            <h3 className="text-xl font-bold text-text-light dark:text-text-dark">
              {exp.title}
            </h3>
            <p className="text-accent-light font-medium mb-2">
              {exp.company} | {exp.period}
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-light dark:text-text-dark">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;