import React from 'react';
import Service from '../Service/Service';

const Services = () => {



    const Inventory = [
        {
          id:1 , InventoryName:'Duranta Steel 24-Spd Venom R27.5 Green',Price:'150',Quantity:'10',img:'https://m.media-amazon.com/images/I/81wGn2TQJeL._SX425_.jpg'
        },
        {
          id:2 , InventoryName:'Duranta Steel 24-Speed Venom R27.5 Blue',Price:'110',Quantity:'11',img:'https://m.media-amazon.com/images/I/71IFugE1-hL.jpg'
          
        },
        {
          id:3 , InventoryName:'Duranta CB City Bike 26 Inch Blue',Price:'140',Quantity:'8',img:'https://www.compareprix.in/images/product/large/Hero%20Blaze%2016T%20Road%20Bicycle%20large.jpeg'
        },
        {
          id:4 , InventoryName:'Duranta 16" CB Extreme Steel Mudguard Bicycle',Price:'96',Quantity:'15',img:'https://5.imimg.com/data5/SELLER/Default/2021/4/RQ/UE/MC/10787871/mercedes-benz-non-foldable-21-gear-mtb-bicycle-500x500.jpg'
        },
        {
          id:5 , InventoryName:'Duranta CB Rider 20 Inch Blue',Price:'99',Quantity:'5',img:'https://5.imimg.com/data5/EC/JE/BX/SELLER-87786173/ferrari-foldable-bicycle-500x500.jpg'
        },
        {
          id:6 , InventoryName:'Duranta CB Optimus-26 S Spd Red',Price:'200',Quantity:'20',img:'https://m.media-amazon.com/images/I/71S5CrAHymS._SY450_.jpg'
        },

    ]


    return (
        <div className='mt-5'>
            <h1 className='pt-5'>This is Inventory</h1>
           <div className="container">
           <div class="row row-cols-1 row-cols-md-3 g-4 pt-5">
                {
                  Inventory.map(invo=><Service
                  key={invo.id}
                  invo={invo}
                  ></Service>)
                }


            </div>
           </div>
        </div>
    );
};

export default Services;