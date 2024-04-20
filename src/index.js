const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
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
  console.log(`Example app listening on port ${port}`)
})
