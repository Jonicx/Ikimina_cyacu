import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './index.css';
import AppLayout from '../../../layouts/AppLayout';
import { SlideBar } from '../../../components/SlideBar';

export const RegistrationView = () => {
	return (
		<AppLayout>
			<section className='register-slide'>
				<Container>
					<Row>
					<SlideBar></SlideBar>
						<Col lg={9}>
							<Col className='WhitePanel_Registration '>
								<br />
								<p className=' mt-0 mb-0 title text-capitalize text-bold'>
									| Membership Registration Form
							</p>
								<p className='border-bottom mt-2'></p>
								<Col lg={12} className='FormPadding'>
									<Form
										className='mt-0'
									>
										<Col>
											<Col lg={12} xs={12} className='mt-4'>
												<Form.Control
													type='text'
													id='fname'
													name='firstname'
													placeholder='First Name'
													autoFocus={true}
												/>
											</Col>
											<Col lg={12} xs={12} className='mt-2'>
												<Form.Control
													type='text'
													id='sname'
													name='Surname'
													placeholder='Sur Name'
												/>
											</Col>
											<Col lg={12} xs={12} className='mt-2'>
												<Form.Control
													type='number'
													id='tel'
													name='tel'
													placeholder='Telephone'
												/>
											</Col>
											<Col lg={12} xs={12} className='mt-2'>
												<Form.Control
													type='text'
													id='orientation'
													name='orientation'
													placeholder='Orientation'
												/>
											</Col>
											<Form.Row>
												<Col lg={6} xs={6}>
													<Button
														type='submit'
														disabled
														className='btn-block py-2 mt-4'
														style={{ fontSize: '14px' }}
													>
														Update
												</Button>
												</Col>
												<Col lg={6} xs={6}>
													<Button
														type='submit'
														variant='primary'
														className='btn-block py-2 mt-4'
														style={{ fontSize: '14px' }}
													>
														<i className='fa fa-check-circle'></i> Save
												</Button>
												</Col>
											</Form.Row>
											<Row className="mt-3"></Row>
										</Col>
									</Form>
								</Col>
							</Col>


							<Col className='TransparentPanel_Explanation mt-2 '>
								<br />
								<p className=' mt-2 mb-0 title text-capitalize text-bold'>
									| Explanation for the above form
						</p>
								<p className='border-bottom mt-2'></p>
								<p className="Explanation mb-0">  If you are here then you're an admin if you aren't you are breaking the law and privacy policies for this software, So if you are an admin we will pass through the above form and see what was given to us by our developing team, as we dive in we will explian everything make sure you understand everything, You may ask yourself why we ask a few things from the members and the answer is so easy and simple this what is neede for us to track them on everything, and now let us start from the top we a have inputs and these inputs are all required inorder to save a person into this system, remember you saving someone doesn't mean you just save them anyhowly keep it in mind that any carelessness is seen in the admin log so work this up well and be caerful with this system a mia changing of anything can destroy a lot
								Firstname here stands for that first local language name, second name here goes with that second bibillical name, Telephone this stands for that phone number of that person or member to be,  'Orientation' This field is to be hundled with care, when we add a person to our sysem the system generates a code that is given to that member to keep safe, when they bring people that they wish put them under him/she they will bring that key that was given to him when he goes there so the thing is when they give you that key register those new people then on orientation put in the key for that person who has brought them.
								 <br /><br />
								</p>
								<Col lg={12} className='FormPadding'>
								</Col>
							</Col>
						</Col>
					</Row>
				</Container>
			</section>
		</AppLayout>
	);
};
