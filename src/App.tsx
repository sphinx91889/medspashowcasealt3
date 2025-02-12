import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { 
  Menu, X, ChevronRight, 
  Instagram, Facebook, Twitter, Linkedin, 
  Copyright 
} from 'lucide-react';
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
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import CancellationPolicy from './pages/CancellationPolicy';
import RefundPolicy from './pages/RefundPolicy';
import LiabilityWaiver from './pages/LiabilityWaiver';

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursorPosition);
    return () => window.removeEventListener('mousemove', updateCursorPosition);
  }, []);

  const socialLinks = [
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/examplus_medspa', 
      label: 'Instagram' 
    },
    { 
      icon: Facebook, 
      href: 'https://www.facebook.com/examplus_medspa', 
      label: 'Facebook' 
    },
    { 
      icon: Twitter, 
      href: 'https://www.twitter.com/examplus_medspa', 
      label: 'Twitter' 
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/company/examplus-medspa', 
      label: 'LinkedIn' 
    }
  ];

  const policyLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms-conditions' },
    { name: 'Cancellation Policy', path: '/cancellation-policy' },
    { name: 'Refund & Return', path: '/refund-policy' },
    { name: 'Liability Waiver', path: '/liability-waiver' }
  ];

  return (
    <BrowserRouter>
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

              <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4">
                  <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Social Media Icons */}
                    <div className="flex space-x-6 mb-6 md:mb-0">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-teal-400 transition-colors duration-300"
                          aria-label={social.label}
                        >
                          <social.icon className="w-6 h-6" />
                        </a>
                      ))}
                    </div>

                    {/* Policy Links */}
                    <div className="flex flex-wrap justify-center space-x-4 text-sm">
                      {policyLinks.map((link) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          className="text-white/80 hover:text-white transition-colors duration-300"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </footer>
            </>
          } />
          
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/cancellation-policy" element={<CancellationPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/liability-waiver" element={<LiabilityWaiver />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
