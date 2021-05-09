const express = require('express')
const routes = require('./routes')
const zendeskRoutes = require('./zendeskRoutes')
const exphbs  = require('express-handlebars')

const app = express()

app.use('/api', routes)

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use('/zendesk', zendeskRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log('Zendesk API Challenge running on ' + PORT))