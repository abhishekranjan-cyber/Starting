const mongoose = require("mongoose");

const loanSchema = new mongoose.Schema({
    userName: String,
    userMothername: String,
    userEmail: String,
    userAdhardetails: String,
    userMobilenumber: String,
    userPandetails: String
});

module.exports = mongoose.model("Loan", loanSchema);