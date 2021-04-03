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
			<section className='auth-form py-5 mt-5'>
				<Container>
					<Row>
						<Col lg={5}>
							<Form
								className='p-5 mt-5 '
							>
								<Row>
									<Col lg={12} sm={6} xs={6} md={6}>
										<p className='Sub_Title text-capitalize text-bold text-center'>
											<span className="title">IKIMINA</span>
											CYACU
										</p>
									</Col>
								</Row>

								<Form.Group>
									<Form.Control
										type='text'
										name='username'
										placeholder='User Name'
										autoFocus={true}
									/>
								</Form.Group>

								<Form.Group>
									<Form.Control
										type='password'
										name='password'
										placeholder='Password'
									/>
								</Form.Group>

								<Button
									type='submit'
									variant='primary'
									className='btn-block mt-4 py-3'
									style={{ fontSize: '12px' }}
								>
									<>
									 Sign In
									</>
								</Button>
							</Form>
						</Col>
						<Col lg={7}>
							{<Image src={LoginImage} alt='Login' className='img-fluid' />}
						</Col>
					</Row>
				</Container>
			</section>
	);
};
