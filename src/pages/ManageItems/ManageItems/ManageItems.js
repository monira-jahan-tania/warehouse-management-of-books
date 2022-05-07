import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useItems from '../../../Hooks/useItems';
import ManageItem from '../ManageItem/ManageItem';
import './ManageItems.css';

const ManageItems = () => {

    const [items, setItems] = useItems();

    const handleDeleteItem = (id) => {
        const proceed = window.confirm('Are you sure to delete this item from stock?');
        if (proceed) {
            fetch(`https://hidden-brook-58395.herokuapp.com/item/${id}`, {
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
        <div>
            <h1>Manage Items</h1>
            <div className="line mx-auto"></div>
            {
                items.map(item => <div key={item._id} className='manage-item mx-5 mt-3 '>

                    <div><img width='100px' height='100px' src={item.img} alt="" /></div>
                    <div className='item-description'>
                        <h4 className='m-0'>{item.name}</h4>
                        <h6 className='m-0'>Quantity: {item.quantity}</h6>
                        <h6 className='m-0'>Price: ${item.price}</h6 >
                        <h6 className='m-0'>Supplier Name: {item.supplierName}</h6 >

                    </div>
                    <div className='d-flex align-items-center justify-content-center'>
                        <button className='hero-btn ' onClick={() => handleDeleteItem(item._id)}>Delete Item</button>
                    </div>
                </div>)
            }
            <Link to='/addItems'><button className='hero-btn mt-3'>Add New Item</button></Link>
        </div>
    );
};

export default ManageItems;