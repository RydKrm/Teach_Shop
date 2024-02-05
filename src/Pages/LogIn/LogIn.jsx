import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import img from '../../assets/Ecommerce image/login/login.jpg'
const Login = () => {

    const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";



    const handleLoginSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
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

                                <button className="w-full btn btn-success" type='submit'> Log In</button>
                            </form>

                            <div className="text-center lg:text-left">
                                <p className="pt-1 mt-2 mb-0 text-sm font-semibold">
                                    Do not have an account ?
                                    <Link
                                        to="/registration"
                                        className="text-red-400 transition duration-150 ease-in-out hover:text-danger-600 focus:text-rdd-600 active:text-red-700 ms-2"
                                    >
                                        Register
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

export default Login;
