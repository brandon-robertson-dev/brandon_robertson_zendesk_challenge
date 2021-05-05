const express = require('express')
const router = express.Router()

const {
  getAllTickets,
  getSingleTicket
} = require('./controller')

router.get('/all', getAllTickets)

router.get('/:id', getSingleTicket)

module.exports = router