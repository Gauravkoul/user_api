const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const user_route = require("./routes/user.route");
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,Authorization')
  if (req.method == 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET')
    return res.status(200).json({})
  }
  next()
})
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/user", user_route);

module.exports = app;
