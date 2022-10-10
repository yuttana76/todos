const express = require('express')
const todoRoute = require("./routes/todo");

const app = express()
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello BeDee')
})

app.use("/api/todo",todoRoute);


app.listen(3000, () => {
  console.log('Start server at port 3000.')
})