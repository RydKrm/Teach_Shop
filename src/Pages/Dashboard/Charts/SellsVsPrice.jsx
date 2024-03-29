import React, { PureComponent } from 'react';
import { Area, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip,ResponsiveContainer } from 'recharts';


const SellsVsPrice = (params)=>{
   const chartData = params.data;
    return (
        <div className='w-full h-60'>
          <p className="text-xl text-center">Sells vs Price </p>
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
          <Area type="monotone" dataKey="TotalSells" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
       <p className='mt-3 text-base text-center '>It's show most selling product ranges</p>
        </div>
       
    );
  
}

export default SellsVsPrice;
