import { useState } from 'react';
import { Container, Navbar } from 'react-bootstrap';

import { useUsersContext } from '../hooks/useUsersContext';
import { formData } from '../types/interfaces';
import CustomForm from './CustomForm';
import CustomModal from './CustomModal';
import Search from './Search';

const CustomNavbar = () => {
  const { addNewUserToLocalStorage } = useUsersContext();
  const [showModal, setShowModal] = useState(false);

  const handleFormsubmit = (newData: formData) => {
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
        <CustomForm handleSubmit={handleFormsubmit} />
      </CustomModal>
    </Navbar>
  );
};

export default CustomNavbar;
