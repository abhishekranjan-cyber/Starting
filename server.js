var express = require('express'); 
var app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(function(req,resp,next){

    console.log('Logging');
    next();

});

app.set("PORT", 3000); 
app.set('view engine', 'ejs');
app.use("/",express.static("public"));


app.get("/home", function(req, res) {
    const userName = "EASYCRED"
    const message = "Welcome to EasyCred, where loans are made easy";
   
    res.render('home', { name: userName, msg: message});
});

app.get("/api/user", function(req, res){
    res.json({ name: "EasyCred", message: "Welcome to EasyCred from Client Side!"});
});

app.post("/post/form",function(req,res){
    console.log("Form data:", req.body);
    res.render('result', { user: req.body });
});

app.listen(app.get("PORT"),function(){
    console.log('Server Running on Port ' + app.get("PORT"));
});






