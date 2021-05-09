import axios from 'axios'
import { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Single(props) {
  const [ data, setData ] = useState({})
  const { id } = props.match.params

  const getSingleTicket = async (ticketId) => {
    try {
      const response = await axios.get(`/api/${ticketId}`)
      setData(response.data)
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getSingleTicket(id)
  }, [])

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
            <h2>{data.ticket.subject}</h2>
            <p>{data.ticket.description}</p>
          </Fragment>
        )
      }
    </Fragment>
  )
}

export default Single
