const axios = require('axios')

async function axiosGet(url, id = null) {
  try {
    const response = await axios.get(url, { auth: {
      username: 'brandonrobertson23@gmail.com',
      password: '1234Bang'
    }})
    return response.data
  } catch (err) {
    const error = id ? { error: `Ticket ${id} not available` } : { error: 'Zendesk API unavailable' }
    return error
  }
}

module.exports = { axiosGet }