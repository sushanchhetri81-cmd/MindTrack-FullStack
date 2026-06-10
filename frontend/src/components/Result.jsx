function Result({ resultData, setScreen }) {
  return (
    <div className="card">
      <h2>Assessment Result</h2>

      <h3>Hello {resultData.firstName}</h3>

      <p><strong>Today's Mood:</strong> {resultData.mood}</p>
      <p><strong>Sleep Hours:</strong> {resultData.sleepHours}</p>
      <p><strong>Stress Level:</strong> {resultData.stressLevel}</p>
      <p><strong>Wellbeing Score:</strong> {resultData.wellbeingScore}/100</p>

      <h3>{resultData.scoreLevel}</h3>

      <button onClick={() => setScreen("wellness")}>
        New Assessment
      </button>
    </div>
  );
}

export default Result;