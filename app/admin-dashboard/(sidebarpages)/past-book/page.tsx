"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Booking {
  hotelName: string;
  roomType: string;
  image?: string;
  city: string;
  country: string;
  pricePerNight: number;
  nights: number;
  totalPrice: number;
  name: string;
  email: string;
  phone: string;
}

const PastBookings = () => {
  const [pastBookings, setPastBookings] = useState<Booking[]>([]);

  useEffect(() => {
    // Retrieve past bookings from localStorage
    const storedPastBookings = JSON.parse(localStorage.getItem("pastBookings") || "[]") as Booking[];
    setPastBookings(storedPastBookings);
  }, []);

  return (
    <section className="pt-10 px-5">
      <h1 className="text-2xl font-bold mb-5 ">Past Bookings</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-5">
        {pastBookings.length > 0 ? (
          pastBookings.map((booking, i) => (
            <div key={i} className="bg-gray-100 p-4 rounded-md shadow-md space-y-2">
              <div>
                {booking.image && (
                  <Image
                    src={booking.image}
                    alt={booking.hotelName}
                    width={1000}
                    height={500}
                    className="rounded-md w-20 h-20"
                  />
                )}
              </div>
              <div className="space-y-2 text-sm">
                <h2 className="text-xl font-semibold">{booking.hotelName}</h2>
                <p className="text-gray-600">
                  {booking.city}, {booking.country}
                </p>
                <p className="text-gray-600">{booking.roomType}</p>
                <p className="text-gray-800 font-medium">
                  ${booking.pricePerNight} / night
                </p>
                <p className="text-gray-800 font-medium">
                  Nights: {booking.nights}
                </p>
                <p className="text-gray-800 font-bold">
                  Total: ${booking.totalPrice}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No past bookings found.</p>
        )}
      </div>
    </section>
  );
};

export default PastBookings;
