import React, { useState } from "react";

// External CSS File
import "./NewTodo.css";

// Importing Axios
import axios from "axios";

// Importing Links
import { Link, useNavigate } from "react-router-dom";

// Imporing Toast For Notifications
import { toast } from "react-toastify";

const NewTodo = () => {
  const [task, setTask] = useState("");

  // Form Handler for NewTodo
  const formHandler = async (e) => {
    e.preventDefault();
    const result = await axios.post("http://localhost:5000/api/v1/todo/new", {
      task: task,
      isActive: true,
    });
    if (result.data.success === true) {
      setTask("");
      toast.success(result.data.message);
    } else {
      toast.error(result.data.message);
    }
  };
  return (
    <section className="container">
      <div className="new-container">
        <h1 className="new-heading">Add Todo</h1>
        {/* New Todo Form */}
        <form onSubmit={formHandler} className="new-form">
          <input
            type="text"
            placeholder="Enter your task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            required
          />
          <input type="submit" className="btn" value={"Add"} />
        </form>
        <Link to={"/"} className="new-btn">
          Todo List
        </Link>
      </div>
    </section>
  );
};

export default NewTodo;
