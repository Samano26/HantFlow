import axios from 'axios';
import React, { useState } from 'react';

export default function VacancyCard({ vacancy, deleteHandler, submitHandler }) {
  const [edit, setEdit] = useState(true);

  const clickHandler = () => {
    setEdit((prev) => !prev);
  };

  const [input, setInput] = useState({ nameVacancy: '' });

  const changeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        {edit ? (
          <>
            <h5 className="card-title">
              <a href={`/candidates/${vacancy.id}`}>{vacancy.nameVacancy}</a>
            </h5>
            <button type="button" onClick={clickHandler} className="btn btn-primary">
              Edit
            </button>
          </>
        ) : (
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <input
                  name="nameVacancy"
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder={vacancy.nameVacancy}
                  value={input.nameVacancy}
                  onChange={changeHandler}
                />
              </label>
            </div>
            <button
              type="submit"
              onClick={(e) => {
                clickHandler();
                submitHandler(e, vacancy.id, input);
              }}
              className="btn btn-primary"
            >
              Send
            </button>
          </form>
        )}{' '}
        <button type="button" onClick={() => deleteHandler(vacancy.id)} className="btn btn-primary">
          Delete
        </button>
      </div>
    </div>
  );
}
