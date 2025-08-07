import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServiceCategories from './components/ServiceCategories';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <ServiceCategories />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
