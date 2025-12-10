const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/products", (req, res) => {
  res.json([
    { id: 1, name: "Laptop Dell", price: 1200 },
    { id: 2, name: "HP Pavilion", price: 900 }
  ]);
});

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.listen(3001, () => console.log("Server running on port 3001"));
 