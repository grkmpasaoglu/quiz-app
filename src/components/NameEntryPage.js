// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const NameEntryPage = ({ setUserName }) => {
//   const [name, setName] = useState('');
//   const navigate = useNavigate();

//   const handleStart = () => {
//     if (name.trim()) {
//       setUserName(name);
//       navigate('/countdown');
//     }
//   };

//   return (
//     <div className='flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100'>
//       <h1 className='text-2xl font-bold mb-4'>Enter Your Name</h1>
//       <input
//         type='text'
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder='Enter your name'
//         className='p-2 border rounded mb-4'
//       />
//       <button onClick={handleStart} className='bg-blue-500 text-white p-2 rounded'>
//         Start Game
//       </button>
//     </div>
//   );
// };

// export default NameEntryPage;
