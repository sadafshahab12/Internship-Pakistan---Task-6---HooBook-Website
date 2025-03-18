"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdAnalytics } from "react-icons/md";
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
import AdminHotelForm from "./components/AdminHotelForm";

const AdminDashboardPage = () => {
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
    <div className="p-5 h-full ">
      <h1 className="text-3xl font-bold flex-left gap-4 ">
        Analytics <MdAnalytics className="w-6 h-6" />
      </h1>
      <div>
      <AdminHotelForm/>
      </div>
      <div className="mt-4">
        <p className="text-lg h-50 w-full flex-center flex-col bg-gray-200 rounded-md gap-3">
          <Image
            src={"https://cdn-icons-png.flaticon.com/512/6192/6192144.png"}
            alt="currentIcon"
            width={500}
            height={500}
            className="w-15 h-15"
          />
          <span>Total Bookings: {currentBookingCount + pastBookingCount}</span>
        </p>
      </div>
      <div className="p-5 grid grid-cols-2">
        <div>
          <h1 className="text-xl font-bold text-center"> Booking Overview</h1>
          <div className="flex flex-col items-center mt-5">
            <ResponsiveContainer width="80%" height={250}>
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
          <ResponsiveContainer width="100%" height={250}>
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

export default AdminDashboardPage;
