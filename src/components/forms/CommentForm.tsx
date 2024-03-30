import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { formData } from '../../types/interfaces';

interface CommentFormProps {
  handleSubmit: (newData: formData) => void;
}

function CommentForm({ handleSubmit }: CommentFormProps) {
  const [authorEmail, setAuthorEmail] = useState('');
  const [surname, setSurname] = useState('');

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label></Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your email"
          value={authorEmail}
          onChange={(event) => {
            setAuthorEmail(event.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formSurname">
        <Form.Label>Write comment</Form.Label>
        <Form.Control
          type="textarea"
          placeholder="Surname"
          value={surname}
          onChange={(event) => {
            setSurname(event.target.value);
          }}
        />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        onClick={(event) => {
          event.preventDefault();
        //   handleSubmit();
        }}
      >
        Submit
      </Button>
    </Form>
  );
}

export default CommentForm;
