import React, {useEffect, useState} from 'react';
import Header from "../../components/Headers/Header";
import {
    Card,
    CardHeader,
    Container,
    Row,Button,
    Table,Col,
    FormGroup,
    Form,
    Input,
    CardBody,
} from "reactstrap";
import {getAll} from "../../network/ApiAxios";
import EditIcon from '@material-ui/icons/Edit';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
const UsersTable = () => {

    const [users, setUsers] = useState([]);
    const [state, setState] = React.useState(0);

    useEffect(() => {
        const runAsync = async () => {
            const response = await getAll();
            const {data} = response;
            console.log(data.users);
            if (data.success) {
                setUsers(data.users);
            }
        }
        runAsync();
    }, []);

    return (
        <>
            <Header/>
            <Container>
                <Row>
                    <div className="col">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <Row className="align-items-center">
                                    <div className="col">
                                    <h3 className="mb-0">Users</h3>


                                    </div>
                                    <div className="col text-right">
                                    <Button
                                        color="primary"
                                        href="#pablo"
                                        onClick={e => setState(state === 1 ? 0 : 1)}
                                        size="sm"
                                    >
                                        {state === 1 ? "Back" : "Add New"}
                                    </Button>
                                    </div>
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
                            Candidate 
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
                            Status
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            placeholder="Active"
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
                            Role
                          </label>
                          <Input
                            className="form-control-alternative"
                            // value={name}
                            id="input-username"
                            placeholder="eg: Telecaller"
                            // onChange={e => setName(e.target.value)}
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
                            : 
                                <Table className="align-items-center table-flush" responsive>
                                    <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Role</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Contact</th>
                                        <th scope="col">Status</th>
                                        <th scope="col"></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {users.map(user => (
                                        <tr key={user.email}>
                                            <th scope="row">
                                                {user.name}
                                            </th>
                                            <td>Telecaller</td>
                                            <td>{user.email}</td>
                                            <td>123456789</td>
                                            <td>Active</td>
                                            <td>
                                                <IconButton onClick={e => setState(state === 1 ? 0 : 1)}><EditIcon></EditIcon></IconButton>
                                                <IconButton><DeleteIcon></DeleteIcon></IconButton>
                                            </td>

                                            
                                        </tr>
                                    ))}
                                    </tbody>
                                </Table>
}
                        </Card>
                    </div>
                </Row>
            </Container>
        </>
    );
}

export default UsersTable;
