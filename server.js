const express = require('express')
const sequelize = require('./connection/db')

const app = express()
const port = 5000

const productRoute = require('./routes/productRoute')

app.use(express.json())
// app.use(express.static("public"))

sequelize.sync().then(() => {
    console.log('Database synced');
  }).catch((error) => {
    console.error('Error syncing database:', error);
  });

app.use('/api', productRoute)

app.get('/', (req, res) => {
    res.json('Welcome to mysql API')
})

app.listen(port, () => {
    console.log(`Listening server on port => http://localhost:${port}`)
})
