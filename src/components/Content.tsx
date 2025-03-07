import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Key, Wallet, RefreshCw, Users } from 'lucide-react';

const Content = () => {
  const features = [
    {
      icon: Shield,
      title: "Military-grade Security",
      description: "Your private keys never leave the device, ensuring maximum protection against cyber threats."
    },
    {
      icon: Lock,
      title: "Easy Backup & Recovery",
      description: "Simple recovery process with your backup phrase, keeping you in control of your assets."
    },
    {
      icon: Key,
      title: "Multi-currency Support",
      description: "Manage Bitcoin, Ethereum, and thousands of other cryptocurrencies in one secure place."
    },
    {
      icon: Wallet,
      title: "Intuitive Interface",
      description: "User-friendly design makes managing your crypto assets simple and straightforward."
    },
    {
      icon: RefreshCw,
      title: "Regular Updates",
      description: "Continuous security updates and new feature releases to stay ahead of emerging threats."
    },
    {
      icon: Users,
      title: "Global Community",
      description: "Join millions of users worldwide who trust Tre̾zor for their crypto security."
    }
  ];

  return (
    <div className="py-20 px-4 bg-gradient-to-b from-white to-primary-light/5">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-6">Why Choose Tre̾zor?</h2>
          <p className="text-lg text-gray-600">
            Tre̾zor is the original hardware wallet, trusted by millions worldwide to secure their digital assets. Our commitment to security, innovation, and user experience makes us the leading choice for crypto security.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold text-primary mb-6">Ready to Secure Your Digital Assets?</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-primary-light transition-colors"
          >
            Get Started Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Content;