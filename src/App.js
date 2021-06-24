import React from 'react'
import PropTypes from 'prop-types'

function App(props) {
  return (
    <div>
      <h1>adsfdf dsafsd ffsa</h1>
      {props.test}
    </div>
  )
}

App.propTypes = {
  test: PropTypes.any,
}

export default App
