import React from 'react'
import PropTypes from 'prop-types'

function App(props) {
  return (
    <div>
      ddddbbbb mmm kk mm dsafds asdf dfsafdsaf dsafdsa dsafds
      {props.test}
    </div>
  )
}

App.propTypes = {
  test: PropTypes.any,
}

export default App
