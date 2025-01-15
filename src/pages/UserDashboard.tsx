// import '../index.css';
//
//
// import {
//     FaChartPie,
//     FaUsers,
//     FaCog,
//     FaBell,
//     FaSignOutAlt,
// } from 'react-icons/fa';
//
// export const UserDashboard = () => {
//     return (
//         <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
//             {/* Sidebar */}
//             <aside className="w-full md:w-64 bg-green-400 text-white flex-shrink-0 h-screen md:h-auto">
//                 <div className="p-6">
//                     <h1 className="text-2xl font-bold text-center">Dashboard</h1>
//                 </div>
//                 <nav className="mt-6">
//                     <ul>
//                         <li>
//                             <a
//                                 href="#overview"
//                                 className="flex items-center p-4 hover:bg-green-800"
//                             >
//                                 <FaChartPie className="mr-3" />
//                                 Overview
//                             </a>
//                         </li>
//                         <li>
//                             <a
//                                 href="#users"
//                                 className="flex items-center p-4 hover:bg-green-800"
//                             >
//                                 <FaUsers className="mr-3" />
//                                 Users
//                             </a>
//                         </li>
//                         <li>
//                             <a
//                                 href="#settings"
//                                 className="flex items-center p-4 hover:bg-green-800"
//                             >
//                                 <FaCog className="mr-3" />
//                                 Settings
//                             </a>
//                         </li>
//                         <li>
//                             <a
//                                 href="#notifications"
//                                 className="flex items-center p-4 hover:bg-green-800"
//                             >
//                                 <FaBell className="mr-3" />
//                                 Notifications
//                             </a>
//                         </li>
//                         <li>
//                             <a
//                                 href="#logout"
//                                 className="flex items-center p-4 hover:bg-green-800"
//                             >
//                                 <FaSignOutAlt className="mr-3" />
//                                 Logout
//                             </a>
//                         </li>
//                     </ul>
//                 </nav>
//             </aside>
//
//             {/* Main Content */}
//             <main className="flex-1 p-6 h-screen overflow-y-auto">
//                 <header className="flex justify-between items-center mb-6">
//                     <h2 className="text-2xl font-bold text-gray-800">Welcome, User!</h2>
//                     <button className="bg-green-400 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-800">
//                         Add New Item
//                     </button>
//                 </header>
//
//                 {/* Dashboard Stats */}
//                 <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                     <div className="bg-white p-6 rounded-lg shadow-lg">
//                         <h3 className="text-lg font-semibold">Total Users</h3>
//                         <p className="text-3xl font-bold text-blue-600">1,245</p>
//                     </div>
//                     <div className="bg-white p-6 rounded-lg shadow-lg">
//                         <h3 className="text-lg font-semibold">New Signups</h3>
//                         <p className="text-3xl font-bold text-green-600">87</p>
//                     </div>
//                     <div className="bg-white p-6 rounded-lg shadow-lg">
//                         <h3 className="text-lg font-semibold">Pending Tasks</h3>
//                         <p className="text-3xl font-bold text-red-600">12</p>
//                     </div>
//                 </section>
//
//                 {/* Charts & Analytics */}
//                 <section className="mt-6 bg-white p-6 rounded-lg shadow-lg">
//                     <h3 className="text-xl font-bold mb-4">Analytics</h3>
//                     <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
//                         <p>Chart Placeholder</p>
//                     </div>
//                 </section>
//
//                 {/* User Activity */}
//                 <section className="mt-6 bg-white p-6 rounded-lg shadow-lg">
//                     <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
//                     <ul className="space-y-4">
//                         <li className="flex items-center">
//                             <span className="bg-green-100 text-green-800 px-3 py-1 rounded-lg">
//                                 New
//                             </span>
//                             <p className="ml-4">User John Doe signed up.</p>
//                         </li>
//                         <li className="flex items-center">
//                             <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg">
//                                 Update
//                             </span>
//                             <p className="ml-4">Settings were updated.</p>
//                         </li>
//                         <li className="flex items-center">
//                             <span className="bg-red-100 text-red-800 px-3 py-1 rounded-lg">
//                                 Alert
//                             </span>
//                             <p className="ml-4">Server downtime reported.</p>
//                         </li>
//                     </ul>
//                 </section>
//             </main>
//         </div>
//     );
// };








