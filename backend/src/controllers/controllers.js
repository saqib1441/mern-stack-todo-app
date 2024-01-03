import Todo from "../models/models.js";

// Get todo /api/todo
export const GetTodo = async (req, res) => {
  try {
    const Todos = await Todo.find();

    res.status(200).send({
      success: true,
      message: "Todo fetched successfully",
      response: Todos,
    });
  } catch (error) {
    console.log(error);
    res.status(404).send({
      success: false,
      message: "Failed to get todo",
    });
  }
};

// Get todo /api/todo
export const SingleTodo = async (req, res) => {
  try {
    const Todos = await Todo.findById(req.params.id);

    if (!Todos) {
      return res.status(404).send({
        success: false,
        message: "Todo not found please try adding new one",
      });
    }
    res.status(200).send({
      success: true,
      message: "Todo fetched successfully",
      response: Todos,
    });
  } catch (error) {
    console.log(error);
    res.status(404).send({
      success: false,
      message: "Failed to get todo",
    });
  }
};

// Add new todo /api/todo/new
export const NewTodo = async (req, res) => {
  try {
    const { task, isActive } = req.body;

    if (!task) {
      res.status(500).send({
        success: false,
        message: "All fields are required",
      });
    }

    const newTodo = await Todo.insertMany({
      task,
      isActive,
    });

    res.status(201).send({
      success: true,
      message: "Todo added successfully",
      response: newTodo,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Failed to add todo",
    });
  }
};

// Update todo /api/todo/update/:id
export const UpdateTodo = async (req, res) => {
  try {
    const getTodo = await Todo.findById(req.params.id);

    if (!getTodo) {
      res.status(404).send({
        success: false,
        message: "Todo not found please add new todo",
      });
    }

    const UpdatedTodo = await Todo.updateOne(
      { _id: req.params.id },
      {
        $set: req.body,
      }
    );

    res.status(200).send({
      success: true,
      message: "Todo Updated successfully",
      response: UpdatedTodo,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Failed to update todo",
    });
  }
};

// Delete todo /api/todo/delete/:id
export const DeleteTodo = async (req, res) => {
  try {
    const getTodo = await Todo.find({ _id: req.params.id });

    if (!getTodo) {
      res.status(404).send({
        success: false,
        message: "Todo not found please add new todo",
      });
    }

    const DeletedTodo = await Todo.deleteOne({ _id: req.params.id });

    res.status(200).send({
      success: true,
      message: "Todo Deleted successfully",
      response: DeletedTodo,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Failed to delete todo",
    });
  }
};
