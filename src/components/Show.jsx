import React from 'react'
import { slugify } from '../Globals'
import { useParams } from 'react-router-dom';

const Show = ({ shows }) => {
  const { slug } = useParams();
  const show = shows.find(show => slugify(show.name) === slug )


  if(!show) {
    return (<div>loading...</div>)
  }

  return (
    <div>{ show.name }</div>
  )
}

export default Show