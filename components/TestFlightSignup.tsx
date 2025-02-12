'use client';

import { useState } from 'react';

export default function TestFlightSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/testflight-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {status === 'loading' ? 'Sending...' : 'Join Beta'}
          </button>
        </div>
        
        {status === 'success' && (
          <p className="text-green-600 text-sm">
            Thanks for signing up! Check your email for TestFlight instructions.
          </p>
        )}
        {status === 'error' && (
          <p className="text-red-600 text-sm">
            Something went wrong. Please try again later.
          </p>
        )}
      </form>
    </div>
  );
}
