"use client";
import { useState } from "react";

export default function Product2() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const products = [
    {
      id: 1,
      name: "BMW X5",
      brand: "BMW",
      price: "₹80L",
      img: "/carimg/bmw1.avif",
    },
    {
      id: 2,
      name: "BMW M4",
      brand: "BMW",
      price: "₹1Cr",
      img: "/carimg/bmw2.avif",
    },
    {
      id: 3,
      name: "BMW i8",
      brand: "BMW",
      price: "₹2Cr",
      img: "/carimg/bmw3.avif",
    },
    {
      id: 4,
      name: "BMW X7",
      brand: "BMW",
      price: "₹1.2Cr",
      img: "/carimg/bmw4.avif",
    },

    {
      id: 5,
      name: "Audi A6",
      brand: "Audi",
      price: "₹70L",
      img: "/carimg/audi1.avif",
    },
    {
      id: 6,
      name: "Audi Q7",
      brand: "Audi",
      price: "₹90L",
      img: "/carimg/audi2.avif",
    },
    {
      id: 7,
      name: "Audi R8",
      brand: "Audi",
      price: "₹2.5Cr",
      img: "/carimg/audi3.avif",
    },
    {
      id: 8,
      name: "Audi A4",
      brand: "Audi",
      price: "₹60L",
      img: "/carimg/audi4.avif",
    },
    {
      id: 9,
      name: "Audi Q5",
      brand: "Audi",
      price: "₹75L",
      img: "/carimg/audi5.avif",
    },
    {
      id: 10,
      name: "Audi RS7",
      brand: "Audi",
      price: "₹2Cr",
      img: "/carimg/audi6.avif",
    },

    {
      id: 11,
      name: "Lamborghini Huracan",
      brand: "Lamborghini",
      price: "₹3Cr",
      img: "/carimg/lambo1.avif",
    },
    {
      id: 12,
      name: "Lamborghini Aventador",
      brand: "Lamborghini",
      price: "₹5Cr",
      img: "/carimg/lambo2.avif",
    },
    {
      id: 13,
      name: "Lamborghini Urus",
      brand: "Lamborghini",
      price: "₹4Cr",
      img: "/carimg/lambo3.avif",
    },
    {
      id: 14,
      name: "Lamborghini Gallardo",
      brand: "Lamborghini",
      price: "₹2Cr",
      img: "/carimg/lambo4.avif",
    },
    {
      id: 14,
      name: "Lamborghini Gallardo",
      brand: "Lamborghini",
      price: "₹2Cr",
      img: "/carimg/lambo5.avif",
    },
    {
      id: 14,
      name: "Lamborghini Gallardo",
      brand: "Lamborghini",
      price: "₹2Cr",
      img: "/carimg/lambo6.avif",
    },

    {
      id: 15,
      name: "Mahindra Thar LX",
      brand: "Thar",
      price: "₹15L",
      img: "/carimg/bulero1.jpg",
    },
    {
      id: 16,
      name: "Mahindra Thar 4x4",
      brand: "Thar",
      price: "₹18L",
      img: "/carimg/bulero2.avif",
    },
    {
      id: 17,
      name: "Thar Black Edition",
      brand: "Thar",
      price: "₹17L",
      img: "/carimg/bulero1.jpg",
    },
    {
      id: 18,
      name: "Thar Red",
      brand: "Thar",
      price: "₹16L",
      img: "/carimg/bulero2.avif",
    },

    {
      id: 21,
      name: "Hyundai Creta SX",
      brand: "Creta",
      price: "₹18L",
      img: "/carimg/creta1.avif",
    },
    {
      id: 22,
      name: "Creta Turbo",
      brand: "Creta",
      price: "₹20L",
      img: "/carimg/creta2.avif",
    },
    {
      id: 23,
      name: "Creta Black",
      brand: "Creta",
      price: "₹19L",
      img: "/carimg/creta3.avif",
    },
    {
      id: 24,
      name: "Creta White",
      brand: "Creta",
      price: "₹17L",
      img: "/carimg/creta4.avif",
    },
    {
      id: 25,
      name: "Creta SUV",
      brand: "Creta",
      price: "₹16L",
      img: "/carimg/creta5.avif",
    },
    {
      id: 26,
      name: "Creta New Model",
      brand: "Creta",
      price: "₹21L",
      img: "/carimg/creta6.avif",
    },
  ];

  // 🔍 Filter logic
  const filteredProducts = products.filter((item) => {
    return (
      (filter === "All" || item.brand === filter) &&
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6">🚗 Car Showroom</h1>

      {/* 🔍 Search */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search car..."
          className="border p-2 rounded w-80"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* 🎯 Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {["All", "BMW", "Audi", "Lamborghini", "Thar", "Creta"].map((btn) => (
          <button
            key={btn}
            onClick={() => setFilter(btn)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {btn}
          </button>
        ))}
      </div>

      {/* 🚗 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
            <img src={item.img} className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <h2 className="font-bold">{item.name}</h2>
              <p className="text-green-600">{item.price}</p>

              <div className="flex gap-2 mt-3">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded">
                  View
                </button>
                <button className="flex-1 bg-pink-500 text-white py-2 rounded">
                  Add 🛒
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
