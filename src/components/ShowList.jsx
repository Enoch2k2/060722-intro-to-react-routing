import React from 'react'
import ShowCard from './ShowCard'

const ShowList = ({ shows }) => {

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