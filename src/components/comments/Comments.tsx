import { Col, Container, Row } from 'react-bootstrap';

import { useUsersContext } from '../../hooks/useUsersContext';
import Comment from './Comment';

const Comments = () => {
  const { curUser } = useUsersContext();

  if (!curUser) return <div>Comments not found</div>;

  return (
    <Container style={{ marginTop: '30px' }}>
      <Row>
        <Col>
          <h2 style={{ textAlign: 'center' }}>Comments</h2>
          {curUser.comments.map((comment, index) => (
            <Comment
              key={index}
              author={comment.author}
              text={comment.text}
              date={comment.date}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Comments;
