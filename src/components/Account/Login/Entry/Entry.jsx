import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

const Entry = (props) => {
  const userEmail = React.createRef();
  const userPassword = React.createRef();

  const onChange = () => {
    let email = userEmail.current.value;
    let password = userPassword.current.value;
    props.updateNewTextEntr(email, password);
  };

  return (
    <>
      <Modal show={props.showL} onHide={props.showLogin}>
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
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
            <Form.Group>
              <Button onClick={ () => props.addUser()}>
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Entry;
