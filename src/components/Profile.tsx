import { Button, Card, Col, Container, Row } from 'react-bootstrap';

import { useUserContext } from '../hooks/UseUsersContext';
import { formData, userData } from '../types/interfaces';
import CustomModal from './CustomModal';

interface ProfileProps {
  profileData: userData;
//   onEdit: () => void;
//   onComment: () => void;
//   onRate: () => void;
}

const Profile = ({ profileData, onEdit, onComment, onRate }: ProfileProps) => {
  if (!profileData) return <h1>data not found </h1>;

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Card>
            <Card.Header>Profile</Card.Header>
            <Card.Body>
              <Card.Text>
                <strong>Name:</strong> {profileData.name}
              </Card.Text>
              <Card.Text>
                <strong>Surname:</strong> {profileData.surname}
              </Card.Text>
              <Card.Text>
                <strong>Email:</strong> {profileData.email}
              </Card.Text>
              <Card.Text>
                <strong>Phone number:</strong> {profileData.phoneNumber}
              </Card.Text>
              <Card.Text>
                <strong>Rating:</strong> {}
              </Card.Text>
              <Card.Text>
                <strong>Comments:</strong> {}
              </Card.Text>
              <Button variant="primary">Edit Profile</Button>
              <Button variant="primary">Add comment</Button>
              <Button variant="primary">Rate user</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
