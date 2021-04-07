import { useEffect } from 'react';
import {NotificationContainer} from 'react-notifications';
import { SlideBar } from '../components/SlideBar';

import 'react-notifications/lib/notifications.css';

const AppLayout = props => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
		});
	}, []);

	return (
		<>
		<NotificationContainer />
		<main>{props.children}</main>
		</>
	);
};

export default AppLayout;
