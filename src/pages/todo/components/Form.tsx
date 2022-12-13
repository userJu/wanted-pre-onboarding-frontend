import React from "react";
import Input from "../../../components/Input";
import useInput from "../../../hooks/useInput";
import { TodoType } from "../types";

const Form = ({
  setNewTodos,
}: {
  setNewTodos: (newTodo: TodoType) => void;
}) => {
  const todoInput = useInput("");

  const { value, onChange, resetValue } = todoInput;

  const todoInputProps = {
    inputId: "todo",
    labelName: "todo",
    placeholder: "할 일을 입력해주세요",
    value,
    handleChange: onChange,
  };

  const onTodoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo = makeInitialTodo(value);
    setNewTodos(newTodo);
    resetValue();
  };

  const makeInitialTodo = (value: string) => {
    // class방식으로 새로운 todo를 만들면 어떨까?

    const date = new Date();

    const newTodo = {
      title: value,
      content: "",
      isCompleted: false,
      createdAt: date,
      // new Date, Date now blog 정리하기
      key: +date,
    };
    return newTodo;
  };

  return (
    <form onSubmit={onTodoSubmit}>
      <Input {...todoInputProps} />
      <button>+</button>
    </form>
  );
};

export default Form;
