const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log('Zendesk API Challenge running on ' + PORT))