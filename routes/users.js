const express = require("express");

const router = express.Router();

// In-memory users array (replace this with database in production)
let users = []; // Ensure `users` is defined to avoid runtime errors.

// Route: /
// Method: GET
// Description: Get all users

//http://localhost:8081/users/
router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    data: users,
  });
});

// Route: /:id
// Method: GET
// Description: Get user by ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((each) => each.id == id); // Use `==` to allow string/number comparison

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User doesn't exist!",
    });
  }

  return res.status(200).json({
    success: true,
    message: "User found!",
    data: user,
  });
});

// Route: /
// Method: POST
// Description: Create a new user
router.post("/", (req, res) => {
  const { id, name, surname, email, subscriptionType, subscriptionDate } = req.body;

  // Check if the user already exists
  const existingUser = users.find((each) => each.id == id);

  if (existingUser) {
    return res.status(409).json({
      success: false,
      message: "User with the given ID already exists!",
    });

  }

  // Add the new user to the in-memory array
  users.push({
    id,
    name,
    surname,
    email,
    subscriptionType,
    subscriptionDate,
  });

  return res.status(201).json({
    success: true,
    message: "User added successfully!",
    data: users,
  });
});

// Route: /:id
// Method: PUT
// Description: Update a user by their ID
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  const userIndex = users.findIndex((each) => each.id == id);

  if (userIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "User doesn't exist!",
    });
  }

  // Update the user
  users[userIndex] = { ...users[userIndex], ...updatedData };

  return res.status(200).json({
    success: true,
    message: "User updated successfully!",
    data: users[userIndex],
  });
});

// Route: /users/:id
// Method: DELETE
// Description: Delete a user by their ID
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  const userIndex = users.findIndex((each) => each.id == id);

  if (userIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "User doesn't exist!",
    });
  }

  // Remove the user from the array
  const deletedUser = users.splice(userIndex, 1);

  return res.status(200).json({
    success: true,
    message: "User deleted successfully!",
    data: deletedUser,
  });
});

module.exports = router;
