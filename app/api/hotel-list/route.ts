import { HotelListTypes } from "@/app/data/data";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    if (!HotelListTypes) {
      throw new Error("Hotel Data is not available");
    }
    return NextResponse.json(HotelListTypes, { status: 200 });
  } catch (error) {
    console.log("Error in fetching hotel data", error);
    return NextResponse.json(
      { message: "An error occurred while fetching hotel data." },
      { status: 500 }
    );
  }
}
