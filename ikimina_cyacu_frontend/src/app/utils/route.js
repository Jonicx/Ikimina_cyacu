import React from 'react'
import PropTypes from 'prop-types'

import {
  Route,
  Redirect
} from 'react-router-dom'
import Auth from '../config/auth'
import RoutesName from '../routes'

const CustomRoute = ({ component: Component, ...rest }) => (
    <Route
    { ...rest }
      render={ props =>
        Auth.isUserAuthenticated() === true ?(
          <Component { ...props } />
        ) : (
          <Redirect
            to={ {
              pathname: RoutesName.auth.login,
              state: { from: props.children }
            } }
          />
        ) 
      }
    />
  );

CustomRoute.propTypes = {
  component: PropTypes.any,
  location: PropTypes.object
}

export default CustomRoute;