import React from 'react'
import PropTypes from 'prop-types'

function App(props) {
  return (
    <div>
      11111
      {props.test}
    </div>
  )
}

App.propTypes = {
  test: PropTypes.any,
}

export default App
