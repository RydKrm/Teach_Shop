import React, { useContext, useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import axios from 'axios';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';

const ShoppingCart = () => {
    const { userInfo } = useContext(AuthContext);
    const [cartItems, setCartItems] = useState([]);

      useEffect(() => {
        axios.post('https://thread-zone-server-abu-sahad.vercel.app/getCartList', { id: null })
            .then(res => {
                setCartItems(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [userInfo])  
    
    

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handleDelete = (itemId) => {
        console.log(itemId);
        axios.post('https://thread-zone-server-abu-sahad.vercel.app/deleteCartItem', { id: itemId })
            .then(res => {
                // console.log("item id ", res.data);
                const newData = cartItems.filter(product => product._id !== itemId);
                setCartItems(newData);
            })
            .then(err => {
                console.log(err);
            })
    };

    const incrementProduct = (_id) => {
        const newData = cartItems.map((item) =>
            item._id === _id ? { ...item, quantity: item.quantity + 1 } : item
        );
        const updatedItem = newData.find((item) => item._id === _id);
        if (updatedItem.quantity > 5) {
            Swal.fire({
                icon: 'error',
                title: 'Product not Add',
                text: `Total 5 available. You can't add anymore !!`,
            });
            return;
        }
        setCartItems(newData);
    };

    const decrementProduct = (_id) => {
        const newData = cartItems.map((item) =>
            item._id === _id ? { ...item, quantity: item.quantity - 1 } : item
        );
        const updatedItem = newData.find((item) => item._id === _id);
        console.log('cart item => ',updatedItem)
        if (updatedItem.quantity === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Product not Add',
                text: `You can't add Zero Product anymore !!`,
            });
            return;
        }
        setCartItems(newData);
    };
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/paymentPage', { state: { cartItems } });
    };

    return (
        <div className="max-w-screen-xl gap-5 mx-auto mb-10 font-poppins">
            <div className="flex flex-col md:flex-row">
              <div className='w-full md:w-9/12 me-10'>
                <div className='hidden mb-5 md:block'>
                    <div className='flex flex-row w-full pt-2 pb-2 text-xl font-medium bg-gray-100 justify-evenly font-poppins ps-2'>
                        <h2 className='text-base'>Product</h2>
                        <h2 className='text-base font-medium ms-36'>Quantity</h2>
                        <h2 className='text-base font-medium ms-16'>Total</h2>
                        <h2 className='text-base font-medium ms-16'>Remove</h2>
                    </div>
                </div>
                {cartItems.map((item, index) => (
                    <div key={index} className="flex flex-col items-start gap-4 pt-5 pb-5 mb-4 bg-gray-100 md:flex-row">
                        <div className="flex flex-row"> 
                           <img src={item.image} alt={item.name} className="w-20 h-20 ms-10" />
                        <div className="flex flex-col ms-10 me-10">
                            <h3 className="mb-2 text-base md:w-36">{item.productName}</h3>
                            <p className='mb-2 text-sm text-blue-500'>Price: ${item.price}</p>
                        </div>
                        </div>
                        <div className="flex flex-row items-baseline mt-5 justify-evenly">
                            <div className="flex items-center gap-2 me-10 ms-10">
                                <button
                                    onClick={()=>{decrementProduct(item._id)}}
                                    className="px-2 py-1 text-base font-bold bg-gray-100 rounded">
                                    -
                                </button>
                                <span className='text-base font-bold'>{item.quantity}</span>
                                <button
                                    onClick={() => incrementProduct(item._id)
                                    }
                                    className="px-2 py-1 text-base font-bold bg-gray-100 rounded"
                                >
                                    +
                                </button>
                            </div>
                            <p className='font-bold text-basm md:ms-20 lg:ms-20 lg:me-20 md:me-20'> ${item.price * item.quantity}</p>
                            <button
                                onClick={() => handleDelete(item._id)}
                                className="px-2 py-1 mt-2 text-white bg-red-500 rounded ms-20"
                            >
                                <MdDelete></MdDelete>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className='w-full bg-gray-100 right-side md:w-3/12'>
                <h2 className="py-5 mb-4 text-2xl font-semibold ps-5">Order Summary</h2>
                <div className="p-4 rounded">
                    <div className='flex justify-between mt-2 mb-2'>
                        <p className='text-sm '>Subtotal</p>
                        <p className='text-xl '>${calculateTotalPrice()}</p>
                    </div>
                    <div className='flex justify-between'>
                        <p className='text-sm '>Delivery</p>
                        <p className='text-sm '>Free</p>
                    </div>
                    <div className='flex justify-between mt-2 mb-2'>
                        <p className='text-sm '>Tax</p>
                        <p className='text-sm '>Free</p>
                    </div>
                    <hr className='bg-gray-600' />
                    <div className='flex justify-between'>
                        <p className='text-sm font-bold '>Total</p>
                        <p className='text-sm font-bold '> ${calculateTotalPrice()}</p>
                    </div>

                    <button onClick={handleClick} className="w-full px-4 py-2 mt-4 text-white bg-blue-600 rounded ">
                        Checkout
                    </button>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default ShoppingCart;