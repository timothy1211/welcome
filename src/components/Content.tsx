import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, RefreshCw, Zap } from 'lucide-react';

export const Content: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Hardware Wallet",
      description: "Store your cryptocurrencies offline with military-grade security."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Easy Setup Process",
      description: "Get started in minutes with our intuitive setup wizard."
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Regular Updates",
      description: "Stay protected with automatic firmware updates."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Multi-Currency Support",
      description: "Manage multiple cryptocurrencies in one secure device."
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-trezor-green mb-4">Why Choose Trézor?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trézor is the industry leader in cryptocurrency hardware wallets, providing unmatched security and ease of use for your digital assets.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-trezor-green mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-20 prose prose-lg max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center text-trezor-green mb-8">Getting Started with Trézor</h2>
          
          <div className="space-y-6">
            <p>
              Welcome to Trézor.io/Start, your gateway to secure cryptocurrency management. Our state-of-the-art hardware wallet combines cutting-edge security with user-friendly features to protect your digital assets.
            </p>

            <h3 className="text-2xl font-semibold">Setting Up Your Device</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Unbox your Trézor device and verify the security seals</li>
              <li>Connect your device to your computer using the provided USB cable</li>
              <li>Follow our interactive setup wizard to initialize your device</li>
              <li>Create and securely store your recovery seed</li>
            </ul>

            <h3 className="text-2xl font-semibold">Security Features</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Offline storage keeps your private keys secure</li>
              <li>PIN protection prevents unauthorized access</li>
              <li>Optional passphrase for additional security layer</li>
              <li>Regular firmware updates to protect against new threats</li>
            </ul>

            <h3 className="text-2xl font-semibold">Managing Your Portfolio</h3>
            <p>
              Trézor supports a wide range of cryptocurrencies, allowing you to manage multiple assets from a single secure interface. Our intuitive dashboard provides real-time portfolio tracking and seamless transaction management.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h4 className="text-xl font-semibold mb-4">Ready to Secure Your Digital Assets?</h4>
              <p>
                Join thousands of users who trust Trézor for their cryptocurrency security. Get started today and experience peace of mind knowing your digital assets are protected by industry-leading security measures.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};