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
      setPageData(_.chunk(response.data, 25))
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getTickets()
  }, [data.length])

  return (
    <Fragment>
      <h2>Tickets :</h2>
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
          <p> x </p>
          :
          <p onClick={() => setPage(page - 1)} > {'<'} </p>
        }
        <p> {page + 1} / {pageData.length} </p>
        {
          page + 1 === pageData.length ? 
          <p> x </p>
          :
          <p onClick={() => setPage(page + 1)} > {'>'} </p>
        }
      </div>
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