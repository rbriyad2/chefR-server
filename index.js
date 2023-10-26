const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

const chefs = require('./data/chefinfo.json')
const blogs = require('./data/blogs.json')
app.use(cors())

app.get('/', (req, res) => {
  res.send(chefs)
})

app.get('/blogs', (req, res) => {
  res.send(blogs)
})

app.get('/chefs', (req, res) => {
  res.send(chefs)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
