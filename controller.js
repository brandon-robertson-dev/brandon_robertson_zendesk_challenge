const axios = require('axios')

async function getAllTickets(req, res) {
  try {
    let url = 'https://nobrandonsclub.zendesk.com/api/v2/tickets.json'
    let data = []
    while (url !== null) {
      const response = await axios.get(url, { auth: {
                          username: 'brandonrobertson23@gmail.com',
                          password: '1234Bang'
                        }})
                        .catch(err => {
                          console.log(err)
                          res.send({ error: 'Zendesk API unavailable' })
                        })
      data = [...data, ...response.data.tickets]
      url = response.data.next_page
    }
    res.send(data)
  } catch(err) {
    console.log(err)
  }
}

function getSingleTicket(req, res) {
  try {
    const url = `https://nobrandonsclub.zendesk.com/api/v2/tickets/${req.params.id}.json`
    axios.get(url, { auth: {
                      username: 'brandonrobertson23@gmail.com',
                      password: '1234Bang'
                    }})
                    .then(response => res.send(response.data))
                    .catch(err => {
                      console.log(err)
                      res.send({ error: 'Ticket not available' })
                    })
  } catch(err) {
    console.log(err.message)
  }
}

module.exports = {
  getAllTickets,
  getSingleTicket
}