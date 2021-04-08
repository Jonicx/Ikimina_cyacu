import { Container, Row, Col, Table } from 'react-bootstrap';
import './index.css';
import AppLayout from '../../../layouts/AppLayout';
import { SlideBar } from '../../../components/SlideBar';

export const AdminLogView = () => {
	return (
		<AppLayout>
			<section className='admin-slide'>
				<Container>
					<Row>
                  <SlideBar></SlideBar>
                  <Col lg={9} className='WhitePanel_Admin table mb-0
						'>
                     <br />
                     <p className=' mt-0 mb-0 title text-capitalize text-bold'>
                        | Admin Logs
                     </p>
                     <p className='border-bottom mt-2'></p>

							<Col>
							<div >
							<Table striped hover >
								<thead>
									<tr>
										<th id="Column_Number" name="Column_Number">#</th>
										<th id="Username" name="Username">Username</th>
										<th id="action" name="action">Action</th>
										<th id="Description" name="Description">Description</th>
										<th id="Time_stamp" name="Time_stamp">Timestamp</th>
									</tr>
								</thead>
								<tbody >		
									<tr>
										<td>1</td>
										<td>Jonathan</td>
										<td colSpan="2">Update</td>
										<td>18:09 2/5/2021</td>
									</tr>
									<tr>
										<td>2</td>
										<td>Jonathan</td>
										<td colSpan="2">Added</td>
										<td>18:09 2/5/2021</td>
									</tr>
									
									<tr>
										<td>3</td>
										<td>Jonathan</td>
										<td colSpan="2">Update</td>
										<td>18:09 2/5/2021</td>
									</tr>
									<tr>
										<td>4</td>
										<td>Jonathan</td>
										<td colSpan="2">Added</td>
										<td>18:09 2/5/2021</td>
									</tr>
									
									<tr>
										<td>5</td>
										<td>Jonathan</td>
										<td colSpan="2">Update</td>
										<td>18:09 2/5/2021</td>
									</tr>
									<tr>
										<td>6</td>
										<td>Jonathan</td>
										<td colSpan="2">Added</td>
										<td>18:09 2/5/2021</td>
									</tr>
									<tr>
										<td>7</td>
										<td>Jonathan</td>
										<td colSpan="2">Update</td>
										<td>18:09 2/5/2021</td>
									</tr>
									<tr>
										<td>8</td>
										<td>Jonathan</td>
										<td colSpan="2">Added</td>
										<td>18:09 2/5/2021</td>
									</tr>
									<tr>
										<td>9</td>
										<td>Jonathan</td>
										<td colSpan="2">Update</td>
										<td>18:09 2/5/2021</td>
									</tr>
								</tbody>
							</Table>

							</div>
							</Col>
                  </Col>
					</Row>
				</Container>
			</section>
		</AppLayout>
	);
};