import { Link } from 'react-router-dom'
import './ItemDetail.css'
import '../ItemCounter/ItemCounter.css'
import ItemCounter from '../ItemCounter/ItemCounter'

const ItemDetail = ({id, nombre, precio, img, stock}) => {

  return (
      <div className='ItemBoxAlert'>
          <div className='itemDetailBoxes itemPictureBox'>
              <img src={img} alt={nombre} />
              <Link to="/">
              <svg className='exitIcon' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M14.5 18H8c-1.1 0-2-.9-2-2V9.5C6 8.67 6.67 8 7.5 8S9 8.67 9 9.5v3.27L14.95 7c.57-.55 1.48-.54 2.04.02s.56 1.47.01 2.04L11.15 15h3.35c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/></svg>
              </Link>
          </div>
          <div className='itemDetailBoxes itemInfoBox'>
              <div className='ItemBox_infText detailedMargin'>
                  <h3 className='ItemBox_title'> {nombre} </h3>
                  <p className='ItemBox_subTitle'> ${precio} </p>
                  <p className='ItemBox_subTitle'> ID: {id} </p>
                  <p className='ItemBox_subTitle textDarker glassBack'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nostrum assumenda consequuntur necessitatibus sequi rerum ab veritatis! Commodi nulla dolores esse velit, odit nostrum reprehenderit sunt ex vel aut architecto.</p>
              </div>
              <ItemCounter stock={stock} img={img} nombre={nombre} precio={precio} productoID={id} />
              <div className='detailedMargin'>
                    <Link to="/Cart">
                        <button className='btn finalBtn'>Terminar Compra</button>
                    </Link>
              </div>
          </div>
      </div>
  )
}

export default ItemDetail