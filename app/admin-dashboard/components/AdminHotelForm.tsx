"use client";
import React, { useState } from "react";

interface RoomType {
  type: string;
  price_per_night: number;
}

interface Hotel {
  id: number;
  name: string;
  image: string;
  description: string;
  location: {
    city: string;
    country: string;
    address: string;
  };
  room_types: RoomType[];
  amenities: string[];
  rating: number;
  reviews: number;
  book_now_url: string;
}

const AdminHotelForm = () => {
  const [hotel, setHotel] = useState<Hotel>({
    id: Date.now(),
    name: "",
    image: "",
    description: "",
    location: { city: "", country: "", address: "" },
    room_types: [{ type: "", price_per_night: 0 }],
    amenities: [""],
    rating: 0,
    reviews: 0,
    book_now_url: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setHotel((prev) => ({ ...prev, [name]: value }));
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setHotel((prev) => ({
      ...prev,
      location: { ...prev.location, [name]: value },
    }));
  };

  const saveHotel = () => {
    const existingHotels = JSON.parse(localStorage.getItem("hotels") || "[]");
    const updatedHotels = [...existingHotels, hotel];
    localStorage.setItem("hotels", JSON.stringify(updatedHotels));
    alert("Hotel added successfully!");
    window.location.reload();
  };

  return (
    <section className="p-5">
      <h1 className="text-2xl font-bold mb-5">Add New Hotel</h1>
      <div className="space-y-3">
        <input
          type="text"
          name="name"
          placeholder="Hotel Name"
          value={hotel.name}
          onChange={handleInputChange}
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="image"
          placeholder="Hotel Image URL"
          value={hotel.image}
          onChange={handleInputChange}
          className="border p-2 w-full"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={hotel.description}
          onChange={handleInputChange}
          className="border p-2 w-full"
        ></textarea>

        <h3 className="font-semibold">Location</h3>
        <input
          type="text"
          name="city"
          placeholder="City"
          value={hotel.location.city}
          onChange={handleLocationChange}
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={hotel.location.country}
          onChange={handleLocationChange}
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={hotel.location.address}
          onChange={handleLocationChange}
          className="border p-2 w-full"
        />

        <h3 className="font-semibold">Room Types</h3>
        <input
          type="text"
          name="roomType"
          placeholder="Room Type"
          value={hotel.room_types[0].type}
          onChange={(e) =>
            setHotel((prev) => ({
              ...prev,
              room_types: [{ ...prev.room_types[0], type: e.target.value }],
            }))
          }
          className="border p-2 w-full"
        />
        <input
          type="number"
          name="price_per_night"
          placeholder="Price per Night"
          value={hotel.room_types[0].price_per_night}
          onChange={(e) =>
            setHotel((prev) => ({
              ...prev,
              room_types: [
                {
                  ...prev.room_types[0],
                  price_per_night: Number(e.target.value),
                },
              ],
            }))
          }
          className="border p-2 w-full"
        />

        <h3 className="font-semibold">Amenities</h3>
        <input
          type="text"
          name="amenities"
          placeholder="Amenities (comma separated)"
          value={hotel.amenities.join(", ")}
          onChange={(e) =>
            setHotel((prev) => ({
              ...prev,
              amenities: e.target.value.split(", "),
            }))
          }
          className="border p-2 w-full"
        />

        <h3 className="font-semibold">Rating & Reviews</h3>
        <input
          type="number"
          name="rating"
          placeholder="Rating (out of 5)"
          value={hotel.rating}
          onChange={handleInputChange}
          className="border p-2 w-full"
        />
        <input
          type="number"
          name="reviews"
          placeholder="Number of Reviews"
          value={hotel.reviews}
          onChange={handleInputChange}
          className="border p-2 w-full"
        />

        <button
          onClick={saveHotel}
          className="bg-gray-900 text-white px-5 py-2 mt-3"
        >
          Save Hotel
        </button>
      </div>
    </section>
  );
};

export default AdminHotelForm;
