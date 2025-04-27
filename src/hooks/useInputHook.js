import { useState } from "react";

const useInput = (initiaValue = "") => {
  const [value, setValue] = useState(initiaValue);
  const onChange = (e) => setValue(e.target.value);
  return { value, setValue, onChange };
};
