import React, { useState } from "react";

interface UpdateTodoFormProps {
  todoId: number;
  title: string;
  description: string;
  onUpdate: (todoId: number, title: string, description: string) => void;
}

const UpdateTodoForm: React.FC<UpdateTodoFormProps> = ({
  todoId,
  title: initialTitle,
  description: initialDescription,
  onUpdate,
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(todoId, title, description);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateTodoForm;
