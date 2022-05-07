import React from 'react';
import useItems from '../../Hooks/useItems';
import Item from '../Home/Item/Item';

const AllItems = () => {
    const [items, setItems] = useItems();

    return (
        <div className='items-container' id='items'>
            <h1>Stocked Items</h1>
            {/* <h2>{items.length}</h2> */}
            <div className='line'></div>
            <div className='items'>
                {
                    items.map(item => <Item
                        key={item._id}
                        item={item}
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default AllItems;