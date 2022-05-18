import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Service = ({invo}) => {
    const {_id,img,name,description,quantity,price} = invo;
    const navigate = useNavigate();

    const navigateToServiceDetails = id =>{
      navigate(`/service/${id}`);
    }
    return (
        <div>
            <div class="col">
            <div class="card" style={{height:'510px',border:'1px solid yellow'}}>
      <img src={img} class="card-img-top mx-auto pt-4" style={{height:'200px',width:'200px'}} alt="" />
      <div class="card-body">
        <h5 class="card-title">Subject Name: {name}</h5>
        <h5 class="card-title">Price:${price}</h5>
        <h5 class="card-title">Quty:${quantity}</h5>
        <p class="card-text">{description}</p>
        <button onClick={() => navigateToServiceDetails (_id)} style={{background:'yellow',color:'black'}}  type="button" class="btn  fw-bolder btn-sm">Update</button>
      </div>
    </div>
    
  </div>
            
        </div>
    );
};

export default Service;