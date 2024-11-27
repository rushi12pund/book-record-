const express = require("express");
const { users } = require("./data/users.json"); // Importing users
const app = express();
const PORT = 8081;

app.use(express.json());

// Route: Root
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is up and running! 🚀",
  });
});

// Route: /users
// Method: GET
// Description: Get all users
app.get("/users", (req, res) => {
  res.status(200).json({
    success: true,
    data: users,
  });
});

// Route: /users/:id
// Method: GET
// Description: Get user by ID
app.get("/users/:id", (req, res) => {
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

// Route: /users
// Method: POST
// Description: Create a new user
app.post("/users", (req, res) => {
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

// Fallback Route
app.get("*", (req, res) => {
  res.status(404).json({
    message: "This route does not exist! ❌",
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
