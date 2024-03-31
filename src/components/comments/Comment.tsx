import { Card } from 'react-bootstrap';

interface CommentProps {
  author: string;
  text: string;
  date: Date;
}

const Comment = ({ author, text, date }: CommentProps) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{author}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Card.Footer className="text-muted">
          {date.toLocaleDateString('ru', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default Comment;
