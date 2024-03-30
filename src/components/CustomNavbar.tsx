import { useState } from 'react';
import { Container, Navbar } from 'react-bootstrap';

import { useUsersContext } from '../hooks/useUsersContext';
import { formData } from '../types/interfaces';
import CustomModal from './CustomModal';
import CustomForm from './forms/UserForm';
import Search from './Search';

const CustomNavbar = () => {
  const { addNewUserToLocalStorage } = useUsersContext();
  const [showModal, setShowModal] = useState(false);

  const handleFormSubmit = (newData: formData) => {
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
        <CustomForm handleSubmit={handleFormSubmit} />
      </CustomModal>
    </Navbar>
  );
};

export default CustomNavbar;
