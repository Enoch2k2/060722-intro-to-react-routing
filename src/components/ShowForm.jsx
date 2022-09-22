import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { ShowContext } from '../context/shows';
import { useHandleChange } from '../hooks/shows';

const ShowForm = ({ id }) => {

  const [name, handleChangeName] = useHandleChange('');
  const [description, handleChangeDescription] = useHandleChange('');
  const { addShow } = useContext(ShowContext);

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    addShow({ name, description, id: id.current++ });

    navigate("/shows")
  }

  return (
    <div>
      <h3>Create Show</h3>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" value={ name } onChange={ handleChangeName } />
        </div>
        <div>
          <label htmlFor="description">Description: </label><br />
          <textarea name="description" id="description" cols="30" rows="10" value={ description } onChange={ handleChangeDescription }></textarea>
        </div>

        <input type="submit" value="Create Show" />
      </form>
    </div>
  )
}

export default ShowForm