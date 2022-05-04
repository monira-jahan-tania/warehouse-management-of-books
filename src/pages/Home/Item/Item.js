import React from 'react';
import { useNavigate, useNavigationType } from 'react-router-dom';
import './Item.css';

const Item = ({ item }) => {
    const { _id, img, name, description, quantity, price, supplierName } = item;
    const navigate = useNavigate();

    const navigateToItemDetail = (itemId) => {
        navigate(`/item/${itemId}`);
    }
    return (
        <div className='item'>
            <div><img src={img} alt="" /></div>
            <div className='item-description'>
                <h3>{name}</h3>
                <p>{description}</p>
                <h5>Quantity: {quantity}</h5>
                <h3>Price: ${price}</h3>
                <h5>Supplier Name: {supplierName}</h5>
                <button onClick={() => navigateToItemDetail(_id)}>Update Stock</button>
            </div>
        </div>
    );
};

export default Item;