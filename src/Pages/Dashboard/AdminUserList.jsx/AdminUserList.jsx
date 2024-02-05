import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const AdminUserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get('https://thread-zone-server-abu-sahad.vercel.app/users')
      .then(res => {
        setUsers(res.data);
        console.log('users => ', res.data)
      })
      .then(err =>
        console.log(err));
  }, []);
  return (
    <div className="mt-10 overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th> Name</th>
            {/* <th>Role</th> */}
            <th>Email</th>
            <th>Number</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user) =>
              <tr key={user._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="w-12 h-12 mask mask-squircle">
                        {
                          user.photoURL ? <img src={user.photoURL} alt="Avatar Tailwind CSS Component" />
                          : 
                          <img src='../../../../public/images/users/user.jpg' alt="Avatar Tailwind CSS Component" />
                        }
                        
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                      <div className="text-sm opacity-50">{user.userName}</div>
                    </div>
                  </div>
                </td>
                <td>

                  <span className="badge badge-ghost badge-sm">{user.email}</span>
                </td>
                <td>{
                  user.phoneNumber ? user.phoneNumber : 'Not Add Yet'
                  }</td>
                <td>{user.date}</td>
                <th>
                  <button className={`btn btn-ghost  hover:text-black bg-green-500  text-white btn-xs`}> {user.role ? user.role : "Customer"}
                  </button>
                </th>
              </tr>
            )
          }

        </tbody>
      </table>
    </div>
  );
};

export default AdminUserList;