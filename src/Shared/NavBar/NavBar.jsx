import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
        navigate('/')
    }
    return (
        <div className="max-w-6xl mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/shopCart'>Shopping Cart</Link></li>
                            <li><Link to='/product'>Product list</Link></li>
                        </ul>
                    </div>
                    <Link className="text-2xl font-bold normal-case btn btn-ghost">Tech Shop</Link>
                </div>
                <div className="hidden navbar-center lg:flex">
                    <ul className="px-1 menu menu-horizontal">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/shopCart'>Shopping Cart</Link></li>
                        <li><Link to='/product'>Product list</Link></li>
                        <li><Link to='/dashboard/main'>Dashboard</Link></li>
                    </ul>
                </div>

                <div className="navbar-end">
                    {
                        user ? <>
                            <div style={{
                                width: "25px",
                                height: "25px",
                                borderRadius: "50%", // This will create a circular shape
                                overflow: "hidden" // To clip the image within the circular container
                            }}>
                                <img
                                    src={user.photoURL}
                                    alt="User"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            </div>
                            
                            <button onClick={handleLogOut} className="btn btn-ghost btn-sm">LogOut</button>
                        </> : <>
                            <li><Link to="/login">Login</Link></li>
                        </>
                    }
                </div>
            </div>

        </div>
    );
};

export default NavBar;


{/*  */ }