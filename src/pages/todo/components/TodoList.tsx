import React from "react";
import { TodoType } from "../types";

const TodoLists = ({ todo }: { todo: TodoType | undefined }) => {
  console.log(todo);
  return (
    <div>
      {todo ? (
        <div>
          <h1>리스트</h1>
          <h2>{todo.title}</h2>
        </div>
      ) : (
        <div>
          <h1>리스트</h1>
          <h2>todo가 없어요 ㅜㅜ</h2>
        </div>
      )}
    </div>
  );
};

export default TodoLists;
