const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Secure credentials (keep only here!)
const USER = "Hwowdi1203";
const PASS = "Chic3nJockey28167";

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === USER && password === PASS) {
    res.json({ success: true, redirect: "win.html" });
  } else {
    res.json({ success: false, message: "Incorrect username or password" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
