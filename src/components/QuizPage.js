// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useUserName } from '../contexts/UserNameContext';
// import { CountdownCircleTimer } from 'react-countdown-circle-timer';

// // Helper function to shuffle an array
// const shuffleArray = (array) => {
//   let currentIndex = array.length, randomIndex;

//   while (currentIndex !== 0) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
//   }

//   return array;
// };

// const QuizPage = () => {
//   const { category } = useParams();
//   const navigate = useNavigate();
//   const { userName } = useUserName(); // Get userName from context
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [score, setScore] = useState(0);
//   const [incorrectCount, setIncorrectCount] = useState(0);
//   const [skippedCount, setSkippedCount] = useState(0);
//   const [isGameOver, setIsGameOver] = useState(false);
//   const [feedback, setFeedback] = useState(null); // For feedback
//   const [isFeedbackVisible, setIsFeedbackVisible] = useState(false); // Track feedback visibility

//   useEffect(() => {
//     const fetchQuestions = async () => {
//       let fileName = '';
//       switch (category) {
//         case 'Spor':
//           fileName = 'sportsQuestions.json';
//           break;
//         case 'Matematik':
//           fileName = 'mathQuestions.json';
//           break;
//         case 'Coğrafya':
//           fileName = 'geographyQuestions.json';
//           break;
//         case 'Tarih':
//           fileName = 'historyQuestions.json';
//           break;
//         case 'Ünlüler':
//           fileName = 'famousPeopleQuestions.json';
//           break;
//         case 'Film':
//           fileName = 'films.json';
//           break;
//         case 'Canlılar Dünyası':
//           fileName = 'natureQuestions.json';
//           break;
//         case 'Çizgi Film':
//           fileName = 'cartoons.json';
//           break;
//         case 'Anime':
//           fileName = 'anime.json';
//           break;
//         case 'Araba':
//           fileName = 'cars.json';
//           break;
//         case 'Bilgisayar Bilimleri':
//           fileName = 'computerScience.json';
//           break;
//         case 'Bilim & Doğa':
//           fileName = 'science.json';
//           break;
//         case 'Video Oyunları':
//           fileName = 'videogames.json';
//           break;
//         case 'Müzik':
//           fileName = 'music.json';
//           break;
//         default:
//           console.error('Unknown category:', category);
//           return;
//       }

//       try {
//         const response = await fetch(`/questions/${fileName}`);
//         const data = await response.json();

//         // Shuffle questions
//         const shuffledQuestions = shuffleArray(data.map(question => ({
//           ...question,
//           answers: shuffleArray(question.answers) // Shuffle answers for each question
//         })));

//         setQuestions(shuffledQuestions);
//       } catch (error) {
//         console.error('Error fetching questions:', error);
//       }
//     };

//     fetchQuestions();
//   }, [category]);

//   useEffect(() => {
//     if (isGameOver) {
//       navigate('/result', {
//         state: { score, incorrectCount, skippedCount, userName },
//       });
//     }
//   }, [isGameOver, navigate, score, incorrectCount, skippedCount, userName]);

//   const handleAnswer = (answerIndex) => {
//     const currentQuestion = questions[currentQuestionIndex] || {};
//     const correctIndex = currentQuestion.answers.findIndex(a => a.isCorrect);

//     setFeedback({
//       correctIndex,
//       selectedIndex: answerIndex,
//     });
//     setIsFeedbackVisible(true); // Show feedback

//     const isCorrect = currentQuestion.answers[answerIndex].isCorrect;
//     if (isCorrect) {
//       setScore(score + 1);
//     } else {
//       setIncorrectCount(incorrectCount + 1);
//     }

//     // Pause the game timer for feedback display
//     setTimeout(() => {
//       setIsFeedbackVisible(false); // Hide feedback
//       moveToNextQuestion();
//     }, 2500); // 2.5 seconds delay for feedback
//   };

//   const handleSkip = () => {
//     // Record skipped question as 'skipped' but not increment the skipped count
//     setFeedback({
//       correctIndex: null,
//       selectedIndex: null,
//     });
//     setSkippedCount(skippedCount + 1);

//     // Move to next question immediately without delay
//     moveToNextQuestion();
//   };

//   const moveToNextQuestion = () => {
//     setCurrentQuestionIndex(currentQuestionIndex + 1);
//     setFeedback(null); // Reset feedback
//     setIsFeedbackVisible(false); // Ensure buttons are enabled
//   };

//   const handleBackToHome = () => {
//     if (window.confirm("Anasayfaya dönmek istediğinizden emin misiniz?")) {
//       navigate('/'); // Navigates to the home page
//     }
//   };

//   if (isGameOver) {
//     return null;
//   }

