const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const config = require('./config/config')

const app = express()

app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

// Routes
require('./routes')(app)

sequelize.sync()
  .then(() => {
    app.listen(config.port)
    console.info(`Server start on port:${config.port}`)
  })
