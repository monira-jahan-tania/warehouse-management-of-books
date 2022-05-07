import React, { useEffect, useState } from 'react';
import useItems from '../../../Hooks/useItems';
import Item from '../Item/Item';
import './Items.css';

const Items = () => {
    const [items, setItems] = useItems();

    return (
        <div className='items-container' id='items'>
            <h1>Stocked Items</h1>
            {/* <h2>{items.length}</h2> */}
            <div className='line'></div>
            <div className='items'>
                {
                    items.slice(0, 6).map(item => <Item
                        key={item._id}
                        item={item}
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default Items;