import { useSearchParams } from "next/navigation";
import React from "react";

const UserContent = () => {
  const searchParams = useSearchParams();
  const hotelName = searchParams.get("hotelName") || "Unknown Hotel";
  const image = searchParams.get("image");
  const city = searchParams.get("city") || "Unknown City";
  const country = searchParams.get("country") || "Unknown Country";
  const roomType = searchParams.get("roomType") || "Standard Room";
  const pricePerNight = Number(searchParams.get("pricePerNight")) || 0;
  const nights = Number(searchParams.get("nights")) || 1;
  const totalPrice = Number(searchParams.get("totalPrice")) || 0;
  return (
    <div>
      <div className="info bg-blue-200 h-50 row-span-2"></div>
    </div>
  );
};

export default UserContent;
