import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const categories = [
  { name: 'Matematik', imageUrl: 'https://cdn.dribbble.com/users/31818/screenshots/1891002/math.gif', font: 'font-roboto-mono', gridArea: 'a' },
  { name: 'Tarih', imageUrl: 'https://i.makeagif.com/media/11-09-2017/OWvFUJ.gif', font: 'font-lobster', gridArea: 'b' },
  { name: 'Spor', imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/8cec19163771159.63eba315c9ea9.gif', font: 'bangers-regular', gridArea: 'c' },
  { name: 'Canlılar Dünyası', imageUrl: 'https://i.pinimg.com/originals/62/85/9a/62859a42be5e4df238e1c6d8d9c98432.gif', font: 'font-indie-flower', gridArea: 'd' },
  { name: 'Film', imageUrl: 'https://i.gifer.com/8V9H.gif', font: 'font-lobster', gridArea: 'e' },
  { name: 'Müzik', imageUrl: 'https://i.pinimg.com/originals/ab/45/bb/ab45bb4451536652faca51ae4f42d5dd.gif', font: 'font-sacramento', gridArea: 'f' },
  { name: 'Video Oyunları', imageUrl: 'https://media2.giphy.com/media/iK5Q05vo5KRrH3yniB/giphy.gif?cid=6c09b952wh9i3w3rhcl87oetmatssgp8qze08ktn6t5zljrs&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g', font: 'bungee-spice-regular', gridArea: 'g' },
  { name: 'Bilim & Doğa', imageUrl: 'https://i.pinimg.com/originals/df/0a/3e/df0a3e2ec30abb1c92d145ef165b714f.gif', font: 'font-kalam', gridArea: 'h' },
  { name: 'Bilgisayar Bilimleri', imageUrl: 'https://i.makeagif.com/media/7-04-2022/zSW_4r.gif', font: 'font-press-start', gridArea: 'i' },
  { name: 'Coğrafya', imageUrl: 'https://media3.giphy.com/media/SzBlFsQg26JL0s12P9/giphy.gif?cid=6c09b952jgwvh6tq31edpc023227rev0oljaszidkrfyvo0q&ep=v1_gifs_search&rid=giphy.gif&ct=g', font: 'font-sacramento', gridArea: 'j' },
  { name: 'Ünlüler', imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d47eac100496661.5f0a1b86a1fae.gif', font: 'font-sacramento', gridArea: 'k' },
  { name: 'Araba', imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/hd/b09ac735901693.57079d662e638.gif', font: 'orbitron', gridArea: 'l' },
  { name: 'Çizgi Film', imageUrl: 'https://i.gifer.com/embedded/download/5K0f.gif', font:'nabla-custom', gridArea: 'm' },
  { name: 'Anime', imageUrl: 'https://steamuserimages-a.akamaihd.net/ugc/273974937830180072/3F9B8FFAFC575B133C2C39AE96C704E6AB2ADBCA/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false', font: 'font-kalam', gridArea: 'n' }
];

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    navigate('/countdown', { state: { category } });
  };

  return (
    <div className='p-6 bg-black min-h-screen flex flex-col items-center justify-center animate-fade'>
      <h1 className='text-3xl font-bold text-orange-600 mb-8 text-center'>
        Quiz Kategorisi Seçin
      </h1>
      <div className='grid grid-cols-4 gap-4 grid-areas-layout'>
        {categories.map((category) => (
          <div
            key={category.name}
            className={`relative bg-white border text-center border-gray-300 rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 hover:shadow-lg hover:border-blue-400 duration-300 ease-in-out ${category.gridArea}`}
          >
            <div
              onClick={() => handleCategorySelect(category.name)}
              className='absolute inset-0 bg-cover bg-center opacity-30 transition-opacity duration-300 ease-in-out'
              style={{ backgroundImage: `url(${category.imageUrl})` }}
            ></div>
            <button
              className={`relative text-lg font-bold text-gray-700 ${category.font}`}
            >
              {category.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
