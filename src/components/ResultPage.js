import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, incorrectCount, skippedCount } = location.state || {};

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className='relative p-6 bg-black min-h-screen flex flex-col items-center justify-center text-white'>
      {/* GIF Container */}
      <div className='absolute top-10 md:-top-10 left-1/2 transform -translate-x-1/2'>
        <img 
          src='https://media3.giphy.com/media/fdGbhuUQpGQkkuuzIr/giphy.gif?cid=6c09b952kmay3dmhhpm0oco2krnka5wip9nip0c3t50lpdre&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=ts' 
          alt='Celebration' 
        />
      </div>
      
      <h1 className='text-3xl font-bold mb-4'>Oyun Bitti!</h1>
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
