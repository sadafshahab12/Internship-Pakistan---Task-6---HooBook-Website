"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
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

const CurrentBooking = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editedNights, setEditedNights] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    // Retrieve bookings from localStorage
    const storedBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    setBookings(storedBookings);
  }, []);

  const cancelBooking = (index: number) => {
    const updatedBookings = [...bookings];
    const canceledBooking = updatedBookings.splice(index, 1)[0];
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
    setBookings(updatedBookings);
    const pastBookings = JSON.parse(
      localStorage.getItem("pastBookings") || "[]"
    ) as Booking[];
    pastBookings.push(canceledBooking);
    localStorage.setItem("pastBookings", JSON.stringify(pastBookings));
    router.push("/user-dashboard/past-book");
  };

  const startEditing = (index: number) => {
    setEditingIndex(index);
    setEditedNights(bookings[index].nights);
  };

  const saveModification = () => {
    if (editingIndex === null) return;
    const updatedBookings = [...bookings];
    updatedBookings[editingIndex].nights = editedNights;
    updatedBookings[editingIndex].totalPrice =
      editedNights * updatedBookings[editingIndex].pricePerNight;
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
    setBookings(updatedBookings);
    setEditingIndex(null);
  };

  return (
    <section className="py-10 px-5 h-screen">
      <h1 className="text-2xl font-bold mb-5 text-center">Your Bookings</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-5">
        {bookings.length > 0 ? (
          bookings.map((booking, i) => (
            <div
              key={i}
              className="bg-gray-100 p-4 rounded-md shadow-md space-y-2"
            >
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
                <div className="flex-left gap-2">
                  <p className="text-gray-600">{booking.roomType}</p>
                  <p className="text-gray-800 font-medium">
                    ${booking.pricePerNight} / night
                  </p>
                </div>
                {editingIndex === i ? (
                  <div>
                    <label className="block text-sm font-medium">Nights:</label>
                    <input
                      type="number"
                      value={editedNights}
                      onChange={(e) => setEditedNights(Number(e.target.value))}
                      className="border rounded p-1 w-full"
                    />
                    <button
                      onClick={saveModification}
                      className="bg-green-500 text-white py-1.5 px-3 mt-2"
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <p className="text-gray-800 font-medium">
                    Nights: {booking.nights}
                  </p>
                )}
                <p className="text-gray-800 font-bold">
                  Total: ${booking.totalPrice}
                </p>
                <div className="flex-left gap-2">
                  <button
                    onClick={() => cancelBooking(i)}
                    className="bg-charcoal text-white text-12 cursor-pointer py-1.5 px-3"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => startEditing(i)}
                    className="bg-charcoal text-white text-12 cursor-pointer py-1.5 px-3"
                  >
                    Modify
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No bookings found.</p>
        )}
      </div>
    </section>
  );
};

export default CurrentBooking;
