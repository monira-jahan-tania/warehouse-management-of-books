import React from 'react';
import { Link, useNavigate, useNavigationType } from 'react-router-dom';
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
                <h4>{name}</h4>
                <p className='m-0'>{description}</p>
                <h5 className='m-0'>Quantity: {quantity}</h5>
                <h4 className='m-0'>Price: ${price}</h4>
                <h5 className='m-0'>Supplier Name: {supplierName}</h5>
                <button onClick={() => navigateToItemDetail(_id)}>Update Stock</button>
            </div>
        </div>
    );
};

export default Item;