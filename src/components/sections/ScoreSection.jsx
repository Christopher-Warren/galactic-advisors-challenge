import './ScoreSection.css';

const ScoreSection = ({ score }) => {
  return (
    <div className="score-container">
      <div className="result">
        <p>{score}%</p>
      </div>
      <p>
        Overall Cyber Insurability Score: <span>{score}% - Low</span>
      </p>
    </div>
  );
};
export default ScoreSection;
