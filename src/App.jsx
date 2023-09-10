import './App.css';

import HeaderSection from './components/sections/HeaderSection';
import QuestionSection from './components/sections/QuestionSection';
import ScoreSection from './components/sections/ScoreSection';

import questionsList from './data/questionsList';

function App() {
  return (
    <main>
      <HeaderSection />
      <ScoreSection />
      <QuestionSection questions={questionsList} />
      <ScoreSection />
    </main>
  );
}

export default App;
