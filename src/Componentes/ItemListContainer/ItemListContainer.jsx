import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = (props) => {
  return (
    <div className='titleBox'>
        <h2> {props.greetings} </h2>
    </div>
  )
}

export default ItemListContainer