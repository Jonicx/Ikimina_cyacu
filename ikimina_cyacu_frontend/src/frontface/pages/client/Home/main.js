import { Container, Row, Col, Image } from 'react-bootstrap';
import WhyIkiminaCyacu from '../../../../assets/worker-with-doubts_1012-193.jpg';
import itandukaniro from '../../../../assets/different.jpg';
import JoinUs from '../../../../assets/360_F_260290857_5wUoTu0EpooLJMHmGtO3j2lgHxEPrA2n.jpg';
import './index.css';
import AppLayout from '../../../layouts/AppLayout';
import { SlideBar } from '../../../components/SlideBar';

export const HomeView = () => {
	return (
		<AppLayout>
			<section className='home-slide'>
				<Container>
					<Row>
                  <SlideBar></SlideBar>
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
                           <div className=' shadow'>
                           <Image
                              src={WhyIkiminaCyacu}
                              alt='Why ikimina cyacu'
                              className="Images"
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
                                 Twitwa "IKIMINA CYACU" turi ikimina kitagira imipaka, 
                                 gikorera mu Rwanda no hirya no hino ku isi, 
                                 kikaba cyiganjemo abanyarwanda (n'ishuti zabo), kuko ari bo bagishinze.
                                 <br/>
                                 <br/>
                           </p>
                           </div>
                        </Col>

                        <Col lg={4} md={4} sm={4} xs={12} className='mb-0'>
                           <div className=' shadow'>
                              <Image src={itandukaniro} alt='Itandukaniro ryacu'  className="Images"/>

                              <p
                                 className='text-uppercase text-center pl-2 pr-2 mb-4'
                                 style={{ fontSize: '14px' }}
                              >
                                 Itandukaniro ryacu nabandi mwumvise?
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
                           <div className=' shadow'>
                           <Image
                              src={JoinUs}
                              alt='Joining us'
                              className="Images"
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
                           na bo bakazinjira bujuje ibyo bintu bibiri,gutyo bitewe na buri wese
                           itariki yinjiriyeho, akabara iminsi 21, hashira
                           akazahabwa ibihumbi 4000$
                           <br/>
                           </p>
                           </div>
                        </Col>
                     </Row>
                  </Col>
					</Row>
				</Container>
			</section>
		</AppLayout>
	);
};