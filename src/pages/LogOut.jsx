import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLogOut, FiCheckCircle, FiArrowLeft } from 'react-icons/fi';

const Logout = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedOut(true);
  };

  useEffect(() => {
    if (isLoggedOut) {
      const timer = setTimeout(() => navigate('/login'), 2000);
      return () => clearTimeout(timer);
    }
  }, [isLoggedOut, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow p-6 text-center">
        {isLoggedOut ? (
          <div className="space-y-4">
            <FiCheckCircle className="mx-auto text-green-500 text-5xl" />
            <h2 className="text-2xl font-bold text-gray-800">Logged Out Successfully</h2>
            <p className="text-gray-600">You're being redirected to login page...</p>
          </div>
        ) : (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Are you sure you want to logout?</h2>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleLogout}
                className="flex items-center px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
              >
                <FiLogOut className="mr-2" />
                Yes, Logout
              </button>
              <button
                onClick={() => navigate(-1)} // Go back to previous page
                className="flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
              >
                <FiArrowLeft className="mr-2" />
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Logout;