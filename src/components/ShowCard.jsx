import React from 'react'
import { Link } from 'react-router-dom';
import { slugify } from '../Globals';

const ShowCard = ({ show }) => {
  return (
    <li><Link to={`/shows/${ slugify(show.name) }`}>{ show.name }</Link></li>
  )
}

export default ShowCard