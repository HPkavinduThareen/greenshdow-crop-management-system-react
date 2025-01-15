import '../index.css';

export const UserField = () => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg font-sans w-4/5 mx-auto">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-semibold text-gray-800">Field Management</h1>
                <button className="bg-gradient-to-r from-green-400 to-green-500 text-white px-6 py-3 rounded-lg shadow hover:from-green-300 hover:to-green-600 transition duration-300">
                    + Add Field
                </button>
            </div>

            {/* Search Section */}
            <div className="flex items-center gap-4 mb-6 bg-gray-50 p-4 rounded-lg shadow-sm">
                <select className="border border-gray-300 rounded-lg p-3 text-sm focus:ring-2">
                    <option>Search Field By Id</option>
                </select>
                <input
                    type="text"
                    placeholder="Search..."
                    className="border border-gray-300 rounded-lg p-3 flex-grow focus:ring-2 "
                />
                <button className="bg-green-400 text-white px-6 py-3 rounded-lg shadow hover:bg-green-400 transition duration-300">
                    🔍 Search
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
                        <td
                            colSpan={8}
                            className="p-6 text-center text-gray-500 italic"
                        >
                            No fields available
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
