import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const ProductDetailsInformation = ({ productData }) => {
     const [changedQuantity, setChangeQuantity] = useState(1);

     const { userInfo } = useContext(AuthContext);
     const { _id, name, } = userInfo
     const { image, category, productName, price, discount, totalReview, rating, totalSell, shopId, shopName, quantity, size, color } = productData;
     const currentDate = new Date();
     const month = currentDate.getMonth() + 1;
     const day = currentDate.getDate();
     const year = currentDate.getFullYear().toString().substr(-2);
     const formattedDate = `${day}-${month}-${year}`;

     const [productInfo, setProductInfo] = useState({});

     useEffect(() => {
          setProductInfo({
               productId: productData._id,
               productName,
               image,
               quantity: 1,
               available: quantity,
               userId: _id,
               userName: name,
               shopId,
               shopName,
               status: 'approved',
               addReview: '',
               isReturn: false,
               date: formattedDate,
               category,
               price,
               size
          });
     }, [productData, _id, name, quantity, formattedDate, category, price, size])

     const handleQuantity = (change) => {
          if (change && changedQuantity === quantity) {
               Swal.fire({
                    icon: 'error',
                    title: 'Not Available',
                    text: `Only ${quantity} product is available in shop`,
                    timer: 2000
               })
               return;
          } else if (!change && changedQuantity === 1) {
               Swal.fire({
                    icon: 'error',
                    title: 'Not Decrease ',
                    text: 'You can not add zero product to cart',
                    timer: 2000,
               })
               return;
          }
          setChangeQuantity((prevQuantity) => prevQuantity + (change ? 1 : -1));
          setProductInfo((prevProductInfo) => ({
               ...prevProductInfo,
               quantity: prevProductInfo.quantity + (change ? 1 : -1),
          }));
     }

     const handleAddProduct = () => {
          console.log("product Information ", productInfo)
          axios.post('https://thread-zone-server-abu-sahad.vercel.app/orderSubmit', productInfo)
               .then(res => {
                    if (res.data.status) {
                         Swal.fire({
                              icon: 'success',
                              title: 'Approve',
                              text: 'Product now add to Product List',
                              timer: 2000
                         })
                    } else {
                         Swal.fire({
                              icon: 'warning',
                              title: 'Found One',
                              text: 'This product is already found in your cart',
                              timer: 2000
                         })
                    }

               })
               .catch(err => {
                    console.log(err);
               })
     }
     return (
          <div className='ms-5'>
               <h2 className="mb-2 text-2xl font-medium uppercase md:text-3xl" >{productName}</h2>
              
               <div className="space-y-2">
                    <p className="space-x-2 font-semibold text-gray-800 ">
                         <span>Availability : </span>
                         <span className="text-green-600" >{quantity} In Stock </span>
                    </p>
                    <p className="space-x-2 font-semibold text-gray-800 ">
                         <span>Shop Name : </span>
                         <span className="text-gray-600" >{shopName}</span>
                    </p>

                    <p className="space-x-2 font-semibold text-gray-800 ">
                         <span>Category : </span>
                         <span className="text-gray-600" > {category} </span>
                    </p>
               </div>
               
                <div className="flex items-center mb-4">
                    <div className="flex gap-1 mt-1 text-sm text-yellow-400">
                         {Array.from({ length: 4 }).map((item, index) => <FontAwesomeIcon key={index} icon={faStar} />)}
                    </div>
                    <div className="ml-3 text-xs text-gray-500">({totalReview} Reviews)</div>
               </div>

               <div className="flex items-baseline gap-3 mt-4 ">
                    <span className="text-xl font-semibold text-primary ">${price}</span>
                    <span className="text-base text-gray-500 line-through">${parseInt(price) + parseInt(discount)}</span>
               </div>
               {/* <!-- ---- Quantity --->  */}
               <div className="mt-4">
                    <h3 className="mb-1 text-base text-gray-800" >Quantity</h3>
                    <div className="flex text-gray-600 border border-gray-300 divide-x divide-gray-300 w-max ">
                         <button onClick={() => { handleQuantity(false) }} className="flex items-center justify-center w-8 h-8 text-xl cursor-pointer select-none"> -  </button>
                         <div className="flex items-center justify-center w-10 h-8"> {changedQuantity} </div>
                         <button onClick={() => { handleQuantity(true) }} className="flex items-center justify-center w-8 h-8 text-xl cursor-pointer select-none"> +  </button>

                    </div>
               </div>
               {/* <!-- ---- End Quantity --->  */}


               {/* <!-- ---- ADD TO CART BUTTON --->  */}

               <div className="flex gap-3 pb-5 mt-6 border-b border-gray-200 ">
                    <button onClick={handleAddProduct} className="flex items-center px-8 py-2 text-sm font-medium text-white uppercase transition border rounded bg-primary border-primary hover:bg-transparent hover:text-primary " >
                         <span className="mr-2"><i className="fas fa-shopping-bag"></i> </span>
                         Add to Cart
                    </button>

                    <button href="#" className="flex items-center px-8 py-2 text-sm font-medium text-gray-600 uppercase transition border border-gray-600 rounded hover:bg-transparent hover:text-primary " >
                         <span className="mr-2"><i className="fas fa-heart"></i> </span>
                         Add Compare List
                    </button>

               </div>
          </div>
     );
};

export default ProductDetailsInformation;