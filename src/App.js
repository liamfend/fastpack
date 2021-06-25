import React from 'react'
import PropTypes from 'prop-types'

function App(props) {
  React.useEffect(() => {
    // console.log(window.process.env)
  }, [])
  return (
    <div>
      3332222 222<h1> dssdafdsafafsa dsafdsaf fdsafdsaf sdfadsafsa </h1>safds adaf afdas test
      sdafdsa aaaa dsaffdsaf sdafdafdafsdsaf dsa dsafdasf dsaffa dasfdsa
      {props.test}{' '}
      <div>
        3332222 222<h1> dssdafdsafafsa dsafdsaf fdsafdsaf sdfadsafsa </h1>safds adaf afdas test
        sdafdsa aaaa dsaffdsaf sdafdafdafsdsaf dsa dsafdasf dsaffa dasfdsa
        {props.test}
      </div>
      <div>
        3332222 222<h1> dssdafdsafafsa dsafdsaf fdsafdsaf sdfadsafsa </h1>safds adaf afdas test
        sdafdsa aaaa dsaffdsaf sdafdafdafsdsaf dsa dsafdasf dsaffa dasfdsa
        {props.test}
      </div>
      <div>
        3332222 222<h1> dssdafdsafafsa dsafdsaf fdsafdsaf sdfadsafsa </h1>safds adaf afdas test
        sdafdsa aaaa dsaffdsaf sdafdafdafsdsaf dsa dsafdasf dsaffa dasfdsa
        {props.test}
      </div>
      <div>
        3332222 222<h1> dssdafdsafafsa dsafdsaf fdsafdsaf sdfadsafsa </h1>safds adaf afdas test
        sdafdsa aaaa dsaffdsaf sdafdafdafsdsaf dsa dsafdasf dsaffa dasfdsa
        {props.test}
      </div>
      <div>
        3332222 222<h1> dssdafdsafafsa dsafdsaf fdsafdsaf sdfadsafsa </h1>safds adaf afdas test
        sdafdsa aaaa dsaffdsaf sdafdafdafsdsaf dsa dsafdasf dsaffa dasfdsa
        {props.test}
      </div>
      <div>
        3332222 222<h1> dssdafdsafafsa dsafdsaf fdsafdsaf sdfadsafsa </h1>safds adaf afdas test
        sdafdsa aaaa dsaffdsaf sdafdafdafsdsaf dsa dsafdasf dsaffa dasfdsa
        {props.test}
      </div>
    </div>
  )
}

App.propTypes = {
  test: PropTypes.any,
}

export default App
