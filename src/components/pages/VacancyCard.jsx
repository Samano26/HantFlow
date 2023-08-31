import React from 'react'

export default function VacancyCard({ vacancy, deleteHandler }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      {/* <img src={vacancy.img} className="card-img-top" alt="..." /> */}
      <div className="card-body">
        <h5 className="card-title">{vacancy.nameVacancy}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href={`/raccoons/${vacancy.id}`} className="btn btn-primary">See this guy</a>
        <button type="button" onClick={() => deleteHandler(vacancy.id)} className="btn btn-primary">Delete</button>
      </div>
    </div>
  )
}
