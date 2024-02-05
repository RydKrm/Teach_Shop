import React, { useContext, useEffect, useState } from 'react';
import './Product.css';
import axios from 'axios';
import ProductSingle from './ProductSingle';

const Product = () => {
  const [productList, setProductList] = useState([]);
  
  const state = {
  sortBy: null,
  filterByRating: null,
  minPrice: null,
  maxPrice: null,
  size: null,
  color: null,
  category: null,
  page: 1,
  };

  useEffect(() => {
    axios.post('https://thread-zone-server-abu-sahad.vercel.app/getProducts', state)
      .then((res) => {
        setProductList(res.data.productArray);
      })
      .catch((err) => {
        console.log('Error:', err);
      });
  }, []);

  return (

    <div className="relative grid items-start w-full max-w-6xl gap-4 px-4 pt-4 pb-4 mx-auto lg:grid-cols-4">
      <div className="flex flex-col col-span-4">
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'>
         {
            productList.map(item=> <ProductSingle key={item._id} item={item} />)  
         }   
         </div> 
      </div>
    </div>
  );
};

export default Product;