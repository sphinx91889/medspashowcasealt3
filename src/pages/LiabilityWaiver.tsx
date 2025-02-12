import React from 'react';
import PolicyPage from './PolicyPage';

const LiabilityWaiver = () => {
  const content = [
    "By receiving services at Examplus Medical Spa, you acknowledge and agree to the following liability waiver.",
    "You understand that all medical and aesthetic treatments carry inherent risks and potential side effects.",
    "You confirm that you have disclosed all relevant medical history and current health conditions.",
    "Examplus Medical Spa is not liable for any complications arising from pre-existing conditions or failure to follow post-treatment instructions."
  ];

  return <PolicyPage title="Liability Waiver" content={content} />;
};

export default LiabilityWaiver;
