import React, { useState, useEffect } from 'react';
import axios from '../axiosInstance.js'; 
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [urls, setUrls] = useState([]);
  const [originalURL, setOriginalURL] = useState('');
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const res = await axios.get('/api/url');
        setUrls(res.data.userURLs);
      } catch (err) {
        console.error('Error fetching URLs:', err.response?.data?.error || err);
        setError(err.response?.data?.error || 'Error fetching URLs');
      } finally {
        setLoading(false);
      }
    };

    fetchUrls();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!originalURL) return;
    try {
      const res = await axios.post('/api/url', { originalURL });
      setUrls((prev) => [res.data, ...prev]);
      setOriginalURL('');
    } catch (err) {
      console.error('Error creating URL:', err.response?.data?.error || err);
      setError(err.response?.data?.error || 'Error creating URL');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/url/${id}`);
      setUrls((prev) => prev.filter((url) => url.shortURL !== id));
    } catch (err) {
      console.error('Error deleting URL:', err.response?.data?.error || err);
      setError(err.response?.data?.error || 'Error deleting URL');
    }
  };

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };


  return (
    <div
      className={`min-h-screen transition-colors ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
      }`}
    >
      <header className="flex items-center justify-between p-4 border-b border-gray-300">
        <button
          onClick={toggleDarkMode}
          className="px-3 py-2 bg-gray-300 rounded hover:bg-gray-400 transition-colors"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>

        <form onSubmit={handleSubmit} className="flex-grow mx-4">
          <input
            type="text"
            value={originalURL}
            onChange={(e) => setOriginalURL(e.target.value)}
            placeholder="Enter original URL"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
          />
        </form>

        <button
          onClick={handleLogout}
          className="px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
        >
          Logout
        </button>
      </header>

      <main className="p-4">
        {loading ? (
          <p>Loading URLs...</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : urls.length === 0 ? (
          <p>No URLs found. Create one using the input above.</p>
        ) : (
          <ul>
            {urls.map((url) => (
              <li
                key={url._id}
                className="mb-4 p-4 border rounded flex justify-between items-center"
              >
                <div>
                  <p>
                    <span className="font-bold">Original:</span> {url.originalURL}
                  </p>
                  <p>
                    <span className="font-bold">Short:</span>{' '}
                    <a
                      href={`http://localhost:8000/${url.shortURL}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      {`http://localhost:8000/${url.shortURL}`}
                    </a>
                  </p>
                  <p>
                    <span className="font-bold">Clicks:</span> {url.clicks}
                  </p>
                </div>
                <button
                  onClick={() => handleDelete(url.shortURL)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}

export default Dashboard;
