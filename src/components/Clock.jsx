import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(0);
  const [color, setColor] = useState("red");

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div className="container">
      <h1>Digital Clock in React JS</h1>
      <select onChange={(e) => setColor(e.target.value)}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="orange">Orange</option>
      </select>
      <h1
        style={{
          color: color,
          backgroundColor: "#000",
          width: "180px",
          margin: "auto",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        {time}
      </h1>
    </div>
  );
}

export default Clock;
