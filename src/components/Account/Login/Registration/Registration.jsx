import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

const Registration = (props) => {
  const userName = React.createRef();
  const userEmail = React.createRef();
  const userPassword = React.createRef();

  const onChange = () => {
    let name = userName.current.value;
    let email = userEmail.current.value;
    let password = userPassword.current.value;
    props.updateNewTextReg(name, email, password);
  };

  return (
    <>
      <Modal show={props.showR} onHide={props.showRegistration}>
        <Modal.Header closeButton>
          <Modal.Title>Sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group controlId="Name">
              <Form.Label>Email Adress</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={props.newNameText}
                onChange={onChange}
                ref={userName}
              />
              <Form.Text className="text-muted">
                We`ll never share your email
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="Email">
              <Form.Label>Email Adress</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={props.newEmailText}
                onChange={onChange}
                ref={userEmail}
              />
              <Form.Text className="text-muted">
                We`ll never share your email
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="Password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={props.newPasswordText}
                onChange={onChange}
                ref={userPassword}
              />
            </Form.Group>
            <Form.Group controlId="Send">
              <Button onClick={() => props.addUser()}>
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Registration;
