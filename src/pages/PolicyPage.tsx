import React from 'react';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

interface PolicyPageProps {
  title: string;
  content: string[];
}

const PolicyPage: React.FC<PolicyPageProps> = ({ title, content }) => {
  return (
    <div>
      <Navbar />
      <main className="pt-24 container mx-auto px-4">
        <h1 className="section-title mb-8">{title}</h1>
        <div className="prose max-w-4xl mx-auto">
          {content.map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
        <Newsletter />
      </main>
    </div>
  );
};

export default PolicyPage;
