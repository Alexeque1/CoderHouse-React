import { useState } from "react";

export const useCounter = (inicial, maximo) => {

    const [contador, setContador] = useState(inicial);

    const sumar = () => {
        if (contador < maximo) {
            setContador(contador + 1)
        }
    }

    const restar = () => {
        if (contador > inicial) {
            setContador(contador - 1)
        }
    }

    return {contador, sumar, restar}
}