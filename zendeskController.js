const axios = require('axios')

async function getAllTicketsZendesk(req, res) {
  try {
    console.log(req.query)
    let url
    if (req.query.next || req.query.prev) {
      url = 'https://nobrandonsclub.zendesk.com/api/v2/tickets.json' + (req.query.next || req.query.prev) + '&page[size]=25'
    } else {
      url = 'https://nobrandonsclub.zendesk.com/api/v2/tickets.json?page[size]=25'
    }
    const response = await axios.get(url, { auth: {
                        username: 'brandonrobertson23@gmail.com',
                        password: '1234Bang'
                      }})
                      .catch(err => {
                        res.render('all', { error: 'Zendesk API unavailable' })
                      })
    console.log(response.data)
    response.data.links.prev = response.data.links.prev.split('json')[1]
    response.data.links.next = response.data.links.next.split('json')[1]
    res.render('all', response.data)
  } catch(err) {
    console.log(err)
  }
}

async function getSingleTicketZendesk(req, res) {
  try {
    const url = `https://nobrandonsclub.zendesk.com/api/v2/tickets/${req.params.id}.json`
    const response = await axios.get(url, { auth: {
                        username: 'brandonrobertson23@gmail.com',
                        password: '1234Bang'
                      }})
                      .catch(err => {
                        console.log(err)
                        res.render('single', { error: 'Ticket not available' })
                      })
    res.render('single', response.data)
  } catch(err) {
    console.log(err.message)
  }
}

module.exports = {
  getAllTicketsZendesk,
  getSingleTicketZendesk
}