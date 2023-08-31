import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';

function ButtonsExample() {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
    experience: '',
    tel: '',
    statusId: 'All',
    vacaincyId: '',
    salary: '',
  });

  const [invalidInputs, setInvalidInputs] = useState([]);

  const changeHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Проверяем, есть ли незаполненные поля
    const invalidFields = Object.keys(inputs).filter((key) => !inputs[key]);
    setInvalidInputs(invalidFields);

    if (invalidFields.length > 0) {
      return;
    }

    try {
      const response = await axios.post('/api/addCandidate', inputs);
      console.log(response.data);
      setInputs('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <Form.Control
          onChange={changeHandler}
          placeholder="Name"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          name="name"
          className={invalidInputs.includes('name') ? 'is-invalid' : ''}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          onChange={changeHandler}
          placeholder="Email"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          name="email"
          className={invalidInputs.includes('email') ? 'is-invalid' : ''}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          onChange={changeHandler}
          placeholder="Age"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          name="age"
          className={invalidInputs.includes('age') ? 'is-invalid' : ''}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          onChange={changeHandler}
          placeholder="Gander"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          name="gender"
          className={invalidInputs.includes('gender') ? 'is-invalid' : ''}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          onChange={changeHandler}
          placeholder="Phone"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          name="tel"
          className={invalidInputs.includes('tel') ? 'is-invalid' : ''}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          onChange={changeHandler}
          placeholder="Status"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          name="statusId"
          className={invalidInputs.includes('statusId') ? 'is-invalid' : ''}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          onChange={changeHandler}
          placeholder="Vacaincy"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          name="vacaincyId"
          className={invalidInputs.includes('vacaincyId') ? 'is-invalid' : ''}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          onChange={changeHandler}
          placeholder="Experience"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          name="experience"
          className={invalidInputs.includes('experience') ? 'is-invalid' : ''}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          onChange={changeHandler}
          placeholder="Salary"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          name="salary"
          className={invalidInputs.includes('salary') ? 'is-invalid' : ''}
        />
      </InputGroup>
      <div className="d-grid gap-2">
        <Button type="submit" variant="primary" size="lg">
          Добавить
        </Button>
      </div>
    </form>
  );
}

export default ButtonsExample;
