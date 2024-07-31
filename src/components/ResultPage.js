import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, incorrectCount, skippedCount, userName } = location.state || {};

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className='p-6 bg-black min-h-screen flex flex-col items-center justify-center text-white'>
      <h1 className='text-3xl font-bold mb-4'>Oyun Bitti !</h1>
      <div className='text-xl mb-2'>Doğru: {score}</div>
      <div className='text-xl mb-2'>Yanlış: {incorrectCount}</div>
      <div className='text-xl mb-2'>Boş: {skippedCount}</div>
      <button
        onClick={handleGoHome}
        className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
      >
        Anasayfaya Dön
      </button>
    </div>
  );
};

export default ResultPage;