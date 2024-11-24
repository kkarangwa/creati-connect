import background from "../assets/background.png"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Simple validation (email: test@test.com / password: test123)
            if (formData.email === 'test@gmail.com' && formData.password === 'test123') {
                localStorage.setItem('authToken', 'dummy-token');
                localStorage.setItem('currentUser', JSON.stringify(formData));
                navigate('/');
            } else {
                setError('Invalid email or password');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="flex justify-center gap-x-10 p-20 items-center h-screen bg-cover bg-black bg-transparent bg-center w-full" style={{ backgroundImage: `url(${background})` }}>
            <h1 className="text-white text-5xl font-bold w-1/2">Cc   CreatiConnect</h1>
            <div className="w-full p-10 bg-white max-w-3xl">
                <h1 className="text-2xl font-bold mb-10">Login</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            type="email"
                            id="email"
                            placeholder="john@doe.com*"
                            className="mt-1 p-4 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                        <input
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            type="password"
                            id="password"
                            placeholder="********"
                            className="mt-1 p-4 border border-gray-300 rounded-md"
                        />
                    </div>
                    <button type="submit" disabled={loading} className="bg-black text-white my-4 p-4 rounded-md">
                        {loading ? 'Signing in...' : 'Sign in'}
                    </button>
                </form>
                <p className="text-sm text-gray-500">Don't have an account? <a href="/register" className="text-blue-500">Register</a></p>
            </div>
        </div>
    )
}