import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DayVsPrice from '../Charts/DayVsPrice';
import SellsVsPrice from '../Charts/SellsVsPrice';
import SellerDashboardTop from './SellerDashboardTop';

const AdminMainDashboard = () => {
    const [dayVsPrice, setDayVsPrice] = useState([]);
    const [sellsVsPrice, setSellsVsPrice] = useState([]);
    useEffect(() => {
        axios.post('https://thread-zone-server-abu-sahad.vercel.app/dayVsOrder', { role: 'admin' })
            .then(res => {
                setDayVsPrice(res.data);
                console.log('Day vs Order  =>  ',res.data)
            })
            .catch(err => console.log(err));
    }, [])

    useEffect(()=>{
        axios.post('https://thread-zone-server-abu-sahad.vercel.app/sellsVsPrice', { role: 'admin' })
    .then(res => {
        setSellsVsPrice(res.data);
        console.log("Day vs Price => ", res.data)
    })
    .catch(err => console.log(err));
    },[])


    return (
        <div>
            <SellerDashboardTop />
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                 <DayVsPrice data={dayVsPrice} />   
                </div>
               <div className="w-full md:w-1/2">
                <SellsVsPrice data={sellsVsPrice} />
               </div>
               
              </div>
        </div>
    );
};

export default AdminMainDashboard;