const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();

// const config = require("./config/db.config");


const host = "127.0.0.1";
const port = 3000;



const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/users-list', (req, res) => {
  // Get complete list of users
  const usersList = [];

  // Send the usersList as a response to the client
  res.send(usersList);
});

app.get('/users-list/:id', (req, res) => {
  const id = req.params.id;
  // Get the user data from database
  const user = {
    id: 1,
    name: 'John Doe',
  };
  // Send the response to the client
  res.send({
    user: user,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
