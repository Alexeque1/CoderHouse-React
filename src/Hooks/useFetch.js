import { useState, useEffect } from "react";

export const useFetch = (url) => {

    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(result => setData(result))
            .catch(error => console.log(error))
    }, [url])

    return data;
}