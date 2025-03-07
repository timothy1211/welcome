import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Twitter, Github, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-trezor-green text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 mb-4"
            >
              <Shield className="w-8 h-8" />
              <span className="text-2xl font-bold">Trézor</span>
            </motion.div>
            <p className="text-trezor-light-green">
              Securing your digital assets with cutting-edge technology.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-trezor-light-green transition-colors">Hardware Wallet</a></li>
              <li><a href="#" className="hover:text-trezor-light-green transition-colors">Software Suite</a></li>
              <li><a href="#" className="hover:text-trezor-light-green transition-colors">Mobile App</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-trezor-light-green transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-trezor-light-green transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-trezor-light-green transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="hover:text-trezor-light-green transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="hover:text-trezor-light-green transition-colors"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="hover:text-trezor-light-green transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-trezor-light-green/20 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Trézor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};