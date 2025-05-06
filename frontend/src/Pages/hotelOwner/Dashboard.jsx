import React from "react";
import Title from "../../components/Title";
import { assets, dashboardDummyData } from "../../assets/assets";
import { useState } from "react";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(dashboardDummyData);

  const StatCard = ({ icon, title, value, color }) => (
    <div className="bg-white/50 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100/50 p-6 flex items-center gap-4 hover:shadow-md transition-shadow duration-200">
      <div className={`p-3 rounded-lg ${color}`}>
        <img src={icon} className="w-8 h-8 object-contain" alt={title} />
      </div>
      <div>
        <p className="text-gray-600 text-sm font-medium">{title}</p>
        <p className="text-2xl font-semibold text-gray-700 mt-1">{value}</p>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <Title
        align="left"
        font="outfit"
        title="Dashboard"
        subtitle="Monitor your room listings and track bookings. Stay updated with real-time insights to ensure smooth operations"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          icon={assets.totalBookingIcon}
          title="Total Bookings"
          value={dashboardData.totalBookings}
          color="bg-blue-50/80"
        />
        <StatCard
          icon={assets.totalRevenueIcon}
          title="Total Revenue"
          value={`$${dashboardData.totalRevenue.toLocaleString()}`}
          color="bg-green-50/80"
        />
      </div>

      <h2 className="text-xl text-blue-950/70 font-medium mb-5">
        Recent Bookings
      </h2>
      <div className="w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll">
        <table className="w-full ">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-4 text-gray-800 font-medium">User Name</th>
              <th className="py-3 px-4 text-gray-800 font-medium max-sm:hidden">
                Room Name
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium">
                Total Amount
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium">
                Payment Status
              </th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {dashboardData.bookings.map((item, index) => (
              <tr key={index}>
                <td className="py-3 px-4 text-gray-800 border-t border-gray-300 ">
                  {item.user.username}
                </td>

                <td className="py-3 px-4 text-gray-800 border-t border-gray-300 max-sm:hidden">
                  {item.room.roomType}
                </td>
                <td className="py-3 px-4 text-gray-800 border-t border-gray-300">
                  &#8377; {item.totalPrice}
                </td>

                <td className="py-3 px-4 border-t border-gray-300 flex ">
                  <button
                    className={`py-1 px-3 text-xs rounded-full mx-auto ${
                      item.isPaid
                        ? "bg-green-200 text-green-600 "
                        : "bg-amber-600 text-amber-300"
                    } `}
                  >
                    {item.isPaid ? "Completed" : "Pending"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
