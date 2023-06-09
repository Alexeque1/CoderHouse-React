import { useState } from "react"
import './ItemCounter.css'

const ItemCounter = () => {
    const [contador, counter] = useState(1)

    let incrementar = () => {
        counter(contador + 1)
    }

    let decrementar = () => {
        if (contador > 1) {
            counter(contador - 1)
        }
    }

  return (
      <div className="countBox">
          <div>
              <p> {contador} </p>
          </div>
          <div className="countBoxButtons">
              <button onClick={decrementar}> - </button>
              <button onClick={incrementar}> + </button>
          </div>
      </div>
  );
}

export default ItemCounter