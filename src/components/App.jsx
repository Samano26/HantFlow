import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Vacancy from './pages/Vacancy';
import Home from './pages/Home';
import AdminLog from './pages/AdminLog';
import AdminReg from './pages/AdminReg';
import VacancyNew from './pages/VacancyNew';
import Candidate from './pages/Candidate';
import VacancyCard from './pages/VacancyCard';

import CandidateNew from './pages/CandidateNew';
import CandidateCard from './pages/CandidateCard';

export default function App({ allCandidates, allStatus, vacancies }) {
  console.log(vacancies,"-----ВАКАНСИИ")
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/log" element={<AdminLog />} />
        <Route path="/admin/reg" element={<AdminReg />} />

        <Route path="/vacancy" element={<Vacancy />} />
        <Route path="/vacancy/new" element={<VacancyNew />} />
        <Route path="/vacancy/:id" element={<VacancyCard />} />

        <Route
          path="/candidates/:id"
          element={
            <Candidate allCandidates={allCandidates} allStatus={allStatus} vacancies={vacancies} />
          }
        />
        <Route path="/candidate/new" element={<CandidateNew />} />
        <Route path="/candidate/:id" element={<CandidateCard allCandidates={allCandidates} />} />
      </Routes>
    </div>
  );
}
