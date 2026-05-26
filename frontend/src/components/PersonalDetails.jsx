import { useState } from "react";

function PersonalDetails({ setScreen }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const handleNext = () => {
    if (name.trim() === "" || age === "") {
      setError("Please complete all fields.");
      return;
    }

    if (Number(age) < 12 || Number(age) > 100) {
      setError("Please enter a realistic age.");
      return;
    }

    setError("");
    setScreen("wellness");
  };

  return (
    <div className="card">
      <h2>Personal Details</h2>

      <p className="info">This information helps personalise your result.</p>

      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      {error && <p className="error">{error}</p>}

      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default PersonalDetails;