const axios = require('axios')

function getAllTickets(req, res) {
  try {
    const url = 'https://nobrandonsclub.zendesk.com/api/v2/tickets.json'
    axios.get(url, { 
        auth: {
          username: 'brandonrobertson23@gmail.com',
          password: '1234Bang'
        }
      })
      .then(response => res.send(response.data))
  } catch(err) {
    console.log(err)
  }
}

module.exports = {
  getAllTickets
}