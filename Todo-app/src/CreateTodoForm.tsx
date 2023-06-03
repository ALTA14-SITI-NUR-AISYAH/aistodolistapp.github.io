import React, { useState } from "react";

interface CreateTodoFormProps {
  onCreate: (title: string, description: string) => void;
}

const CreateTodoForm: React.FC<CreateTodoFormProps> = ({ onCreate }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center mb-4">
        <label htmlFor="title" className="mr-2">
          Title:
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-400 rounded px-2 py-1"
        />
      </div>
      <div className="flex items-center mb-4">
        <label htmlFor="description" className="mr-2">
          Description:
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-400 rounded px-2 py-1"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded font-bold"
      >
        Create
      </button>
    </form>
  );
};

export default CreateTodoForm;
