import React from 'react'
import '../styles/NotFound.scss'

const NotFound = () => {
  return (
    <div className='container'>
      <div className="message-error">
        <h2>404</h2>
        <p>Not Found</p>
        <input type="button" value="Go Back" className="primary-button login-button" />
      </div>
    </div>
  )
}

export default NotFound