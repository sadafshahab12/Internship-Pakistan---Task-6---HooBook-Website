"use client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineBedroomChild } from "react-icons/md";
import Header from "../components/Header";
import VideoAd from "../components/VideoAd";
import Footer from "../components/Footer";

const BookingPage = () => {
  const searchParams = useSearchParams();
  const hotelName = searchParams.get("hotelName") || "Unknown Hotel";
  const roomType = searchParams.get("roomTypes") || "Standard Room";
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

  const router = useRouter();
  const totalPrice = formData.nights * pricePerNight;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBookingConfirm = (e: React.FormEvent) => {
    e.preventDefault();

    const previousBookings = JSON.parse(
      localStorage.getItem("bookings") || "[]"
    );

    const newBooking = {
      hotelName,
      roomType,
      image,
      city,
      country,
      pricePerNight,
      nights: formData.nights,
      totalPrice,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    };

    const updatedBookings = [...previousBookings, newBooking];
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));

    router.push(`/user-dashboard/curr-book`);
  };

  return (
    <>
      <Header />
      {/* Booking Details Section with Background Video */}
      <section className="relative w-full pt-16">
        <div className="relative h-80 sm:h-100 flex items-center justify-center text-center ">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source
              src="https://cdn.pixabay.com/video/2016/09/05/4952-181538531_large.mp4"
              type="video/mp4"
            />
          </video>

          {/* Overlay for readability */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

          {/* Heading */}
          <div className="relative z-10  text-white w-full sm:max-w-3xl mx-auto space-y-3 px-3 xs:px-5">
            <h1 className="text-2xl xxs:text-3xl sm:text-5xl font-bold">
              Secure Your Stay, Embrace the Experience
            </h1>
            <p className="text-14 xs:text-lg sm:text-xl">
              Effortless booking, exceptional stays—your perfect getaway starts
              here.
            </p>
          </div>
        </div>

        {/* Main Booking Content */}
        <div className="max-w-6xl mx-auto flex mdl:flex-row flex-col gap-6 px-5 sm:px-5 py-10">
          {/* Booking Summary */}
          <div className="bg-gray-100 p-4 rounded-md space-y-4">
            <h2 className="text-xl font-semibold">{hotelName}</h2>
            {image ? (
              <Image
                src={image}
                alt={hotelName}
                width={1000}
                height={500}
                className="rounded-md w-full mdl:w-100 h-auto mdl:h-60 object-cover"
              />
            ) : (
              <p>No image available</p>
            )}

            <p className="text-gray-600 flex items-center gap-2">
              <IoLocationOutline /> {city}, {country}
            </p>
            <div className="flex items-center gap-2">
              <MdOutlineBedroomChild /> {roomType}
            </div>
            <p className="text-gray-800 font-medium">
              <strong>${pricePerNight}</strong>
              <span className="text-sm"> /night</span>
            </p>
          </div>

          {/* Booking Form */}
          <form className="space-y-4 bg-white p-6 rounded-md shadow-lg">
            <h1 className="text-xl font-bold">Customer Details</h1>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full py-3 px-4 border rounded outline-none text-sm"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full py-3 px-4 border rounded outline-none text-sm"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full py-3 px-4 border rounded outline-none text-sm"
              required
            />
            <input
              type="number"
              name="nights"
              min="1"
              value={formData.nights}
              onChange={handleChange}
              className="w-full py-3 px-4 border rounded outline-none text-sm"
              required
            />

            {/* Total Price */}
            <p className="text-lg font-semibold">Total: ${totalPrice}</p>

            {/* Confirm Button */}
            <button
              type="submit"
              onClick={handleBookingConfirm}
              className="w-full bg-charcoal text-sm text-white py-3 rounded-lg cursor-pointer"
            >
              Confirm Booking
            </button>
          </form>
        </div>
        <VideoAd videoSrc="https://cdn.pixabay.com/video/2015/10/27/1190-143842655_large.mp4" />
        <Footer />
      </section>
    </>
  );
};


export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingPage />
    </Suspense>
  );
}