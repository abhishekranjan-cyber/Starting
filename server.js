const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("PORT", 3000);
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/apply-loan", (req, res) => {
  res.render("applyloan", {
    msg: "Apply for Loan",
    name: "EasyCred Loan Application"
  });
});

app.post("/post/form", (req, res) => {
  res.render("result", { user: req.body });
});

app.listen(app.get("PORT"), () => {
  console.log("Server running at http://localhost:3000");
});