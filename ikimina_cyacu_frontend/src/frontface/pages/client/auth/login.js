import {
	Container,
	Form,
	Row,
	Col,
	Button
} from 'react-bootstrap';
import './index.css';
import AppLayout from '../../../layouts/AppLayout';
import { Link } from 'react-router-dom';
import { reverse } from 'named-urls';
import RoutesName from '../../../../app/config/routes';

export const LoginView = () => {
	return (
		<AppLayout>
			<section className='Login-slide' >
				<Container>
					<Row>
						<Col lg={3} md={12} sm={12} xs={12} className="Form_Side mt-4">
							<p className='Sub_Title_Head text-capitalize text-center'>
								<span className=" title">IKIMINA</span>
								<br/>
								CYACU
							</p>
						</Col>

						<Col lg={3}></Col>

						<Col lg={6} md={12} sm={12} xs={12} className="Form_Side">
							<Form
								className='mt-0'
							>
								<p className='Sub_Title text-capitalize  text-center'>
									LOGIN
								</p>
								<Form.Group>
									<Form.Control
										type='text'
										name='username'
										placeholder='Username'
									/>
								</Form.Group>
								<Form.Group>
									<Form.Control
										type='password'
										name='password'
										placeholder='Password'
									/>
								</Form.Group>
								<Link to={reverse(RoutesName.home)}>
								<Button
									variant='primary'
									className='btn-block mt-4 py-2 px-4 text-bold'
									style={{ fontSize: '14px' }}
								>
									<>
									 Login
									</>
								</Button>
								</Link>
							</Form>
						</Col>
					</Row>
				</Container>
			</section>
		</AppLayout>
	);
};
