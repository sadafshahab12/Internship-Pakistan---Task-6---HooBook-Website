"use client";
import React, { useRef, useState } from "react";

import Image from "next/image";
import { FaCamera } from "react-icons/fa";
import { User } from "@/app/data/dataTypes";

const mockUser: User = {
  id: "u1",
  name: "Sadaf Shahab",
  email: "sadafshahabsr12@gmail.com",
  avatar: "/logo.png",
  role: "user",
};

export default function Profile() {
  const [user, setUser] = useState(mockUser);
  const [isEditing, setIsEditing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    // In a real app, this would make an API call to update the user
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUser({ ...user, avatar: imageUrl });
    }
  };

  return (
    <div className="max-w-2xl mx-auto pt-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Profile Settings
      </h1>

      <div className="bg-white rounded-lg  p-6">
        <div className="flex items-center space-x-6 mb-8">
          <div className="relative">
            <Image
              src={user.avatar as string}
              alt={user.name}
              className="h-24 w-24 rounded-full object-cover"
              width={500}
              height={500}
            />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={handleImageChange}
            />
            <button
              className="absolute bottom-0 right-0 p-1 bg-gray-800 rounded-full text-white hover:bg-gray-700 cursor-pointer"
              onClick={() => fileInputRef.current?.click()}
            >
              <FaCamera className="h-4 w-4" />
            </button>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              disabled={!isEditing}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-4 outline-none"
            />
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              disabled={!isEditing}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-4 outline-none"
            />
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              disabled={!isEditing}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-4 outline-none"
            />
          </div>

          <div className="flex justify-end space-x-3">
            {isEditing ? (
              <>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 cursor-pointer w-full"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-charcoal w-full text-white rounded-md cursor-pointer"
                >
                  Save Changes
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 bg-charcoal w-full text-white rounded-md cursor-pointer"
              >
                Edit Profile
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
