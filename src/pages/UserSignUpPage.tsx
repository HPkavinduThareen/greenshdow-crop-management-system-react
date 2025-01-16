//
// import { useState, useEffect } from "react";
// import "../index.css";
// import "../components/input/AuthInputComponent.tsx"
//
//
// export const UserSignUpPage = () => {
//     const [formData, setFormData] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//     });
//
//     // Retrieve userArray from localStorage, ensuring persistence
//     const [userArray, setUserArray] = useState(() => {
//         const savedUsers = localStorage.getItem("userArray");
//         return savedUsers ? JSON.parse(savedUsers) : [];
//     });
//
//     useEffect(() => {
//         // Sync userArray with localStorage whenever it changes
//         localStorage.setItem("userArray", JSON.stringify(userArray));
//     }, [userArray]);
//
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//
//         // Validation for password match
//         if (formData.password !== formData.confirmPassword) {
//             alert("Passwords do not match!");
//             return;
//         }
//
//         // Add new user to userArray
//         setUserArray([...userArray, formData]);
//
//         // Clear form fields after submission
//         setFormData({
//             firstName: "",
//             lastName: "",
//             email: "",
//             password: "",
//             confirmPassword: "",
//         });
//     };
//
//
//     useEffect(() => {
//          console.log("User Array:", userArray); // Log the userArray to the console whenever it changes
//     }, [userArray]); // Trigger this effect whenever userArray changes
//
//
//     return (
//         <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-400">
//             <div className="bg-white rounded-lg shadow-md flex w-full max-w-4xl">
//                 {/* Left Section with Image */}
//                 <div className="w-1/2 hidden md:block">
//                     <img
//                         src="/src/assets/img.png"
//                         alt="Sign Up"
//                         className="w-full h-full object-cover rounded-l-lg"
//                     />
//                 </div>
//
//                 {/* Right Section with Form */}
//                 <div className="w-full md:w-1/2 p-8">
//                     <h1 className="text-2xl font-bold text-center text-green-600 mb-6">
//                         GreenShadow Sign Up
//                     </h1>
//                     <form onSubmit={handleSubmit} className="space-y-4">
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700">
//                                 First Name
//                             </label>
//                             <input
//                                 type="text"
//                                 name="firstName"
//                                 value={formData.firstName}
//                                 onChange={handleChange}
//                                 placeholder="John"
//                                 required
//                                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700">
//                                 Last Name
//                             </label>
//                             <input
//                                 type="text"
//                                 name="lastName"
//                                 value={formData.lastName}
//                                 onChange={handleChange}
//                                 placeholder="Doe"
//                                 required
//                                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700">
//                                 Email
//                             </label>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 placeholder="john.doe@example.com"
//                                 required
//                                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700">
//                                 Password
//                             </label>
//                             <input
//                                 type="password"
//                                 name="password"
//                                 value={formData.password}
//                                 onChange={handleChange}
//                                 placeholder="********"
//                                 required
//                                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700">
//                                 Confirm Password
//                             </label>
//                             <input
//                                 type="password"
//                                 name="confirmPassword"
//                                 value={formData.confirmPassword}
//                                 onChange={handleChange}
//                                 placeholder="********"
//                                 required
//                                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//                             />
//                         </div>
//                         <button
//                             type="submit"
//                             className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition duration-300"
//                         >
//                             Sign Up
//                         </button>
//                         <p className="text-center text-sm text-gray-600 mt-4">
//                             Already have an account?{" "}
//                             <a href="/signin" className="text-green-500 hover:underline">
//                                 Log In
//                             </a>
//                         </p>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
//
//
//
//
//
//
//



























import { useState, useEffect } from "react";
import "../index.css";
import { AuthInputComponent } from "../components/input/AuthInputComponent";

export const UserSignUpPage = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [userArray, setUserArray] = useState(() => {
        const savedUsers = localStorage.getItem("userArray");
        return savedUsers ? JSON.parse(savedUsers) : [];
    });

    useEffect(() => {
        localStorage.setItem("userArray", JSON.stringify(userArray));
        console.log(userArray);
    }, [userArray]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        setUserArray([...userArray, formData]);

        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-400">
            <div className="bg-white rounded-lg shadow-md flex flex-col md:flex-row w-full max-w-4xl">
                {/* Left Section */}
                <div className="w-full md:w-1/2 hidden md:block">
                    <img
                        src="/src/assets/img.png"
                        alt="Sign Up"
                        className="w-full h-full object-cover rounded-l-lg"
                    />
                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/2 p-8">
                    <h1 className="text-2xl font-bold text-center text-green-600 mb-6">
                        GreenShadow Sign Up
                    </h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <AuthInputComponent
                            id="firstName"
                            type="text"
                            placeholder="John"
                            label="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                        <AuthInputComponent
                            id="lastName"
                            type="text"
                            placeholder="Doe"
                            label="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                        <AuthInputComponent
                            id="email"
                            type="email"
                            placeholder="john.doe@example.com"
                            label="Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <AuthInputComponent
                            id="password"
                            type="password"
                            placeholder="********"
                            label="Password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <AuthInputComponent
                            id="confirmPassword"
                            type="password"
                            placeholder="********"
                            label="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                        <button
                            type="submit"
                            className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300"
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
    );
};


























