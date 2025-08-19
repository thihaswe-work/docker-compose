const express = require("express");
const router = express.Router();

// Example route: /api/greet
router.get("/greet", (req, res) => {
  console.log("Greet endpoint accessed");
  res.json({ message: "Hello from Express backend!" });
});

module.exports = router;
