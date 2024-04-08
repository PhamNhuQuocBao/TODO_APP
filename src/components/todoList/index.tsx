import { Todo as ITodo } from "@/types";
import { FC, memo } from "react";
import Todo from "../todo";
import { TodoListStyled } from "./style";

interface TodoListProps {
  todos: ITodo[];
  className?: string;
}

const TodoList: FC<TodoListProps> = memo(({ todos, className }) => {
  return (
    <TodoListStyled className={`todo-list ${className}`}>
      {todos.map((item) => (
        <Todo key={item.id} title={item.title} completed={item.completed} />
      ))}
    </TodoListStyled>
  );
});

TodoList.defaultProps = {
  className: "",
};

export default TodoList;
