import { useState } from "react";

function Dropdownlist() {
  const [City, setCity] = useState("Delhi");

  return (
    <div>
      <h1>Dropdown List Component</h1>
      <h4>Select City</h4>
      <select
        onChange={(event) => setCity(event.target.value)}
        defaultValue={"Delhi"}
      >
        <option value="Noida">Noida</option>
        <option value="Gudgav">Gudgav </option>
        <option value="Delhi">Delhi</option>
        <option value="Goa">Goa</option>
        <option value="Bhopal">Bhopal </option>
        <option value="Indore">Indore</option>
        <option value="pune">Pune</option>
        <option value="Vacigtan">Vacigtan </option>
        <option value="DBcity">DB City</option>
        <option value="Banglore">Banglore</option>
        <option value="Jaipur">Jaipur </option>
        <option value="Thar">Thar</option>
        <option value="Jammu">Jammu</option>
        <option value="Tiruvanantpuram ">Tiruvanantpuram </option>
        <option value="Finaly Complete Dropdown😁">
          Finaly Complete Dropdown😁
        </option>
      </select>

      <h2>Selected City: {City}</h2>
    </div>
  );
}

export default Dropdownlist;
