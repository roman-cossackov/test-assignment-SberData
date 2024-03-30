import { useState } from 'react';
import { Container } from 'react-bootstrap';

import { useUsersContext } from '../hooks/useUsersContext';
import CustomModal from './CustomModal';
import CustomForm from './forms/UserForm';
import Profile from './Profile';

const Main = () => {
  const { curUser } = useUsersContext();

  const profileContent = curUser ? (
    <Profile profileData={curUser} />
  ) : (
    'user not selected'
  );

  return (
    <Container style={{ height: '600px', marginTop: '100px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>User Profile</h1>
      {profileContent}
    </Container>
  );
};

export default Main;
