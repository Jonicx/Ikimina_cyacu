import { Container, Row, Col, Image } from 'react-bootstrap';
import Adminicon from '../../../../../src/assets/icons8_school_director_48.png';
import HomeIcon from '../../../../../src/assets/home_16pxn.png';
import PaperIcon from '../../../../../src/assets/paperWhite.png';
import GridIcon from '../../../../../src/assets/grid_16px.png';
import LogOutIcon from '../../../../../src/assets/logout_rounded_left_16px.png';
import WhyIkiminaCyacu from '../../../../assets/worker-with-doubts_1012-193.jpg';
import itandukaniro from '../../../../assets/different.jpg';
import JoinUs from '../../../../assets/360_F_260290857_5wUoTu0EpooLJMHmGtO3j2lgHxEPrA2n.jpg';
import './index.css';

export const Home = () => {
	return (
		<>
			<section className='home-slide'>
				<Container>
					<Row>
						<Col lg={3} className='Home_View'>
							<p className=' mt-3 mb-0 title text-capitalize text-bold text-center'>
								| IKIMINA CYACU |
						</p>
							<p className='border-bottom mt-2'></p>

							<p className=' mt-0 Admin_Name text-capitalize text-center'>
								<img src={Adminicon} alt="icon" className="mb-0 " /> <br />
							Admin
						</p>
							<p className='border-bottom mt-2 mb-1'></p>

							<Col lg={12} md={12} sm={12} xs={12}>
								<p className='text-left text-bold text-center'>
									<a href className='btn btn-outline-default text-center text-bold  py-0 mt-3'
									>
										<img src={HomeIcon} alt="icon" className="mb-2 mt-2 " />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}{" "}
									Home
								</a>
								</p>

								<p className='text-left text-bold text-center'>
									<a href className='btn btn-outline-default text-center text-bold  py-0 mt-3'
									>
										<img src={PaperIcon} alt="icon" className="mb-2 mt-2" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
									Form
								</a>
								</p>
								<p className='text-left text-bold text-center'>
									<a href className='btn btn-outline-default text-center text-bold  py-0 mt-3'
									>
										<img src={GridIcon} alt="icon" className="mb-2 mt-2 " />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
									Tree
								</a>
								</p>

								<br /><br /><br /><br /><br /><br /><br />

								<p className='text-left text-bold text-center'>
									<a href className='btn btn-outline-default text-center text-bold py-0 mt-3'
									>
										<img src={LogOutIcon} alt="icon" className="mb-2 mt-2 " />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
									Logout
								</a>
								</p>
							</Col>
						</Col>

                  <Col lg={9} className='WhitePanel_Home '>
                     <br />
                     <p className=' mt-0 mb-0 title text-capitalize text-bold'>
                        | Home
                     </p>
                     <p className='border-bottom mt-2'></p>

                     <Row>
                        <Col lg={12} className='mb-3'>
                        </Col>

                        <Col lg={4} md={4} sm={4} xs={12} className='mb-0'>
                           <div className='Image shadow'>
                           <Image
                              src={WhyIkiminaCyacu}
                              alt='Why ikimina cyacu'
                           />

                           <p
                                 className='text-uppercase text-center pl-2 pr-2 mb-4'
                                 style={{ fontSize: '14px'}}
                              >
                              Turi bande?
                              <br/>
                              Twaje dute?
                           </p>
                           <p
                                 className='text-capitalize text-justify pl-4 pr-3 pb-5'
                                 style={{ fontSize: '12px' }}
                              >
                                 Twitwa "IKIMINA CYACU" twe turi ikimina kitagira imipaka, 
                                 gikorera mu Rwanda no hirya no hino ku isi, 
                                 kikaba cyiganjemo abanyarwanda (n'ishuti zabo), kuko ari bo bagishinze.
                                 <br/>
                                 <br/>
                           </p>
                           </div>
                        </Col>

                        <Col lg={4} md={4} sm={4} xs={12} className='mb-0'>
                           <div className='Image shadow'>
                              <Image src={itandukaniro} alt='Itandukaniro ryacu' />

                              <p
                                 className='text-uppercase text-center pl-2 pr-2 mb-4'
                                 style={{ fontSize: '14px' }}
                              >
                                 Itandukaniro ryacu nabandi mwumvishe?
                              </p>

                              <p
                                 className='text-capitalize text-justify pl-3 pr-3 pb-4'
                                 style={{ fontSize: '12px' }}
                              >
                                 -Dukorera mu mucyo usesuye (Honesty)
                                 <br/>
                                 -Kugira abantu babahuzabikorwa (Coordinators) 
                                 <br/>
                                 -Twubatse ikintu cy'uburyo bw'ikoranabuhanga  (Software) 
                                 <br/>
                                 -Dukoresha Uburyo bwanditse bugaragaza amavu n'amavuko
                                 <br/>
                                 -Dufatanya mu kumenyekanisha no gusobanurira abantu bashya imikorere y'Ikimina cyacu (Teamwork)
                              </p>
                           </div>
                        </Col>

                        <Col lg={4} md={4} sm={4} xs={12} className='mb-0'>
                           <div className='Image shadow'>
                           <Image
                              src={JoinUs}
                              alt='Joining us'
                           />

                           <p
                              className='text-uppercase text-center pl-2 pr-2 mb-4'
                              style={{ fontSize: '14px' }}
                           >
                              Bisaba iki kwifatanya natwe?
                           </p>

                           <p
                              className='text-capitalize text-justify pl-3 pr-3 pb-5'
                              style={{ fontSize: '12px' }}
                           >
                           Gutanga amadolari 500$ no kuzana abantu babiri
                           na bo bakazinjra bujuje ibyo bintu bibiri,gutyo bitewe na buri wese
                           itariki yinjiriyeho, akabara iminsi 21, hashira
                           akazahabwa ibihumbi 4000$
                           {/*  gutyo ...Buri muntu wese winjiye, nyuma 
                           y'icyumweru kimwe (iminsi 7) abantu be babiri 
                           na bo barinjira (bakaza na bafite 500$ n'abantu 
                           babiri gutyo gutyo, hanyuma  */}
                           <br/>
                           </p>
                           </div>
                        </Col>
                     </Row>
                  </Col>
					</Row>
				</Container>
			</section>
		</>
	);
};