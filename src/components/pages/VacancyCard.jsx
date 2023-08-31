import React from 'react'

export default function VacancyCard() {
  return (
    <div className="card" style={{ width: '18rem' }}>
    <img src={oneRaccoon.img} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{oneRaccoon.name}</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href={`/raccoons/${oneRaccoon.id}`} className="btn btn-primary">See this guy</a>
      <button type="button" onClick={() => deleteHandler(oneRaccoon.id)} className="btn btn-primary">Run away</button>
    </div>
  </div>
  )
}
