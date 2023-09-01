import React from 'react';
import Button from 'react-bootstrap/Button';

export default function CandidateCardEdit({ candidate }) {
  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">Вакансия: {candidate.vacaincyId}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Имя {candidate.nameCandidats}</h6>
        <p>Пол: {candidate.age}</p>
        <p>Телефон: {candidate.tel}</p>

        <p>Почта: <a href="/candidate/:id">{candidate.emailCandidate}</a>
        </p>
        <p>Опыт работы: {candidate.experience} г</p>
        <p>Этап собеседования: {candidate.statusId}</p>
        <div className="btn-group">
          <Button variant="primary">Edit</Button>
          <Button variant="danger">Delete</Button>
          <Button variant="secondary">Close</Button>
        </div>
      </div>
    </div>
  );
}
