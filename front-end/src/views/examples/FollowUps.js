import React from "react";
import axios from "axios";

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,
  FormGroup,
  Form,
  Input,
  CardBody,Col,Button
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import FormDialog from "components/Modals/FollowupModal";
import UserDialog from "components/Modals/UserModal";
import MailIcon from '@material-ui/icons/Mail';
import { IconButton } from "@material-ui/core";

import { useEffect, useState } from "react";

const Followup = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(0);
  const [openUserModal, setOpenUserModal] = useState(0);
  const [state, setState] = React.useState(0);
  const getData = async () => {
    await axios
      .get(
        "https://raw.githubusercontent.com/gakshita/Mock-API/main/FollowupData"
      )
      .then(res => {
        setData(res.data.data);
        console.log(res);
      });
  };
  const onConfirm = () => {
    const updatedData = data.filter(dataVar => dataVar.id !== open);
    setData(updatedData);
  };

  const onDelete = id => {
    const updatedData = data.filter(dataVar => dataVar.id !== id);
    setData(updatedData);
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    console.log(open)
    },[open])
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                    <div className="col">
                    <h3 className="mb-0">Followup Table</h3>
                    </div>
                    {state === 1 && <div className="col text-right">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={e => setState(state === 1 ? 0 : 1)}
                        size="sm"
                      >
                        {state === 1 ? "Back" : "Add New"}
                      </Button>
                    </div>}
                  </Row>
              </CardHeader>
              {state === 1 ? 
           <Col className="mb-5 mb-xl-0" xl="12">
              <Card className=" shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                  <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    Personal information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Candidate Name
                          </label>
                          <Input
                            className="form-control-alternative"
                            // value={name}
                            id="input-username"
                            placeholder="Name"
                            // onChange={e => setName(e.target.value)}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            type="text"

                          >
                            Qualification
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            placeholder="Btech"
                            // value={email}
                            // onChange={e => setEmail(e.target.value)}
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Contact No
                          </label>
                          <Input
                            className="form-control-alternative"
                            // value={name}
                            id="input-username"
                            placeholder="+91-6350585006"
                            // onChange={e => setName(e.target.value)}
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            type="text"

                          >
                            Email
                          </label>
                          <Input
                            className="form-control-alternative"
                            placeholder="abc@gmail.co"
                            id="input-email"
                            // value={email}
                            // onChange={e => setEmail(e.target.value)}
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            City
                          </label>
                          <Input
                            className="form-control-alternative"
                            // value={name}
                            id="input-username"
                            placeholder="City"
                            // onChange={e => setName(e.target.value)}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                     </Row>
                  </div>
                  <h6 className="heading-small text-muted mb-4">
                  Experience Information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Job Profile
                          </label>
                          <Input
                            className="form-control-alternative"
                            // value={name}
                            id="input-username"
                            placeholder="Job Profile"
                            // onChange={e => setName(e.target.value)}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            type="text"

                          >
                            Experince
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            placeholder="eg: 1 year"
                            // value={email}
                            // onChange={e => setEmail(e.target.value)}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                          Salary
                          </label>
                          <Input
                            className="form-control-alternative"
                            // value={name}
                            id="input-username"
                            placeholder="eg: 1000000"
                            // onChange={e => setName(e.target.value)}
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            type="text"

                          >
                            Company Name
                          </label>
                          <Input
                            className="form-control-alternative"
                            placeholder="eg: Abc"
                            id="input-email"
                            // value={email}
                            // onChange={e => setEmail(e.target.value)}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                   </div>
                   <div className="pagination justify-content-end mb-0"> <Button
                        color="primary"
                        href="#pablo"
                        onClick={e => setState(state === 1 ? 0 : 1)}
                        size="l"
                    

                      >
                        Add
                      </Button>
              </div>
               </Form>
              </CardBody>
                  </Row>
                </CardHeader>
                
              </Card>
            </Col>
          : <>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Contact</th>
                    {/* <th scope="col">Email</th> */}
                    {/* <th scope="col">Score</th> */}
                    <th scope="col">Assigned To</th>

                    <th scope="col">Status</th>
                    <th scope="col">Date</th>

                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {data.map(row => {
                    return (
                      <tr>
                        <th scope="row">
                          <Media className="align-items-center">
                            <a
                              className="avatar rounded-circle mr-3"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={
                                  require("assets/img/theme/team-1-800x800.jpg")
                                    .default
                                }
                              />
                            </a>
                            <Media>
                              <span className="mb-0 text-sm">{row.name}</span>
                            </Media>
                          </Media>
                        </th>
                        <td>{row.contact}</td>
                   
                        <td>
                          <Badge color="" className="badge-dot mr-4">
                            {row.assigned_to}
                          </Badge>
                        </td>
                        <td>{row.status}</td>
                        <td>2nd Feb</td>
                        <td className="text-right">
                        <IconButton href={`mailto:${row.email}`}><MailIcon></MailIcon></IconButton>

                          <UncontrolledDropdown>
                            <DropdownToggle
                              className="btn-icon-only text-light"
                              href="#pablo"
                              role="button"
                              size="sm"
                              color=""
                              onClick={e => e.preventDefault()}
                            >
                              <i className="fas fa-ellipsis-v" />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                                href="#pablo"
                                onClick={e => setOpen(row.id)}
                              >
                                Followup
                              </DropdownItem> 
                              <DropdownItem
                                href="#pablo"
                                onClick={e => setState(1)}
                              >
                                Edit
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={() => onDelete(row.id)}
                              >
                                Delete
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </>}
            </Card>
          </div>
        </Row>
      </Container>
      <FormDialog open={open} setOpen={setOpen} func={onConfirm}></FormDialog>
      <UserDialog open={openUserModal} setOpen={setOpenUserModal} func={onConfirm}></UserDialog>

    </>
  );
};

export default Followup;
