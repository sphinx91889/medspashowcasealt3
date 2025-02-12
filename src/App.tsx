import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu, X, ChevronRight, Star, Calendar, Users, Sparkles } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Form from './components/Form';
import Newsletter from './components/Newsletter';
import Blog from './components/Blog';

// Page Imports
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import TeamPage from './pages/TeamPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursorPosition);
    return () => window.removeEventListener('mousemove', updateCursorPosition);
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen bg-white">
        <div
          className="custom-cursor hidden lg:block"
          style={{
            transform: `translate(${cursorPosition.x - 16}px, ${cursorPosition.y - 16}px)`,
          }}
        />

        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <main>
                <Hero />
                <Services />
                <Reviews />
                <Team />
                <Blog />
                <Form />
                <Newsletter />
              </main>

              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="font-playfair text-2xl mb-4">Examplus Medical Spa</h3>
                    <p className="text-gray-400">Experience transformative wellness in a luxurious setting.</p>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold mb-4">Contact</h4>
                    <p className="text-gray-400">123 Luxury Lane</p>
                    <p className="text-gray-400">Beverly Hills, CA 90210</p>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold mb-4">Hours</h4>
                    <p className="text-gray-400">Mon-Fri: 9AM - 8PM</p>
                    <p className="text-gray-400">Sat: 10AM - 6PM</p>
                    <p className="text-gray-400">Sun: Closed</p>
                  </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                  <p>&copy; {new Date().getFullYear()} Examplus Medical Spa. All rights reserved.</p>
                </div>
              </div>

              <footer className="bg-gray-900 text-white py-12"></footer>
            </>
          } />
          
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
