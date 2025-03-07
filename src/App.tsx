import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/Header';
import Hero from './components/Hero';
import Content from './components/Content';
import Footer from './components/Footer';
import CryptoTicker from './components/CryptoTicker';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gradient-to-b from-white to-primary-light/10">
        <CryptoTicker />
        <Header />
        <Hero />
        <Content />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;