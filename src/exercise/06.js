// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const usernameRef = React.useRef(null)
  const [username, setUsername] = React.useState('')

  function handleChange(event) {
    const value = usernameRef.current.value
    setUsername(value.toLowerCase())
  }

  function handleSubmit(event) {
    event.preventDefault()

    const value = usernameRef.current.value
    onSubmitUsername(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          ref={usernameRef}
          onChange={handleChange}
          id="username"
          type="text"
          value={username}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
