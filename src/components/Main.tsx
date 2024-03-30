import { Container } from 'react-bootstrap';

import { useUsersContext } from '../hooks/UseUsersContext';
import Profile from './Profile';

const Main = () => {
  const { curUser } = useUsersContext();
  console.log(curUser);

  const profileContent = curUser ? (
    <Profile profileData={curUser} />
  ) : (
    'user not selected'
  );

  return (
    <Container style={{ height: '600px', marginTop: '100px' }}>
      <h1>User Profile</h1>
      {profileContent}
    </Container>
  );
};

export default Main;
