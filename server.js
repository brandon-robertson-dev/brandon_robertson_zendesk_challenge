const express = require('express')
const routes = require('./routes')

const app = express()

app.use('/api', routes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log('Zendesk API Challenge running on ' + PORT))