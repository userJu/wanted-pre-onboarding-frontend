import React from "react";

interface inputProps {
  inputId: string;
  labelName: string;
  placeholder: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  inputId,
  labelName,
  placeholder,
  value,
  handleChange,
}: inputProps) => {
  return (
    <div>
      <label htmlFor="inputId">{labelName}</label>
      <input
        type="text"
        id={inputId}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
