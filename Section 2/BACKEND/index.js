//import express
const express = require('express');

//initialize express app
const app = express();
const port = 5000;

const cors = require('cors');

//import routers
const UserRouter = require('./routers/userRouter');
const productRouter = require('./routers/productRouter');
const UtilRouter = require('./routers/util');

// middleware to convert json data to javascript object
app.use(cors({
    origin : ['http://localhost:3000'
]
}));
app.use(express.json());

//middlewares
app.use('/user', UserRouter);
app.use('/product', productRouter);
app.use('/util', UtilRouter);

app.use(express.static('./uploads'));

//creating routes
app.get('/', (req, res) => {
    res.send('response from express server');
});

// /home
app.get('/home', (req, res) => {
    res.send('response from home');
});

// /add
app.get('/add', (req, res) => {
    res.send(' response from add');
});



//starting the server
app.listen(port, () =>{
    console.log('express server started successfully');
});