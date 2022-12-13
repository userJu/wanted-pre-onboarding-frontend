import React from "react";
import Input from "../../../components/Input";

const Form = () => {
  const handleTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const todoInputProps = {
    inputId: "todo",
    labelName: "todo",
    placeholder: "할 일을 입력해주세요",
    handleChange: handleTodoChange,
  };

  const onTodoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.dir(e.target);
  };

  return (
    <form onSubmit={onTodoSubmit}>
      <Input {...todoInputProps} />
      <button>+</button>
    </form>
  );
};

export default Form;
