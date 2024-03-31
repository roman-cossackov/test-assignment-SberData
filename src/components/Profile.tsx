import { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

import { useUsersContext } from '../hooks/useUsersContext';
import { formData, IComment, userData } from '../types/interfaces';
import Comments from './comments/Comments';
import CustomModal from './CustomModal';
import CommentForm from './forms/CommentForm';
import RatingForm from './forms/RatingForm';
import UserForm from './forms/UserForm';

interface ProfileProps {
  profileData: userData;
}

const Profile = ({ profileData }: ProfileProps) => {
  const [showEdit, setShowEdit] = useState(false);
  const [showAddComment, setShowAddComment] = useState(false);
  const [showRate, setShowRate] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const { rateUser, editUserInLocalStorage, curUser, commentUser } = useUsersContext();

  const handleEditFormSubmit = (newData: formData) => {
    if (!curUser) return;
    const newUser = {
      ...curUser,
      name: newData.name,
      surname: newData.surname,
      email: newData.email,
      phoneNumber: newData.phoneNumber,
    };

    editUserInLocalStorage(curUser?.id, newUser);
    setShowEdit(false);
  };
  const handleRateFormSubmit = (rating: number) => {
    rateUser(rating);
    setShowRate(false);
  };
  const handleCommentFormSubmit = (comment: IComment) => {
    commentUser(comment);
    setShowAddComment(false);
  };

  if (!profileData) return <h1>data not found </h1>;

  return (
    <>
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
                  <strong>Rating:</strong>{' '}
                  {profileData.rating.reduce((ac, n) => ac + n, 0) /
                    profileData.rating.length || 'Пока нет оценок'}
                </Card.Text>
                <Card.Text>
                  <strong>Comments:</strong> {curUser?.comments.length}
                  <Button
                    onClick={() => {
                      setShowComments((prev) => !prev);
                    }}
                  >
                    Show Comments
                  </Button>
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => {
                    setShowEdit(true);
                  }}
                >
                  Edit Profile
                </Button>
                <Button
                  variant="primary"
                  onClick={() => {
                    setShowAddComment(true);
                  }}
                >
                  Add comment
                </Button>
                <Button
                  variant="primary"
                  onClick={() => {
                    setShowRate(true);
                  }}
                >
                  Rate user
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {showComments && <Comments />}
      <CustomModal
        showModal={showEdit}
        handleClose={() => {
          setShowEdit(false);
        }}
        title={'Edit User'}
      >
        <UserForm handleSubmit={handleEditFormSubmit} />
      </CustomModal>
      <CustomModal
        showModal={showAddComment}
        handleClose={() => {
          setShowAddComment(false);
        }}
        title={'Add comment'}
      >
        <CommentForm handleSubmit={handleCommentFormSubmit} />
      </CustomModal>
      <CustomModal
        showModal={showRate}
        handleClose={() => {
          setShowRate(false);
        }}
        title={'Rate user'}
      >
        <RatingForm handleSubmit={handleRateFormSubmit} />
      </CustomModal>
    </>
  );
};

export default Profile;
