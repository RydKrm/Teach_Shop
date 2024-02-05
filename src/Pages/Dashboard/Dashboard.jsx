import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaHome } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxArchive, faPerson, faUser } from '@fortawesome/free-solid-svg-icons';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    return (
    <div>    
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="flex flex-col drawer-content">
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        </div>
        <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <div className='h-full p-4 menu w-80 text-base-content'>
                <ul className="bg-base-200 rounded-md h-[80%] p-5 pl-10">
                <li><Link to='/dashboard/main'><FaHome />Dashboard</Link></li>
                <li><Link to='/dashboard/userList'><FontAwesomeIcon icon={faPerson}/>
                Manage Users</Link></li>
                <li><Link to='/dashboard/productList'><FontAwesomeIcon icon={faBoxArchive}/>
                Products</Link></li>
                
                </ul>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Dashboard;