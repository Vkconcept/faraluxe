import React from "react";
import { Link } from "react-router-dom";
import lady from "../Assets/lady.jpg"; 
import Features from "../Features";
import FeatureShop from "../components/FeatureShop";

export const Home = () => {
  return (
    <>
    <div className="relative isolate px-6 pt-16 lg:px-8">
      {/* Background Image + Overlay */}
      <div
        className="absolute inset-0 -z-10 h-full w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${lady})`,
        }}
      />
      <div className="absolute inset-0 -z-10 bg-black/60"></div>

      {/* Hero Content */}
      <div className="mx-auto max-w-2xl py-20 sm:py-28 lg:py-32 text-center text-white">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Elevate Your Look with Timeless Fashion
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Discover our stylish shoes, and versatile bags
          designed for both men and women who value comfort and elegance.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/shop"
            className="rounded-md px-5 py-3 text-sm font-semibold shadow text-white"
            style={{
              backgroundColor: "rgb(12,92,102)", // custom button color
            }}
          >
            View Collection
          </Link>
        </div>
      </div>
    </div>
        <Features />
          <FeatureShop />

      
    </>
  );
};
