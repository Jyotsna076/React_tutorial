import { useState } from "react";

function RadioBtn() {
  const [gender, setGender] = useState("female");

  return (
    <>
      <h1>Handle Radio and Dropdown</h1>
      <h4>Select Gender</h4>
      <input
        type="radio"
        onChange={(event) => setGender(event.target.value)}
        name="gender"
        id="male"
        value={"male"}
        checked={gender == "male"}
      />
      <label htmlFor="Male">Male</label>
      <input
        type="radio"
        onChange={(event) => setGender(event.target.value)}
        name="gender"
        id="female"
        value={"female"}
        checked={gender == "female"}
      />
      <label htmlFor="female">Female</label>

      <h2>Selected Gender: {gender}</h2>
      <br /><br /><br />


    </>
  );
}

export default RadioBtn;
