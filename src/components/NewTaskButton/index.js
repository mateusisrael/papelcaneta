import React from "react";
import "./style.css";


const NewTaskButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="newTaskButton">
      +
    </button>
  );
};

export default NewTaskButton;
