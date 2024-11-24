import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import background from '../assets/background.png';
function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('All fields are required');
      return false;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulate checking if email already exists
      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
      if (existingUsers.some(user => user.email === formData.email)) {
        setError('Email already registered');
        return;
      }

      // Save user data
      const newUser = {
        name: formData.name,
        email: formData.email,
        password: formData.password // In real app, this should be hashed
      };

      existingUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(existingUsers));

      // Auto login after registration
      localStorage.setItem('authToken', 'dummy-token');
      localStorage.setItem('currentUser', JSON.stringify(newUser));

      // Redirect to dashboard
      navigate('/');
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center p-20 justify-center bg-gray-50 bg-cover bg-center w-full" style={{ backgroundImage: `url(${background})` }}>
      <h1 className="text-white text-5xl font-bold w-1/2">Cc   CreatiConnect</h1>
      <div className="max-w-3xl w-full space-y-8 p-8 bg-white shadow">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div className="flex flex-col gap-4">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
              <input
                name="name"
                type="text"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">Email address</label>
              <input
                name="email"
                type="email"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
              <input
                name="password"
                type="password"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                name="confirmPassword"
                type="password"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

            <button
            type="submit"
            disabled={loading}
            className={`bg-black text-white my-4 p-4 rounded-md w-full ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Creating account...' : 'Sign up'}
          </button>
        </form>
        <p className="text-sm text-gray-500">Already have an account? <Link to="/login" className="text-blue-500">Login</Link></p>
      </div>
    </div>
  );
}

export default RegisterPage;