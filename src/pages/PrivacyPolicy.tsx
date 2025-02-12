import React from 'react';
import PolicyPage from './PolicyPage';

const PrivacyPolicy = () => {
  const content = [
    "At Examplus Medical Spa, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information.",
    "We collect information you provide directly to us, such as when you book a consultation, subscribe to our newsletter, or contact us through our website.",
    "We use your information to provide and improve our services, communicate with you, and personalize your experience.",
    "We do not sell or share your personal information with third parties without your consent, except as required by law or to provide our services."
  ];

  return <PolicyPage title="Privacy Policy" content={content} />;
};

export default PrivacyPolicy;
