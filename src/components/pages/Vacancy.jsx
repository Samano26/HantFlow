import React, { useState } from 'react'
import VacancyCard from './VacancyCard';

export default function Vacancy({ allVacancy, setAllRaccoons}) {
  const deleteHandler = async (id) => {
    await fetch(`/api/raccoons/deleteRaccoon/${id}`);
    setAllRaccoons((prev) => prev.filter((el) => el.id !== id));
  };
  return (
    <div className="row">
    {raccoons.map((raccoon) => (
      <div key={raccoon.id} className="col-4 mb-3 mt-3">
        <VacancyCard key={raccoon.id} oneRaccoon={raccoon} deleteHandler={deleteHandler} />
      </div>
    ))}
  </div>
);
}
