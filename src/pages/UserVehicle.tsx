

import{ useState } from "react";
import { AuthInputComponent } from "../components/input/AuthInputComponent";
import { AuthButtonComponent } from "../components/button/AuthButtonComponent.tsx";


export const UserVehicle = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalToggle = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="min-h-screen bg-green-100 p-8">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Vehicle Management</h1>
                <button
                    className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-md hover:bg-green-700"
                    onClick={handleModalToggle}
                >
                    <span className="text-xl font-bold">+</span> Add new
                </button>
            </div>

            {/* Search Section */}
            <div className="flex items-center gap-4 mb-6">
                <select className="bg-white border border-gray-300 text-gray-700 text-sm rounded-lg p-2 shadow-sm">
                    <option>Search Log By Id</option>
                    {/* Add more options if needed */}
                </select>
                <div className="flex items-center">
                    <input
                        type="text"
                        placeholder="Enter Log ID"
                        className="flex-grow bg-white border border-gray-300 text-sm rounded-lg p-2 shadow-sm"
                    />
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700 ml-2">
                        🔍
                    </button>
                </div>
            </div>

            {/* Table Section */}
            <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
                <table className="w-full border-collapse">
                    <thead className="bg-green-600 text-white text-left">
                    <tr>
                        <th className="p-3">Log Code</th>
                        <th className="p-3">Field Id</th>
                        <th className="p-3">Crop Id</th>
                        <th className="p-3">Staff Ids</th>
                        <th className="p-3">Temperature (°C)</th>
                        <th className="p-3">Observation Details</th>
                        <th className="p-3">Observed Image</th>
                        <th className="p-3">Date & Time</th>
                        <th className="p-3">Actions</th>
                    </tr>
                    </thead>
                    <tbody className="text-gray-800">
                    {/* Placeholder row */}
                    <tr>
                        <td colSpan={9} className="text-center p-4 italic text-gray-500">
                            No monitoring logs found
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

            {/* Add New Vehicle Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-500 opacity-100"
                    style={{ animation: "fadeIn 0.5s" }}
                >
                    <div className="bg-white rounded-lg w-full max-w-md shadow-lg transform transition-transform duration-500 translate-y-10 opacity-100">
                        <div className="flex justify-between items-center bg-green-600 text-white p-4 rounded-t-lg">
                            <h2 className="text-lg font-bold">Add New Vehicle</h2>
                            <button
                                onClick={handleModalToggle}
                                className="text-white text-xl font-bold hover:text-gray-300"
                            >
                                &times;
                            </button>
                        </div>
                        <form className="p-4">
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2">Vehicle Category</label>
                                <select className="w-full p-2 border rounded-lg">
                                    <option>Select vehicle category</option>
                                </select>
                            </div>

                            {/* Using AuthInputComponent for License Plate */}
                            <AuthInputComponent
                                id="licensePlate"
                                type="text"
                                placeholder="Please input vehicle license plate number"
                                label="Vehicle License Plate Number"
                                value=""
                                onChange={() => {}}
                            />

                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2">Fuel Type</label>
                                <select className="w-full p-2 border rounded-lg">
                                    <option>Select fuel type</option>
                                </select>
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2">Vehicle Status</label>
                                <select className="w-full p-2 border rounded-lg">
                                    <option>Select vehicle status</option>
                                </select>
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2">Special Remarks</label>
                                <textarea
                                    placeholder="Any special remark if have"
                                    className="w-full p-2 border rounded-lg"
                                />
                            </div>

                            {/* Buttons using AuthButtonComponent */}
                            <div className="flex justify-end gap-4">
                                <AuthButtonComponent
                                    type="button"
                                    text="Cancel"
                                    additionalClasses="bg-gray-500 hover:bg-gray-600"
                                    icon=""
                                    onClick={handleModalToggle}
                                />

                                <AuthButtonComponent
                                    type="submit"
                                    text="Add New Vehicle"
                                    additionalClasses="bg-green-400 hover:bg-green-700"
                                    icon=""
                                />
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};
