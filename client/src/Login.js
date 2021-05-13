import { Fragment, useState } from 'react'

function Login(props) {
  const { username, setUsername, password, setPassword } = props
  return(
    <form>
      <label>
        Username:
        <input type='text' value={username} onChange={(event) => setUsername(event.target.value)} />
      </label>
      <br/>
      <label>
        Password:
        <input type='text' value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <br/>
      <button><a href='/all' >Submit</a></button>
    </form>
  )
}

export default Login