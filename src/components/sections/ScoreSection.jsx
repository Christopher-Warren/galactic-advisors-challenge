import './ScoreSection.css';

const ScoreSection = ({ score }) => {
  return (
    <div className="score-container">
      <div className="result">
        <p>Score</p>
      </div>
      <p>
        Overall Cyber Insurability Score: <span>17% - Low</span>
      </p>
    </div>
  );
};
export default ScoreSection;
