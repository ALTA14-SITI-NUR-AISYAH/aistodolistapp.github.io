import React, { useState } from "react";
import TodoList from "./TodoList";
import CreateTodoForm from "./CreateTodoForm";

interface Todo {
  id: number;
  title: string;
  description: string;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const createTodo = (title: string, description: string) => {
    const newTodo: Todo = {
      id: todos.length + 1,
      title,
      description,
    };
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id: number, title: string, description: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, title, description } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-6 mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">Todo List</h1>
        <CreateTodoForm onCreate={createTodo} />
        <TodoList todos={todos} onDelete={deleteTodo} onUpdate={updateTodo} />
      </div>
    </div>
  );
};

export default App;
