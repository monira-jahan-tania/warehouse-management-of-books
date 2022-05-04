import React, { useEffect, useState } from 'react';
import './ManageItem.css';

const ManageItem = ({ item }) => {
    const { _id, img, name, quantity, price, supplierName } = item
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);
    const handleDeleteItem = (id) => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);
                })
        }
    }
    return (
        <div className='manage-item mx-5 mt-3 d-flex align-items-center justify-content-around'>
            <div><img width='100px' height='100px' src={img} alt="" /></div>
            <div className='item-description'>
                <h4 className='m-0'>{name}</h4>
                <h6 className='m-0'>Quantity: {quantity}</h6>
                <h6 className='m-0'>Price: ${price}</h6 >
                <h6 className='m-0'>Supplier Name: {supplierName}</h6 >

            </div>
            <button className='hero-btn' onClick={() => handleDeleteItem(item._id)}>Delete Item</button>
        </div>
    );
};

export default ManageItem;