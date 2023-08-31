import React, { useState } from 'react'
import VacancyCard from './VacancyCard';

export default function Vacancy({ allVacancy, setAllVacancy}) {
  const deleteHandler = async (id) => {
    await fetch(`/api/vacancy/deleteVacancy/${id}`);
    setAllVacancy((prev) => prev.filter((el) => el.id !== id));
  };
  return (
    <div className="row">
    {allVacancy.map((vacancy) => (
      <div key={vacancy.id} className="col-4 mb-3 mt-3">
        <VacancyCard key={allVacancy.id} oneRaccoon={vacancy} deleteHandler={deleteHandler} />
      </div>
    ))}
  </div>
);
}
