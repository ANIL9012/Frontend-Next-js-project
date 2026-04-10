import Image from "next/image";
import React from "react";
import nature from "@/../public/nature.jpg";

export const metadata = {
  title: "Services",
  description:
    "Our services include web development, mobile app development, and UI/UX design.",
  authors: [
    { name: "Anil Kumar" },
    { name: "Anil Technical", url: "anilkumartechnical.com" },
  ],
  keywords: ["next js", "reactjs", "fullstack"],
};

function services() {
  return (
    <div className="grid grid-cols-3 gap-8">
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
        <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center relative overflow-hidden">
          <Image
            src="/nature.jpg"
            alt="Nature"
            width={500}
            height={500}
            className="w-full h-full "
          />
        </div>
        <h3 className="text-lg font-semibold text-center">Serv</h3>
        <p className="text-sm text-gray-600 text-center mt-2">
          Frontend Developer
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
        <div className="relative w-full h-full">
          <Image
            src={nature}
            alt="Nature"
            fill={true}
            quality={100}
            priority={false}
            placeholder="blur"
            blurDataURL=""
            className="object-cover"
          />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
        <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 relative overflow-hidden">
          <Image
            src="/nature.jpg"
            alt="Service"
            fill
            className="object-cover"
          />
        </div>
        <h3 className="text-lg font-semibold text-center">Serv</h3>
        <p className="text-sm text-gray-600 text-center mt-2">
          Frontend Developer
        </p>
      </div>
    </div>
  );
}

export default services;
