import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { formData } from '../../types/interfaces';

interface RatingFormProps {
  handleSubmit: (newData: number) => void;
}

function RatingForm({ handleSubmit }: RatingFormProps) {
  const [rating, setRating] = useState('');

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label></Form.Label>
        <Form.Select
          aria-label="Default select example"
          value={rating}
          onChange={(event) => {
            setRating(event.target.value);
          }}
        >
          <option>Choose rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Select>
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          handleSubmit(+rating);
        }}
      >
        Submit
      </Button>
    </Form>
  );
}

export default RatingForm;
