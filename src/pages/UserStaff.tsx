import '../index.css';

export const UserStaff = () => {
    return (
        <div className="min-h-screen bg-green-100 p-8">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-semibold text-gray-800">Staff Management</h1>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-md hover:bg-green-700">
                    <span className="text-xl font-bold">+</span> Add Member
                </button>
            </div>

            {/* Filters Section */}
            <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex flex-col">
                    <label className="text-sm text-gray-600 mb-2">Filter by Designation</label>
                    <select className="bg-white border border-gray-300 text-gray-700 text-sm rounded-lg p-2 shadow-sm">
                        <option>All Designations</option>
                        {/* Add more options here */}
                    </select>
                </div>
                <div className="flex flex-col">
                    <label className="text-sm text-gray-600 mb-2">Filter by Gender</label>
                    <select className="bg-white border border-gray-300 text-gray-700 text-sm rounded-lg p-2 shadow-sm">
                        <option>All Genders</option>
                        {/* Add more options here */}
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
                    {/* Placeholder row */}
                    <tr>
                        <td
                            colSpan={12}
                            className="text-center p-4 italic text-gray-500"
                        >
                            No staff members found
                        </td>
                    </tr>
                    {/* Add more rows here */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
