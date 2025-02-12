import React from 'react';
import PolicyPage from './PolicyPage';

const CancellationPolicy = () => {
  const content = [
    "We understand that plans can change. Our cancellation policy is designed to be fair to both our clients and our business.",
    "Consultations can be rescheduled or cancelled up to 24 hours before the scheduled time without any penalty.",
    "Cancellations made less than 24 hours before the appointment may incur a cancellation fee.",
    "For treatment packages, please refer to specific package terms or consult with our staff for detailed cancellation guidelines."
  ];

  return <PolicyPage title="Cancellation Policy" content={content} />;
};

export default CancellationPolicy;
