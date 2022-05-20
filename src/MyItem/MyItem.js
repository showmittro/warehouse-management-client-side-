
import React, { useEffect, useState } from 'react';
import auth from '../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import MyItemDetails from '../Pages/MyItemDetails/MyItemDetails';
import axios from 'axios';

const MyItem = () => {
    // const [user] = useAuthStat(auth)
    const [user] = useAuthState(auth)
    const [myItems, setMyItems] = useState([]); 
    useEffect(() => {
        const getItem = async () => {
            const email = user?.email;
            console.log(email);
            const url = `https://blooming-island-41447.herokuapp.com/stock?email=${email}`
            try {

                const { data } = await axios.get(url);
                const myItem = data?.filter(stock => stock?.email === user?.email)
                console.log(myItem)
                console.log(data)
                setMyItems(myItem);

            }
            catch (error) {
                console.log(error.message);
            }
        }
        getItem()
    }, [user])
    return (
        <div className='w-50 mx-auto'>
        <h2>Your order list:{myItems.length} </h2>
        {

            myItems.map(myItem=><MyItemDetails
                key={myItem._id}
                myItem = {myItem}
            
            ></MyItemDetails> )


           
            
            
          
        }
    </div>
    );
};

export default MyItem;