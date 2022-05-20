import React from 'react';
import {  useNavigate } from 'react-router-dom';
import UpdateIcons from '../../images/update.png'

const Service = ({ invo }) => {
  const { _id, img, name, description, quantity, price, Supplier } = invo;
  const navigate = useNavigate();

  const navigateToServiceDetails = id => {
    navigate(`/service/${id}`);
  }
  return (
    <div>
      <div class="col">
        <div class="card" style={{ height: '520px', border: '1px solid #DAA520' }}>
          <img src={img} class="card-img-top mx-auto pt-4" style={{ height: '200px', width: '200px' }} alt="" />
          <div class="card-body">
            <h6 class="card-title">Modal: {name}</h6>
            <h6 class="card-title">Supplier: {Supplier}</h6>
            <h6 class="card-title">Price:${price}</h6>
            <h6 class="card-title">Quty:{quantity}</h6>
            <p class="card-text">{description}</p>
            <button onClick={() => navigateToServiceDetails(_id)} style={{ background: '#DAA520', color: 'white' }} type="button" class="btn  fw-bolder btn-sm"> <div className='d-flex justify-content-center align-items-center'><img src={UpdateIcons} style={{height:'20px' , width:'20px'}} alt="" /> <span className='ps-2'>Update</span></div></button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Service;