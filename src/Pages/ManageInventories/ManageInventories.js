import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DeletBg from './../../images/delete.png'

const ManageInventories = () => {
    const [stock, setStock] = useState([])
 


    useEffect(() => {
        fetch('https://blooming-island-41447.herokuapp.com/stock')
            .then(res => res.json())
            .then(data => setStock(data));

    }, []);

    // delete item 
   

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `https://blooming-island-41447.herokuapp.com/stock/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = stock.filter(pd => pd._id !== id);
                setStock(remaining);
            })
        }
    }
    return (
        <div>
            <h3 style={{marginTop:'60px'}} className='fw-bold' >Manage Inventories</h3>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-4 ">

                    {
                        stock.map(pd => <div
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
                <Link to='/addItem'><button style={{ background: '#DAA520', color: 'white' }} type="button" className="btn p-2  fw-bolder btn-md mt-5">Add Item</button></Link>
            </div>
        </div>
    );
};

export default ManageInventories;