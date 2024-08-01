import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import QuizPage from './components/QuizPage';
import ResultPage from './components/ResultPage';
import CountdownPage from './components/CountdownPage';
import { UserNameProvider } from './contexts/UserNameContext';


const App = () => {
  return (
    <UserNameProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz/:category" element={<QuizPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/countdown" element={<CountdownPage />} />
        </Routes>
      </Router>
    </UserNameProvider>

  );
};

export default App;
