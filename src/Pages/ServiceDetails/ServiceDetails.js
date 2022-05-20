import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {



    const { serviceId, } = useParams();
    const [service, setService] = useState({});


    useEffect(() => {
        const url = `http://localhost:5000/inventory/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));

    }, [serviceId, service])


    const handlStockUpdate = (e) => {
        e.preventDefault();
        let deliver = e.target.quantity.value;
        const parseDeliver = parseInt(deliver);

        let quantityParse = service.quantity;
        let quantity = quantityParse + parseDeliver;


        const updateQuntity = { quantity }
        console.log(updateQuntity)



        const url = `http://localhost:5000/inventory/${serviceId}`;
        fetch(url, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(updateQuntity),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

            });

    }





    const handleDeliver = () => {
        let deliver = 1;
        let quantityParse = service.quantity;
        let quantity = quantityParse - deliver;


        const updateQuntity = { quantity }
        console.log(updateQuntity)



        const url = `http://localhost:5000/inventory/${serviceId}`;
        fetch(url, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(updateQuntity),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

            });
    };






    return (
        <div className='mt-5'>
            <div class="col d-flex justify-content-center ">
                <div class="card h-100" style={{ width: '500px', border: '1px solid yellow' }}>
                    <img src={service.img} class="card-img-top mx-auto pt-4" style={{ height: '200px', width: '200px' }} alt="" />
                    <div class="card-body">
                        <h6 class="card-title">Modal: {service.name}</h6>
                        <h6 class="card-title">Supplier: {service.Supplier}</h6>
                        <h6 class="card-title">Price:${service.price}</h6>
                        <h6 class="card-title">Quty:{service.quantity}</h6>
                        <p class="card-text">{service.description}</p>

                        <button type="submit" onClick={handleDeliver} class="btn btn-primary">Shipped</button>

                        <form className='mt-2' onSubmit={handlStockUpdate}>
                            <div class="mb-3 mt-2">
                                <label for="exampleInputPassword1" class="form-label"></label>
                                <input type="number" name='quantity'

                                    className='form-label'

                                />
                            </div>
                            <button type="submit" class="btn btn-primary"
                            >Restock</button>
                        </form>



                    </div>
                </div>

            </div>


            <Link to='/manageInventories'><button style={{ background: '#DAA520', color: 'white' }} type="button" className="btn p-2  fw-bolder btn-md mt-5">Manage Inventories</button></Link>

        </div>
    );
};

export default ServiceDetails;