import { Redirect, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import RoutesName from '../config/routes';

export const CustomRouter = ({
	component: Component,
	authenticated,
	...rest
}) => {
	return (
		<Route
			{...rest}
			render={props =>
				authenticated === rest.auth && rest.access === true ? (
					<Component {...props} />
				) : authenticated === true && rest.access === false ? (
					<Redirect
						// to={{
						// 	pathname: RoutesName.auth.order,
						// 	state: { from: props.children },
						// }}
					/>
				) /* : authenticated === false && rest.access === true ? (
					<Redirect
						// to={{
						// 	pathname: RoutesName.auth.login,
						// 	state: { from: props.children },
						// }}
					/>
				) */ : (
					<Component {...props} />
				)
			}
		/>
	);
};

CustomRouter.prototypes = {
	authenticated: PropTypes.bool.isRequiredl,
};

const mapStateToProps = state => ({
	authenticated: state.AuthReducer.authenticated,
});

export default connect(mapStateToProps)(CustomRouter);
