const express = require('express');
const mongoose = require('mongoose');
// import express from 'express'; //es6

const userRoute = require('./route/userRoute'); //importing user route

// CRUD - Create, Read, Update, Delete


const app = express();

app.use(express.json()); //middleware to parse JSON request body
app.use(express.urlencoded({ extended: true })); //middleware to parse URL-encoded request body

//model

const dns = require("node:dns/promises");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

mongoose.connect('mongodb+srv://abhisheks:ijgha3sbMNK0Hfsu@cluster0.ul6vz.mongodb.net/matriomony?retryWrites=true&w=majority&appName=Cluster0',)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));





app.use('/api/user', userRoute); //user route use










// 500 404 401 403 400
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});





