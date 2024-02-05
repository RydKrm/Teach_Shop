import React, { useEffect, useState } from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import ProductReviewList from './ProductReviewList';
const ProductReviews = (params) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.post('https://thread-zone-server-abu-sahad.vercel.app/getReviewList', { role: 'product', productId: params.productId })
            .then(res => {
                setReviews(res.data)
            })
            .catch(err => console.log(err));

    }, []);

    let stars = Array(6).fill(0);
    for (const item of reviews) {
        stars[item.rating]++;
    }

    return (
        <>
            <h1 className="mb-5 text-3xl text-center font-poppins">Reviews :  </h1>

            <div className="my-10 divide-y">
                <ProductReviewList reviewList={stars} />
                {
                    reviews.map((review, index) =>
                        <div key={index} className="flex flex-col mt-5 md:flex-row">
                            <div className="h-20 mt-10 w-44 ms-20">
                                <img src={review.image} className='h-20 p-1 shadow-md w-36' alt="" />
                            </div>
                            <div className="flex flex-col text-left ms-5">
                                <div className="pl-4 my-4 italic ">
                                    <span className="text-gray-600"> <div dangerouslySetInnerHTML={{ __html: review.description }} />   </span>
                                </div>
                                <div className="flex flex-row gap-1 my-3 ms-10">
                                    {
                                        Array.from({ length: review.rating }).map((_, index) => (
                                            <FontAwesomeIcon key={index}
                                                className={`text-xl text-yellow-400`}
                                                onClick={() => { addStar(index + 1) }} icon={faStar} />
                                        ))
                                    }

                                </div>


                                <div className='flex flex-row ms-5'>
                                    <img src={review.userImage} className='w-10 h-10 mx-5 rounded-full' alt="" />
                                    <p className='mt-2 font-bold'>{review.userName}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default ProductReviews;