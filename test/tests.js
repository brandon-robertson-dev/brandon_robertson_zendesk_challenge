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

describe('Zendesk API Challenge - Non-Working Routes - Single', () => {
  it('should not return any ticket', async () => {
    const response = await axios.get('http://localhost:5000/api/404')
    expect(response.data.error).to.equal('Ticket 404 not available')
  })
  it('should not return any ticket', async () => {
    const response = await axios.get('http://localhost:5000/api/1000')
    expect(response.data.error).to.equal('Ticket 1000 not available')
  })
})