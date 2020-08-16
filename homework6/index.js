const express = require('express')
const fs = require('fs') // file system
const rfs = require('rotating-file-stream') // version 2.x
const dotenv = require('dotenv')
dotenv.config()

const path = require('path')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()

app.use(bodyParser.json())

var accessLogStream = rfs.createStream('access.log', {
  interval: '1d', // rotate daily
  path: path.join(__dirname, 'log')
})

app.use(morgan('combined', { stream: accessLogStream }))

const categoryRouter = require('./routers/category')
app.use('/api/v1/category', categoryRouter);



const PORT = process.env.API_PORT;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`API running at ${PORT}`);
  }
})