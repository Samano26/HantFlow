import React, { useState } from 'react'

export default function VacancyNew({setAllVacancy}) {
  const [input, setInput] = useState({ nameVacancy: '' })

  const changeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await fetch(
      '/api/vacancy/addVacancy',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(input),
      },
    );
    const newVacancy = await response.json();
    setAllVacancy((prev) => [newVacancy, ...prev]);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Name
          <input
            name="nameVacancy"
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={input.nameVacancy}
            onChange={changeHandler}
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}
