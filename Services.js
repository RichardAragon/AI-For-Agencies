import React from 'react';
import ServiceCard from './ServiceCard';
import './Services.css';

const services = [
  {
    title: 'App Creation: (React, Javascript, Python, Web, Mobile)',
    description: 'Starter',
    price: '$299',
    details: [
      '1 Page App',
      'Includes code only',
      'Marketing video',
      'Documentation for the app',
    ],
  },
  {
    title: 'App Creation: (React, Javascript, Python, Web, Mobile)',
    description: 'Helping Hand',
    price: '$499',
    details: [
      'Everything from Starter plus:',
      'Hosting and configuration of the app',
      'Github Repository creation',
      'Netlify App Hosting',
    ],
  },
  {
    title: 'Knowledge Base Bots',
    description: 'Fine tuning of AI models on systems and resources documentation rather than company documents',
    price: '$999 Setup fee + $49 Per Month Per Knowledge Base Bot',
    details: [
      'Includes onboarding and consulting sessions',
    ],
  },
  {
    title: 'Synthetic Data Creation',
    description: 'Any topic',
    price: '$99 Per 500 Rows of Data',
    details: [
      'Quality testing and benchmarks included',
    ],
  },
  {
    title: 'AI Related Technology Consulting',
    description: '',
    price: '$50 Per Hour Agency Rate',
    details: [
      'Available for on the fly calls',
      'Client facing experience',
      'Fortune 500 experience',
      'Solution Architect experience',
    ],
  },
];

const Services = () => {
  return (
    <div className="services">
      <h1>Our Suite Of Services:</h1>
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          price={service.price}
          details={service.details}
        />
      ))}
    </div>
  );
};

export default Services;
