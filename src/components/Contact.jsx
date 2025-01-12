import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      // Add your form submission logic here
      // Example: await axios.post('/api/contact', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-16 pt-24"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-text-light dark:text-text-dark mb-8">
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FiMail className="text-accent-light w-6 h-6" />
                <span className="text-text-light dark:text-text-dark">
                  your.email@example.com
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <FiPhone className="text-accent-light w-6 h-6" />
                <span className="text-text-light dark:text-text-dark">
                  +1 234 567 890
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <FiLinkedin className="text-accent-light w-6 h-6" />
                <a 
                  href="https://linkedin.com/in/yourusername"
                  className="text-text-light dark:text-text-dark hover:text-accent-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label 
                htmlFor="name"
                className="block text-text-light dark:text-text-dark mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-2 rounded-lg bg-primary-light dark:bg-primary-dark border border-accent-light focus:outline-none focus:ring-2 focus:ring-accent-light"
                required
              />
            </div>

            <div>
              <label 
                htmlFor="email"
                className="block text-text-light dark:text-text-dark mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-2 rounded-lg bg-primary-light dark:bg-primary-dark border border-accent-light focus:outline-none focus:ring-2 focus:ring-accent-light"
                required
              />
            </div>

            <div>
              <label 
                htmlFor="message"
                className="block text-text-light dark:text-text-dark mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows="4"
                className="w-full px-4 py-2 rounded-lg bg-primary-light dark:bg-primary-dark border border-accent-light focus:outline-none focus:ring-2 focus:ring-accent-light"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-accent-light text-primary-dark py-2 rounded-lg hover:opacity-90 transition-opacity"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-green-500">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-500">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;