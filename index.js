const express = require('express')
const app = express()
const port = process.env.PORT

app.get("/",(req,res) => {
  res.send("Ola mundo")
})

app.listen(port)