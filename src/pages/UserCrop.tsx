







import React, { useState } from 'react';
import '../index.css';


export const UserCrop = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cropData, setCropData] = useState({
        cropCode: '',
        commonName: '',
        scientificName: '',
        fieldId: '',
        category: '',
        season: '',
        cropImage1: null,
    });

    // Function to open the modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Function to handle form input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setCropData({ ...cropData, [name]: value });
    };

    // Function to handle form submission (for now, just log the data)
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(cropData);
        closeModal(); // Close modal after submission
    };

    return (
        <div className="min-h-screen bg-gradient-to-r p-8 font-sans">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-semibold text-gray-800">Crop Management</h1>
                <button
                    className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition duration-300 flex items-center gap-2"
                    onClick={openModal}
                >
                    <span className="text-xl">+</span> Add Crop
                </button>
            </div>

            {/* Search Section */}
            <div className="flex items-center gap-4 mb-6 bg-white p-4 rounded-lg shadow-md">
                <select className="bg-gray-50 border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-green-300">
                    <option>Search Crop By Id</option>
                </select>
                <input
                    type="text"
                    placeholder="Search..."
                    className="bg-gray-50 border border-gray-300 rounded-lg p-3 flex-grow focus:ring-2 focus:ring-green-300"
                />
                <button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition duration-300">
                    🔍 Search
                </button>
            </div>

            {/* Table Section */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse rounded-lg overflow-hidden shadow-lg bg-white">
                    <thead>
                    <tr className="bg-green-500 text-white text-left text-sm uppercase tracking-wider">
                        <th className="p-4">Crop Code</th>
                        <th className="p-4">Crop Common Name</th>
                        <th className="p-4">Crop Scientific Name</th>
                        <th className="p-4">Field Id</th>
                        <th className="p-4">Category</th>
                        <th className="p-4">Crop Season</th>
                        <th className="p-4">Crop Image 1</th>
                        <th className="p-4">Actions</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {/* Empty state row */}
                    <tr>
                        <td
                            colSpan={8}
                            className="p-6 text-center text-gray-500 italic"
                        >
                            No crops available
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

            {/* Modal for adding crop */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300">
                    <div
                        className="bg-white w-full max-w-lg p-8 rounded-lg shadow-lg transform transition-all duration-300"
                    >
                        {/* Modal Header */}
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-semibold text-gray-800">Add New Crop</h2>
                            <button
                                onClick={closeModal}
                                className="text-gray-500 hover:text-gray-800 text-xl"
                            >
                                ✖
                            </button>
                        </div>

                        {/* Modal Form */}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-2" htmlFor="cropCode">
                                    Crop Code
                                </label>
                                <input
                                    type="text"
                                    id="cropCode"
                                    name="cropCode"
                                    placeholder="Enter Crop Code"
                                    value={cropData.cropCode}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg p-3"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-2" htmlFor="commonName">
                                    Common Name
                                </label>
                                <input
                                    type="text"
                                    id="commonName"
                                    name="commonName"
                                    placeholder="Enter Crop Common Name"
                                    value={cropData.commonName}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg p-3"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-2" htmlFor="scientificName">
                                    Scientific Name
                                </label>
                                <input
                                    type="text"
                                    id="scientificName"
                                    name="scientificName"
                                    placeholder="Enter Crop Scientific Name"
                                    value={cropData.scientificName}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg p-3"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-2" htmlFor="fieldId">
                                    Field Id
                                </label>
                                <input
                                    type="text"
                                    id="fieldId"
                                    name="fieldId"
                                    placeholder="Enter Field Id"
                                    value={cropData.fieldId}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg p-3"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-2" htmlFor="category">
                                    Category
                                </label>
                                <input
                                    type="text"
                                    id="category"
                                    name="category"
                                    placeholder="Enter Crop Category"
                                    value={cropData.category}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg p-3"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-2" htmlFor="season">
                                    Season
                                </label>
                                <input
                                    type="text"
                                    id="season"
                                    name="season"
                                    placeholder="Enter Crop Season"
                                    value={cropData.season}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg p-3"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-2" htmlFor="cropImage1">
                                    Crop Image 1
                                </label>
                                <input
                                    type="file"
                                    id="cropImage1"
                                    name="cropImage1"
                                    onChange={(e) => setCropData({ ...cropData, cropImage1: e.target.files?.[0] })}
                                    className="w-full border border-gray-300 rounded-lg p-3"
                                />
                            </div>

                            <div className="flex justify-end space-x-4">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="bg-gray-500 text-white px-6 py-3 rounded-lg"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-green-500 text-white px-6 py-3 rounded-lg"
                                >
                                    Add Crop
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

