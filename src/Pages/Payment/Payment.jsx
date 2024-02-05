import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const Payment = () => {

  const [addressList, setAddressList] = useState([]);
  const [orderList, setOrderList] = useState([]);
  const { userInfo } = useContext(AuthContext);
  const location = useLocation();
  const { cartItems } = location.state;
  const [isSelect, setIsSelect] = useState(true);

  const handleOrder = ()=>{
    Swal.fire({
      title:'Your Order is placed',
      text: 'Within 3 days you will get the product',
      icon:'success',
      timer:1200
    })
  }

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <div>
      <h2 className="my-5 text-2xl text-center font-poppins"> Order List </h2>

      <div className="overflow-x-auto md:mx-40 md:my-10">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Price </th>
              <th>Quantity</th>
              <th>total</th>
            </tr>
          </thead>
          <tbody>
            {
              cartItems.map((item, index) =>
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{item.productName}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price * item.quantity}</td>
                </tr>
              )
            }

          </tbody>
        </table>
        <h2 className="mx-auto my-5 text-2xl text-center font-poppins">Total {totalPrice}</h2>
        <div className='flex flex-col justify-center'>
          <button type="button" onClick={handleOrder} className='mx-auto my-5 text-center text-white bg-green-500 btn hover:bg-green-600'>Place Order</button>
        </div>

      </div>

    </div>
  );
};

export default Payment;