
function Result({ score, total, onRestart }) {
  const incorrect = total - score;
  const percentage = (score / total) * 100;

  let message;

  if (percentage >= 80) {
    message = "Excellent work!";
  } else if (percentage >= 50) {
    message = "Good effort! Keep practising.";
  } else {
    message = "Keep learning and try again!";
  }

  return (
    <div className="quiz-card result-card">
      <h1>Quiz Completed!</h1>
      <h2>{message}</h2>

      <p className="score">
        {score} / {total}
      </p>

      <p>Correct answers: {score}</p>
      <p>Incorrect answers: {incorrect}</p>

      <button className="primary-button" onClick={onRestart}>
        Restart Quiz
      </button>
    </div>
  );
}

export default Result;
