const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const path = require('path')

app.use(express.static(path.join(__dirname, 'client/build')))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
