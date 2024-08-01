const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const authMiddleware = require('../middleware/auth');
const Task = require('../models/Task');

// Create a new task
router.post('/', [
  authMiddleware,
  check('name', 'Name is required').notEmpty(),
  check('description', 'Description is required').notEmpty(),
  check('dueDate', 'Due Date is required').isISO8601(),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const { name, description, status, dueDate } = req.body;
    const task = new Task({ 
      name, 
      description, 
      status, 
      dueDate, 
      user: req.user.id 
    });
    await task.save();
    res.json(task);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Get all tasks for the authenticated user
router.get('/', authMiddleware, async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id }).sort({ dueDate: -1 });
    res.json(tasks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Get a specific task by ID
router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ msg: 'Task not found' });
    if (task.user.toString() !== req.user.id) return res.status(401).json({ msg: 'Not authorized' });
    res.json(task);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Update a task
router.put('/:id', [
  authMiddleware,
  check('name', 'Name is required').notEmpty(),
  check('description', 'Description is required').notEmpty(),
  check('dueDate', 'Due Date is required').isISO8601(),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    let task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ msg: 'Task not found' });
    if (task.user.toString() !== req.user.id) return res.status(401).json({ msg: 'Not authorized' });

    const { name, description, status, dueDate } = req.body;
    task = await Task.findByIdAndUpdate(req.params.id, { name, description, status, dueDate }, { new: true });
    res.json(task);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Route to delete a task with authorization middleware
router.delete('/:id', authMiddleware, async (req, res) => {
    try {
      const task = await Task.findById(req.params.id);
      if (!task) return res.status(404).json({ msg: 'Task not found' });
      if (task.user.toString() !== req.user.id) return res.status(401).json({ msg: 'Not authorized' });
  
      await Task.deleteOne({ _id: req.params.id });  // Use deleteOne instead
      res.json({ msg: 'Task removed' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });
  
  // Route to delete a task without authentication
  router.delete('/api/tasks/:id', async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ error: 'Invalid ID format' });
    }
  
    try {
      const result = await Task.findByIdAndDelete(id);
      if (!result) {
        return res.status(404).send({ error: 'Task not found' });
      }
      res.status(200).send({ success: true });
    } catch (error) {
      res.status(500).send({ error: 'Failed to delete task' });
    }
  });
  

module.exports = router;
