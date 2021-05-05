const express = require('express')
const router = express.Router()

const {
  getAllTickets
} = require('./controller')

router.get('/', getAllTickets)

module.exports = router