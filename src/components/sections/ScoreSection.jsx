import './ScoreSection.css';

const ScoreSection = ({ score }) => {
  const calcScore = (score) => {
    console.log(score);
    let value = '';
    if (score >= 80) {
      value = 'Great';
    } else if (score >= 60) {
      value = 'Good';
    } else {
      value = 'Low';
    }
    return value;
  };

  return (
    <div className="score-container">
      <div className={`result ${calcScore(score)}`}>
        <p>{score}%</p>
      </div>
      <p>
        Overall Cyber Insurability Score:{' '}
        <span>
          {score}% - {calcScore(score)}
        </span>
      </p>
    </div>
  );
};
export default ScoreSection;
