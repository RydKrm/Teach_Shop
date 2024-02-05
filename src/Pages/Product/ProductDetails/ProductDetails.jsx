import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailsInformation from './ProductDetailsInformation';
import axios from 'axios';
import ProductReviews from './ProductReviews';
const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios.post('https://thread-zone-server-abu-sahad.vercel.app/getSingleProduct', { productId: params.id })
      .then(res => {
        setProduct(res.data[0]);
      })

      .catch(err => { console.log(err) });
  }, [])
  return (

    <div className='max-w-4xl mx-auto'>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 ">
         {product.image && <img src={product.image[0]} height={600} width={320} alt="image  Here"    className='h-200 w-300'/>}
         
        </div>
      <div className='flex flex-col w-full md:w-2/3'>
        <ProductDetailsInformation productData={product} />
      </div>
      </div>
         <ProductReviews productId={params.id} />
    </div>

  );
};

export default ProductDetails;