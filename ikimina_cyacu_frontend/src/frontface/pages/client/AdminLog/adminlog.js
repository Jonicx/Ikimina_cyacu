import { useState, useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";
import "./index.css";
import AppLayout from "../../../layouts/AppLayout";
import { SlidebarPages } from "../../../components/SidebarPages";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

import LogService from "../../../../service/logs.service";
const moment = require("moment");

export const AdminLogView = () => {
  const [rawLogs, setRawLogs] = useState([]);

  useEffect(() => {
    loadLogs();
  }, []);

  const loadLogs = () => {
    LogService.getAllLogs().then((res) => {
      let rawData = res.data;
      const logs = rawData.map((l) => ({
        ...l,
        adminId: "Admin",
        timestamp: `${moment(l.timestamp).format("DD/MM/YYYY HH:mm A")}`,
      }));
      setRawLogs(logs);
    });
  };

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
                  <BootstrapTable pagination data={rawLogs} striped hover>
                    <TableHeaderColumn dataField="id" isKey>
                      #
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField="adminId">Username</TableHeaderColumn>
                    <TableHeaderColumn dataField="activity">Activity</TableHeaderColumn>
                    <TableHeaderColumn dataField="details">Description</TableHeaderColumn>
                    <TableHeaderColumn dataField="timestamp" dataSort={true}>
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
