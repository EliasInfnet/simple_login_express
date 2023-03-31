import express from 'express'
import { users } from './data/users.js'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send({ message: 'teste' })
})

app.post('/login', (req, res) => {
  const { email, password } = req.body
  const user = users.find(u => u.email === email && u.password === password)
  if (user) {
    res.send(user)
  } else {
    res.send({
      error: 'User not found'
    })
  }
})

app.listen(5000)