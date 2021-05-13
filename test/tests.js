const expect = require('chai').expect
const axios = require('axios')

describe('Zendesk API Challenge - Working Tests', () => {
  it('should return a single ticket', async () => {
    const response = await axios.get('http://localhost:5000/api/18')
    expect(response.data.ticket.id).to.equal(18)
  })
  it('should return more than one ticket', async () => {
    const response = await axios.get('http://localhost:5000/api/all')
    expect(response.data.tickets.length).to.be.gt(1)
  })
})

describe('Zendesk API Challenge - Non-Working Routes', () => {
  it('should not return any ticket - 400 Bad Request', async () => {
    const response = await axios.get('http://localhost:5000/api/gimmeaticket')
    expect(response.data.error).to.equal('Bad Request')
  })
  it('should not return any ticket - 401 Unauthorized', async () => {
    const response = await axios.get('http://localhost:5000/api/12', {
      params: {
        username: 'ionlywantticket2@notashiftyguy.com',
        password: 'pleasejustgimmetheticket'
      }
    })
    expect(response.data.error).to.equal('Unauthorized, check Username & Password')
  })
  it('should not return any tickets - 401 Unauthorized', async () => {
    const response = await axios.get('http://localhost:5000/api/all', {
      params: {
        username: 'gimmetickets@ticketguy.com',
        password: 'ilovetickets'
      }
    })
    expect(response.data.error).to.equal('Unauthorized, check Username & Password')
  })
  it('should not return any ticket - 404 Ticket not available', async () => {
    const response = await axios.get('http://localhost:5000/api/1000')
    expect(response.data.error).to.equal('Ticket 1000 not found, check ticket id and try again later')
  })
})