import React from "react";

interface Todo {
  id: number;
  title: string;
  description: string;
}

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: number) => void;
  onUpdate: (id: number, title: string, description: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete, onUpdate }) => {
  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleUpdate = () => {
    // Implement logic to update todo
    // You can show a form or a modal to update the todo
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <h3 className="text-xl font-bold mb-2">{todo.title}</h3>
      <p className="mb-4">{todo.description}</p>
      <div className="flex justify-end">
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={handleDelete}
        >
          Delete
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleUpdate}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
