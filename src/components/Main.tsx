import { SyntheticEvent, useState } from 'react';
import { Button, Container } from 'react-bootstrap';

import { formData } from '../types/interfaces';
import CustomForm from './CustomForm';
import CustomModal from './CustomModal';
import Profile from './Profile';

const Main = () => {
  const initialFormDataState = {
    name: '',
    surname: '',
    email: '',
    phoneNumber: '',
  };
  const [formData, setFormData] = useState<formData>(initialFormDataState);
  const [showModal, setShowModal] = useState(false);

  return (
    <Container style={{ height: '600px' }}>
      <h1>Main Component</h1>
      <Profile
        profileData={formData}
        handleEdit={() => {
          setShowModal(true);
        }}
      />
      <CustomModal
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
