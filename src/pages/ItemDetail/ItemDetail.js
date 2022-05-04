import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './itemDetail.css';

const ItemDetail = () => {
    const { itemId } = useParams();

    const [item, setItem] = useState({});
    // const [itemQuantity, setItemQuantity] = useState(item.quantity);
    useEffect(() => {
        fetch(`http://localhost:5000/item/${itemId}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [itemId]);

    // console.log(itemQuantity);

    const handleQuantity = (itemQuantity) => {
        const newQuantity = parseInt(itemQuantity) - 1;
        item.quantity = newQuantity;
        // setItem(item);
        const url = `http://localhost:5000/item/${itemId}`
        console.log(url);
        fetch(url, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => console.log(data.newQuantity))
    }
    return (
        <div>
            <div className='item mt-5 mx-auto pt-2 w-50'>
                <div><img width='200px' src={item.img} alt="" /></div>
                <div className='item-description'>
                    <h3>{item.name}</h3>
                    <p className='m-0'>ID: {item._id}</p>
                    <p>{item.description}</p>
                    <h5>Quantity: {item.quantity}</h5>
                    <h3>Price: ${item.price}</h3>
                    <h5>Supplier Name: {item.supplierName}</h5>
                    <button onClick={() => handleQuantity(item.quantity)}>Delivered</button>
                </div>
            </div>
            <div className='restock'>
                <form >
                    <input name='quantity' type="number" placeholder='Restock Quanity' />
                    <button className='hero-btn'>Restock</button>
                </form>
            </div>
            <Link to='/manageItems'><button className='btn hero-btn mt-3'>Manage Items</button></Link>
        </div>
    );
};

export default ItemDetail;