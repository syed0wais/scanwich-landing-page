import React from 'react';

const FeatureTable = () => {
  const features = [
    { name: 'Build-in POS', basic: true, business: true, premium: true },
    { name: 'QR Code Ordering', basic: true, business: true, premium: true },
    { name: 'Invoice Download', basic: true, business: true, premium: true },
    { name: '24/7 Service', basic: true, business: true, premium: true },
    { name: 'Online Payment Gateway', basic: true, business: true, premium: true },
    { name: 'Power Admin Panel', basic: true, business: true, premium: true },
    { name: 'Order Tracking', basic: true, business: true, premium: true },
    { name: 'Tax Configuration', basic: true, business: true, premium: true },
    { name: 'Spam Order Prevention', basic: true, business: true, premium: true },
    { name: 'Online Data Sync', basic: true, business: true, premium: true },
    { name: 'Push Notification', basic: true, business: true, premium: true },
    { name: 'Aesthetic User Interface', basic: true, business: true, premium: true },
    { name: 'Roles & Permission Setup', basic: false, business: true, premium: true },
    { name: 'Offer Setup', basic: false, business: true, premium: true },
    { name: 'Sales Report', basic: false, business: true, premium: true },
    { name: 'Customizable Theme', basic: false, business: true, premium: true },
    { name: 'Customer Data', basic: false, business: true, premium: true },
    { name: 'Blog Feature', basic: false, business: true, premium: true },
    { name: 'Analytics & Report', basic: false, business: true, premium: true },
    { name: 'Multi Branch', basic: false, business: false, premium: true },
    { name: 'Personal Customization', basic: false, business: false, premium: true },
  ];

  return (
    <div className="mt-16 overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-3 px-4 border-b text-left">Features</th>
            <th className="py-3 px-4 border-b text-center">Basic</th>
            <th className="py-3 px-4 border-b text-center">Business</th>
            <th className="py-3 px-4 border-b text-center">Premium</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
              <td className="py-3 px-4 border-b">{feature.name}</td>
              <td className="py-3 px-4 border-b text-center">
                {feature.basic ? '✔️' : '-'}
              </td>
              <td className="py-3 px-4 border-b text-center">
                {feature.business ? '✔️' : '-'}
              </td>
              <td className="py-3 px-4 border-b text-center">
                {feature.premium ? '✔️' : '-'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeatureTable;