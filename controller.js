const { axiosGet } = require('./utilities')
const chunk = require('lodash.chunk')

async function getAllTickets(req, res) {
  try {
    let url = 'https://nobrandonsclub.zendesk.com/api/v2/tickets.json'
    let data = {
      tickets: [],
      count: 0
    }
    while (url !== null) {
      const response = await axiosGet(url)
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
    res.send({ error: 'Zendesk API unavailable' })
  }
}

async function getSingleTicket(req, res) {
  try {
    const url = `https://nobrandonsclub.zendesk.com/api/v2/tickets/${req.params.id}.json`
    const response = await axiosGet(url, req.params.id)
    res.send(response)
  } catch(err) {
    res.send({ error: 'Zendesk API unavailable' })
  }
}

module.exports = {
  getAllTickets,
  getSingleTicket
}