const mongoose = require("mongoose");

const LoanApplicationSchema = new mongoose.Schema({
    userName: String,
    userMothername: String,
    userEmail: String,
    userAdhardetails: String,
    userMobilenumber: String,
    userPandetails: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("LoanApplication", LoanApplicationSchema);