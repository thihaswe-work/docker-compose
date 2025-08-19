const express = require("express");
const cors = require("cors"); // <- import cors
const app = express();
const apiRoutes = require("./routes/api");

const PORT = process.env.PORT || 5000;
console.log("env", process.env.PORT);

// Enable CORS for all routes
app.use(cors());

app.use(express.json());
app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.send("Hello from Express backend!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
