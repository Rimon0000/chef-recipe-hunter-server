const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

const chef = require('./data/chef.json')

app.use(cors())

app.get('/chef', (req, res) =>{
  res.send(chef)
})

//id base data
app.get('/chef/:id', (req, res) =>{
  const id = req.params.id 
  // console.log(id)
  const selectedChef = chef.find(c => c.id == id)
  res.send(selectedChef)
})

app.get('/', (req, res) => {
  res.send('Hello World!');
})


app.listen(port, () => {
  console.log(`chef running on port ${port}`)
})