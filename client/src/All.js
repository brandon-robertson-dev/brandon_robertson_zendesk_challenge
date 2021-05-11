import axios from 'axios'
import _ from 'lodash'
import { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function All() {
  const [ data, setData ] = useState({})
  const [ pageData, setPageData ] = useState([])
  const [ page, setPage ] = useState(0)

  const getTickets = async () => {
    try {
      const response = await axios.get('/api/all')
      setData(response.data)
      setPageData(_.chunk(response.data.tickets, 25))
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
            {
              pageData.length >= 1 && pageData[page].map((item, index) => {
                return(
                  <div key={index} >
                    <Link to={`/${item.id}`}>{item.subject}</Link>
                    <br/>
                  </div>
                )
              })
            }
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
              {
                page + 1 === 1 ? 
                <button> x </button>
                :
                <button onClick={() => setPage(page - 1)}> {'<'} </button>
              }
              <p> {page + 1} / {pageData.length} </p>
              {
                page + 1 === pageData.length ? 
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

// pageData[page].map((item, index) => {
//   console.log(item)
//   return(
//     <p key={index} >{item.subject}</p>
//   )
// })