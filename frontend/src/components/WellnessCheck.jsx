import { useState } from "react";

function WellnessCheck() {
  const [name, setName] = useState("");
  const [sleepHours, setSleepHours] = useState("");
  const [stressLevel, setStressLevel] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async () => {
    const wellbeingScore =
      Number(sleepHours) >= 7 && Number(stressLevel) <= 5
        ? 90
        : 60;

    const response = await fetch("http://127.0.0.1:5000/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        sleep_hours: sleepHours,
        stress_level: stressLevel,
        wellbeing_score: wellbeingScore,
      }),
    });

    const data = await response.json();

    setResult(
      `Hello ${name}, your wellbeing score is ${wellbeingScore}`
    );

    console.log(data);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#eef2ff",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "15px",
          width: "400px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Wellness Check</h1>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
            borderRadius: "8px",
          }}
        />

        <input
          type="number"
          placeholder="Sleep hours"
          value={sleepHours}
          onChange={(e) => setSleepHours(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
            borderRadius: "8px",
          }}
        />

        <input
          type="number"
          placeholder="Stress level"
          value={stressLevel}
          onChange={(e) => setStressLevel(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
            borderRadius: "8px",
          }}
        />

        <button
          onClick={handleSubmit}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
            backgroundColor: "#4f46e5",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          View Result
        </button>

        {result && (
          <h3 style={{ marginTop: "20px", textAlign: "center" }}>
            {result}
          </h3>
        )}
      </div>
    </div>
  );
}

export default WellnessCheck;