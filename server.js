const express = require('express');
const mongoose = require('mongoose');
// import express from 'express'; //es6



// CRUD - Create, Read, Update, Delete


const app = express();


//model
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
});
const User = mongoose.model('testUser', userSchema);

const dns = require("node:dns/promises");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

mongoose.connect('mongodb+srv://abhisheks:ijgha3sbMNK0Hfsu@cluster0.ul6vz.mongodb.net/matriomony?retryWrites=true&w=majority&appName=Cluster0',)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));


app.get('/', (req, res) => {
    res.send('Hello World!');
    console.log('Get request received');
}
);




app.post('/post', async (req, res) => {
    // res.send('Hello World!');
    // console.log('Post request received');
    let user = await User.create({
        name: 'testUSer1',
        age: 121,
        email: 'test@exvzfmail.com'
    });
    res.send(user);
    console.log('Post request received', user);
}
);



app.get('/get-all-users', async (req, res) => {
    const allUser = await User.find();
    console.log('l');
})



app.get('/gjf', (req, res) => {
    res.send('Hello World!');
}
);
// app.get('/api/data',middleware, (req, res) => 

// 500 404 401 403 400
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});



