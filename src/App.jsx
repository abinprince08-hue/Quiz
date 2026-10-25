
import { useState } from "react";
import questions from "./questions.js";
import Question from "./questions.jsx";
import Result from "./Result.jsx";
import "./index.css";
import "./App.css";
import "./main.jsx";
import Quizprogress from "./Quizprogress.jsx";


function App() {
  const [state, setState] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  function startQuiz() {
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setState(1);
  }

  function nextQuestion() {
    if (selectedAnswer === null) return;

    if (
      selectedAnswer ===
      questions[questionIndex].answer
    ) {
      setScore(previousScore => previousScore + 1);
    }

    if (questionIndex < questions.length - 1) {
      setQuestionIndex(previousIndex => previousIndex + 1);
      setSelectedAnswer(null);
    } else {
      setState(2);
    }
  }

  return (
    <main className="app">
      {state === 0 && (
        <div className="quiz-card home-card">
          <h1>React Quiz Challenge</h1>
          <p>Test your web development knowledge.</p>
          <p>{questions.length} multiple-choice questions</p>

          <button
            className="primary-button"
            onClick={startQuiz}
          >
            Start Quiz
          </button>
        </div>
      )}

      {state === 1 && (
        <Question
          questionData={questions[questionIndex]}
          questionNumber={questionIndex}
          totalQuestions={questions.length}
          selectedAnswer={selectedAnswer}
          onSelect={setSelectedAnswer}
          onNext={nextQuestion}
        />
      )}

      {state === 2 && (
        <Result
          score={score}
          total={questions.length}
          onRestart={startQuiz}
        />
      )}
    </main>
  );
}

export default App;
