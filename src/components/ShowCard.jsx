import React from 'react'
import { Link } from 'react-router-dom';

const ShowCard = ({ show }) => {
  return (
    <li><Link to={`/shows/${ show.id }`}>{ show.name }</Link></li>
  )
}

export default ShowCard