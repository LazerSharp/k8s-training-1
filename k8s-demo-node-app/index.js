const express = require('express')
const os = require('os');
const app = express();
const port = 8080;


const hostname = os.hostname();

app.get('/', (req, res) => {
  res.send('Hello World! from - ' + hostname)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});