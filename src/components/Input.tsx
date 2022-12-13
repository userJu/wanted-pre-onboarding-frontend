import React from "react";

interface inputProps {
  inputId: string;
  labelName: string;
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  inputId,
  labelName,
  placeholder,
  handleChange,
}: inputProps) => {
  return (
    <div>
      <label htmlFor="inputId">{labelName}</label>
      <input
        type="text"
        id={inputId}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
