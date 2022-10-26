const express = require('express')
const todoRoute = require("./routes/todo");

const app = express()
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Express Demo App</h1> <h4>Message: Success</h4> <p>Version 1.1</p>');
})

// app.use("/api/todo",todoRoute);


app.listen(3000, () => {
  console.log('Start server at port 3000.')
})