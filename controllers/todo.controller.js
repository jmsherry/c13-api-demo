const Todo = require("../models/todo.model");

exports.getTodos = async (req, res) => {
  let query = {};
  if (req.params.id) {
    query._id = req.params.id;
  }

  try {
    const todos = await Todo.find(query);
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).send(err)
  }

};

exports.addTodo = async (req, res) => {
  const todoData = req.body;
  console.log("todoData", todoData);
  try {
    const newTodo = new Todo(todoData);
    const result = await newTodo.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(500).send(err)
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const result = await Todo.updateOne({ _id: req.params.id }, req.body);
    if(result.n === 0) return res.sendStatus(404)
    res.sendStatus(200);
  } catch (err) {
    res.status(500).send(err)
  }
};

exports.removeTodo = async (req, res) => {
  try {
    const result = await Todo.deleteOne({ _id: req.params.id });
    if(result.n === 0) return res.sendStatus(404)
    res.sendStatus(204)
  } catch (err) {
    res.status(500).send(err)
  }
};