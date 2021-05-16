import axios from 'axios'
import { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Single(props) {
  const [ data, setData ] = useState({})
  const [ date, setDate ] = useState({})
  const { id } = props.match.params

  const getSingleTicket = async (ticketId) => {
    try {
      const response = await axios.get(`/api/${ticketId}`)
      setDate(new Date(response.data.ticket.created_at))
      setData(response.data)
    } catch(err) {
      setData({ error: 'Could not find ticket, try again later' })
    }
  }

  useEffect(() => {
    getSingleTicket(id)
  }, [id])
  

  return (
    <Fragment>
      <Link to='/'>Back to All</Link>
      {
        data.error && (
          <Fragment>
            <p>{data.error}</p>
          </Fragment>
        )
      }
      {
        data.ticket && (
          <Fragment>
            <p>Requester: {data.ticket.requester_id}</p>
            <p>Date Created: {date.toDateString()}</p>
            <h2>{data.ticket.subject}</h2>
            <p>{data.ticket.description}</p>
          </Fragment>
        )
      }
    </Fragment>
  )
}

export default Single
