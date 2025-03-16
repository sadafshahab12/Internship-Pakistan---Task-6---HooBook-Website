"use client";
import { useHotelContext } from "@/app/context/contextapi";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

import { IoLocationOutline } from "react-icons/io5";

const HotelDetailsPage = () => {
  const { id } = useParams();
  const { hotels } = useHotelContext();
  const hotel = hotels.find((hotel) => hotel.id === parseInt(id as string));

  if (!hotel) {
    return <p className="text-center text-gray-500">Hotel not found.</p>;
  }

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStars = rating - fullStars >= 0.5 ? 1 : 0;
    for (let i = 0; i < halfStars; i++) {
      stars.push(
        <FaStar key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      );
    }
    if (halfStars) {
      stars.push(
        <FaStarHalf
          key={"half"}
          className="w-4 h-4 fill-yellow-400 text-yellow-400"
        />
      );
    }
    return stars;
  };
  return (
    <section className="pt-15">
      <header className="bg-charcoal text-white flex-between gap-5 py-3 px-6">
        <div className="flex-left gap-5 text-sm">
          <Link href={"/"}>Home</Link>
          <h1>{hotel.name}</h1>
        </div>
        <div className="text-12">
          <p className="flex-left gap-3">
            <IoLocationOutline className="w-4 h-4" />
            {hotel.location.country}
          </p>
          <p className="text-right">{hotel.location.city}</p>
        </div>
      </header>
      <div className="grid grid-cols-2">
        <div>
          <Image
            src={hotel.image}
            alt={hotel.name}
            width={1000}
            height={500}
            className="w-150 h-100"
          />
        </div>
        <div>
          <h1>{hotel.name}</h1>
          <div>
            <p className="flex-left gap-2">
              {hotel.rating}
              {renderStars(hotel.rating)}{" "}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              ({hotel.reviews} reviews)
            </p>
          </div>
          <div className="flex-left gap-4">
            {hotel.amenities.map((amenity, index) => (
              <p
                key={index}
                className="bg-gray-300 text-12 rounded-full py-1 px-3"
              >
                {amenity}
              </p>
            ))}
          </div>
          <p>{hotel.description}</p>
          <div>
            {hotel.room_types.map((rooms, index) => (
              <div key={index}>
                <p>{rooms.type}</p>
                <p>{rooms.price_per_night}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelDetailsPage;
