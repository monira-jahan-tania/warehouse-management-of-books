import React from 'react';
import './Item.css';

const Item = ({ item }) => {
    const { img, name, description, quantity, price, supplierName } = item;
    return (
        <div className='item'>
            <div><img src={img} alt="" /></div>
            <div className='item-description'>
                <h3>{name}</h3>
                <p>{description}</p>
                <h5>Quantity: {quantity}</h5>
                <h3>Price: ${price}</h3>
                <h5>Supplier Name: {supplierName}</h5>
                <button>Update Stock</button>
            </div>
        </div>
    );
};

export default Item;