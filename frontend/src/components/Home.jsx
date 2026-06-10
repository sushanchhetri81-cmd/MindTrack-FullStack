function Home({ setScreen }) {
  return (
    <div className="card">
      <h2>Welcome to MindTrack</h2>
      <p>
        MindTrack helps users check daily wellbeing based on mood, sleep hours,
        and stress level.
      </p>

      <button onClick={() => setScreen("login")}>Get Started</button>
    </div>
  );
}

export default Home;