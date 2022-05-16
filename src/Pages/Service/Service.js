import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({invo}) => {
    const {img,InventoryName,description,Quantity,Price} = invo;
    return (
        <div>
            <div class="col">
            <div class="card" style={{height:'400px',border:'1px solid yellow'}}>
      <img src={img} class="card-img-top mx-auto pt-4" style={{height:'200px',width:'200px'}} alt="" />
      <div class="card-body">
        <h5 class="card-title">Subject Name: {InventoryName}</h5>
        <h5 class="card-title">Price:${Price}</h5>
        <h5 class="card-title">Quty:${Quantity}</h5>
        <p class="card-text">{description}</p>
        <Link to='/details'><button style={{background:'yellow',color:'black'}}  type="button" class="btn  fw-bolder btn-sm">Update</button></Link>
      </div>
    </div>
    
  </div>
            
        </div>
    );
};

export default Service;