import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
  const [inventory,setInventory] = useState([])


  useEffect(()=>{
    fetch('http://localhost:5000/inventory')
    .then(res=>res.json())
    .then(data=>setInventory(data));

  },[]);



  
   

  


  return (
    <div className='mt-5'>
      <h1 className='pt-5'>This is Inventory</h1>
      <div className="container">
        <div class="row row-cols-1 row-cols-md-3 g-4 pt-5">
          {
            inventory.map(invo => <Service
              key={invo._id}
              invo={invo}
            ></Service>)
          }


        </div>
      </div>
    </div>
  );
};

export default Services;