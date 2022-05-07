import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './MyItems.css';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const email = user.email;
        console.log(email);

        fetch(`https://hidden-brook-58395.herokuapp.com/item?email=${email}`,
            {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => res.json())
            .then(data => {
                try {

                    setItems(data);
                }
                catch (error) {
                    console.log(error.message);
                    if (error.response.status === 401 || error.response.status === 403) {
                        signOut(auth);
                        navigate('/login');
                    }
                }
            })
    }, [user]);

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
            <h1>My Items: {items.length}</h1>
            <div className="line mx-auto"></div>
            {
                items.map(item => <div key={item._id} className='manage-item mx-5 mt-3'>

                    <div><img width='100px' height='100px' src={item.img} alt="" /></div>
                    <div className='item-description'>
                        <h4 className='m-0'>{item.name}</h4>
                        <h6 className='m-0'>Quantity: {item.quantity}</h6>
                        <h6 className='m-0'>Price: ${item.price}</h6 >
                        <h6 className='m-0'>Supplier Name: {item.supplierName}</h6 >

                    </div>
                    <div className='d-flex align-items-center justify-content-center'>
                        <button className='hero-btn' onClick={() => handleDeleteItem(item._id)}>Delete Item</button>
                    </div>
                </div>)
            }
            {/* //  onClick={() => handleDeleteItem(item._id)} */}
        </div>
    );
};

export default MyItems;