import React, { useEffect, useState } from "react";

function Records() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/records")
      .then((response) => response.json())
      .then((data) => {
        setRecords(data.data);
      })
      .catch((error) => {
        console.error("Error fetching records:", error);
      });
  }, []);

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Saved Wellness Records</h2>

      {records.map((record) => (
        <div
          key={record.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "10px",
          }}
        >
          <p><strong>Name:</strong> {record.Name}</p>
          <p><strong>Sleep Hours:</strong> {record.Sleep_hours}</p>
          <p><strong>Stress Level:</strong> {record.stress_level}</p>
          <p><strong>Wellbeing Score:</strong> {record.wellbeing_score}</p>
        </div>
      ))}
    </div>
  );
}

export default Records;