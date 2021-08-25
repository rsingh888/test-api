const express = require('express')
const fetch = require('node-fetch');
const app = express()

var port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Healthy')
})

app.get('/subjects', (req, res) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(json => res.json(json));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})