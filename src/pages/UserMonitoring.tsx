import '../index.css';

export const UserMonitoring = () => {
    return (
        <div className="min-h-screen bg-green-100 p-8">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Monitoring Logs Management</h1>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-md hover:bg-green-700">
                    <span className="text-xl font-bold">+</span> Add Log
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
                        <td
                            colSpan={9}
                            className="text-center p-4 italic text-gray-500"
                        >
                            No monitoring logs found
                        </td>
                    </tr>
                    {/* Add more rows here */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
