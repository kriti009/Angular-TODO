var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');
var Todo = require('./models/todo');

// Todo.create({name : "Apply for internship"},function(err){
//     console.log("created");
// });
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect("mongodb://localhost:27017/Todo",{ useNewUrlParser: true});
app.get('/', function(req , res){
    Todo.find({}, function(err, data){
        if(err){
            console.log(err);
        }else{
            res.status(200).json(data);
            console.log(data);
        }
    });
    // res.send("yo");
})
app.post('/add', function(req , res){
    var newTodo = req.body.name;
    Todo.create(newTodo, function(err, data){
        if(err){
            console.log(err);
        }else{
            res.status(201).json(data);
            console.log(data);
        }
    })
});
app.delete('/delete/:id', function(req , res){
    Todo.findByIdAndDelete({ _id : req.params.id}, function(err, data){
        if(err){
            console.log(err);
        }else{
            res.status(200).json(req.params.id);
        }
    });
})
app.listen(process.env.PORT || 8000,function(){
    console.log("Server Connected!!");
});