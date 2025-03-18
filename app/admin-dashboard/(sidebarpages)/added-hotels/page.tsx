"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

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

const AddedHotels = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [editingHotel, setEditingHotel] = useState<Hotel | null>(null);

  useEffect(() => {
    const storedHotels = JSON.parse(localStorage.getItem("hotels") || "[]");
    setHotels(storedHotels);
  }, []);

  const handleEditChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!editingHotel) return;
    const { name, value } = e.target;
    setEditingHotel({ ...editingHotel, [name]: value });
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!editingHotel) return;
    const { name, value } = e.target;
    setEditingHotel({
      ...editingHotel,
      location: { ...editingHotel.location, [name]: value },
    });
  };

  const handleRoomTypeChange = (
    index: number,
    field: string,
    value: string | number
  ) => {
    if (!editingHotel) return;
    const updatedRoomTypes = editingHotel.room_types.map((room, i) =>
      i === index ? { ...room, [field]: value } : room
    );
    setEditingHotel({ ...editingHotel, room_types: updatedRoomTypes });
  };

  const handleAmenitiesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!editingHotel) return;
    setEditingHotel({ ...editingHotel, amenities: e.target.value.split(", ") });
  };

  const saveEdit = () => {
    if (!editingHotel) return;
    const updatedHotels = hotels.map((hotel) =>
      hotel.id === editingHotel.id ? editingHotel : hotel
    );

    setHotels(updatedHotels);
    localStorage.setItem("hotels", JSON.stringify(updatedHotels));
    setEditingHotel(null);
  };

  const deleteHotel = (id: number) => {
    const updatedHotels = hotels.filter((hotel) => hotel.id !== id);
    setHotels(updatedHotels);
    localStorage.setItem("hotels", JSON.stringify(updatedHotels));
  };

  return (
    <section className="p-5 h-screen">
      <h1 className="text-2xl font-bold mb-5">Added Hotels</h1>
      <div>
        <h2 className="text-lg font-semibold">Recently Added Hotels</h2>
        <p>Total Hotels Added: {hotels.length}</p>
        <div className="max-w-6xl mx-auto space-y-3">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="bg-white dark:bg-gray-800 p-3">
              {editingHotel?.id === hotel.id ? (
                /** ========== Edit Form ========== **/
                <div className="w-full p-3 space-y-3">
                  <input
                    type="text"
                    name="name"
                    value={editingHotel.name}
                    onChange={handleEditChange}
                    className="border p-2 w-full"
                  />
                  <input
                    type="text"
                    name="image"
                    value={editingHotel.image}
                    onChange={handleEditChange}
                    className="border p-2 w-full"
                  />
                  <textarea
                    name="description"
                    value={editingHotel.description}
                    onChange={handleEditChange}
                    className="border p-2 w-full"
                  />

                  <h3 className="font-semibold">Location</h3>
                  <input
                    type="text"
                    name="city"
                    value={editingHotel.location.city}
                    onChange={handleLocationChange}
                    className="border p-2 w-full"
                  />
                  <input
                    type="text"
                    name="country"
                    value={editingHotel.location.country}
                    onChange={handleLocationChange}
                    className="border p-2 w-full"
                  />
                  <input
                    type="text"
                    name="address"
                    value={editingHotel.location.address}
                    onChange={handleLocationChange}
                    className="border p-2 w-full"
                  />

                  <h3 className="font-semibold">Room Types</h3>
                  {editingHotel.room_types.map((room, index) => (
                    <div key={index} className="flex space-x-2">
                      <input
                        type="text"
                        placeholder="Room Type"
                        value={room.type}
                        onChange={(e) =>
                          handleRoomTypeChange(index, "type", e.target.value)
                        }
                        className="border p-2 w-full"
                      />
                      <input
                        type="number"
                        placeholder="Price per Night"
                        value={room.price_per_night}
                        onChange={(e) =>
                          handleRoomTypeChange(
                            index,
                            "price_per_night",
                            Number(e.target.value)
                          )
                        }
                        className="border p-2 w-full"
                      />
                    </div>
                  ))}

                  <h3 className="font-semibold">Amenities</h3>
                  <input
                    type="text"
                    name="amenities"
                    placeholder="Amenities (comma separated)"
                    value={editingHotel.amenities.join(", ")}
                    onChange={handleAmenitiesChange}
                    className="border p-2 w-full"
                  />

                  <h3 className="font-semibold">Rating & Reviews</h3>
                  <input
                    type="number"
                    name="rating"
                    placeholder="Rating (out of 5)"
                    value={editingHotel.rating}
                    onChange={handleEditChange}
                    className="border p-2 w-full"
                  />
                  <input
                    type="number"
                    name="reviews"
                    placeholder="Number of Reviews"
                    value={editingHotel.reviews}
                    onChange={handleEditChange}
                    className="border p-2 w-full"
                  />

                  <button
                    onClick={saveEdit}
                    className="bg-charcoal text-12 text-white px-4 py-2 rounded-md cursor-pointer"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingHotel(null)}
                    className="bg-gray-400 text-12 text-white px-4 py-2 ml-2 rounded-md cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                /** ========== Hotel Display ========== **/
                <div className="flex gap-5">
                  <div className="relative w-25 h-25 overflow-hidden">
                    <Image
                      src={
                        hotel.image && hotel.image.startsWith("http")
                          ? hotel.image
                          : "/default-hotel.jpg"
                      }
                      alt={hotel.name}
                      className="w-full h-full object-cover rounded-md"
                      width={1000}
                      height={500}
                    />
                  </div>
                  <div className="w-full p-3 space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-semibold">{hotel.name}</h3>
                      <span className="text-lg font-bold">
                        ${hotel.room_types[0]?.price_per_night ?? 0} /night
                      </span>
                    </div>
                    <p className="text-gray-600">
                      {hotel.location.city}, {hotel.location.country}
                    </p>
                    <div className="flex-between">
                      <div className="flex gap-2">
                        {hotel.amenities.slice(0, 3).map((amenity) => (
                          <div
                            key={amenity}
                            className="px-3 py-1 bg-gray-100 rounded-full text-12"
                          >
                            <span>{amenity}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <button
                          className="bg-charcoal text-white py-1 px-5 text-12 cursor-pointer "
                          onClick={() => setEditingHotel(hotel)}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-600  text-white py-1 px-3 text-12 cursor-pointer active:scale-90 transition-all ease-in duration-300 "
                          onClick={() => deleteHotel(hotel.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AddedHotels;
