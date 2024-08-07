import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ title, description, price, details }) => {
  return (
    <div className="service-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Price: {price}</p>
      <ul>
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
