import { useState } from "react";

const CustomToggle = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  function toggleVal(val) {
    if (typeof val != "boolean") {
      setValue(!value);
    } else {
      setValue(val);
    }
  }

  return [value, toggleVal]
};

export default CustomToggle;

//this file is a part of CustomHook.jsx
