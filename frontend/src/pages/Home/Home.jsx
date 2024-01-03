import React, { useEffect, useState } from "react";

// External CSS File
import "./Home.css";

// Axios Import
import axios from "axios";

// Imporing link
import { Link } from "react-router-dom";

// Importing Icons From React Icons
import { FiEdit3 } from "react-icons/fi";
import { MdDeleteSweep } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

// React Toastify
import { toast } from "react-toastify";

const Home = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    data();
  }, [todo]);

  // Get Todo data from server
  const data = async () => {
    const result = await axios.get("http://localhost:5000/api/v1/todo");
    setTodo(result.data.response);
  };

  // Todo Active State Handler
  const activeHanlder = async (data) => {
    const result = await axios.put(
      `http://localhost:5000/api/v1/todo/update/${data}`,
      {
        isActive: false,
      }
    );
    if (result.data.success) {
      toast.success("Congratulations for completing your task!");
    }
  };

  // Todo Delete Handler
  const deleteHandler = async (value) => {
    const data = await axios.delete(
      `http://localhost:5000/api/v1/todo/delete/${value}`
    );
    if (data.data.success) {
      toast.success(data.data.message);
    }
  };

  return (
    <section className="container">
      <div className="home-container">
        <h1>Todo List</h1>

        {/* Mapping Todo lIst data */}
        <ul className="todo-list">
          {todo.map((item) => {
            return (
              // Todo List
              <li key={item._id} className="list-item">
                <div className="task">{item.task}</div>
                <div className={item.isActive ? "pending" : "done"}>
                  {item.isActive ? "Active" : "Done"}
                </div>
                <div className="actions">
                  <Link to={`/update/${item._id}`}>
                    <FiEdit3 />
                  </Link>
                  <Link onClick={() => deleteHandler(item._id)}>
                    <MdDeleteSweep />
                  </Link>
                  <Link onClick={() => activeHanlder(item._id)}>
                    <FaCheckCircle />
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>

        {/* New Todo Btn */}
        <div className="btn">
          <Link to={"/new"} className="new-btn">
            Add New
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
