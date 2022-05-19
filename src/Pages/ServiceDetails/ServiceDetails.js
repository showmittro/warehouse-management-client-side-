import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {

    const {serviceId} = useParams();
    const [service, setService] = useState({});
   

    useEffect( () =>{
        const url = `http://localhost:5000/inventory/${serviceId}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setService(data));

    }, [])

    // <h1>Inventory Detalis</h1>
    //         <h2>You are about to book: {service.name}</h2>
    return (
        <div>
            <div class="col d-flex justify-content-center ">
            <div class="card h-100" style={{ width:'500px',  border:'1px solid yellow'}}>
      <img src={service.img} class="card-img-top mx-auto pt-4" style={{height:'200px',width:'200px'}} alt="" />
      <div class="card-body">
        <h6 class="card-title">Modal: {service.name}</h6>
        <h6 class="card-title">Supplier: {service.Supplier}</h6>
        <h6 class="card-title">Price:${service.price}</h6>
        <h6 class="card-title">Quty:{service.quantity}</h6>
        <p class="card-text">{service.description}</p>
        
        <button type="submit" class="btn btn-primary">Shipped</button>
        <form className='mt-2'>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label"></label>
        <input type="number" className='form-label' />
  </div>
  <button type="submit" class="btn btn-primary">Restock</button>
</form>

      
        
      </div>
    </div>
    
  </div>
            

            
            
        </div>
    );
};

export default ServiceDetails;