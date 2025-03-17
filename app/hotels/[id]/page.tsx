"use client";
import { useHotelContext } from "@/app/context/contextapi";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineBedroomChild } from "react-icons/md";

const HotelDetailsPage = () => {
  const { id } = useParams();
  const { hotelData } = useHotelContext();
  const hotel = hotelData.find((hotel) => hotel.id === parseInt(id as string));
  const [selectedRoomIndex, setSelectedRoomIndex] = useState<number | null>(
    null
  );
  const router = useRouter();
  // const roomContainerRef = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   const handleClickOutSide = (event: MouseEvent) => {
  //     if (
  //       roomContainerRef.current &&
  //       !roomContainerRef.current.contains(event.target as Node)
  //     ) {
  //       setSelectedRoomIndex(null);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutSide);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutSide);
  //   };
  // }, []);
  if (!hotel) {
    return <p className="text-center text-gray-500">Hotel not found.</p>;
  }

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FaStar key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      );
    }
    if (hasHalfStar) {
      stars.push(
        <FaStarHalf
          key="half"
          className="w-4 h-4 fill-yellow-400 text-yellow-400"
        />
      );
    }
    return stars;
  };

  const handleRoomClick = (index: number) => {
    setSelectedRoomIndex(index === selectedRoomIndex ? null : index);
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
      <div className="max-w-6xl mx-auto py-8">
        <div className="grid grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src={hotel.image}
              alt={hotel.name}
              width={1000}
              height={500}
              className="w-150 h-100 rounded-lg"
            />
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold">{hotel.name}</h1>
              <p className="text-12">{hotel.location.address}</p>
            </div>
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
              {hotel.amenities.slice(0, 3).map((amenity, index) => (
                <p
                  key={index}
                  className="bg-charcoal text-white text-12 rounded-full py-1 px-3"
                >
                  {amenity}
                </p>
              ))}
            </div>
            <p className="text-charcoal text-sm leading-7">
              {hotel.description}
            </p>
            <div className=" w-full flex-mystart">
              {hotel.room_types.map((room, index) => (
                <div
                  key={index}
                  onClick={() => handleRoomClick(index)}
                  className={` rounded-full py-2 px-4 cursor-pointer
                              transform transition-all duration-300 hover:scale-105
                             ${
                               selectedRoomIndex === index
                                 ? "bg-charcoal text-white"
                                 : "bg-gray-300 text-charcoal"
                             }`}
                >
                  <div className="text-center">
                    <p className="font-medium text-12 flex-center gap-2">
                      <MdOutlineBedroomChild className="w-4 h-4" />
                      {room.type}
                    </p>
                    <div
                      className={`
                  overflow-hidden transition-all duration-300 flex-center gap-2
                  ${
                    selectedRoomIndex === index
                      ? "max-h-20 opacity-100"
                      : "max-h-0 opacity-0"
                  }
                `}
                    >
                      <p className="text-xl font-bold">
                        {room.price_per_night}
                      </p>
                      <p className="text-sm text-gray-300">/per night</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-center gap-3 pt-4">
              <button className="w-full bg-charcoal text-white text-sm py-2 rounded-lg cursor-pointer">
                Visit Hotel
              </button>
              <button
                onClick={() => {
                  if (selectedRoomIndex !== null) {
                    router.push(
                      `/booking?hotelName=${encodeURIComponent(
                        hotel.name
                      )}&image=${encodeURIComponent(
                        hotel.image
                      )}&city=${encodeURIComponent(
                        hotel.location.city
                      )}&country=${encodeURIComponent(
                        hotel.location.country
                      )}&roomTypes=${encodeURIComponent(
                        hotel.room_types[selectedRoomIndex].type
                      )}&pricePerNight=${
                        hotel.room_types[selectedRoomIndex].price_per_night
                      }`
                    );
                  }
                }}
                disabled={selectedRoomIndex === null}
                className={`w-full bg-charcoal text-white text-sm py-2 rounded-lg cursor-pointer ${
                  selectedRoomIndex !== null
                    ? "bg-charcoal"
                    : "bg-gray-500 cursor-not-allowed"
                }`}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelDetailsPage;
