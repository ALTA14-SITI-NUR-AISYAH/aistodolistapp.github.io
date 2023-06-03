import React from "react";
import { useParams } from "react-router-dom";

interface TodoDetailProps {
  title: string;
  description: string;
}

const TodoDetail: React.FC<TodoDetailProps> = ({ title, description }) => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h2>Todo Detail</h2>
      <h3>Title: {title}</h3>
      <p>Description: {description}</p>
      <p>ID: {id}</p>
    </div>
  );
};

export default TodoDetail;
