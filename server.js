const express = require('express');
const mongoose = require('mongoose');
const Loan = require("./models/Loan");

const app = express();


mongoose.connect("mongodb://127.0.0.1:27017/easycred")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("DB Error:", err));



app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("PORT", 3000);



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


app.post("/post/form", async (req, res) => {
  try {
    const data = new Loan(req.body);
    await data.save();
    console.log("Saved:", data);

    res.render("result", { user: req.body });

  } catch (error) {
    console.log(error);
    res.send("Error saving form data.");
  }
});


app.listen(app.get("PORT"), () => {
  console.log("Server running at http://localhost:" + app.get("PORT"));
});