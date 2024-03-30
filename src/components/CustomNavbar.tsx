import { useState } from 'react';
import { Container, Navbar } from 'react-bootstrap';

import { formData } from '../types/interfaces';
import { addNewUserToLocalStorage } from '../utils/localStorage';
import CustomForm from './CustomForm';
import CustomModal from './CustomModal';
import Search from './Search';

interface CustomNavbar {
  setCurUser: React.Dispatch<React.SetStateAction<userData | undefined>>;
}

const CustomNavbar = ({ setCurUser }: CustomNavbar) => {
  //   const initialFormDataState = {
  //     name: '',
  //     surname: '',
  //     email: '',
  //     phoneNumber: '',
  //   };

  //   const [newUserData, setNewUserData] = useState<formData>(initialFormDataState);
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
            setCurUser={setCurUser}
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
