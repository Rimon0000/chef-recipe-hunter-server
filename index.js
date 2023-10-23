const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

const chef = require('./data/chef.json')
const menus = require('./data/menu.json')
const recipe = require('./data/popularRecipe.json')

app.use(cors())

//get chef
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

//get recipe
app.get('/recipes', (req, res) =>{
  res.send(recipe)
})

//get menus
app.get('/menus', (req, res) =>{
  res.send(menus)
})

app.get('/', (req, res) => {
  res.send('Hello World!');
})


app.listen(port, () => {
  console.log(`chef running on port ${port}`)
})