import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';

function ButtonsExample() {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    gender: '',
    experiense: '',
    tel: '',
    status: '',
    vacaincy: '',
  });

  const changeHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (event) => {
    console.log(1111    );
    event.preventDefault();
    try {
      const response = await axios.post('/api/addCandidate', inputs);
      console.log(response.data);
      setInputs('');
    } catch (error) {
      console.error(error);
    }
  };
  console.log(inputs);
  return (
    <form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <Form.Control
          onChange={changeHandler}
          placeholder="name"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          name="name"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          onChange={changeHandler}
          placeholder="email"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          name="email"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          onChange={changeHandler}
          placeholder="age"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          name="age"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          onChange={changeHandler}
          placeholder="gander"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          name="gender"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          onChange={changeHandler}
          placeholder="tel"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          name="tel"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          onChange={changeHandler}
          placeholder="status"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          name="statusId"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          onChange={changeHandler}
          placeholder="vacaincy"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          name="vacaincyId"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          onChange={changeHandler}
          placeholder="experience"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          name="experience"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          onChange={changeHandler}
          placeholder="salary"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          name="salary"
        />
      </InputGroup>
      <Button type="submit" variant="outline-secondary" id="button-addon2">
        Button
      </Button>
    </form>
  );
}

export default ButtonsExample;
