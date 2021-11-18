const exp = require('constants');
const express = require('express');
const path = require('path');
const app = express()
const port = 3000


// app.use(express.static('website'));
app.use(express.static('phaser3-tutorial-src'))

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'phaser3-tutorial-src/part9.html'))
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})