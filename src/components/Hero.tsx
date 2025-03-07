import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-trezor-light-green pt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-trezor-green mb-6">
              Secure Your Digital Assets
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Start your journey into secure cryptocurrency management with Trézor's trusted hardware wallet solution.
            </p>
            <div className="flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-trezor-green text-white px-8 py-3 rounded-full text-lg"
              >
                Get Your Trézor
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="border-2 border-trezor-green text-trezor-green px-8 py-3 rounded-full text-lg"
              >
                Continue with Browser
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=800"
              alt="Trézor Device"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};