//   const currentQuestion = questions[currentQuestionIndex] || {};
//   const answers = currentQuestion.answers || [];

//   // Define background image URLs based on the category
//   const backgroundImage = {
//     'Matematik': 'https://wallpapers.com/images/hd/mathematics-background-7ynkm8qqi5luua66.jpg',
//     'Tarih': 'https://wallpapers.com/images/hd/historical-background-1920-x-1080-9hf8vlbmjer13p9b.jpg',
//     'Ünlüler': 'https://wallpapers.com/images/featured/red-carpet-background-5ocxo66r4i867a0l.jpg',
//     'Canlılar Dünyası': 'https://s1.1zoom.me/b3352/533/Foxes_Cubs_Grass_Glance_563457_1920x1080.jpg',
//     'Spor': 'https://wallpapers.com/images/featured/best-sports-background-9mo6eiyv8hxj5jln.jpg',
//     "Coğrafya": 'https://c.wallhere.com/photos/d0/04/globe_country_ball_geography-587550.jpg!d',
//     "Çizgi Film": 'https://i.pinimg.com/originals/7a/3c/82/7a3c82144253403e0db0d582f5dca206.jpg',
//     "Anime": 'https://wallpapers.com/images/hd/anime-all-characters-hd-4r9pb6ju4v1b0m48.jpg',
//     "Film": 'https://wallpapers.com/images/featured/movie-9pvmdtvz4cb0xl37.jpg',
//     "Video Oyunları": 'https://wallpapercave.com/wp/wp8390395.jpg',
//     "Bilgisayar Bilimleri": 'https://i.pinimg.com/originals/40/ce/e2/40cee2ae407de99af49bea4ff771bcff.jpg',
//     'Araba': 'https://images.pexels.com/photos/18818776/pexels-photo-18818776.jpeg'
//   }[category] || 'bg-gray-100'; // Default background if no match

//   // Gradient overlay style
//   const gradientStyle = backgroundImage !== 'bg-gray-100'
//     ? {
//       background: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 20%, rgba(0, 0, 0, 1) 90%), url(${backgroundImage})`,
//       backgroundSize: 'cover'
//     }
//     : {};

//   return (
//     <div
//       className={`flex flex-col items-center justify-center min-h-screen p-4 ${backgroundImage === 'bg-gray-100' ? backgroundImage : ''}`}
//       style={gradientStyle}
//     >
//       <button
//         onClick={handleBackToHome}
//         className='text-xs absolute bottom-4 right-4 p-2 bg-orange-500 text-white rounded'
//       >
//         Anasayfa
//       </button>

//       <div className='bg-white p-6 rounded-lg shadow-md max-w-3xl w-full mb-10'>
//         <div className='text-xl font-semibold mb-6 text-center'>
//           {currentQuestion.question || 'Loading question...'}
//         </div>
//         <ul className='grid grid-cols-1 gap-4 w-full mb-4'>
//           {answers.length > 0 ? (
//             answers.map((answer, index) => (
//               <li key={index} className='w-full'>
//                 <button
//                   onClick={() => !isFeedbackVisible && handleAnswer(index)} // Prevent action if feedback is visible
//                   className={`w-full p-4 border-2 rounded shadow hover:bg-gray-200 bg-white transition-all duration-300 transform ${feedback && feedback.selectedIndex === index
//                     ? (answer.isCorrect ? 'border-green-500 scale-105' : 'border-red-500 animate-shake')
//                     : feedback && feedback.correctIndex === index
//                       ? 'border-green-500'
//                       : ''
//                     } ${isFeedbackVisible ? 'cursor-not-allowed opacity-50' : ''}`} // Style for disabled buttons
//                   disabled={isFeedbackVisible} // Disable buttons if feedback is visible
//                 >
//                   {answer.text}
//                 </button>
//               </li>
//             ))
//           ) : (
//             <li className='w-full'>
//               <button
//                 onClick={handleSkip}
//                 className='w-full p-4 border-2 rounded shadow bg-red-500 text-white cursor-not-allowed'
//                 disabled
//               >
//                 Skip
//               </button>
//             </li>
//           )}
//         </ul>
//         {/* Container to center the "Atla" button */}
//         <div className='flex justify-center'>
//           <button
//             onClick={() => !isFeedbackVisible && handleSkip()} // Prevent action if feedback is visible
//             className={`w-1/2 h-10 bg-orange-500 text-white rounded shadow-lg hover:bg-red-900 transition-all duration-300 ${isFeedbackVisible ? 'cursor-not-allowed opacity-50' : ''}`}
//             disabled={isFeedbackVisible} // Disable button if feedback is visible
//           >
//             Atla
//           </button>
//         </div>
//       </div>

