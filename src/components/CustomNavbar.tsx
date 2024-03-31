import { useState } from 'react';
import { Container, Navbar } from 'react-bootstrap';

import { useUsersContext } from '../hooks/useUsersContext';
import { formData } from '../types/interfaces';
import { validateEmail } from '../utils/validateEmail';
import { validatePhoneNumber } from '../utils/validatePhoneNumber';
import CustomModal from './CustomModal';
import CustomForm from './forms/UserForm';
import Search from './Search';

const CustomNavbar = () => {
  const { addNewUserToLocalStorage } = useUsersContext();
  const [showModal, setShowModal] = useState(false);

  const handleFormSubmit = (newData: formData) => {
    if (!validateEmail(newData.email)) {
      alert('User with this email already existst or email is not valid');
      return;
    }

    if (!validatePhoneNumber(newData.phoneNumber)) {
      alert('Invalid phone number');
      return;
    }

    addNewUserToLocalStorage(newData);
    setShowModal(false);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Custom Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ marginLeft: '300px' }}>
          <Search
            onAddUser={() => {
              setShowModal(true);
            }}
          />
        </Navbar.Collapse>
      </Container>
      <CustomModal
        showModal={showModal}
        handleClose={() => {
          setShowModal(false);
        }}
        title={'Add New User'}
      >
        <CustomForm handleSubmit={handleFormSubmit} fillData={false} />
      </CustomModal>
    </Navbar>
  );
};

export default CustomNavbar;
