import { useEffect, useState } from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, precio, img }) => {

    return (
        <div className='ItemBox'>
            <div className='itemPicture'>
                <Link to={`/Item/${id}`}>
                    <img src={img} alt={nombre} />
                </Link>
            </div>
            <div className='ItemBox_inf'>
                <h3 className='ItemBox_title'> {nombre} </h3>
                <p className='ItemBox_subTitle'> ${precio} </p>
                <p className='ItemBox_subTitle'> ID: {id} </p>
                <Link to={`/Item/${id}`}>
                    <button className='btn'> Ver detalles </button>
                </Link>
            </div>
        </div>
    )
}


export default Item
