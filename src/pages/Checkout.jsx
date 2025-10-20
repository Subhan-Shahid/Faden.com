import React, { useState, useMemo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, getCartTotal, clearCart } = useCart();

  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    notes: '',
    paymentMethod: 'COD',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const totals = useMemo(() => {
    const subtotal = getCartTotal();
    const total = subtotal;
    return { subtotal, total };
  }, [getCartTotal]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validate = () => {
    if (!items || items.length === 0) return 'Your cart is empty.';
    if (!form.fullName.trim()) return 'Please enter your full name.';
    if (!form.phone.trim()) return 'Please enter your phone number.';
    if (!/^\+?\d{10,15}$/.test(form.phone.replace(/\s|-/g, ''))) return 'Please enter a valid phone number.';
    if (!form.address.trim()) return 'Please enter your address.';
    if (!form.city.trim()) return 'Please enter your city.';
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const v = validate();
    if (v) {
      setError(v);
      return;
    }

    setSubmitting(true);

    try {
      // Compose WhatsApp message
      const lines = [];
      lines.push(`New Order - Faden.com`);
      lines.push(`Name: ${form.fullName}`);
      lines.push(`Phone: ${form.phone}`);
      if (form.email) lines.push(`Email: ${form.email}`);
      lines.push(`Address: ${form.address}, ${form.city}`);
      lines.push(`Payment: ${form.paymentMethod === 'COD' ? 'Cash on Delivery' : form.paymentMethod}`);
      if (form.notes) lines.push(`Notes: ${form.notes}`);
      lines.push('');
      lines.push('Items:');
      items.forEach((it) => {
        const size = it.selectedSize ? ` (Size: ${it.selectedSize})` : '';
        lines.push(`- ${it.name}${size} x${it.quantity} = ${formatPrice(it.price * it.quantity)}`);
      });
      lines.push('');
      lines.push(`Subtotal: ${formatPrice(totals.subtotal)}`);
      lines.push(`Total: ${formatPrice(totals.total)}`);

      const message = encodeURIComponent(lines.join('\n'));
      const waUrl = `https://wa.me/923216405272?text=${message}`;

      // Open WhatsApp in new tab
      window.open(waUrl, '_blank', 'noopener');

      // Clear cart and redirect to success
      clearCart();
      navigate('/order-success', { replace: true });
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (!items || items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">Your cart is empty.</p>
          <Link to="/" className="btn-primary">Continue Shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="card p-6 space-y-4">
              {error && (
                <div className="p-3 rounded-md bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 text-sm">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  className="input"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="input"
                    placeholder="e.g. +923001234567"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email (optional)</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="input"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Address</label>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  className="input"
                  placeholder="Street address"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">City</label>
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    className="input"
                    placeholder="City"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Payment Method</label>
                  <select
                    name="paymentMethod"
                    value={form.paymentMethod}
                    onChange={handleChange}
                    className="input"
                  >
                    <option value="COD">Cash on Delivery</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Order Notes (optional)</label>
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  className="input"
                  rows={3}
                  placeholder="Any special instructions?"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className={`w-full btn-primary ${submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {submitting ? 'Placing Order...' : 'Place Order via WhatsApp'}
              </button>
            </form>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="card p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Order Summary</h2>

              <div className="space-y-3 mb-4">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <div className="max-w-[60%] text-gray-700 dark:text-gray-300">
                      <span className="font-medium">{item.name}</span>
                      {item.selectedSize && (
                        <span className="ml-1 text-gray-500">(Size: {item.selectedSize})</span>
                      )}
                      <span className="ml-1 text-gray-500">x{item.quantity}</span>
                    </div>
                    <div className="text-gray-900 dark:text-white font-medium">
                      {formatPrice(item.price * item.quantity)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2 text-gray-600 dark:text-gray-400">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{formatPrice(totals.subtotal)}</span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                  <div className="flex justify-between text-lg font-bold text-gray-900 dark:text-white">
                    <span>Total</span>
                    <span>{formatPrice(totals.total)}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-xs text-gray-500 dark:text-gray-400">
                <p>• Your order will be confirmed on WhatsApp.</p>
                <p>• Cash on Delivery available nationwide.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
