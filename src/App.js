import React from 'react'
import PropTypes from 'prop-types'

function App(props) {
  return (
    <div>
      111<h1>dssdafdsafafsa dsafdsaf fdsafdsaf sdfadsafsa </h1>safds adaf afdas test sdafdsa aaaa
      dsaffdsaf
      {props.test}
    </div>
  )
}

App.propTypes = {
  test: PropTypes.any,
}

export default App
