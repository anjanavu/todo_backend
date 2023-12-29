const express = require('express');
const router = express.Router();
const data=require('../model/addtodo')
router.post("/add", async (req, res) => {
    try {
        const { description, status } = req.body; // Destructuring the request body
        const todoItem = await new data({ description, status }).save();
        res.status(200).json(todoItem);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
      }
  });
  router.get("/view", async (req, res) => {
    try {
      const list = await data.find();
      res.json(list);
    } catch (error) {
      console.error("Error occurred while fetching data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  router.delete("/delete/:id", async (req, res) => {
    try {
     
      const list = await data.findByIdAndDelete(req.params.id);
  
      res.status(200).json(list);
    } catch (error) {
      console.error(error);
      res.status(500);
    }
  });
module.exports = router;