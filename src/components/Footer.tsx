import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, Github } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Youtube, href: '#' },
    { icon: Github, href: '#' }
  ];

  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Tre̾zor</h3>
            <p className="text-gray-300">
              Securing your digital assets with the most trusted hardware wallet in the world.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300 transition-colors">Tre̾zor One</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Tre̾zor Model T</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Accessories</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Compare</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Security</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Blog</a></li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-300">
              © 2025 Tre̾zor. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2 }}
                  className="hover:text-gray-300 transition-colors"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;