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

const AllBookings = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const currentBookings = JSON.parse(
      localStorage.getItem("bookings") || "[]"
    );
    const pastBookings = JSON.parse(
      localStorage.getItem("pastBookings") || "[]"
    );
    setBookings([...currentBookings, ...pastBookings]);
  }, []);

  return (
    <section className="py-10 px-5 h-full">
      <h1 className="text-2xl font-bold mb-5 text-center">All Bookings</h1>
      {bookings.length > 0 ? (
        <div className="grid grid-cols-2 gap-5">
          {bookings.map((booking, i) => (
            <div
              key={i}
              className="bg-gray-100 p-4 rounded-md shadow-md space-y-2"
            >
              {booking.image && (
                <Image
                  src={booking.image}
                  alt={booking.hotelName}
                  width={1000}
                  height={500}
                  className="rounded-md w-20 h-20"
                />
              )}
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
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No bookings found.</p>
      )}
    </section>
  );
};

export default AllBookings;
