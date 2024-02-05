import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import img from '../../assets/Ecommerce image/login/login.jpg'

const Registration = () => {

    const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [phoneNumber, setPhoneNumber] = useState(false);
    const handlePhone = (e)=>{
        const value = e.target.value;
        console.log('phone number => ',value[0],value[1],value[2],value[3], " length => ",value.length)
        if(value[0]!=='+' && value[1] !=='8' && value[2]!=='8' && value[3]!=='0'){
            setPhoneNumber(true);
        }else if (value.length !==14){
            setPhoneNumber(true);
        } else {
            setPhoneNumber(false);
        }
    }

    const handleLoginSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        Swal.fire({
            title: 'User Login Successful.',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        });
        navigate('/');        
    }

    return (
        <div>
            <section className="h-screen">
                <div className="h-full">
                    <div className="flex flex-wrap items-center justify-center h-full g-6 lg:justify-between">
                        <div className="hidden mb-12 md:hidden lg:block md:shrink-1 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                            <img
                                src={img}
                                className="w-full"
                                alt="Sample image"
                            />
                        </div>

                        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                            <form onSubmit={handleLoginSubmit} className="px-8 py-6">
                                <div className="mb-4">
                                    <label className="block mb-2 text-lg font-semibold text-gray-800" htmlFor="username">
                                        User Name
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                        type="text"
                                        id="name"
                                        placeholder="Enter your name"
                                        name='name'
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-lg font-semibold text-gray-800" htmlFor="username">
                                        User Phone Number
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                        type="text"
                                        id="phone"
                                        placeholder="Enter your phone number"
                                        name='phone'
                                        onChange={handlePhone}
                                    />
                                   {phoneNumber &&  <p className="text-sm text-center text-red-500">Use Bangladeshi Number like '+8801745461622</p>} 
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-lg font-semibold text-gray-800" htmlFor="username">
                                        User Email
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                        type="email"
                                        id="email"
                                        placeholder="Enter your Email"
                                        name='email'
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-lg font-semibold text-gray-800" htmlFor="password">
                                        Password
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                        type="password"
                                        id="password"
                                        placeholder="Enter your password"
                                        name='password'
                                    />
                                </div>
                                <button className="w-full btn btn-success" type='submit'>Registration</button>
                            </form>
                            <div className="text-center lg:text-left">
                                <p className="pt-1 mt-2 mb-0 text-sm font-semibold">
                                    Have an account ?
                                    <Link
                                        to="/login"
                                        className="text-red-400 transition duration-150 ease-in-out hover:text-danger-600 focus:text-rdd-600 active:text-red-700 ms-2"
                                    >
                                        Login
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Registration;
