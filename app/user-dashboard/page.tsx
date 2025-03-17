"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const UserDashboardPage = () => {
  const [currentBookingCount, setCurrentBookingCount] = useState(0);
  const [pastBookingCount, setPastBookingCount] = useState(0);
  const COLORS = ["#4A90E2", "#2c2c2c"];
  useEffect(() => {
    // Retrieve current and past bookings from localStorage
    const currentBookings = JSON.parse(
      localStorage.getItem("bookings") || "[]"
    );
    const pastBookings = JSON.parse(
      localStorage.getItem("pastBookings") || "[]"
    );

    // Set the counts
    setCurrentBookingCount(currentBookings.length);
    setPastBookingCount(pastBookings.length);
  }, []);
  const data = [
    { name: "Current Bookings", count: currentBookingCount },
    { name: "Past Bookings", count: pastBookingCount },
  ];
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold text-center">User Dashboard</h1>
      <div className="flex-center gap-4 mt-4">
        <p className="text-lg h-50 w-full flex-center flex-col bg-gray-200 rounded-md gap-3">
          <Image
            src={"https://cdn-icons-png.flaticon.com/512/7323/7323351.png"}
            alt="currentIcon"
            width={500}
            height={500}
            className="w-8 h-8"
          />
          <span>Current Bookings: {currentBookingCount}</span>
        </p>
        <p className="text-lg h-50 w-full flex-center flex-col bg-gray-200 rounded-md gap-3">
          <Image
            src={"https://cdn-icons-png.flaticon.com/512/825/825137.png"}
            alt="pastIcon"
            width={500}
            height={500}
            className="w-8 h-8"
          />
          Past Bookings: {pastBookingCount}
        </p>
      </div>
      <div className="p-5 grid grid-cols-2">
        <div>
          <h1 className="text-2xl font-bold text-center"> Booking Overview</h1>
          <div className="flex flex-col items-center mt-5">
            <ResponsiveContainer width="80%" height={300}>
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#2c2c2c" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        {/* Pie Chart */}
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-3"> Bookings Pie Chart</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                dataKey="count"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {data.map((entry, index) => {
                  console.log(entry);
                  return (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  );
                })}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardPage;
