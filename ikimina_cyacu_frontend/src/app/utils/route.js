import React from 'react'
import PropTypes from 'prop-types'

import {
  Route,
  Redirect
} from 'react-router-dom'
import Auth from '../config/auth'
import RoutesName from '../routes'

const CustomRoute = ({ component: Component, authenticated, ...rest }) => (
    <Route
    { ...rest }
      render={ props =>
        Auth.isUserAuthenticated() === rest.auth && rest.access === true ?(
          <Component { ...props } />
        ) : Auth.isUserAuthenticated() === true && rest.access === false ? (
          <Redirect
            to={ {
              pathname: RoutesName.home,
              state: { from: props.children }
            } }
          />
        )  : Auth.isUserAuthenticated() === false && rest.access === true ?(
          <Redirect
            to={ {
              pathname: RoutesName.auth.login,
              state: { from: props.children }
            } }
          />
        ) : (
          <Component { ...props } />
        )
      }
    />
  );

CustomRoute.propTypes = {
  component: PropTypes.any,
  location: PropTypes.object
}

export default CustomRoute;