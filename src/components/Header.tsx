import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed w-full bg-white/80 backdrop-blur-lg z-50"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-primary"
          >
            Tre̾zor
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {['Products', 'Features', 'Security', 'Support'].map((item) => (
              <motion.a
                key={item}
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-primary hover:text-primary-light transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </nav>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-light transition-colors"
          >
            Get Started
          </motion.button>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-white"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {['Products', 'Features', 'Security', 'Support'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-primary hover:text-primary-light transition-colors"
                >
                  {item}
                </a>
              ))}
              <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-light transition-colors">
                Get Started
              </button>
            </nav>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;