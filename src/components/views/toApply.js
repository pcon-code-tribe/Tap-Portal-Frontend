import React from "react";

// react-bootstrap components
import {
  Card,
  Table,
  Container,
  Button
} from "react-bootstrap";

function TableList() {
  return (
    <>
      <Container fluid>
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">LIST OF ALL THE JOBS TO APPLY</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Company</th>
                      <th className="border-0">Salary</th>
                      <th className="border-0">Status</th>
                      <th className="border-0">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Microsoft</td>
                      <td>Rs. 360,738</td>
                      <td>Already Applied!</td>
                      <td>
                      <Button className="btn-sm btn-success">
                      Apply
                      </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Goldman Sachs</td>
                      <td>Rs. 230,789</td>
                      <td>Not applied!</td>
                      <td>
                      <Button className="btn-sm btn-success">
                      Apply
                      </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Intuit Inc.</td>
                      <td>Rs. 560,142</td>
                      <td>Already Applied!</td>
                      <td>
                      <Button className="btn-sm btn-success">
                      Apply
                      </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Philips</td>
                      <td>Rs. 380,735</td>
                      <td>Already Applied!</td>
                      <td>
                      <Button className="btn-sm btn-success">
                      Apply
                      </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>D.E. Shaw</td>
                      <td>Rs. 630,542</td>
                      <td>Not Applied!</td>
                      <td>
                      <Button className="btn-sm btn-success">
                      Apply
                      </Button>
                      </td>
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
