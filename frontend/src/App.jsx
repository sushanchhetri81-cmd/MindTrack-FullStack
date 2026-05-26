import { useState } from "react";

import Login from "./components/Login";
import PersonalDetails from "./components/PersonalDetails";
import WellnessCheck from "./components/WellnessCheck";
import Result from "./components/Result";
import Records from "./components/Records";

import "./App.css";

function App() {
  const [screen, setScreen] = useState("login");

  const [wellnessData, setWellnessData] = useState({
    stress: "",
    sleep: "",
    mood: "",
    score: "",
  });

  return (
    <div className="app">
      <h1>MindTrack</h1>

      <p className="subtitle">
        A simple wellbeing check-in tool
      </p>

      {screen === "login" && (
        <Login setScreen={setScreen} />
      )}

      {screen === "personal" && (
        <PersonalDetails setScreen={setScreen} />
      )}

      {screen === "wellness" && (
        <WellnessCheck
          setScreen={setScreen}
          setWellnessData={setWellnessData}
        />
      )}

      {screen === "result" && (
        <>
          <Result
            setScreen={setScreen}
            wellnessData={wellnessData}
          />

          <Records />
        </>
      )}
    </div>
  );
}

export default App;