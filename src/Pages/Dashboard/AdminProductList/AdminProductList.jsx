import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AdminProductList = () => {
  const [products, setProducts] = useState([]);
 
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
        setProducts(res.data.productArray);
      })
      .catch((err) => {
        console.log('Error:', err);
      });
  }, []);
  return (
    <div className="mt-10 overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
            </th>
            <th>Product Name</th>
            <th>Shop Name</th>
            <th>Price</th>
            <th>Total Sells</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((product) =>
              <tr key={product._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" value={product.id} />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="w-12 h-12 mask mask-squircle">
                        <img src={product.image} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{product.productName}</div>
                      <div className="text-sm opacity-50">{product.category}</div>
                    </div>
                  </div>
                </td>
                <td>

                  <span className="badge badge-ghost badge-sm">{product.shopName}</span>
                </td>
                <td>$ {product.price }</td>
                <td className='ps-5'>{product.totalSell}</td>
                <th>
                  <Link to={`../../product/productDetails/${product._id}`} className={`btn btn-ghost  hover:text-black bg-green-500  text-white btn-xs`}> View
                  </Link>
                </th>
              </tr>
            )
          }

        </tbody>
      </table>
    </div>
  );
};

export default AdminProductList;