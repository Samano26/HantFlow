import React, { useState } from 'react'
import VacancyCard from './VacancyCard';

export default function Vacancy({ allVacancy, setAllVacancy, submitHandler }) {
  const deleteHandler = async (id) => {
    await fetch(`/api/vacancy/deleteVacancy/${id}`);
    setAllVacancy((prev) => prev.filter((el) => el.id !== id));
  };
  return (
    <div className="row">
      <a href="/vacancy/new">Add Vacancy</a>
      {allVacancy?.map((vacancy) => (
        <div key={vacancy.id} className="col-4 mb-3 mt-3">
          <VacancyCard key={vacancy.id} vacancy={vacancy} deleteHandler={deleteHandler} submitHandler={submitHandler} />
        </div>
      ))}
    </div>
  );
}
