import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce platform built with MERN stack, featuring user authentication, product management, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Redux", "Stripe"],
      github: "https://github.com/yourusername/ecommerce",
      live: "https://your-ecommerce.com"
    },
    {
      id: 2,
      title: "DevOps Dashboard",
      description: "Monitoring dashboard for DevOps metrics, featuring real-time updates and alert management.",
      technologies: ["React", "Docker", "Kubernetes", "Grafana", "Prometheus"],
      github: "https://github.com/yourusername/devops-dashboard",
      live: "https://your-dashboard.com"
    },
    {
      id: 3,
      title: "Chat Application",
      description: "Real-time chat application with WebSocket integration and file sharing capabilities.",
      technologies: ["Socket.io", "React", "Node.js", "MongoDB", "AWS S3"],
      github: "https://github.com/yourusername/chat-app",
      live: "https://your-chat-app.com"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-16 pt-24"
    >
      <h2 className="text-3xl font-bold text-text-light dark:text-text-dark mb-8">
        Projects
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-primary-light dark:bg-primary-dark p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-2">
              {project.title}
            </h3>
            <p className="text-text-light dark:text-text-dark mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-sm bg-accent-light/10 text-accent-light rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-light hover:underline"
              >
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-light hover:underline"
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;