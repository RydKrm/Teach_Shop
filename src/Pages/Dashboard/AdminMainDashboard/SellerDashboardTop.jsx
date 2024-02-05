import React, { useContext, useEffect, useState } from 'react';
// import DashboardIconComponent from './DashboardIconComponent';
import axios from 'axios';
import { faBoxOpen, faMagnifyingGlass, faHandHoldingDollar, faPersonChalkboard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AuthContext } from '../../../Providers/AuthProvider';
const SellerDashboardTop = () => {

  const [info, setInfo] = useState({});
  const { userInfo } = useContext(AuthContext);

  useEffect(() => {
    axios.post('https://thread-zone-server-abu-sahad.vercel.app/findDashboardInformation', { shopId: userInfo.shopId, role: "seller" })
      .then(res => {
        setInfo(res.data[0]);
        console.log("dashboard info ", res.data[0]);
      })
      .then(err => { console.log(err) });
    //   setTimeout(()=>{},1000)

  }, [])

  return (
    <div className='grid grid-cols-2 mx-6 my-6 md:grid-cols-2 lg:grid-cols-4'>
      <div className="flex flex-row mt-5 border border-blue-200 rounded-lg shadow-lg h-28 w-52">
        <FontAwesomeIcon className='p-5 mt-5 text-blue-500 bg-blue-100 rounded-full w-7 h-7 ms-5' icon={faBoxOpen} />
        <div className="flex flex-col mt-7 ms-4">
          <h2 className="mb-1 text-xl font-black font-poppins">12</h2>
          <p className="text-sm font-light font-poppins"> Total Product</p>
        </div>
      </div>
      {/* 2 */}
      <div className="flex flex-row mt-5 border border-blue-200 rounded-lg shadow-lg h-28 w-52">
        <FontAwesomeIcon className='p-5 mt-5 text-blue-500 bg-blue-100 rounded-full w-7 h-7 ms-5' icon={faHandHoldingDollar} />
        <div className="flex flex-col mt-7 ms-4">
          <h2 className="mb-1 text-xl font-black font-poppins">{info.totalReview}</h2>
          <p className="text-sm font-light font-poppins"> Total Review</p>
        </div>
      </div>
      {/* 3 */}
      <div className="flex flex-row mt-5 border border-blue-200 rounded-lg shadow-lg h-28 w-52">
        <FontAwesomeIcon className='p-5 mt-5 text-blue-500 bg-blue-100 rounded-full w-7 h-7 ms-5' icon={faMagnifyingGlass} />
        <div className="flex flex-col mt-7 ms-4">
          <h2 className="mb-1 text-xl font-black font-poppins">{info.totalSell}</h2>
          <p className="text-sm font-light font-poppins"> Total Sells</p>
        </div>
      </div>
      {/* 4 */}
      <div className="flex flex-row mt-5 border border-blue-200 rounded-lg shadow-lg h-28 w-52">
        <FontAwesomeIcon className='p-5 mt-5 text-blue-500 bg-blue-100 rounded-full w-7 h-7 ms-5' icon={faPersonChalkboard} />
        <div className="flex flex-col mt-7 ms-4">
          <h2 className="mb-1 text-xl font-black font-poppins">{info.totalVisit}</h2>
          <p className="text-sm font-light font-poppins"> Total Visit</p>
        </div>
      </div>

    </div>
  );
};

export default SellerDashboardTop;