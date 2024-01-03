import React, { useEffect, useState } from "react";

// External CSS File
import "./UpdateTodo.css";

// Imporing Links
import { Link, useNavigate, useParams } from "react-router-dom";

// Importing Axios
import axios from "axios";

// Importing toast for notifications
import { toast } from "react-toastify";

const UpdateTodo = () => {
  const [task, setTask] = useState();
  const [active, setActive] = useState();
  const param = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    data();
  }, []);

  // Get Method to get Todo for updating
  const data = async () => {
    const result = await axios.get(
      `http://localhost:5000/api/v1/todo/${param.id}`
    );
    setTask(result.data.response.task);
    setActive(result.data.response.isActive);
  };

  // Updatin form handler
  const formHandler = async (e) => {
    e.preventDefault();
    const result = await axios.put(
      `http://localhost:5000/api/v1/todo/update/${param.id}`,
      {
        task: task,
        isActive: active,
      }
    );
    if (result.data.success) {
      toast.success(result.data.message);
      navigate("/");
    }
  };

  return (
    <section className="container">
      <div className="update-container">
        <h1 className="update-heading">Update Todo</h1>

        {/* Update Form */}
        <form className="update-form" onSubmit={formHandler}>
          <input
            type="text"
            placeholder="Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <select onChange={(e) => setActive(e.target.value)}>
            <option value="true">Active</option>
            <option value="false" selected={active ? false : true}>
              Done
            </option>
          </select>
          <input type="submit" className="btn" value={"Update Todo"} />
          <Link to={"/"} className="btn">
            Todo List
          </Link>
        </form>
      </div>
    </section>
  );
};

export default UpdateTodo;
