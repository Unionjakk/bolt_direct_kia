
import React from 'react';
import { Link } from 'react-router-dom';

const EV3OfferDetailBreadcrumb = () => {
  return (
    <nav className="mb-6">
      <div className="flex items-center space-x-2 text-sm text-kia-gray-medium">
        <Link to="/" className="hover:text-kia-red">Home</Link>
        <span>/</span>
        <Link to="/new-cars" className="hover:text-kia-red">New Cars</Link>
        <span>/</span>
        <Link to="/new-cars/ev3" className="hover:text-kia-red">EV3</Link>
        <span>/</span>
        <span className="text-kia-charcoal">Offer Details</span>
      </div>
    </nav>
  );
};

export default EV3OfferDetailBreadcrumb;
