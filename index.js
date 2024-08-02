const express = require('express');

const app = express();   // instance of express
app.use(express.json())

// define a route
// app.get('/',(req, res) => {
//     res.send("Hello world")
// })

let todo = [];   //memory storage todo

//create a new todo item
app.post('/todo', (req, res) => {
    const {title, description} = req.body;
    const newTodo = {
        id: todo.length + 1,
        title,
        description
    };
    todo.push(newTodo);
    console.log(todo);
    res.status(201).json(newTodo);
})

//get all items
app.get('/todo', (req, res) => {
    res.json(todo);
})

//start server
const port = 3000;
app.listen(port, () => {
    console.log("Server is listening to port "+port);
})