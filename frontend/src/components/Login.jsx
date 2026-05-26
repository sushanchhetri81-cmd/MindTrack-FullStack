import { useState } from "react";

function Login({ setScreen }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleContinue = () => {
    if (username.trim() === "" || password.trim() === "") {
      setError("Please enter username and password.");
      return;
    }

    setError("");
    setScreen("personal");
  };

  return (
    <div className="card">
      <h2>Login</h2>

      <p className="info">Enter your details to begin your wellness check.</p>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p className="error">{error}</p>}

      <button onClick={handleContinue}>Continue</button>
    </div>
  );
}

export default Login;