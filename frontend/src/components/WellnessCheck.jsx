import { useState } from "react";

function WellnessCheck({ setScreen, setResultData }) {
  const [firstName, setFirstName] = useState("");
  const [mood, setMood] = useState("");
  const [sleepHours, setSleepHours] = useState("");
  const [stressLevel, setStressLevel] = useState("");

  const handleSubmit = async () => {
    const sleep = Number(sleepHours);
    const stress = Number(stressLevel);

    let wellbeingScore = 100;

    if (sleep < 5) wellbeingScore -= 30;
    else if (sleep < 7) wellbeingScore -= 15;

    wellbeingScore -= stress * 4;

    if (wellbeingScore < 0) wellbeingScore = 0;
    if (wellbeingScore > 100) wellbeingScore = 100;

    let scoreLevel = "";

    if (wellbeingScore >= 75) {
      scoreLevel = "High wellbeing score";
    } else if (wellbeingScore >= 50) {
      scoreLevel = "Medium wellbeing score";
    } else {
      scoreLevel = "Low wellbeing score";
    }

    await fetch("https://mindtrack-backend-gkn8.onrender.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: firstName,
        mood: mood,
        sleep_hours: sleep,
        stress_level: stress,
        wellbeing_score: wellbeingScore,
      }),
    });

    setResultData({
      firstName,
      mood,
      sleepHours: sleep,
      stressLevel: stress,
      wellbeingScore,
      scoreLevel,
    });

    setScreen("result");
  };

  return (
    <div className="card">
      <h2>Daily Wellbeing Assessment</h2>

      <input
        type="text"
        placeholder="First name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Today's mood"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
      />

      <input
        type="number"
        placeholder="Sleep hours"
        value={sleepHours}
        onChange={(e) => setSleepHours(e.target.value)}
      />

      <input
        type="number"
        placeholder="Stress level (1-10)"
        value={stressLevel}
        onChange={(e) => setStressLevel(e.target.value)}
      />

      <button onClick={handleSubmit}>View Result</button>
    </div>
  );
}

export default WellnessCheck;