//       <CountdownCircleTimer
//         isPlaying
//         duration={120}
//         size={80}
//         colors={['#00FF00', '#F7B801', '#FFA500', '#FF0000']}
//         colorsTime={[120, 90, 60, 30]}
//         onComplete={() => setIsGameOver(true)}
//       >
//         {({ remainingTime }) => <div className='text-2xl text-white'>{remainingTime}</div>}
//       </CountdownCircleTimer>
//     </div>
//   );
// };

// export default QuizPage;



import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useUserName } from '../contexts/UserNameContext';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

// Helper function to shuffle an array
const shuffleArray = (array) => {
  let currentIndex = array.length, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};

const QuizPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const { userName } = useUserName(); // Get userName from context
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [skippedCount, setSkippedCount] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [feedback, setFeedback] = useState(null); // For feedback
  const [isFeedbackVisible, setIsFeedbackVisible] = useState(false); // Track feedback visibility
  const [skipChances, setSkipChances] = useState(3); // Track skip chances

  useEffect(() => {
    const fetchQuestions = async () => {
      let fileName = '';
      switch (category) {
        case 'Spor':
          fileName = 'sportsQuestions.json';
          break;
        case 'Matematik':
          fileName = 'mathQuestions.json';
          break;
        case 'Coğrafya':
          fileName = 'geographyQuestions.json';
          break;
        case 'Tarih':
          fileName = 'historyQuestions.json';
          break;
        case 'Ünlüler':
          fileName = 'famousPeopleQuestions.json';
          break;
        case 'Film':
          fileName = 'films.json';
          break;
        case 'Canlılar Dünyası':
          fileName = 'natureQuestions.json';
          break;
        case 'Çizgi Film':
          fileName = 'cartoons.json';
          break;
        case 'Anime':
          fileName = 'anime.json';
          break;
        case 'Araba':
          fileName = 'cars.json';
          break;
        case 'Bilgisayar Bilimleri':
          fileName = 'computerScience.json';
          break;
        case 'Bilim & Doğa':
          fileName = 'science.json';
          break;
        case 'Video Oyunları':
          fileName = 'videogames.json';
          break;
        case 'Müzik':
          fileName = 'music.json';
          break;
        default:
          console.error('Unknown category:', category);
          return;
      }

      try {
        const response = await fetch(`/questions/${fileName}`);
        const data = await response.json();

        // Shuffle questions
        const shuffledQuestions = shuffleArray(data.map(question => ({
          ...question,
          answers: shuffleArray(question.answers) // Shuffle answers for each question
        })));

        setQuestions(shuffledQuestions);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, [category]);

  useEffect(() => {
    if (isGameOver) {
      navigate('/result', {
        state: { score, incorrectCount, skippedCount, userName },
      });
    }
  }, [isGameOver, navigate, score, incorrectCount, skippedCount, userName]);

  const handleAnswer = (answerIndex) => {
    const currentQuestion = questions[currentQuestionIndex] || {};
    const correctIndex = currentQuestion.answers.findIndex(a => a.isCorrect);

    setFeedback({
      correctIndex,
      selectedIndex: answerIndex,
    });
    setIsFeedbackVisible(true); // Show feedback

    const isCorrect = currentQuestion.answers[answerIndex].isCorrect;
    if (isCorrect) {
      setScore(score + 1);
    } else {
      setIncorrectCount(incorrectCount + 1);
    }

    // Pause the game timer for feedback display
    setTimeout(() => {
      setIsFeedbackVisible(false); // Hide feedback
      moveToNextQuestion();
    }, 2500); // 2.5 seconds delay for feedback
  };

  const handleSkip = () => {
    if (skipChances > 0) {
      // Record skipped question as 'skipped'
      setFeedback({
        correctIndex: null,
        selectedIndex: null,
      });
      setSkippedCount(skippedCount + 1);
      setSkipChances(skipChances - 1); // Decrement skip chances

      // Move to next question immediately without delay
      moveToNextQuestion();
    }
  };

  const moveToNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setFeedback(null); // Reset feedback
    setIsFeedbackVisible(false); // Ensure buttons are enabled
  };

  const handleBackToHome = () => {
    if (window.confirm("Anasayfaya dönmek istediğinizden emin misiniz?")) {
      navigate('/'); // Navigates to the home page
    }
  };

  if (isGameOver) {
    return null;
  }

  const currentQuestion = questions[currentQuestionIndex] || {};
  const answers = currentQuestion.answers || [];

  // Define background image URLs based on the category
  const backgroundImage = {
    'Matematik': 'https://wallpapers.com/images/hd/mathematics-background-7ynkm8qqi5luua66.jpg',
    'Tarih': 'https://wallpapers.com/images/hd/historical-background-1920-x-1080-9hf8vlbmjer13p9b.jpg',
    'Ünlüler': 'https://wallpapers.com/images/featured/red-carpet-background-5ocxo66r4i867a0l.jpg',
    'Canlılar Dünyası': 'https://s1.1zoom.me/b3352/533/Foxes_Cubs_Grass_Glance_563457_1920x1080.jpg',
    'Spor': 'https://wallpapers.com/images/featured/best-sports-background-9mo6eiyv8hxj5jln.jpg',
    "Coğrafya": 'https://c.wallhere.com/photos/d0/04/globe_country_ball_geography-587550.jpg!d',
    "Çizgi Film": 'https://i.pinimg.com/originals/7a/3c/82/7a3c82144253403e0db0d582f5dca206.jpg',
    "Anime": 'https://wallpapers.com/images/hd/anime-all-characters-hd-4r9pb6ju4v1b0m48.jpg',
    "Film": 'https://wallpapers.com/images/featured/movie-9pvmdtvz4cb0xl37.jpg',
    "Video Oyunları": 'https://wallpapercave.com/wp/wp8390395.jpg',
    "Bilgisayar Bilimleri": 'https://i.pinimg.com/originals/40/ce/e2/40cee2ae407de99af49bea4ff771bcff.jpg',
    'Araba': 'https://images.pexels.com/photos/18818776/pexels-photo-18818776.jpeg'
  }[category] || 'bg-gray-100'; // Default background if no match

  // Gradient overlay style
  const gradientStyle = backgroundImage !== 'bg-gray-100'
    ? {
      background: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 20%, rgba(0, 0, 0, 1) 90%), url(${backgroundImage})`,
      backgroundSize: 'cover'
    }
    : {};

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen p-4 ${backgroundImage === 'bg-gray-100' ? backgroundImage : ''}`}
      style={gradientStyle}
    >
      <button
        onClick={handleBackToHome}
        className='text-xs absolute bottom-4 right-4 p-2 bg-orange-500 text-white rounded'
      >
        Anasayfa
      </button>

      <div className='bg-white p-6 rounded-lg shadow-md max-w-3xl w-full mb-10'>
        <div className='text-xl font-semibold mb-6 text-center'>
          {currentQuestion.question || 'Loading question...'}
        </div>
        {/* Display remaining skip chances */}
        <ul className='grid grid-cols-1 gap-4 w-full mb-4'>
          {answers.length > 0 ? (
            answers.map((answer, index) => (
              <li key={index} className='w-full'>
                <button
                  onClick={() => !isFeedbackVisible && handleAnswer(index)} // Prevent action if feedback is visible
                  className={`w-full p-4 border-2 rounded shadow hover:bg-gray-200 bg-white transition-all duration-300 transform ${feedback && feedback.selectedIndex === index
                    ? (answer.isCorrect ? 'border-green-500 scale-105' : 'border-red-500 animate-shake')
                    : feedback && feedback.correctIndex === index
                      ? 'border-green-500'
                      : ''
                    } ${isFeedbackVisible ? 'cursor-not-allowed opacity-50' : ''}`} // Style for disabled buttons
                  disabled={isFeedbackVisible} // Disable buttons if feedback is visible
                >
                  {answer.text}
                </button>
              </li>
            ))
          ) : (
            <li className='w-full'>
              <button
                onClick={handleSkip}
                className='w-full p-4 border-2 rounded shadow bg-red-500 text-white cursor-not-allowed'
                disabled
              >
                Skip
              </button>
            </li>
          )}
        </ul>
        {/* Container to center the "Atla" button */}
        <div className='flex justify-center'>
          <button
            onClick={() => !isFeedbackVisible && handleSkip()} // Prevent action if feedback is visible
            className={`w-1/2 h-10 bg-orange-500 text-white rounded shadow-lg hover:bg-red-900 transition-all duration-300 ${isFeedbackVisible || skipChances <= 0 ? 'cursor-not-allowed opacity-50' : ''}`}
            disabled={isFeedbackVisible || skipChances <= 0} // Disable button if feedback is visible or skip chances are exhausted
          >
            Atla ({skipChances})
          </button>
        </div>
      </div>

      <CountdownCircleTimer
        isPlaying
        duration={120}
        size={80}
        colors={['#00FF00', '#F7B801', '#FFA500', '#FF0000']}
        colorsTime={[120, 90, 60, 30]}
        onComplete={() => setIsGameOver(true)}
      >
        {({ remainingTime }) => <div className='text-2xl text-white'>{remainingTime}</div>}
      </CountdownCircleTimer>
    </div>
  );
};

export default QuizPage;
