const axios = require('axios')

async function axiosGet(url, user = null, pass = null, id = null) {
  try {
    let username
    let password
    if (!user && !pass) {
      username = process.env.EMAIL
      password = process.env.PASSWORD
    } else if (user && pass) {
      username = user
      password = pass
    }
    const response = await axios.get(url, { auth: {
      username: username,
      password: password
    }})
    return response.data
  } catch (err) {
    let error
    switch(err.response.status) {
      case 400:
        error = { error: 'Bad Request' }
        break
      case 401:
        error = { error: 'Unauthorized, check Username & Password' }
        break
      case 404:
        error = { error: `Ticket ${id} not found, check ticket id and try again later` }
        break
      default:
        error = { error: 'Unknown Error' }
        break
    }
    return error
  }
}

module.exports = { axiosGet }