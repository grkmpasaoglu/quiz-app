import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';

const categories = [
  { name: 'Matematik', imageUrl: 'https://cdn.dribbble.com/users/31818/screenshots/1891002/math.gif', font: 'font-roboto-mono', gridArea: 'a' },
  { name: 'Tarih', imageUrl: 'https://i.makeagif.com/media/11-09-2017/OWvFUJ.gif', font: 'font-lobster', gridArea: 'b' },
  { name: 'Spor', imageUrl: 'https://static.wixstatic.com/media/26f73b_bfcad33a853d474f821972d004882751~mv2.gif', font: 'orbitron', gridArea: 'c' },
  { name: 'Canlılar Dünyası', imageUrl: 'https://i.pinimg.com/originals/62/85/9a/62859a42be5e4df238e1c6d8d9c98432.gif', font: 'font-indie-flower', gridArea: 'd' },
  { name: 'Film', imageUrl: 'https://i.gifer.com/8V9H.gif', font: 'font-lobster', gridArea: 'e' },
  { name: 'Müzik', imageUrl: 'https://i.pinimg.com/originals/3e/fe/1c/3efe1cb845954233246f60d5d8395dd0.gif', font: 'font-lobster', gridArea: 'f' },
  { name: 'Video Oyunları', imageUrl: 'https://media2.giphy.com/media/iK5Q05vo5KRrH3yniB/giphy.gif?cid=6c09b952wh9i3w3rhcl87oetmatssgp8qze08ktn6t5zljrs&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g', font: 'bungee-spice-regular', gridArea: 'g' },
  { name: 'Bilim & Doğa', imageUrl: 'https://i.pinimg.com/originals/df/0a/3e/df0a3e2ec30abb1c92d145ef165b714f.gif', font: 'font-kalam', gridArea: 'h' },
  { name: 'Bilgisayar Bilimleri', imageUrl: 'https://i.makeagif.com/media/7-04-2022/zSW_4r.gif', font: 'font-press-start', gridArea: 'i' },
  { name: 'Coğrafya', imageUrl: 'https://media3.giphy.com/media/SzBlFsQg26JL0s12P9/giphy.gif?cid=6c09b952jgwvh6tq31edpc023227rev0oljaszidkrfyvo0q&ep=v1_gifs_search&rid=giphy.gif&ct=g', font: 'font-lobster', gridArea: 'j' },
  { name: 'Ünlüler', imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d47eac100496661.5f0a1b86a1fae.gif', font: 'font-lobster', gridArea: 'k' },
  { name: 'Araba', imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/hd/b09ac735901693.57079d662e638.gif', font: 'orbitron', gridArea: 'l' },
  { name: 'Çizgi Film', imageUrl: 'https://i.gifer.com/embedded/download/5K0f.gif', font:'nabla-custom', gridArea: 'm' },
  { name: 'Anime', imageUrl: 'https://steamuserimages-a.akamaihd.net/ugc/273974937830180072/3F9B8FFAFC575B133C2C39AE96C704E6AB2ADBCA/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false', font: 'kalnia-glaze', gridArea: 'n' }
];

const HomePage = () => {
  const [modalOpen, setModalOpen] = useState(true);
  const navigate = useNavigate();

  const handleCategorySelect = (category) => {
    navigate('/countdown', { state: { category } });
  };

  useEffect(() => {
    const timer = setTimeout(() => setModalOpen(false), 25000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='p-6 bg-black min-h-screen flex flex-col items-center justify-center animate-fade'>
      <h1 className='text-3xl font-bold text-orange-500 mb-8 text-center'>
        Kategoriler
      </h1>
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
      <div className='grid grid-cols-4 gap-4 grid-areas-layout mb-10'>
        {categories.map((category) => (
          <div
            key={category.name}
            className={`relative bg-white border text-center border-gray-300 rounded-lg shadow-md text-5xl p-4 transition-transform transform hover:scale-105 hover:shadow-lg hover:border-blue-400 duration-300 ease-in-out ${category.gridArea}`}
          >
            <div
              onClick={() => handleCategorySelect(category.name)}
              className='absolute inset-0 bg-cover bg-center opacity-70 transition-opacity duration-300 ease-in-out'
              style={{ backgroundImage: `url(${category.imageUrl})` }}
            ></div>
            <button
              className={`relative text-lg font-bold text-black ${category.font}`}
            >
              {category.name}
            </button>
          </div>
          
        ))}
        
      </div>
      <footer className="fixed bottom-0 left-0 w-full bg-black text-white text-center py-2">
          Made by Görkem Paşaoğlu
        </footer>  
    </div>
  );
};

export default HomePage;
