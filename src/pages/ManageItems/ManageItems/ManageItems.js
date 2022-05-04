import React, { useEffect, useState } from 'react';
import ManageItem from '../ManageItem/ManageItem';

const ManageItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);
    return (
        <div>
            <h1>Manage Items</h1>
            {
                items.map(item => <ManageItem
                    key={item._id}
                    item={item}
                ></ManageItem>)
            }

        </div>
    );
};

export default ManageItems;