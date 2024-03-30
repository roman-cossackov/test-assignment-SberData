import { SyntheticEvent, useState } from 'react';
import { Button, Container } from 'react-bootstrap';

import { formData, userData } from '../types/interfaces';
import CustomForm from './CustomForm';
import CustomModal from './CustomModal';
import Profile from './Profile';

interface MainProps {
  curUser: userData;
}

const Main = ({ curUser }: MainProps) => {
  const initialFormDataState = {
    name: '',
    surname: '',
    email: '',
    phoneNumber: '',
  };
  const [formData, setFormData] = useState<formData>(initialFormDataState);
  const [showModal, setShowModal] = useState(false);

  return (
    <Container style={{ height: '600px', marginTop: '100px' }}>
      <h1>Main Component</h1>
      <Profile
        profileData={curUser}
        handleEdit={() => {
          setShowModal(true);
        }}
      />
      <CustomModal
        title={'Edit user'}
        showModal={showModal}
        handleClose={() => {
          setShowModal(false);
        }}
      >
        <CustomForm
          handleSubmit={(newData: formData) => {
            setFormData(newData);
            setShowModal(false);
          }}
        />
      </CustomModal>
    </Container>
  );
};

export default Main;
