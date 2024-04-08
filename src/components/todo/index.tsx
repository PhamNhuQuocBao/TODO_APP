import { FC, memo } from "react";
import { TodoStyle } from "./style";
import { CheckOutlined, DeleteOutlined } from "@ant-design/icons";

interface TodoProps {
  id?: number;
  title: string;
  completed: boolean;
}

const Todo: FC<TodoProps> = memo(({ title, completed }) => {
  return (
    <TodoStyle className={`${completed ? "completed" : ""}`}>
      <p className="title">{title}</p>
      <div className="actions">
        <CheckOutlined className="action-item" />
        <DeleteOutlined className="action-item" />
      </div>
    </TodoStyle>
  );
});

export default Todo;
