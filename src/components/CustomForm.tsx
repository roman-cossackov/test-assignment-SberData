import { useState } from 'react';
import { SyntheticEvent } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { formData } from '../types/interfaces';

interface CustomFromProps {
  handleSubmit: (newData: formData) => void;
}

function CustomForm({ handleSubmit }: CustomFromProps) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formSurname">
        <Form.Label>Surname</Form.Label>
        <Form.Control
          type="text"
          placeholder="Surname"
          value={surname}
          onChange={(event) => {
            setSurname(event.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <Form.Text className="text-muted">
          We&apos;ll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPhoneNumber">
        <Form.Label>Phone number</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Phone number"
          value={phoneNumber}
          onChange={(event) => {
            setPhoneNumber(event.target.value);
          }}
        />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          handleSubmit({ name, surname, email, phoneNumber });
        }}
      >
        Submit
      </Button>
    </Form>
  );
}

export default CustomForm;
