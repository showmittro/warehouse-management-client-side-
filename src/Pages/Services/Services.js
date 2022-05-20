import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
  const [inventory, setInventory] = useState([])


  useEffect(() => {
    fetch('https://blooming-island-41447.herokuapp.com/inventory')
      .then(res => res.json())
      .then(data => setInventory(data));

  }, []);









  return (
    <div className='mt-4'>
      <h2 className='pt-3 fw-bold' >This is <i style={{ color: '#DAA520' }}>Inventory</i></h2>
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