import React, { useEffect, useState } from 'react';
import DeletBg from './../../images/delete.png'

const ManageInventories = () => {
    const [inventory, setInventory] = useState([])
 


    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setInventory(data));

    }, []);

    // delete item 
   

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = inventory.filter(pd => pd._id !== id);
                setInventory(remaining);
            })
        }
    }
    return (
        <div>
            <h3 className='mt-4 fw-bold' >Manage Inventories</h3>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-4 ">

                    {
                        inventory.map(pd => <div
                            key={pd._id}
                            pd={pd}

                        ><div>
                                <div className="col">
                                    <div style={{ height: '250px' }} className='shadow-lg p-3 mb-5 bg-body rounded  mt-5'>
                                        <ul className='list-unstyled pt-4'>
                                            <li className='fw-bold' >Model: {pd.name}</li>
                                            <li>Price: ${pd.price}</li>
                                            <li>Qty: {pd.quantity}</li>
                                            <li>Supplier Name: {pd.Supplier}</li>
                                            <button 
                                            onClick={() => handleDelete(pd._id)}
                                            style={{ background: '#DAA520' }} 
                                            className='btn btn-md fw-bold mt-3  text-white'> <img style={{ height: '30px', width: '30px' }} src={DeletBg} alt="" /> delete</button>

                                        </ul>
                                    </div>
                                </div>

                            </div>


                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageInventories;