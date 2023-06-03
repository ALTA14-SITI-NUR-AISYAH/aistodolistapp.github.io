import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(
        "https://api.todoist.com/rest/v1/tasks",
        {
          headers: {
            Authorization: "Bearer b72cf42ec17de09f9a99b8aaa61cd0fb80580b10",
          },
        }
      );
      setTodos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = (id: number, completed: boolean) => {
    // Handle update logic
  };

  const handleDelete = (id: number) => {
    // Handle delete logic
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Todo List</h1>
        <Link
          to="/create"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Create
        </Link>
      </div>
      <div className="flex flex-wrap">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-4"
          >
            <div className="border border-gray-300 rounded-lg shadow p-4">
              <h2 className="text-lg font-bold mb-2">{todo.title}</h2>
              <p className="text-gray-600 mb-4">{todo.description}</p>
              <div className="flex justify-between">
                <button
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mr-2"
                  onClick={() => handleUpdate(todo.id, !todo.completed)}
                >
                  {todo.completed ? "Undone" : "Done"}
                </button>
                <Link
                  to={`/detail/${todo.id}`}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2"
                >
                  Detail
                </Link>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                  onClick={() => handleDelete(todo.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
