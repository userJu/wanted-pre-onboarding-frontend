import React, { useState } from "react";

const useInput = (initialValue: string | "") => {
  const [value, setValue] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };

  const resetValue = () => {
    setValue("");
  };

  return { value, onChange, resetValue };
};

export default useInput;
