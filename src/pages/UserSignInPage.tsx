
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";

interface FormData {
    email: string;
    password: string;
}

interface User {
    email: string;
    password: string;
}

export const UserSignInPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    // State for form input
    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: "",
    });

    const [userArray, setUserArray] = useState<User[]>([]);

    const navigate = useNavigate();

    // Retrieve userArray from localStorage, ensuring persistence
    useEffect(() => {
        const savedUsers = localStorage.getItem("userArray");
        if (savedUsers) {
            setUserArray(JSON.parse(savedUsers));
        }
    }, []);

    // Handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Toggle the password visibility
    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent the form's default submit action

        // Check if the user exists in the userArray
        const user = userArray.find(
            (user) =>
                user.email === formData.email && user.password === formData.password
        );

        if (user) {
            console.log("Login Successful");
            navigate("/dashbord"); // Redirect to the Dashboard page
        } else {
            console.log("Invalid Credentials");
            alert("Invalid email or password. Please try again.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-green-450">
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
                                value={formData.email}
                                onChange={handleChange}
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
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full p-5 mt-2 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition ease-in-out"
                                placeholder="Enter your password"
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute right-3 top-12 text-gray-500 hover:text-gray-700"
                            >
                                <i
                                    className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                                ></i>
                            </button>
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
                            Forgot your password?{" "}
                            <a href="/forgot-password" className="text-green-600 hover:underline">
                                Reset it here
                            </a>
                        </p>
                        <p className="text-lg text-gray-600 mt-4">
                            Don't have an account?{" "}
                            <a href="/signup" className="text-green-600 hover:underline">
                                Sign up
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};


