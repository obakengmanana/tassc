const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator'); // Import check and validationResult
const authMiddleware = require('../middleware/auth');
const User = require('../models/User');
const bcrypt = require('bcryptjs'); // For password hashing (ensure you have this installed)

// Middleware to hash password
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

// Get the current user's profile
router.get('/me', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password'); // Exclude password from response
    if (!user) return res.status(404).json({ msg: 'User not found' });
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Update the current user's profile
router.put('/me', [
  authMiddleware,
  check('name', 'Name is required').notEmpty(),
  check('email', 'Email is required').isEmail(),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const { name, email, password } = req.body;
    const userFields = { name, email };
    
    // Only update the password if a new one is provided
    if (password) {
      userFields.password = await hashPassword(password);
    }

    const user = await User.findByIdAndUpdate(
      req.user.id,
      { $set: userFields },
      { new: true, runValidators: true }
    );

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Delete the current user's profile
router.delete('/me', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ msg: 'User not found' });

    await User.findByIdAndRemove(req.user.id);
    res.json({ msg: 'User profile removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
