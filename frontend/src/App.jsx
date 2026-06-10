import { useState } from "react";

import Home from "./components/Home";
import Login from "./components/Login";
import PersonalDetails from "./components/PersonalDetails";
import WellnessCheck from "./components/WellnessCheck";
import Result from "./components/Result";
import Records from "./components/Records";

import "./App.css";

function App() {
  const [screen, setScreen] = useState("home");
  const [resultData, setResultData] = useState({});

  return (
    <div className="app">
      <h1>MindTrack</h1>
      <p className="subtitle">A simple wellbeing check-in tool</p>

      {screen === "home" && <Home setScreen={setScreen} />}

      {screen === "login" && <Login setScreen={setScreen} />}

      {screen === "personal" && <PersonalDetails setScreen={setScreen} />}

      {screen === "wellness" && (
        <WellnessCheck
          setScreen={setScreen}
          setResultData={setResultData}
        />
      )}

      {screen === "result" && (
        <>
          <Result
            resultData={resultData}
            setScreen={setScreen}
          />
          <Records />
        </>
      )}
    </div>
  );
}

export default App;