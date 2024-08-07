import React from 'react';
import ServiceCard from './components/ServiceCard';

const App = () => {
  const services = [
    {
      title: "App Creation",
      items: [
        {
          name: "Starter",
          price: "$299",
          features: [
            "1 Page App",
            "Includes code only",
            "Marketing video",
            "Documentation for the app"
          ]
        },
        {
          name: "Helping Hand",
          price: "$499",
          features: [
            "Everything from Starter plus:",
            "Hosting and configuration of the app",
            "Github Repository creation",
            "Netify App Hosting"
          ]
        }
      ]
    },
    {
      title: "Knowledge Base Bots",
      items: [
        {
          name: "Setup Fee",
          price: "$999",
          features: [
            "Includes onboarding and consulting sessions"
          ]
        },
        {
          name: "Monthly Fee",
          price: "$49",
          features: [
            "Per Month Per Knowledge Base Bot"
          ]
        }
      ]
    },
    {
      title: "Synthetic Data Creation",
      items: [
        {
          name: "Data Generation",
          price: "$99",
          features: [
            "Per 500 Rows of Data",
            "Any topic",
            "Quality testing and benchmarks included"
          ]
        }
      ]
    },
    {
      title: "AI Related Technology Consulting",
      items: [
        {
          name: "Consulting Services",
          price: "$50/hour",
          features: [
            "Agency Rate",
            "Available for on the fly calls",
            "Client facing experience",
            "Fortune 500 experience",
            "Solution Architect experience"
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">AI For Agencies</h1>
        <h2 className="text-2xl font-semibold text-center mb-8">Our Suite Of Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} items={service.items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
