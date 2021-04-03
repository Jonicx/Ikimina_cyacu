import {
	Container,
	Form,
	Row,
	Col,
	Button,
	Image,
} from 'react-bootstrap';
import './index.css';
import LoginImage from '../../../../assets/login.png';

export const LoginView = () => {
	return (
			<section className='auth-form py-5'>
				<Container>
					<Row>
						<Col lg={5}>
							<Form
								className='p-5 shadow mt-5 border'
							>
								<Row>
									<Col lg={12}>
										<h4 className='text-bold' style={{ color: '#000' }}>
											Login
										</h4>

										<p className='text-capitalize text-bold'>
											Welcome Back Admin, Happy Registering
										</p>
									</Col>
								</Row>

								<Form.Group>
									<Form.Control
										type='text'
										name='username'
										placeholder='User Name'
										required={true}
										autoFocus={true}
										autoComplete={false}
									/>

									<Form.Control.Feedback type='invalid'>
										Email address is required
									</Form.Control.Feedback>
								</Form.Group>

								<Form.Group>
									<Form.Control
										type='password'
										name='password'
										placeholder='Password'
										required={true}
										autoComplete={false}
									/>

									<Form.Control.Feedback type='invalid'>
										Password is required
									</Form.Control.Feedback>

								</Form.Group>

								<Button
									type='submit'
									variant='primary'
									className='btn-block mt-4 py-3'
									style={{ fontSize: '12px' }}
								>
									<>
										<i className='fa fa-lock mr-1'></i> Sign In
									</>
								</Button>
							</Form>
						</Col>

						<Col lg={7}>
							<Image src={LoginImage} alt='Login' className='img-fluid' />
						</Col>
					</Row>
				</Container>
			</section>
	);
};
