


import React, { useState } from 'react';
import '../index.css';
import { AuthInputComponent } from "../components/input/AuthInputComponent";
import { AuthButtonComponent } from "../components/button/AuthButtonComponent.tsx";

export const UserField = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const [fieldName, setFieldName] = useState('');
    const [fieldLocation, setFieldLocation] = useState('');
    const [fieldSize, setFieldSize] = useState('');
    const [staffMember, setStaffMember] = useState('');

    // Function to open the modal
    const openModal = () => {
        setIsModalVisible(true);
        setTimeout(() => setIsModalOpen(true), 50);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setIsModalVisible(false), 300);
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg font-sans w-4/5 mx-auto">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-semibold text-gray-800">Field Management</h1>
            </div>

            {/* Search Section */}
            <div className="flex items-center gap-4 mb-6 bg-gray-50 p-4 rounded-lg shadow-sm">
                <select className="border border-gray-300 rounded-lg p-3 text-sm focus:ring-2">
                    <option>Search Field By Id</option>
                </select>
                <input
                    type="text"
                    placeholder="Search..."
                    className="border border-gray-300 rounded-lg p-3 flex-grow focus:ring-2"
                />
                <button
                    className="text-gray-700 p-3 rounded-full shadow hover:bg-gray-200 transition duration-300"
                    aria-label="Search"
                >
                    🔍
                </button>

                <button
                    className="bg-green-400 text-white px-6 py-3 rounded-lg shadow hover:bg-green-400 transition duration-300"
                    onClick={openModal}
                >
                    Add Field
                </button>
            </div>

            {/* Table Section */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse rounded-lg overflow-hidden shadow-lg">
                    <thead>
                    <tr className="bg-green-400 text-white text-left text-sm uppercase tracking-wider">
                        <th className="p-4">Field Id</th>
                        <th className="p-4">Field Name</th>
                        <th className="p-4">Location (GPS)</th>
                        <th className="p-4">Size (sq. meters)</th>
                        <th className="p-4">Staff Member</th>
                        <th className="p-4">Field Image 1</th>
                        <th className="p-4">Field Image 2</th>
                        <th className="p-4">Actions</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td colSpan={8} className="p-6 text-center text-gray-500 italic">
                            No fields available
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

            {/* Modal for Adding Field */}
            {isModalVisible && (
                <div className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ${isModalOpen ? 'opacity-100' : 'opacity-0'}`}>
                    <div
                        className={`bg-white w-full max-w-lg p-8 rounded-lg shadow-lg transform transition-all duration-300 ${isModalOpen ? 'scale-100 translate-y-0' : 'scale-90 translate-y-10'}`}
                    >
                        {/* Modal Header */}
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-semibold text-gray-800">Add New Field</h2>
                            <button
                                onClick={closeModal}
                                className="text-gray-500 hover:text-gray-800 text-xl"
                            >
                                ✖
                            </button>
                        </div>

                        {/* Modal Form */}
                        <form>
                            <AuthInputComponent
                                id="fieldName"
                                type="text"
                                placeholder="Enter Field Name"
                                label="Field Name"
                                value={fieldName}
                                onChange={(e) => setFieldName(e.target.value)}
                            />
                            <AuthInputComponent
                                id="fieldLocation"
                                type="text"
                                placeholder="Enter GPS coordinates"
                                label="Field Location (GPS Coordinates)"
                                value={fieldLocation}
                                onChange={(e) => setFieldLocation(e.target.value)}
                            />
                            <AuthInputComponent
                                id="fieldSize"
                                type="number"
                                placeholder="Enter field size"
                                label="Field Size (in sq. meters)"
                                value={fieldSize}
                                onChange={(e) => setFieldSize(e.target.value)}
                            />
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-2">
                                    Staff Members
                                </label>
                                <select
                                    className="w-full border border-gray-300 rounded-lg p-3"
                                    value={staffMember}
                                    onChange={(e) => setStaffMember(e.target.value)}
                                >
                                    <option>Select Staff Member</option>
                                    {/* Add staff options dynamically here */}
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-2">
                                    Field Image 1
                                </label>
                                <input type="file" className="w-full border border-gray-300 rounded-lg p-3" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-2">
                                    Field Image 2
                                </label>
                                <input type="file" className="w-full border border-gray-300 rounded-lg p-3" />
                            </div>

                            {/* Modal Footer */}
                            <div className="flex justify-end space-x-4">
                                <AuthButtonComponent
                                    type="button"
                                    text="Cancel"
                                    additionalClasses="bg-gray-500 hover:bg-gray-600"
                                    onClick={closeModal}
                                />
                                <AuthButtonComponent
                                    type="submit"
                                    text="Add New Field"
                                    additionalClasses="bg-green-400 hover:bg-green-500"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};
































//
// import React, { useState } from 'react';
// import '../index.css';
// import { AuthInputComponent } from "../components/input/AuthInputComponent";
// import { AuthButtonComponent } from "../components/button/AuthButtonComponent.tsx";
//
// export const UserField = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [isModalVisible, setIsModalVisible] = useState(false);
//
//     const [fieldName, setFieldName] = useState('');
//     const [fieldLocation, setFieldLocation] = useState('');
//     const [fieldSize, setFieldSize] = useState('');
//     const [staffMember, setStaffMember] = useState('');
//     const [fields, setFields] = useState([]); // Array to store fields temporarily
//
//     // Function to open the modal
//     const openModal = () => {
//         setIsModalVisible(true);
//         setTimeout(() => setIsModalOpen(true), 50);
//     };
//
//     // Function to close the modal
//     const closeModal = () => {
//         setIsModalOpen(false);
//         setTimeout(() => setIsModalVisible(false), 300);
//     };
//
//     // Function to handle form submission
//     const handleAddField = (e) => {
//         e.preventDefault(); // Prevent page refresh
//
//         // Create new field object
//         const newField = {
//             id: fields.length + 1,  // Temporary ID based on array length (you could use a unique ID generator here)
//             fieldName,
//             fieldLocation,
//             fieldSize,
//             staffMember,
//         };
//
//         // Add the new field to the fields array
//         setFields((prevFields) => [...prevFields, newField]);
//
//         // Clear form fields after adding
//         setFieldName('');
//         setFieldLocation('');
//         setFieldSize('');
//         setStaffMember('');
//
//         // Close modal after adding field
//         closeModal();
//     };
//
//     return (
//         <div className="bg-white p-8 rounded-lg shadow-lg font-sans w-4/5 mx-auto">
//             {/* Header Section */}
//             <div className="flex justify-between items-center mb-6">
//                 <h1 className="text-3xl font-semibold text-gray-800">Field Management</h1>
//             </div>
//
//             {/* Search Section */}
//             <div className="flex items-center gap-4 mb-6 bg-gray-50 p-4 rounded-lg shadow-sm">
//                 <select className="border border-gray-300 rounded-lg p-3 text-sm focus:ring-2">
//                     <option>Search Field By Id</option>
//                 </select>
//                 <input
//                     type="text"
//                     placeholder="Search..."
//                     className="border border-gray-300 rounded-lg p-3 flex-grow focus:ring-2"
//                 />
//                 <button
//                     className="text-gray-700 p-3 rounded-full shadow hover:bg-gray-200 transition duration-300"
//                     aria-label="Search"
//                 >
//                     🔍
//                 </button>
//
//                 <button
//                     className="bg-green-400 text-white px-6 py-3 rounded-lg shadow hover:bg-green-400 transition duration-300"
//                     onClick={openModal}
//                 >
//                     Add Field
//                 </button>
//             </div>
//
//             {/* Table Section */}
//             <div className="overflow-x-auto">
//                 <table className="w-full border-collapse rounded-lg overflow-hidden shadow-lg">
//                     <thead>
//                     <tr className="bg-green-400 text-white text-left text-sm uppercase tracking-wider">
//                         <th className="p-4">Field Id</th>
//                         <th className="p-4">Field Name</th>
//                         <th className="p-4">Location (GPS)</th>
//                         <th className="p-4">Size (sq. meters)</th>
//                         <th className="p-4">Staff Member</th>
//                         <th className="p-4">Field Image 1</th>
//                         <th className="p-4">Field Image 2</th>
//                         <th className="p-4">Actions</th>
//                     </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                     {fields.length > 0 ? (
//                         fields.map((field) => (
//                             <tr key={field.id}>
//                                 <td className="p-4">{field.id}</td>
//                                 <td className="p-4">{field.fieldName}</td>
//                                 <td className="p-4">{field.fieldLocation}</td>
//                                 <td className="p-4">{field.fieldSize}</td>
//                                 <td className="p-4">{field.staffMember}</td>
//                                 <td className="p-4">Image 1</td>
//                                 <td className="p-4">Image 2</td>
//                                 <td className="p-4">
//                                     <button className="text-blue-500 hover:text-blue-700">Edit</button>
//                                     <button className="ml-4 text-red-500 hover:text-red-700">Delete</button>
//                                 </td>
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td colSpan={8} className="p-6 text-center text-gray-500 italic">
//                                 No fields available
//                             </td>
//                         </tr>
//                     )}
//                     </tbody>
//                 </table>
//             </div>
//
//             {/* Modal for Adding Field */}
//             {isModalVisible && (
//                 <div className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ${isModalOpen ? 'opacity-100' : 'opacity-0'}`}>
//                     <div
//                         className={`bg-white w-full max-w-lg p-8 rounded-lg shadow-lg transform transition-all duration-300 ${isModalOpen ? 'scale-100 translate-y-0' : 'scale-90 translate-y-10'}`}
//                     >
//                         {/* Modal Header */}
//                         <div className="flex justify-between items-center mb-6">
//                             <h2 className="text-2xl font-semibold text-gray-800">Add New Field</h2>
//                             <button
//                                 onClick={closeModal}
//                                 className="text-gray-500 hover:text-gray-800 text-xl"
//                             >
//                                 ✖
//                             </button>
//                         </div>
//
//                         {/* Modal Form */}
//                         <form onSubmit={handleAddField}>
//                             <AuthInputComponent
//                                 id="fieldName"
//                                 type="text"
//                                 placeholder="Enter Field Name"
//                                 label="Field Name"
//                                 value={fieldName}
//                                 onChange={(e) => setFieldName(e.target.value)}
//                             />
//                             <AuthInputComponent
//                                 id="fieldLocation"
//                                 type="text"
//                                 placeholder="Enter GPS coordinates"
//                                 label="Field Location (GPS Coordinates)"
//                                 value={fieldLocation}
//                                 onChange={(e) => setFieldLocation(e.target.value)}
//                             />
//                             <AuthInputComponent
//                                 id="fieldSize"
//                                 type="number"
//                                 placeholder="Enter field size"
//                                 label="Field Size (in sq. meters)"
//                                 value={fieldSize}
//                                 onChange={(e) => setFieldSize(e.target.value)}
//                             />
//                             <div className="mb-4">
//                                 <label className="block text-gray-700 font-medium mb-2">
//                                     Staff Members
//                                 </label>
//                                 <select
//                                     className="w-full border border-gray-300 rounded-lg p-3"
//                                     value={staffMember}
//                                     onChange={(e) => setStaffMember(e.target.value)}
//                                 >
//                                     <option>Select Staff Member</option>
//                                     {/* Add staff options dynamically here */}
//                                 </select>
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-gray-700 font-medium mb-2">
//                                     Field Image 1
//                                 </label>
//                                 <input type="file" className="w-full border border-gray-300 rounded-lg p-3" />
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-gray-700 font-medium mb-2">
//                                     Field Image 2
//                                 </label>
//                                 <input type="file" className="w-full border border-gray-300 rounded-lg p-3" />
//                             </div>
//
//                             {/* Modal Footer */}
//                             <div className="flex justify-end space-x-4">
//                                 <AuthButtonComponent
//                                     type="button"
//                                     text="Cancel"
//                                     additionalClasses="bg-gray-500 hover:bg-gray-600"
//                                     onClick={closeModal}
//                                 />
//                                 <AuthButtonComponent
//                                     type="submit"
//                                     text="Add New Field"
//                                     additionalClasses="bg-green-400 hover:bg-green-500"
//                                 />
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };
