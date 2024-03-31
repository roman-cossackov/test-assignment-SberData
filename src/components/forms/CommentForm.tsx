import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { formData, IComment } from '../../types/interfaces';

interface CommentFormProps {
  handleSubmit: (comment: IComment) => void;
}

function CommentForm({ handleSubmit }: CommentFormProps) {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formAuthor">
        <Form.Label>Author name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter author name"
          value={author}
          onChange={(event) => {
            setAuthor(event.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formSurname">
        <Form.Label>Write comment</Form.Label>
        <Form.Control
          type="textarea"
          placeholder="Your comment..."
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          handleSubmit({ author, text, date: new Date() });
        }}
      >
        Submit
      </Button>
    </Form>
  );
}

export default CommentForm;
