const express = require("express");
const mongoose = require("mongoose");
const checkLogin = require("../middlewares/checkLogin");
const todoSchema = require("../schemas/todoSchema");

const Todo = new mongoose.model("Todo", todoSchema);

const router = express.Router();

// GET TODOS BY LANGUAGE (Query Helper)
router.get("/language", async (req, res) => {
  const data = await Todo.find().byLanguage("react");
  res.status(200).json({
    data,
  });
});

// GET TODOS (static methods)
router.get("/js", async (req, res) => {
  const data = await Todo.findByJs();
  res.status(200).json({
    data,
  });
});

// GET ACTIVE TODOS
router.get("/active", async (req, res) => {
  const todo = new Todo();
  const data = await todo.findActive();
  res.status(200).json({
    data,
  });
});

// GET ACTIVE TODOS with callback
router.get("/active-callback", (req, res) => {
  const todo = new Todo();
  todo.findActiveCallback((err, data) => {
    res.status(200).json({
      data,
    });
  });
});

// GET ALL THE TODOS
router.get("/", checkLogin, (req, res) => {
  console.log(req.username);
  console.log(req.userId);
  Todo.find({ status: "active" })
    .select({
      _id: 0,
      date: 0,
      __v: 0,
    })
    .limit(2)
    .exec((err, data) => {
      if (err) {
        res.status(500).json({
          error: "There was a server side error!",
        });
      } else {
        res.status(200).json({
          result: data,
          message: "Todo data showed successfully!",
        });
      }
    });
  /*     await Todo.find({ status: 'active' }, (err, data) => {
        if (err) {
            res.status(500).json({
                error: 'There was a server side error!',
            });
        } else {
            res.status(200).json({
                result: data,
                message: 'Todo data showed successfully!',
            });
        }
    }); */
});

// GET A TODO BY ID
router.get("/:id", async (req, res) => {
  try {
    const data = Todo.find({ _id: req.params.id });
    res.status(200).json({
      result: data,
      message: "Todo data showed successfully!",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was a server side error!",
    });
  }
});

// POST TODO [.save() is an instance method]
router.post("/", (req, res) => {
  const newTodo = new Todo(req.body);
  newTodo.save((err) => {
    if (err) {
      res.status(500).json({
        error: "There was a server side error!",
      });
    } else {
      res.status(200).json({
        message: "Todo inserted successfully!",
      });
    }
  });
});

// POST MULTIPLE TODO
router.post("/all", (req, res) => {
  Todo.insertMany(req.body, (err) => {
    if (err) {
      res.status(500).json({
        error: "There was a server side error!",
      });
    } else {
      res.status(200).json({
        message: "Todos were inserted successfully!",
      });
    }
  });
});

// PUT TODO (UPDATE) /* updateOne() */
router.put("/:id", (req, res) => {
  const result = Todo.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        status: "active",
      },
    },
    { useFindAndModify: false },
    (err) => {
      if (err) {
        res.status(500).json({
          error: "There was a server side error!",
        });
      } else {
        res.status(200).json({
          message: "Todo was updated successfully!",
        });
      }
    }
  );
  console.log(result);
});

// DELETE TODO
router.delete("/:id", (req, res) => {
  Todo.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(500).json({
        error: "There was a server side error!",
      });
    } else {
      res.status(200).json({
        message: "Todo data deleted successfully!",
      });
    }
  });
});

module.exports = router;
