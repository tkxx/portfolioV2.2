import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p className="copyright">
      &copy; Tabitha Sin | Made in{' '}
      <span role="img" aria-label="statue of liberty">
        🗽
      </span>{' '}
      with copious amounts of{' '}
      <span role="img" aria-label="dumplings">
        🥟
      </span>{' '}
      | Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a>
    </p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
