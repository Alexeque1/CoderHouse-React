import { useState, useEffect } from "react";
import { useCounter } from "../../Hooks/useCounter";

const ItemCounter = ({colorInicial}) => {

    const [color, setColor] = useState(colorInicial)
    const {contador, sumar, restar} = useCounter(1,10)

    useEffect(() => {
        contador > 5 ? setColor('red') : setColor(colorInicial);
    }, [contador])

  return (
    <div>
        <button onClick={sumar}> + </button>
        <p> {contador} </p>
        <button onClick={restar} style={{color:color}}> - </button>
    </div>
  )
}

export default ItemCounter