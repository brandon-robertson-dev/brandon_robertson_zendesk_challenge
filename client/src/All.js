import axios from 'axios'
import { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function All() {
  const [ data, setData ] = useState({})
  const [ page, setPage ] = useState(0)

  const getTickets = async () => {
    try {
      const response = await axios.get('/api/all')
      setData(response.data)
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getTickets()
  }, [data.length])

  return (
    <Fragment>
      {
        data.error && (
          <Fragment>
            <p>{data.error}</p>
          </Fragment>
        )
      }
      {
        data.tickets && (
          <Fragment>
            <h2>Tickets :</h2>
            <p>Total Tickets: {data.count}</p>
            <ul>
            {
              data.tickets.length >= 1 && data.tickets[page].map((item, index) => {
                return(
                  <li key={index} >
                    <Link to={`/${item.id}`} >
                      {item.subject}
                    </Link>
                  </li>
                )
              })
            }
            </ul>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
              { 
                page + 1 === 1 ? 
                <button> x </button>
                :
                <button onClick={() => setPage(page - 1)}> {'<'} </button>
              }
              <p> {page + 1} / {data.tickets.length} </p>
              {
                page + 1 === data.tickets.length ? 
                <button> x </button>
                :
                <button onClick={() => setPage(page + 1)}> {'>'} </button>
              }
            </div>
          </Fragment>
        )
      }
    </Fragment>
  )
}

export default All