import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DemographicForm = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [vanderbilt_association, setAssociation] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ age, gender, vanderbilt_association });
    if(age === '' || gender === '' || vanderbilt_association === '')
      setError('Required field left empty');
    else
      navigate("/email_evaluation");
  };


  return (
    <div className='app-container'>
    <h1>Phishing Evaluation</h1>
    <h3>Demographic Information</h3>
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Age:
          <input type="number" value={age} onChange={e => setAge(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Gender:
          <select value={gender} onChange={e => setGender(e.target.value)}>
            <option value="">Select...</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Vanderbilt Association (Student, Staff, Faculty, Other):
          <input type="text" value={vanderbilt_association} onChange={e => setAssociation(e.target.value)} />
        </label>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
      <div>
        <label>{error}</label>
      </div>
    </form>
    </div>
  );
};

export default DemographicForm;
