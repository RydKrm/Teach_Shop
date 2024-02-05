import React from 'react';
import { AreaChart,Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,Text} from 'recharts';


const DayVsPrice = (params)=>{
   const chartData  = [
  { _id: '2024-02-01', totalPrice: 1500, totalProducts: 10 },
  { _id: '2024-02-02', totalPrice: 1800, totalProducts: 12 },
  { _id: '2024-02-03', totalPrice: 1200, totalProducts: 8 },
  { _id: '2024-02-04', totalPrice: 2000, totalProducts: 15 },
  { _id: '2024-02-05', totalPrice: 1600, totalProducts: 11 },
  { _id: '2024-02-06', totalPrice: 1400, totalProducts: 9 },
  { _id: '2024-02-07', totalPrice: 1900, totalProducts: 13 },
  { _id: '2024-02-08', totalPrice: 1700, totalProducts: 10 },
  { _id: '2024-02-09', totalPrice: 2200, totalProducts: 18 },
  { _id: '2024-02-10', totalPrice: 1300, totalProducts: 7 },
];

    return (
      <div className='w-full h-60'>
        <p className="text-xl text-center">Days vs Price </p>
          <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={chartData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="_id" />
          <YAxis />  
          <Tooltip />
          <Area type="monotone" dataKey="totalPrice" stroke="#3697D8" fill="#8884d8" />
          <Area type="monotone" dataKey="totalProducts" stroke="#3697D8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
      <p className='mt-3 text-base text-center ms-8'>It's show how much product sells every day</p>
    </div>
     
    );
  
}

export default DayVsPrice;