//
//
// import '../index.css';
// import {
//     FaChartPie,
//     FaUsers,
//     FaCog,
//     FaSignOutAlt,
//     FaBell,
// } from 'react-icons/fa';
// import { useState } from 'react';
//
// export const UserDashboard = () => {
//     const [showNotifications, setShowNotifications] = useState(false);
//
//     const toggleNotifications = () => {
//         setShowNotifications(!showNotifications);
//     };
//
//     return (
//         <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
//             {/* Sidebar */}
//             <aside className="w-full md:w-64 bg-green-400 text-white flex-shrink-0 h-screen md:h-auto">
//                 <div className="p-6">
//                     <h1 className="text-2xl font-bold text-center">Dashboard</h1>
//                 </div>
//                 <nav className="mt-6">
//                     <ul>
//                         <li>
//                             <a
//                                 href="#Dashbord"
//                                 className="flex items-center p-4 hover:bg-green-800"
//                             >
//                                 <FaChartPie className="mr-3"/>
//                                 Overview
//                             </a>
//                         </li>
//                         <li>
//                             <a
//                                 href="#Field"
//                                 className="flex items-center p-4 hover:bg-green-800"
//                             >
//                                 <FaUsers className="mr-3"/>
//                                 Field
//                             </a>
//                         </li>
//                         <li>
//                             <a
//                                 href="#Crop"
//                                 className="flex items-center p-4 hover:bg-green-800"
//                             >
//                                 <FaCog className="mr-3"/>
//                                 Crop
//                             </a>
//                         </li>
//                         <li>
//                             <a
//                                 href="#Staff"
//                                 className="flex items-center p-4 hover:bg-green-800"
//                             >
//                                 <FaSignOutAlt className="mr-3"/>
//                                 Staff
//                             </a>
//                         </li>
//
//                         <li>
//                             <a
//                                 href="#Vehicles"
//                                 className="flex items-center p-4 hover:bg-green-800"
//                             >
//                                 <FaSignOutAlt className="mr-3"/>
//                                 Vehicles
//                             </a>
//                         </li>
//                     </ul>
//                 </nav>
//             </aside>
//
//             {/* Main Content */}
//             <main className="flex-1 p-6 h-screen overflow-y-auto">
//                 <header className="flex justify-between items-center mb-6">
//                     <h2 className="text-2xl font-bold text-gray-800">Welcome, User!</h2>
//                     <div className="flex items-center space-x-4">
//                         <div className="relative">
//                             <button
//                                 className="text-gray-600 hover:text-gray-800"
//                                 onClick={toggleNotifications}
//                             >
//                                 <FaBell className="text-2xl" />
//                             </button>
//                             {showNotifications && (
//                                 <div
//                                     className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg overflow-hidden">
//                                     <ul className="p-4 space-y-2">
//                                         <li className="text-sm">
//                                             <span className="font-bold">John Doe</span> signed up.
//                                         </li>
//                                         <li className="text-sm">
//                                             Settings were updated.
//                                         </li>
//                                         <li className="text-sm">
//                                             Server downtime reported.
//                                         </li>
//                                     </ul>
//
//                                     <ul className="p-4 space-y-2">
//                                         <li className="text-sm">
//                                             <span className="font-bold">John Doe</span> signed up.
//                                         </li>
//                                         <li className="text-sm">
//                                             Settings were updated.
//                                         </li>
//                                         <li className="text-sm">
//                                             Server downtime reported.
//                                         </li>
//                                     </ul>
//
//
//                                     <ul className="p-4 space-y-2">
//                                         <li className="text-sm">
//                                             <span className="font-bold">John Doe</span> signed up.
//                                         </li>
//                                         <li className="text-sm">
//                                             Settings were updated.
//                                         </li>
//                                         <li className="text-sm">
//                                             Server downtime reported.
//                                         </li>
//                                     </ul>
//                                 </div>
//
//
//                             )}
//                         </div>
//                         <button className="bg-green-400 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-800">
//                             Add New Item
//                         </button>
//                     </div>
//                 </header>
//
//                 {/* Dashboard Stats */}
//                 <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                     <div className="bg-white p-6 rounded-lg shadow-lg">
//                         <h3 className="text-lg font-semibold">Total Users</h3>
//                         <p className="text-3xl font-bold text-blue-600">1,245</p>
//                     </div>
//                     <div className="bg-white p-6 rounded-lg shadow-lg">
//                         <h3 className="text-lg font-semibold">New Signups</h3>
//                         <p className="text-3xl font-bold text-green-600">87</p>
//                     </div>
//                     <div className="bg-white p-6 rounded-lg shadow-lg">
//                         <h3 className="text-lg font-semibold">Pending Tasks</h3>
//                         <p className="text-3xl font-bold text-red-600">12</p>
//                     </div>
//                 </section>
//
//                 {/* Charts & Analytics */}
//                 <section className="mt-6 bg-white p-6 rounded-lg shadow-lg">
//                     <h3 className="text-xl font-bold mb-4">Analytics</h3>
//                     <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
//                         <p>Chart Placeholder</p>
//                     </div>
//                 </section>
//
//                 {/* User Activity */}
//                 <section className="mt-6 bg-white p-6 rounded-lg shadow-lg">
//                     <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
//                     <ul className="space-y-4">
//                         <li className="flex items-center">
//                             <span className="bg-green-100 text-green-800 px-3 py-1 rounded-lg">
//                                 New
//                             </span>
//                             <p className="ml-4">User John Doe signed up.</p>
//                         </li>
//                         <li className="flex items-center">
//                             <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg">
//                                 Update
//                             </span>
//                             <p className="ml-4">Settings were updated.</p>
//                         </li>
//                         <li className="flex items-center">
//                             <span className="bg-red-100 text-red-800 px-3 py-1 rounded-lg">
//                                 Alert
//                             </span>
//                             <p className="ml-4">Server downtime reported.</p>
//                         </li>
//                     </ul>
//                 </section>
//             </main>
//         </div>
//     );
// };

















