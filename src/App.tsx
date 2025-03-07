import React from 'react';
import { CryptoTicker } from './components/CryptoTicker';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Content } from './components/Content';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <CryptoTicker />
      <Header />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
}

export default App;