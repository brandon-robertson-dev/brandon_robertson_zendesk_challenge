const { axiosGet } = require('./utilities')
const chunk = require('lodash.chunk')

const apiError = { error: 'Zendesk API unavailable' }

async function getAllTickets(req, res) {
  try {
    const username = req.query.username
    const password = req.query.password
    let url = 'https://nobrandonsclub.zendesk.com/api/v2/tickets.json'
    let data = {
      tickets: [],
      count: 0
    }
    while (url !== null) {
      const response = await axiosGet(url, username, password)
      if (response.error) {
        res.send(response)
        break
      }
      data.tickets = [...data.tickets, ...response.tickets]
      data.count = response.count
      url = response.next_page
    }
    if (url === null) {
      data.tickets = chunk(data.tickets, 25)
      res.send(data)
    }
  } catch(err) {
    res.send(apiError)
  }
}

async function getSingleTicket(req, res) {
  try {
    const username = req.query.username
    const password = req.query.password
    const url = `https://nobrandonsclub.zendesk.com/api/v2/tickets/${req.params.id}.json`
    const response = await axiosGet(url, username, password, req.params.id)
    res.send(response)
  } catch(err) {
    res.send(apiError)
  }
}

module.exports = {
  getAllTickets,
  getSingleTicket
}