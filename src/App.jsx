import './App.css';

import HeaderSection from './components/sections/HeaderSection';
import QuestionSection from './components/sections/QuestionSection';
import ScoreSection from './components/sections/ScoreSection';

function App() {
  return (
    <main>
      <HeaderSection />
      <ScoreSection />
      {/* <QuestionSection />
      <QuestionSection /> */}
      <ScoreSection />
    </main>
  );
}

export default App;
