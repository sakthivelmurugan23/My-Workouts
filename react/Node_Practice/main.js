import express from 'express'
import Route from './Route./Router.js'
const App = express()
const port = 4000
App.use(express.json())
  App.listen(port,()=>{
    console.log(`http://localhost${port}`)
  })
App.use('/',Route)
DataBase("mongodb://127.0.0.1:27017/Sakthidb")