import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

interface CryptoData {
  id: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
}

export const CryptoTicker: React.FC = () => {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              order: 'market_cap_desc',
              per_page: 20,
              sparkline: false,
            },
          }
        );
        setCryptoData(response.data);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
    };

    fetchCryptoData();
    const interval = setInterval(fetchCryptoData, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black/5 backdrop-blur-sm py-2 overflow-hidden">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="flex space-x-8 whitespace-nowrap"
      >
        {cryptoData.map((crypto) => (
          <div
            key={crypto.id}
            className="inline-flex items-center space-x-2"
          >
            <span className="font-medium">{crypto.name}</span>
            <span className={crypto.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'}>
              ${crypto.current_price.toLocaleString()}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};