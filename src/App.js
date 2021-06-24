import React from 'react'
import PropTypes from 'prop-types'

function App(props) {
  return (
    <div>
      afds2321 sadfa dsafdsa dsafs dsafs
      {props.test}
    </div>
  )
}

App.propTypes = {
  test: PropTypes.any,
}

export default App
