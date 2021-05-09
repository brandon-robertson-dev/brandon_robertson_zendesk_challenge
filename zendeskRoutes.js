const express = require('express')
const router = express.Router()

const {
  getAllTicketsZendesk,
  getSingleTicketZendesk
} = require('./zendeskController')

router.get('/all', getAllTicketsZendesk)

router.get('/:id', getSingleTicketZendesk)

module.exports = router