import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { motion } from 'framer-motion';

const CryptoTicker = () => {
  const { data: cryptoData } = useQuery({
    queryKey: ['crypto'],
    queryFn: async () => {
      const response = await axios.get(
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,cardano,solana,polkadot,ripple,dogecoin,chainlink,litecoin,stellar,tron,monero,cosmos,tezos,algorand,vechain,filecoin,theta,neo,iota&vs_currencies=usd'
      );
      return response.data;
    },
    refetchInterval: 30000,
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-primary text-white overflow-hidden py-2"
    >
      <div className="flex animate-[scroll_20s_linear_infinite]">
        {cryptoData && Object.entries(cryptoData).map(([coin, price]: [string, any]) => (
          <div key={coin} className="flex items-center mx-4 whitespace-nowrap">
            <span className="font-medium capitalize">{coin}</span>
            <span className="ml-2">${price.usd.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CryptoTicker;