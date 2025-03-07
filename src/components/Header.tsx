import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md"
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <Shield className="w-8 h-8 text-trezor-green" />
            <span className="text-2xl font-bold text-trezor-green">Trézor</span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-trezor-green transition-colors">Features</a>
            <a href="#security" className="text-gray-700 hover:text-trezor-green transition-colors">Security</a>
            <a href="#support" className="text-gray-700 hover:text-trezor-green transition-colors">Support</a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-trezor-green text-white px-6 py-2 rounded-full"
            >
              Get Started
            </motion.button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
    </motion.header>
  );
};