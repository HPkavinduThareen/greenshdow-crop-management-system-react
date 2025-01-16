




import { useState } from 'react';
import '../index.css';

export const UserStaff = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="min-h-screen p-8">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-semibold text-gray-800">Staff Management</h1>
                <button
                    onClick={openModal}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-md hover:bg-green-700"
                >
                    <span className="text-xl font-bold">+</span> Add Member
                </button>
            </div>

            {/* Filters Section */}
            <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex flex-col w-1/3">
                    <label className="text-sm text-gray-600 mb-2">Filter by Designation</label>
                    <select className="bg-white border border-gray-300 text-gray-700 text-sm rounded-lg p-2 shadow-sm">
                        <option>All Designations</option>
                    </select>
                </div>
                <div className="flex flex-col w-1/3">
                    <label className="text-sm text-gray-600 mb-2">Filter by Gender</label>
                    <select className="bg-white border border-gray-300 text-gray-700 text-sm rounded-lg p-2 shadow-sm">
                        <option>All Genders</option>
                    </select>
                </div>
                <div className="flex-grow flex items-end">
                    <div className="flex items-center w-full">
                        <input
                            type="text"
                            placeholder="Search Staff By Id"
                            className="flex-grow bg-white border border-gray-300 text-sm rounded-lg p-2 shadow-sm"
                        />
                        <button className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700 ml-2">
                            🔍
                        </button>
                    </div>
                </div>
            </div>

            {/* Table Section */}
            <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
                <table className="w-full border-collapse">
                    <thead className="bg-green-600 text-white text-left">

                    <tr>
                        <th className="p-3">Staff Id</th>
                        <th className="p-3">Member Name</th>
                        <th className="p-3">Designation</th>
                        <th className="p-3">Vehicle</th>
                        <th className="p-3">Gender</th>
                        <th className="p-3">Date Of Birth</th>
                        <th className="p-3">Joined Date</th>
                        <th className="p-3">Address</th>
                        <th className="p-3">Mobile</th>
                        <th className="p-3">Email</th>
                        <th className="p-3">Role</th>
                        <th className="p-3">Actions</th>
                    </tr>
                    </thead>
                    <tbody className="text-gray-800">
                    <tr>
                        <td colSpan={12} className="text-center p-4 italic text-gray-500">
                            No staff members found
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

            {/* Modal for Adding Member */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md transform transition-all ease-in-out duration-500 modal-content">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add New Staff Member</h2>
                        <form>
                            {/* Staff Id */}
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-600">Staff Id</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                    placeholder="Enter Staff Id"
                                />
                            </div>
                            {/* Member Name */}
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-600">Member Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                    placeholder="Enter member name"
                                />
                            </div>
                            {/* Designation */}
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-600">Designation</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                    placeholder="Enter designation"
                                />
                            </div>
                            {/* Vehicle */}
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-600">Vehicle</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                    placeholder="Enter vehicle"
                                />
                            </div>
                            {/* Gender */}
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-600">Gender</label>
                                <select
                                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                >
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            {/* Date of Birth */}
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-600">Date Of Birth</label>
                                <input
                                    type="date"
                                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                />
                            </div>
                            {/* Joined Date */}
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-600">Joined Date</label>
                                <input
                                    type="date"
                                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                />
                            </div>
                            {/* Address */}
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-600">Address</label>
                                <textarea
                                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                    placeholder="Enter address"
                                />
                            </div>
                            {/* Mobile */}
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-600">Mobile</label>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                    placeholder="Enter mobile number"
                                />
                            </div>
                            {/* Email */}
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-600">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                    placeholder="Enter email"
                                />
                            </div>
                            {/* Role */}
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-600">Role</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                    placeholder="Enter role"
                                />
                            </div>

                            {/* Action Buttons */}
                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};






