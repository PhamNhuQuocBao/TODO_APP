import { ThemeProvider } from "styled-components";
import { theme } from "./assets/theme";
import TodoList from "./components/todoList";
import Input from "./components/input";
import Button from "./components/button";
import { PlusOutlined } from "@ant-design/icons";
import { Typography } from "antd";

const todos = [
  {
    id: 1,
    title: "Todo 1",
    completed: false,
  },
  {
    id: 2,
    title: "Todo 2",
    completed: false,
  },
  {
    id: 3,
    title: "Todo 3",
    completed: false,
  },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <div className="max-w-[600px] my-0 mx-auto">
          <div className="flex self-stretch gap-4 mb-4 py-10 h-[120px]">
            <Input placeholder="Add a new task" className="search" />
            <Button className="self-stretch justify-stretch">
              <PlusOutlined />
            </Button>
          </div>
          <Typography.Title className="!text-white" level={4}>
            Task to do - {todos.length}
          </Typography.Title>
          <TodoList todos={todos} className="mb-10" />
          <Typography.Title className="!text-white" level={4}>
            Done - {todos.length}
          </Typography.Title>
          <TodoList todos={todos} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
