import { Container, Row, Col, Image } from 'react-bootstrap';
import './index.css';

export const HomeView = () => {

	return (
		<>
		<section className='home-slide'>
				<Container>
					<Row className='justify-content-center'>
						<Col lg={12}>
							<p className='Sub_Title text-uppercase text-left mb-0'>
								<span className='title'>IKIMINA</span>
								Cyacu
							</p>
							<p className='Sub_Title text-uppercase text-left mb-0'>
								<span className='title'>IKIMINA</span>
								Cyacu
							</p>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	);
};
