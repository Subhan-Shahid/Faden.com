import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const OrderSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="card p-8 max-w-md text-center animate-fade-in">
        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Order Placed!</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          We've opened WhatsApp so you can confirm the order details. We'll follow up shortly.
        </p>
        <div className="space-y-3">
          <Link to="/" className="btn-primary block">Continue Shopping</Link>
          <Link to="/cart" className="btn-secondary block">View Cart</Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
