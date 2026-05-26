function Result({ setScreen }) {
  return (
    <div className="card">
      <h2>Wellness Result</h2>

      <h3>70/100</h3>

      <p>
        Your wellbeing score is moderate.
        Try getting more sleep and reducing stress.
      </p>

      <button onClick={() => setScreen("login")}>
        Start Again
      </button>
    </div>
  );
}

export default Result;