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
    return (
        <div>
            <h1>Inventory Detalis</h1>
            <h2>You are about to book: {service.name}</h2>
            
        </div>
    );
};

export default ServiceDetails;