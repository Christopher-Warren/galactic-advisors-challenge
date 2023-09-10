import './QuestionSection.css';

const QuestionSection = ({ questions }) => {
  const mappedQuestions = questions.map((question, index) => {
    // Strings specify a new section
    if (typeof question === 'string') return <h2 key={index}>{question}</h2>;

    return (
      <div key={index} className="question-container">
        <div className="checkbox-container">
          {/* Use button since we're cycling through 3 values
              while checkbox only has 2
          */}
          <button />
          <span>yes</span>
        </div>

        <div className="question">
          <p>{question.text}</p>
          {question.acceptComments && (
            <textarea placeholder="Comment text here" />
          )}
        </div>
      </div>
    );
  });

  return <div>{mappedQuestions}</div>;
};

export default QuestionSection;