import '../index.css';
import {
    FaChartPie,
    FaUsers,
    // FaCog,
    FaSignOutAlt,
    FaBell,
} from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const UserDashboard = () => {
    const [showNotifications, setShowNotifications] = useState(false);

    const toggleNotifications = () => {
        setShowNotifications(!showNotifications);
    };

    const handleLogout = () => {
        console.log("Log Out Clicked");
        // Add your logout logic here (e.g., clear tokens and redirect to login page)
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
            {/* Sidebar */}
            <aside className="w-full md:w-64 bg-green-400 text-white flex-shrink-0 h-screen flex flex-col">
                <div className="p-6">
                    <h1 className="text-2xl font-bold text-center">Dashboard</h1>
                </div>
                <nav className="mt-6 flex-grow">
                    <ul>
                        <li>
                            <a
                                href="#Dashbord"
                                className="flex items-center p-4 hover:bg-green-800"
                            >
                                <FaChartPie className="mr-3"/>
                                Overview
                            </a>
                        </li>

                        <li>
                            <Link
                                to="/field"
                                className="flex items-center p-4 hover:bg-green-800"
                            >
                                <FaUsers className="mr-3"/>
                                Field
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/crop"
                                className="flex items-center p-4 hover:bg-green-800"
                            >
                                <FaUsers className="mr-3"/>
                                Crop
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/staff"
                                className="flex items-center p-4 hover:bg-green-800"
                            >
                                <FaUsers className="mr-3"/>
                                Staff
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/vehicle"
                                className="flex items-center p-4 hover:bg-green-800"
                            >
                                <FaUsers className="mr-3"/>
                                Vehicle
                            </Link>
                        </li>


                        <li>
                            <Link
                                to="/monitoring"
                                className="flex items-center p-4 hover:bg-green-800"
                            >
                                <FaUsers className="mr-3"/>
                                Monitoring
                            </Link>
                        </li>



                    </ul>
                </nav>
                <div className="p-6 mt-auto">
                    <button
                        className="w-full flex items-center justify-center bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-700"
                        onClick={handleLogout}
                    >
                        <FaSignOutAlt className="mr-2"/>
                        Log Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 h-screen overflow-y-auto">
                <header className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Welcome, User!</h2>
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <button
                                className="text-gray-600 hover:text-gray-800"
                                onClick={toggleNotifications}
                            >
                                <FaBell className="text-2xl" />
                            </button>
                            {showNotifications && (
                                <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg overflow-hidden">
                                    <ul className="p-4 space-y-2">
                                        <li className="text-sm">
                                            <span className="font-bold">John Doe</span> signed up.
                                        </li>
                                        <li className="text-sm">Settings were updated.</li>
                                        <li className="text-sm">Server downtime reported.</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <button className="bg-green-400 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-800">
                            Add New Item
                        </button>
                    </div>
                </header>

                {/* Dashboard Stats */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold">Total Users</h3>
                        <p className="text-3xl font-bold text-blue-600">1,245</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold">New Signups</h3>
                        <p className="text-3xl font-bold text-green-600">87</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold">Pending Tasks</h3>
                        <p className="text-3xl font-bold text-red-600">12</p>
                    </div>
                </section>

                {/* Charts & Analytics */}
                <section className="mt-6 bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-4">Analytics</h3>
                    <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                        <p>Chart Placeholder</p>
                    </div>
                </section>

                {/* User Activity */}
                <section className="mt-6 bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
                    <ul className="space-y-4">
                        <li className="flex items-center">
                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-lg">
                                New
                            </span>
                            <p className="ml-4">User John Doe signed up.</p>
                        </li>
                        <li className="flex items-center">
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg">
                                Update
                            </span>
                            <p className="ml-4">Settings were updated.</p>
                        </li>
                        <li className="flex items-center">
                            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-lg">
                                Alert
                            </span>
                            <p className="ml-4">Server downtime reported.</p>
                        </li>
                    </ul>
                </section>
            </main>
        </div>
    );
};
