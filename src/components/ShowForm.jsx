import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ShowForm = ({ addShow }) => {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    addShow({ name, description });

    navigate("/shows")
  }

  return (
    <div>
      <h3>Create Show</h3>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" value={ name } onChange={ e => setName(e.target.value) } />
        </div>
        <div>
          <label htmlFor="description">Description: </label><br />
          <textarea name="description" id="description" cols="30" rows="10" value={ description } onChange={ e => setDescription(e.target.value)}></textarea>
        </div>

        <input type="submit" value="Create Show" />
      </form>
    </div>
  )
}

export default ShowForm