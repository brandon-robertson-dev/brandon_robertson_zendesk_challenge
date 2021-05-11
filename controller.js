const { axiosGet } = require('./utilities')

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
        url = null
      }
      data.tickets = [...data.tickets, ...response.tickets]
      data.count = response.count
      url = response.next_page
    }
    res.send(data)
  } catch(err) {
    console.log(err.message)
    res.send(err.message)
  }
}

async function getSingleTicket(req, res) {
  try {
    const url = `https://nobrandonsclub.zendesk.com/api/v2/tickets/${req.params.id}.json`
    const response = await axiosGet(url, req.params.id)
    res.send(response)
  } catch(err) {
    console.log(err.message)
    res.send(err.message)
  }
}

module.exports = {
  getAllTickets,
  getSingleTicket
}