import React, { useState } from "react";

interface TodoItem {
  name: string;
  completed: boolean;
}

const TodoList = () => {
  return (
    <div>

      <div>
        {todos.map((todo, index) => (
          <TodoItem key={index} />
        ))}
      </div>
      <TodoInput />
    </div>);
};
const TodoItem = () => {
  return (
    <div key={index}>
      <input type="checkbox" checked={todo.completed} onChange={(event) => markCompleted(index, event.target.checked)} />
      <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.name}</span>
    </div>);
};

const TodoInput = () => {
  return (
    <div>
      <input id="todo" type="text" value={todo} onChange={(event) => setTodo(event.target.value)} />
      <button onClick={() => addTodo(todo)}>Add</button>
    </div>
  )
}

const App = () => {
  document.title = "Todo List";
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [todo, setTodo] = useState("");

  const addTodo = (todo: string) => {
    setTodos([...todos, { name: todo, completed: false }]);
    setTodo("");
  };

  const markCompleted = (index: number, completed: boolean) => {
    setTodos(todos.map((todo, i) => i === index ? { ...todo, completed: completed } : todo));
  };

  return (
    <>
      <TodoList />
    </>
  );

}

export default App;