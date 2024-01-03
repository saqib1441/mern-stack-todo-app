import React, { Fragment } from "react";

// Routes
import { Route, Routes } from "react-router-dom";

// Importing components
import Home from "./pages/Home/Home";
import UpdateTodo from "./pages/UpdateTodo/UpdateTodo";
import NewTodo from "./pages/NewTodo/NewTodo";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewTodo />} />
        <Route path="/update/:id" element={<UpdateTodo />} />
      </Routes>
    </Fragment>
  );
};

export default App;
