import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ShowContext } from '../context/shows';

const Show = () => {
  const { id } = useParams();
  const { shows } = useContext(ShowContext);

  
  const show = shows.find(show => show.id.toString() === id )


  if(!show) {
    return (<div>loading...</div>)
  }

  return (
    <div>{ show.name }</div>
  )
}

export default Show