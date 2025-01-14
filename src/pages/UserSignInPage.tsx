// import '../index.css';
// import {useState} from "react";
// import '@fortawesome/fontawesome-free/css/all.css';
//
//
//
//
// export const UserSignInPage = () => {
//
//     const [showPassword, setShowPassword] = useState(false);
//
//     // Toggle the password visibility
//     const togglePasswordVisibility = () => {
//         setShowPassword((prevState) => !prevState);
//     };
//
//
//     return (
//         <>
//             <div
//                 className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-green-450">
//                 <div
//                     className="w-full max-w-xl p-10 bg-white rounded-3xl shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
//                     <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
//                         Login to Your Account
//                     </h2>
//
//                     {/* Login Form */}
//                     <form className="space-y-8">
//
//                         {/* Email Input */}
//                         <div className="mb-6">
//                             <label htmlFor="email" className="block text-lg font-medium text-gray-800">
//                                 Email Address
//                             </label>
//                             <input
//                                 type="email"
//                                 id="email"
//                                 name="email"
//                                 className="w-full p-5 mt-2 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition ease-in-out"
//                                 placeholder="Enter your email"
//                                 required
//                             />
//                         </div>
//
//
//
//
//                         {/* Password Input */}
//                         <div className="relative">
//                             <label htmlFor="email" className="block text-lg font-medium text-gray-800">
//                                 Password
//                             </label>
//                             <input
//                                 type={showPassword ? 'text' : 'password'}
//                                 id="password"
//                                 name="password"
//                                 className="w-full p-5 mt-2 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition ease-in-out"
//                                 placeholder="Enter your password"
//                                 required
//                             />
//
//                             {/*<button*/}
//                             {/*    type="button"*/}
//                             {/*    className="absolute right-4 -top-2/4 transform -translate-y-1/2 text-gray-500 hover:text-green-500"*/}
//                             {/*    onClick={togglePasswordVisibility}*/}
//                             {/*>*/}
//                             {/*    {showPassword ? (*/}
//                             {/*        <i className="fas fa-eye"></i>*/}
//                             {/*    ) : (*/}
//                             {/*        <i className="fas fa-eye-slash"></i>*/}
//                             {/*    )}*/}
//                             {/*</button>*/}
//
//                         </div>
//
//
//                         {/* Submit Button */}
//                         <div className="flex justify-center">
//                             <button
//                                 type="submit"
//                                 className="w-full py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 transition duration-300 ease-in-out"
//                             >
//                                 Log In
//                             </button>
//                         </div>
//                     </form>
//
//                     {/* Forgot Password and Sign Up Links */}
//                     <div className="mt-6 text-center">
//                         <p className="text-lg text-gray-600">
//                         Forgot your password?{' '}
//                             <a href="/forgot-password" className="text-green-600 hover:underline">
//                                 Reset it here
//                             </a>
//                         </p>
//                         <p className="text-lg text-gray-600 mt-4">
//                             Don't have an account?{' '}
//                             <a href="/signup" className="text-green-600 hover:underline">
//                                 Sign up
//                             </a>
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };





import '../index.css';
import { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import {useNavigate} from "react-router-dom";

export const UserSignInPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    // Toggle the password visibility
    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };


    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault(); // Prevent the form's default submit action
        navigate('/Dashbord'); // Redirect to the Dashboard page
    };

    return (
        <>
            <div
                className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-green-450">
                <div className="flex w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">
                    {/* Left Section - Image */}
                    <div className="hidden md:block w-10/12 bg-gradient-to-br from-blue-100">
                        <img
                            src="/src/assets/img.png"
                            alt="E-Tutor Logo"
                            className="w-full h-full object-cover rounded-l-3xl"
                        />
                    </div>


                    {/* Right Section - Form */}
                    <div className="w-full md:w-10/12 p-10">
                        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
                            Login to Your Account
                        </h2>

                        {/* Login Form */}

                        {/*<form className="space-y-8">*/}
                        {/*    /!* Email Input *!/*/}
                        {/*    <div className="mb-6">*/}
                        {/*        <label htmlFor="email" className="block text-lg font-medium text-gray-800">*/}
                        {/*            Email Address*/}
                        {/*        </label>*/}
                        {/*        <input*/}
                        {/*            type="email"*/}
                        {/*            id="email"*/}
                        {/*            name="email"*/}
                        {/*            className="w-full p-5 mt-2 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition ease-in-out"*/}
                        {/*            placeholder="Enter your email"*/}
                        {/*            required*/}
                        {/*        />*/}
                        {/*    </div>*/}

                        {/*    /!* Password Input *!/*/}
                        {/*    <div className="relative">*/}
                        {/*        <label htmlFor="password" className="block text-lg font-medium text-gray-800">*/}
                        {/*            Password*/}
                        {/*        </label>*/}
                        {/*        <input*/}
                        {/*            type={showPassword ? 'text' : 'password'}*/}
                        {/*            id="password"*/}
                        {/*            name="password"*/}
                        {/*            className="w-full p-5 mt-2 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition ease-in-out"*/}
                        {/*            placeholder="Enter your password"*/}
                        {/*            required*/}
                        {/*        />*/}
                        {/*    </div>*/}

                        {/*    /!* Submit Button *!/*/}
                        {/*    <div className="flex justify-center">*/}
                        {/*        <button*/}
                        {/*            type="submit"*/}
                        {/*            className="w-full py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 transition duration-300 ease-in-out"*/}
                        {/*        >*/}
                        {/*            <a href="/Dashbord" className="text-green-600 hover:underline">*/}

                        {/*            </a>*/}
                        {/*            Log In*/}

                        {/*        </button>*/}
                        {/*    </div>*/}
                        {/*</form>*/}


                        <form className="space-y-8" onSubmit={handleLogin}>
                            {/* Email Input */}
                            <div className="mb-6">
                                <label htmlFor="email" className="block text-lg font-medium text-gray-800">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full p-5 mt-2 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition ease-in-out"
                                    placeholder="Enter your email"
                                />
                            </div>

                            {/* Password Input */}
                            <div className="relative">
                                <label htmlFor="password" className="block text-lg font-medium text-gray-800">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="w-full p-5 mt-2 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition ease-in-out"
                                    placeholder="Enter your password"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="w-full py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 transition duration-300 ease-in-out"
                                >
                                    Log In
                                </button>
                            </div>
                        </form>











                        {/* Forgot Password and Sign Up Links */}
                        <div className="mt-6 text-center">
                            <p className="text-lg text-gray-600">
                                Forgot your password?{' '}
                                <a href="/forgot-password" className="text-green-600 hover:underline">
                                    Reset it here
                                </a>
                            </p>
                            <p className="text-lg text-gray-600 mt-4">
                                Don't have an account?{' '}
                                <a href="/signup" className="text-green-600 hover:underline">
                                    Sign up
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
