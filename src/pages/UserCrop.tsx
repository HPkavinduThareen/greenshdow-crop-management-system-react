import '../index.css';

export const UserCrop = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-green-100 to-green-200 p-8 font-sans">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-semibold text-gray-800">Crop Management</h1>
                <button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition duration-300 flex items-center gap-2">
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
        </div>
    );
};
