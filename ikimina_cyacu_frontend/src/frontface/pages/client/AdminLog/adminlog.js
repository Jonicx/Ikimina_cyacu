import { Container, Row, Col } from "react-bootstrap";
import "./index.css";
import AppLayout from "../../../layouts/AppLayout";
import { SlidebarPages } from '../../../components/SidebarPages';
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

export const AdminLogView = () => {

  return (
    <AppLayout>
      <section className="admin-slide">
        <Container>
          <Row>
            <SlidebarPages></SlidebarPages>
            <Col
              lg={10}
              className="WhitePanel_Admin table mb-0
						"
            >
              <br />
              <p className=" mt-0 mb-0 title text-capitalize text-bold">| Admin Logs</p>
              <p className="border-bottom mt-2"></p>

              <Col>
                <div>
                  <BootstrapTable pagination>
                    <TableHeaderColumn dataField="Column_Number" isKey>
                      #
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField="Username">Username</TableHeaderColumn>
                    <TableHeaderColumn dataField="Action">Action</TableHeaderColumn>
                    <TableHeaderColumn dataField="Description">
                      Description
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField="Time_stamp">
                      Timestamp
                    </TableHeaderColumn>
                  </BootstrapTable>
                </div>
              </Col>
            </Col>
          </Row>
        </Container>
      </section>
    </AppLayout>
  );
};
