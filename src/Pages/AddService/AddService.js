import userEvent from '@testing-library/user-event';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';


const AddService = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };
    return (
        <div className='w-50 mx-auto'>
            <h2 className='fw-bold pt-3'>Please <span style={{color:'#DAA520'}}>add a Item!!!</span></h2>
            <form className='d-flex flex-column pt-3' onSubmit={handleSubmit(onSubmit)}>
                <input style={{border:'1px solid #DAA520'}} className='mb-2 rounded' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input style={{border:'1px solid #DAA520'}} className='mb-2 rounded' placeholder={user.email} {...register("email", { required: true, maxLength: 20 })} />
                <textarea style={{border:'1px solid #DAA520'}} className='mb-2 rounded' placeholder='Description' {...register("description")} />
                <input style={{border:'1px solid #DAA520'}} className='mb-2 rounded' placeholder='Price' type="number" {...register("price")} />
                <input style={{border:'1px solid #DAA520'}}  className='mb-2 rounded' placeholder='Quantity' type="number" {...register("quantity")} />
                <input style={{border:'1px solid #DAA520'}} className='mb-2 rounded'  placeholder='Photo URL' type="text" {...register("img")} />
                <input className='fw-bold text-white border-0' style={{background:'#DAA520'}} type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddService;