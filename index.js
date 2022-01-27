const express = require('express')
const app = express()
const port = 3000
var cors = require('cors');

app.use(cors({
  origin: '*',
  allowedHeaders: '*',

}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
