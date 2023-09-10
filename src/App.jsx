import { useState } from 'react';
import './App.css';

import HeaderSection from './components/sections/HeaderSection';
import QuestionSection from './components/sections/QuestionSection';
import ScoreSection from './components/sections/ScoreSection';

import questionsList from './data/questionsList';

function App() {
  const [questions, setQuestions] = useState(questionsList);

  const handleOnClick = (selectedIndex) => {
    // Cycle values
    // question.value can be null, true, or false
    setQuestions((previous) => {
      return previous.map((question, index) => {
        if (typeof question === 'string') return question;
        if (selectedIndex === index) {
          if (question.value === null) return { ...question, value: true };
          if (question.value === true) return { ...question, value: false };

          return { ...question, value: null };
        }

        return question;
      });
    });
  };

  return (
    <main>
      <HeaderSection />
      <ScoreSection />
      <QuestionSection questions={questions} handleOnClick={handleOnClick} />
      <ScoreSection />
    </main>
  );
}

export default App;
