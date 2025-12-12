import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-white to-indigo-100 relative overflow-hidden">

      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-300 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-300 opacity-20 rounded-full blur-3xl"></div>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <h1 className="text-xl font-bold text-indigo-600">
            Student Management System
          </h1>

          <button
            onClick={() => navigate('/login')}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-150 ease-in-out shadow"
          >
            Login
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-10 px-6">
        <div className="flex space-x-4">

          {/* Student List */}
          <button
            onClick={() => navigate('/list')}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-xl transform transition hover:scale-105"
          >
            Student List
          </button>

          {/* Add Student */}
          <button
            onClick={() => navigate('/add')}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-xl transform transition hover:scale-105"
          >
            Add Student
          </button>

        </div>
      </main>
    </div>
  );
};

export default Home;
