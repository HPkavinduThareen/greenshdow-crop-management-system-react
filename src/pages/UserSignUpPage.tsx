import { useState } from "react";
import "../index.css";

export const UserSignUpPage = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validation or API call logic goes here
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log("Form submitted: ", formData);
    };

    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-400 ">
                <div className="bg-white rounded-lg shadow-md flex w-full max-w-4xl">
                    {/* Left Section with Image */}
                    <div className="w-1/2 hidden md:block">
                        <img
                            src="/src/assets/img.png"
                            alt="Sign Up"
                            className="w-full h-full object-cover rounded-l-lg"
                        />
                    </div>

                    {/* Right Section with Form */}
                    <div className="w-full md:w-1/2 p-8">
                        <h1 className="text-2xl font-bold text-center text-green-600 mb-6">
                            GreenShadow Sign Up
                        </h1>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="John"
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Doe"
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john.doe@example.com"
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="********"
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="********"
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition duration-300"
                            >
                                Sign Up
                            </button>
                            <p className="text-center text-sm text-gray-600 mt-4">
                                Already have an account?{" "}
                                <a href="/signin" className="text-green-500 hover:underline">
                                    Log In
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
