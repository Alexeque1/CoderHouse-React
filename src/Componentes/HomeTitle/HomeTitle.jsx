import React from 'react'
import './HomeTitle.css'

const HomeTitle = ({greetings}) => {

  return (
    <div className='titleContainer'>
        <h2> {greetings} </h2>
    </div>
  )
}

export default HomeTitle