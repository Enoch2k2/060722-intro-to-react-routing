import React, { useContext } from 'react'
import ShowCard from './ShowCard'
import { ShowContext } from '../context/shows'

const ShowList = () => {
  const { shows } = useContext(ShowContext)
  const showCards = shows.map((show, idx) => <ShowCard key={ idx } show={show} />)

  return (
    <div>
      <h3>Show List</h3>
      <ul>
        { showCards }
      </ul>
    </div>
  )
}

export default ShowList