import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './itemDetail.css';

const ItemDetail = () => {
    const { itemId } = useParams();

    const [item, setItem] = useState({});
    useEffect(() => {
        fetch(`https://hidden-brook-58395.herokuapp.com/item/${itemId}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [item]);

    // console.log(itemQuantity);
    const handleQuantity = (quantity) => {

        const newQuantity = parseInt(quantity) - 1;


        console.log(newQuantity);
        fetch(`https://hidden-brook-58395.herokuapp.com/item/${itemId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ newQuantity })
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }
    const handleRestock = (quantity) => {
        // event.preventDefault();
        const addedQuantity = document.getElementById('quantity').value;
        if (addedQuantity > 0) {
            const newQuantity = parseInt(quantity) + parseInt(addedQuantity)
            console.log(newQuantity);
            fetch(`https://hidden-brook-58395.herokuapp.com/item/${itemId}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ newQuantity })
            })
                .then(res => res.json())
                .then(data => console.log(data))
            document.getElementById('quantity').value = " ";
        }
        else {
            window.alert('Please insert an amount of greater than 0');
            document.getElementById('quantity').value = " ";
        }


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

                <input id='quantity' name='quantity' type="number" placeholder='Restock Quanity' />
                <button className='btn hero-btn' onClick={() => handleRestock(item.quantity)}>Restock</button>

            </div>
            <Link to='/manageItems'><button className='btn hero-btn mt-3'>Manage Items</button></Link>
        </div>
    );
};

export default ItemDetail;