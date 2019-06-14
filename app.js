var express = require('express'); 
var app = express(); 
var bodyParser = require('body-parser'); 

app.use(bodyParser.urlencoded({extended: true})); 
app.set("view engine", "ejs"); 

var list = ["wake up", "water plants", "eat breakfast"]; 

app.get("/", function(req,res) { 
    res.render('home'); 
}); 
// on form submission see this page 
app.post("/additem", function(req, res) { 
    var newItem = req.body.newItem; 
    list.push(newItem); 
    res.redirect("/todo"); 
}); 

app.get('/todo', function(req,res) { 
    
    res.render('todo', {list: list}); 
});
app.listen(3000, function() { 
    console.log('Server up on 3000'); 
})