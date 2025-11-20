import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Wishes from './components/Wishes';
import Gifts from './components/Gifts';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';

const App: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <Header />
      
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center py-0">
          <main className="layout-content-container flex flex-col w-full flex-1">
            <Hero />
            <div className="max-w-7xl mx-auto w-full">
              <Wishes />
              <Gifts />
            </div>
            <Footer />
            <MusicPlayer />
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;