import { ReactNode, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

interface CustomModalProps {
  showModal: boolean;
  children: ReactNode;
  handleClose: () => void;
  title: string;
}

const CustomModal = ({ children, showModal, handleClose, title }: CustomModalProps) => {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
