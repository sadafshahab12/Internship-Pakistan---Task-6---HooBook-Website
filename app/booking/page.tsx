"use client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineBedroomChild } from "react-icons/md";

const BookingPage = () => {
  const searchParams = useSearchParams();
  const hotelName = searchParams.get("hotelName") || "Unknown Hotel";
  const roomType = searchParams.get("roomTypes");
  const image = searchParams.get("image");
  const city = searchParams.get("city") || "Unknown City";
  const country = searchParams.get("country") || "Unknown Country";
  const pricePerNight = Number(searchParams.get("pricePerNight")) || 0;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    nights: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const router = useRouter();
  const totalPrice = formData.nights * pricePerNight;

  const handleBookingConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(
      `/user-dashboard?hotelName=${encodeURIComponent(
        hotelName
      )}&image=${encodeURIComponent(image || "")}&city=${encodeURIComponent(
        city
      )}&country=${encodeURIComponent(country)}&roomType=${encodeURIComponent(
        roomType || ""
      )}&pricePerNight=${pricePerNight}&nights=${
        formData.nights
      }&totalPrice=${totalPrice}&name=${encodeURIComponent(
        formData.name
      )}&email=${encodeURIComponent(formData.email)}&phone=${encodeURIComponent(
        formData.phone
      )}`
    );
  };
  return (
    <section className="pt-20">
      <h1 className="text-2xl font-bold mb-10 text-center">Booking Details</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-4">
        {/* Booking Summary */}
        <div className="bg-gray-100 p-4 rounded-md space-y-4">
          <h2 className="text-xl font-semibold">{hotelName}</h2>
          {image ? (
            <Image
              src={image}
              alt={hotelName}
              width={1000}
              height={500}
              className="rounded-md"
            />
          ) : (
            <p>No image available</p>
          )}

          <p className="text-gray-600 flex-left gap-4">
            <IoLocationOutline /> {city}, {country}
          </p>
          <div className="flex-left gap-4">
            <p className="text-gray-600 flex-left gap-4">
              <MdOutlineBedroomChild /> {roomType}
            </p>
            <p className="text-gray-800 font-medium">
              <strong>${pricePerNight}</strong>
              <span className="text-12">/night</span>
            </p>
          </div>
        </div>
        <form className="space-y-4">
          <h1 className="text-2xl font-bold">Customer Detials</h1>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="number"
            name="nights"
            min="1"
            value={formData.nights}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

          {/* Total Price */}
          <p className="text-lg font-semibold">Total: ${totalPrice}</p>

          {/* Confirm Button */}
          <button
            type="submit"
            onClick={handleBookingConfirm}
            className="w-full bg-charcoal text-white py-2 rounded-lg cursor-pointer"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingPage;
