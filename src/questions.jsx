
import Quizprogress from "./Quizprogress.jsx";

function Question({
  questionData,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onSelect,
  onNext
}) {
  return (
    <div className="quiz-card">
      <Quizprogress
        current={questionNumber + 1}
        total={totalQuestions}
      />

      <h2>{questionData.question}</h2>

      <div className="options">
        {questionData.options.map((option, index) => (
          <button
            key={option}
            className={
              selectedAnswer === index
                ? "option selected"
                : "option"
            }
            onClick={() => onSelect(index)}
          >
            {option}
          </button>
        ))}
      </div>

      <button
        className="next-button"
        onClick={onNext}
        disabled={selectedAnswer === null}
      >
          "Next"
      </button>
    </div>
  );
}

export default Question;
