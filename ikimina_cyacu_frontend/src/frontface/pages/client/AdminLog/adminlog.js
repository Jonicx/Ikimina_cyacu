import { Container, Row, Col, Table } from 'react-bootstrap';
import './index.css';
import AppLayout from '../../../layouts/AppLayout';
import { SlideBar } from '../../../components/SlideBar';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

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
							<div>
								<BootstrapTable
									pagination>
									<TableHeaderColumn dataField='CustomId' isKey>#</TableHeaderColumn>
									<TableHeaderColumn dataField='Username'>Username</TableHeaderColumn>
									<TableHeaderColumn dataField='action'>Action</TableHeaderColumn>
									<TableHeaderColumn dataField='Description'>Description</TableHeaderColumn>
									<TableHeaderColumn dataField='Time_stamp'>Time_stamp</TableHeaderColumn>
								</BootstrapTable>
							</div>
                  </Col>
					</Row>
				</Container>
			</section>
		</AppLayout>
	);
};