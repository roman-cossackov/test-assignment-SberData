import { Button, Card, Col, Container, Row } from 'react-bootstrap';

import { formData, userData } from '../types/interfaces';

interface ProfileProps {
  profileData: userData;
  handleEdit: () => void;
}

const Profile = ({ profileData, handleEdit }: ProfileProps) => {
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
              <Button variant="primary" onClick={handleEdit}>
                Edit Profile
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
