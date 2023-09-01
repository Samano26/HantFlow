import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default function CandidateShotCard({ candidate, clickHandler }) {
  // const clickHandler = async (id) => {
  // const person = await axios.post(`/api/candidate/${id}`, id);
  // console.log(person.data);

  // }
  const clickHandler2 = async () => {
    clickHandler(candidate.id);
  };
  return (
    <div>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>{candidate.nameCandidats}</Card.Title>
          <Button variant="primary" className="float-right" onClick={clickHandler2}>
            Подробнее
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

// const names = [
//     'John Doe',
//     'Jane Smith',
//     'Alice Johnson',
//     'Bob Brown',
//     'Eva Williams',
//     'Michael Davis',
//     'Olivia Wilson',
//     'William Martin',
//     'Sophia Thompson',
//     'James Martinez',
//   ];
