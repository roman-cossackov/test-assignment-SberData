import React, { useState } from 'react';
import { Button, Col, Form, ListGroup, Row } from 'react-bootstrap';

import { userData } from '../types/interfaces';
import { saearchUsersInLocalStorage } from '../utils/localStorage';

interface SearchProps {
  onSearch: (searchTerm: string) => void;
  onAddUser: () => void;
  setCurUser: React.Dispatch<React.SetStateAction<userData | undefined>>;
}

const Search = ({ onSearch, onAddUser, setCurUser }: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [userVariants, setUserVariants] = useState<userData[] | ''>();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    const variants = value ? saearchUsersInLocalStorage(value) : '';

    setUserVariants(variants);

    // onSearch(value);
  };

  return (
    <Form>
      <Row className="align-items-center">
        <Col xs="auto">
          <Form.Control
            type="text"
            placeholder="Enter user email..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {userVariants && (
            <ListGroup className="position-absolute w-30">
              {userVariants.map((variant, index) => (
                <ListGroup.Item
                  key={index}
                  onClick={() => {
                    setCurUser(variant);
                  }}
                >
                  {variant.email}
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col xs="auto">
          <Button variant="primary" onClick={onAddUser}>
            Add New User
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Search;
