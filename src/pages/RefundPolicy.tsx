import React from 'react';
import PolicyPage from './PolicyPage';

const RefundPolicy = () => {
  const content = [
    "At Examplus Medical Spa, we strive to ensure your complete satisfaction with our services.",
    "Consultation fees are non-refundable but can be applied towards future treatments.",
    "For treatment packages, refunds may be prorated based on services already received.",
    "Product purchases are subject to a 14-day return policy for unopened and unused items."
  ];

  return <PolicyPage title="Refund & Return Policy" content={content} />;
};

export default RefundPolicy;
