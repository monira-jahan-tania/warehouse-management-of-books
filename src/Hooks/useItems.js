import { useEffect, useState } from "react";

const useItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://hidden-brook-58395.herokuapp.com/itemAll')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);
    return [items, setItems]
}
export default useItems;