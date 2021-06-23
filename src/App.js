import React from 'react'
import PropTypes from 'prop-types'

function App(props) {
  return (
    <div>
      d <h1> dafdasdsaf test dsafdsa</h1>safds adaf afdas test sdafdsa aaaa dsaffdsaf{props.test}
    </div>
  )
}

App.propTypes = {
  test: PropTypes.any,
}

export default App
