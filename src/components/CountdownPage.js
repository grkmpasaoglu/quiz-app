import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const CountdownPage = () => {
  const [countdown, setCountdown] = useState(3);
  const [animationKey, setAnimationKey] = useState(0); // Key to trigger re-render
  const [shake, setShake] = useState(false); // State to trigger shake animation
  const navigate = useNavigate();
  const location = useLocation();
  const { category } = location.state || { category: 'Matematik' };

  useEffect(() => {
    if (countdown === 0) {
      navigate(`/quiz/${category}`);
      return;
    }

    const interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        const newCountdown = prevCountdown - 1;
        if (newCountdown === 1) {
          setShake(true); // Trigger shake animation when countdown reaches 1
          setTimeout(() => {
            setShake(false); // Remove shake animation after short duration
          }, 300); // Shake duration
        }
        return newCountdown;
      });
      setAnimationKey((prevKey) => prevKey + 1); // Change key to trigger animation
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown, navigate, category]);

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 ${shake ? 'shake' : ''}`}>
      <h1 className='text-3xl font-bold mb-4'>OYUN BAŞLIYOR!</h1>
      <div
        key={animationKey} // Trigger re-render with new key
        className='text-6xl font-bold fade-in'
        style={{ animation: 'fadeInRotate 0.5s ease-out' }}
      >
        {countdown}
      </div>

      <style>
        {`
          @keyframes fadeInRotate {
            from {
              opacity: 0;
              transform: rotate(0deg) scale(5);
            }
            to {
              opacity: 1;
              transform: rotate(0deg) scale(1);
            }
          }

    

          .fade-in {
            animation: fadeInRotate 0.5s ease-out;
          }

      
        `}
      </style>
    </div>
  );
};

export default CountdownPage;
