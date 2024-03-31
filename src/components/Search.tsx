import React, { useState } from 'react';
import { Button, Col, Form, ListGroup, Row } from 'react-bootstrap';

import { useUsersContext } from '../hooks/useUsersContext';
import { userData } from '../types/interfaces';

interface SearchProps {
  onAddUser: () => void;
}

const Search = ({ onAddUser }: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [userVariants, setUserVariants] = useState<userData[]>([]);
  const [showVariants, setShowVariants] = useState(false);

  const { searchUsersInLocalStorage, handleUserSelect } = useUsersContext();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    const variants = value ? searchUsersInLocalStorage(value) : [];

    setUserVariants(variants);

    if (value.length) {
      setShowVariants(true);
    } else {
      setShowVariants(false);
    }
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
            onFocus={() => {
              if (searchTerm) {
                setShowVariants(true);
              }
            }}
          />
          {showVariants && (
            <ListGroup className="position-absolute w-30">
              {userVariants.map((variant, index) => (
                <ListGroup.Item
                  key={index}
                  onClick={() => {
                    handleUserSelect(variant);
                    setShowVariants(false);
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
