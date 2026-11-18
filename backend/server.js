

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "BlogSpace Backend is running!" });
});

app.get("/api/posts", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Learn React",
      category: "Programming",
    },
    {
      id: 2,
      title: "Explore Artificial Intelligence",
      category: "Technology",
    },
  ]);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

