import React from "react";

// react-bootstrap components
import {
  Card,
  Table,
  Container
} from "react-bootstrap";

function TableList() {
  return (
    <>
      <Container fluid>
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">LIST OF ALL THE JOBS APPLIED</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Company</th>
                      <th className="border-0">Salary</th>
                      <th className="border-0">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Microsoft</td>
                      <td>Rs. 360,738</td>
                      <td>Job Confirmed!!</td>
                     
                    </tr>
                  
                    <tr>
                      <td>2</td>
                      <td>Intuit Inc.</td>
                      <td>Rs. 560,142</td>
                      <td>Job Confirmed!!</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Philips</td>
                      <td>Rs. 380,735</td>
                      <td>Job Confirmed!!</td>
                    </tr>
                   
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
      </Container>
    </>
  );
}

export default TableList;
