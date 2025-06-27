import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import baseURL from '../../../BaseUrl';
import Navbar from '../sidebar/Navbar';

const ChangePassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const navigate = useNavigate();

 const handleChangePassword = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setMessage('');
  setError('');

const trimmedEmail = "admin@gmail.com"; // since it's now fixed


  console.log('📧 Email (trimmed):', trimmedEmail);
  console.log('🔐 New Password:', newPassword);

  try {
    const res = await fetch(`${baseURL}/change-password`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: trimmedEmail, password: newPassword }),
    });

    const data = await res.json();
    console.log('🟢 Backend response:', data);

    if (res.ok) {
      setMessage(data.message);
      setEmail('');
      setNewPassword('');
    } else {
      setError(data.error || 'Failed to change password');
    }
  } catch (err) {
    setError('Server error');
  }
};

  return (
    <div style={{ marginTop: '60px' }}>
      <Navbar onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} />

      <div
        className="transition-all duration-300"
        style={{
          marginLeft: sidebarCollapsed ? '100px' : '220px',
          padding: '2rem',
        }}
      >
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Change Password</h3>

          {message && (
            <div className="bg-green-100 text-green-700 px-4 py-2 rounded mb-4 text-sm border border-green-300">
              {message}
            </div>
          )}
          {error && (
            <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-sm border border-red-300">
              {error}
            </div>
          )}

          <form onSubmit={handleChangePassword} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
            <input
  type="email"
  id="email"
  className="w-full border border-gray-300 px-4 py-2 rounded bg-gray-100 text-gray-700 cursor-not-allowed"
  value="admin@gmail.com"
  readOnly
  required
/>

            </div>

            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                New Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="newPassword"
                  className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition duration-200"
              >
                Change Password
              </button>
              <button
                type="button"
                onClick={() => navigate('/dashboard')}
                className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 rounded transition duration-200"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
