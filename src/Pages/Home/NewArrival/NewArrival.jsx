import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductSingle from '../../Product/ProductSingle';

const NewArrival = () => {
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
        const newData = res.data.productArray.splice(4);
        console.log("new Arraival data => ",res.data.productArray)
        setProductList(res.data.productArray);
      })
      .catch((err) => {
        console.log('Error:', err);
      });
  }, []);

    return (
        <section className='max-w-6xl mx-auto mt-10 mb-10'>
            <h1 className='my-5 text-4xl text-center uppercase'>New Arrival</h1>
                <div className="grid grid-cols-1 gap-4 mx-5 md:grid-cols-2 lg:grid-cols-4 md:mx-0">
                    {productList.map(singleProduct =>
                        <ProductSingle
                            key={singleProduct._id}
                            item={singleProduct}
                       />
                    )}
                </div>
        </section>
    );
};

export default NewArrival;
