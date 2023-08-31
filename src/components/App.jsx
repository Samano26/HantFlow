import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Vacancy from './pages/Vacancy';
import Home from './pages/Home';
import AdminLog from './pages/AdminLog';
import AdminReg from './pages/AdminReg';
import VacancyNew from './pages/VacancyNew';
import Candidate from './pages/Candidate';
import VacancyCard from './pages/VacancyCard';
import CandidateCard from './pages/CandidateCard';
import CandidateNew from './pages/CandidateNew';

export default function App() {
  const [allVacancy, setAllVacancy] = useState()

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/log" element={<AdminLog />} />
        <Route path="/admin/reg" element={<AdminReg />} />

        <Route path="/vacancy" element={<Vacancy allVacancy={allVacancy} setAllVacancy={setAllVacancy} />} />
        <Route path="/vacancy/new" element={<VacancyNew setAllVacancy={setAllVacancy} />} />
        <Route path="/vacancy/:id" element={<VacancyCard />} />

        <Route path="/candidate" element={<Candidate />} />
        <Route path="/candidate/:id" element={<CandidateCard />} />
        <Route path="/candidate/new" element={<CandidateNew />} />
      </Routes>
    </div>
  )
}
