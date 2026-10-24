
function Quizprogress({ current, total }) {
  const percentage = (current / total) * 100;

  return (
    <div>
      <p>Question {current} of {total}</p>
    </div>
  );
}

export default Quizprogress;
