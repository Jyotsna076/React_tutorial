import { useState } from "react";
import "./ColorMixer.css";

function ColorMixer() {

    const colors = JSON.parse( localStorage.getItem('color'))
  const [r, setR] = useState(colors && colors.r?colors.r:0);
  const [g, setG] = useState(colors && colors.r?colors.r:0);
  const [b, setB] = useState(colors && colors.r?colors.r:0);

  const save = () => {
    localStorage.setItem("color", JSON.stringify({r,g,b}))
  }

  return (
    <>
      <h1>Color Palet </h1>
      <div
        className="color-plate"
        style={{ backgroundColor: "rgb(" + r + ", " + g + ", " + b + ")" }}
      ></div>

      <label htmlFor="red">Red: </label>
      <input
        type="range"
        value={r}
        onChange={(event) => setR(event.target.value)}
        min={0}
        max={255}
      />
      <br />
      <br />
      <label htmlFor="green">Green: </label>
      <input
        type="range"
        value={g}
        onChange={(event) => setG(event.target.value)}
        min={0}
        max={255}
      />
      <br />
      <br />
      <label htmlFor="blue">Blue: </label>
      <input
        type="range"
        value={b}
        onChange={(event) => setB(event.target.value)}
        min={0}
        max={255}
      />
      <br />
      <br />

      <button className="btn" onClick={save}>Save Color Combination</button>
    </>
  );
}

export default ColorMixer;
