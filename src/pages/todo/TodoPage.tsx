import React, { useState, useEffect, useCallback } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Todos from "./components/Todos";
import { TodoType } from "./types";

const Todo = () => {
  const [todos, setTodos] = useState<TodoType[] | []>([]);
  const [todo, setTodo] = useState<TodoType | undefined>(undefined);
  // const [selectedTodo, setSelectedTodo] = useState<number | null>(null);

  useEffect(() => {
    setNewestTodo();
    console.log(todo);
  }, [todos]);

  const setNewestTodo = useCallback(() => {
    const todoLength = todos.length;
    setTodo(todos[todoLength - 1]);
  }, [todos]);

  const setNewTodos = (newTodo: TodoType) => {
    setTodos((prev) => [...prev, newTodo]);
  };

  const onTodoClick = (e: React.MouseEvent<HTMLLIElement>) => {
    if (e.currentTarget.dataset.id) {
      setSelectedTodo(parseInt(e.currentTarget.dataset.id));
    }
  };

  const setSelectedTodo = (todoKey: number | undefined) => {
    const selectedTodo = todos.find((todo) => todo.key === todoKey);
    selectedTodo && setTodo(selectedTodo);
  };

  return (
    <div>
      <Form setNewTodos={setNewTodos}></Form>
      <Todos></Todos>
      {todos.map((todo) => (
        <li onClick={onTodoClick} key={todo.key} data-id={todo.key}>
          {todo.title}
        </li>
      ))}
      <TodoList todo={todo}></TodoList>
    </div>
  );
};

export default Todo;
