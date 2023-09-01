import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CandidateShotCard from '../ui/CandidateShotCard';
import CandidateCardEdit from './CandidateCard';
import CandidateLogoElbruse from '../ui/CandidateLogoElbruse';

export default function Candidate({ allCandidates, allStatus, vacancies }) {
  // console.log(vacancies, '<---значение vacancies');
  const [currentpeople, setCurrentpeople] = useState(null);
  const [currentVacanciesCandidat, setVacanciesCandidat] = useState([]);
  // const [candidates]
  const { id } = useParams();
  const [selectedStatus, setSelectedStatus] = useState(1);
  // console.log(
  //   'param',
  //   id,
  //   'vacancies',
  //   vacancies,
  //   'find',
  //   vacancies?.find((el) => el.id === +id).nameVacancy,
  // );
  // const vacanciesCandidatHandler = async (id) => {
  //   const persons = await axios.post(`/api/candidate/${id}`);
  //   // console.log(person.data, 'its data');
  //   setVacanciesCandidat(allCandidates.filter((el) => el.id === persons.data.vacaincyId));
  // };
  const clickHandler = async (idc) => {
    const person = await axios.post(`/api/candidate/${idc}`);
    // console.log(person.data, 'its data');
    setCurrentpeople(allCandidates.filter((el) => el.id === person.data.id));
  };


  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        {/* {vacancies?.map((oneVacan) => (
          <Navbar.Brand key={oneVacan.id}>Кандидаты на позицию {oneVacan.nameVacancy}</Navbar.Brand>
        ))} */}
        <Navbar.Brand>
          Кандидаты на позицию {vacancies?.find((el) => el.id === +id)?.nameVacancy}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            {allStatus?.map((el) => (
              <Nav.Link key={el.id} 
              onClick={() => setSelectedStatus(el.id)}
              // href={`status/${id}`}
              >
                {el.status}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-4">
            {allCandidates?.filter((el) => el.statusId === selectedStatus).map((candidate) => (
              <CandidateShotCard
                key={candidate.id}
                candidate={candidate}
                clickHandler={clickHandler}
              />
            ))}
          </div>
          <div className="col-lg-8 mb-4">
            {currentpeople ? (
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Вакансия: {currentpeople[0].vacaincyId}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Имя {currentpeople[0].nameCandidats}
                  </h6>
                  <p>Пол: {currentpeople[0].age}</p>
                  <p>Телефон: {currentpeople[0].tel}</p>

                  <p>
                    Почта: <a href="/candidate/:id">{currentpeople[0].emailCandidate}</a>
                  </p>
                  <p>Опыт работы: {currentpeople[0].experience} г</p>
                  <p>Этап собеседования: {currentpeople[0].statusId}</p>
                  <div className="btn-group">
                    <Button variant="primary">Edit</Button>
                    <Button variant="danger">Delete</Button>
                    <Button variant="secondary" onClick={() => setCurrentpeople(null)}>
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <CandidateLogoElbruse />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="card h-100">
<img src="path/to/your/image.jpg" alt="Image" className="card-img-top" />
</div> */
}
{
  /* <CandidateCardEdit /> */
}

// const stages = [
//   'All',
//   'Screening',
//   'Video interview',
//   'Employer CV',
//   'Employer interview',
//   'Send offer',
//   'Accept offer',
//   'Reject',
// ];
