import React from "react";
import lady from "../Assets/lady.jpg"; 
import shoeImg from "../Assets/shoeImg.jpg"; 

export default function About() {
  return (
    <div className="relative bg-white">
      {/* Hero / Banner */}
      <div className="relative isolate px-6 pt-16 lg:px-8">
        <div
          className="absolute inset-0 -z-10 h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${lady})` }}
        />
        <div className="absolute inset-0 -z-10 bg-black/50"></div>
        <div className="mx-auto max-w-2xl py-24 text-center text-white">
          <h1 className="text-4xl font-bold sm:text-6xl ">About Us</h1>
        </div>
      </div>

      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
        {/* Main Content Container */}
        <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Section */}
            <div className="space-y-8">
              {/* Accent line */}
              <div className="w-16 h-1 bg-[#0c5c66]"></div>

              {/* Main Heading */}
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-[#0c5c66] leading-tight">
                Welcome To
                <br />
                Faraluxe Collection
              </h1>

              {/* Description */}
              <p className="text-gray-600 text-lg lg:text-xl leading-relaxed max-w-xl">
                Faraluxe Collection is a premier online store based in Lagos, bringing you stylish shoes, and bags. 
                We curate high-quality pieces at affordable prices, ensuring a seamless shopping experience with fast and reliable delivery across Nigeria. Your fashion, delivered with ease and elegance.
              </p>
            </div>

            {/* Right Image Section */}
            <div className="flex justify-center">
              <div className="relative bg-white rounded-2xl p-6 shadow-2xl">
                <img 
                  src={shoeImg} 
                  alt="Fashion Item" 
                  className="w-64 h-80 sm:w-80 sm:h-100 md:w-96 md:h-96 lg:w-[28rem] lg:h-[35rem] object-cover rounded-lg" 
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Call-to-Action */}
      <section className="py-16 px-6 text-center">
        <a
          href="/shop"
          className="rounded-md px-6 py-3 text-white font-semibold shadow"
          style={{ backgroundColor: "#0c5c66" }}
        >
          Explore Our Collection
        </a>
      </section>
    </div>
  );
}
