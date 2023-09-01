import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Vacancy from './pages/Vacancy';
import AdminLog from './pages/AdminLog';
import AdminReg from './pages/AdminReg';
import VacancyNew from './pages/VacancyNew';
import Candidate from './pages/Candidate';
import VacancyCard from './pages/VacancyCard';
import CandidateNew from './pages/CandidateNew';
import CandidateCard from './pages/CandidateCard';
import CandidateCard from './pages/CandidateCard';
import CandidateNew from './pages/CandidateNew';
import Home from './pages/Home';
import VacancyCard from './pages/VacancyCard';

export default function App({ allCandidates, allStatus, vacancies,oneVacancy }) {
 
  const [allVacancy, setAllVacancy] = useState(vacancies)

  const submitHandler = async (e, id, input) => {
    e.preventDefault();
    const res = await axios.post('/api/vacancy/editVacancy', { ...input, id })
    setAllVacancy(prev => prev.map(el => el.id !== res.data.id ? el : res.data))
    console.log(res.data)
  };

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/log" element={<AdminLog />} />
        <Route path="/admin/reg" element={<AdminReg />} />        
        <Route
          path="/candidates/:id"
          element={
            <Candidate allCandidates={allCandidates} allStatus={allStatus} vacancies={vacancies} />
          }
        />
        <Route path="/candidate/new" element={<CandidateNew />} />
        <Route path="/candidate/:id" element={<CandidateCard allCandidates={allCandidates} />} />
        <Route path="/vacancy" element={<Vacancy submitHandler={submitHandler} allVacancy={allVacancy} setAllVacancy={setAllVacancy} />} />
        <Route path="/vacancy/new" element={<VacancyNew setAllVacancy={setAllVacancy} />} />
        <Route path="/vacancy/:id" element={<VacancyCard submitHandler={submitHandler} oneVacancy={oneVacancy} setAllVacancy={setAllVacancy} />} />

      </Routes>
    </div>
  )

}
