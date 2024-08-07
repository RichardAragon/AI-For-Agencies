import React from 'react';

const ServiceCard = ({ title, items }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-md mx-auto my-4">
    <div className="px-4 py-5 sm:px-6">
      <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
    </div>
    <div className="border-t border-gray-200">
      <ul className="divide-y divide-gray-200">
        {items.map((item, index) => (
          <li key={index} className="px-4 py-4 sm:px-6">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium text-indigo-600">{item.name}</h4>
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                {item.price}
              </span>
            </div>
            <ul className="mt-2 text-sm text-gray-500 list-disc list-inside">
              {item.features.map((feature, fIndex) => (
                <li key={fIndex}>{feature}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default ServiceCard;
