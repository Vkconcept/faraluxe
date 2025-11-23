import React from "react";
import { Link } from "react-router-dom"; 
import productData from "../data/products.json";

const allImages = import.meta.glob("../Assets/**/*.{jpg,jpeg,png}", { eager: true });

// Helper to resolve image path
const getImagePath = (category, imageFile) => {
  const pathMap = {
    maleShoes: `../Assets/male-shoes/${imageFile}`,
    femaleShoes: `../Assets/female-shoes/${imageFile}`,
    femaleBags: `../Assets/female-bags/${imageFile}`,
  };
  return pathMap[category];
};

// Build products (limit 10 each)
const products = {
  maleShoes: productData
    .filter((p) => p.category === "maleShoes")
    .map((p) => ({
      ...p,
      image: allImages[getImagePath("maleShoes", p.imageFile)]?.default,
    }))
    .filter((p) => p.image)
    .slice(0, 10),

  femaleShoes: productData
    .filter((p) => p.category === "femaleShoes")
    .map((p) => ({
      ...p,
      image: allImages[getImagePath("femaleShoes", p.imageFile)]?.default,
    }))
    .filter((p) => p.image)
    .slice(0, 10),

  femaleBags: productData
    .filter((p) => p.category === "femaleBags")
    .map((p) => ({
      ...p,
      image: allImages[getImagePath("femaleBags", p.imageFile)]?.default,
    }))
    .filter((p) => p.image)
    .slice(0, 10),
};

export default function FeatureShop() {
  // WhatsApp order function
  const orderNow = (product) => {
    const phoneNumber = "2348108476118"; // Replace with your WhatsApp number

    // Use absolute URL for preview
    const imageUrl = `${window.location.origin}${product.image}`;

    const message =
      `Hello, I want to order:\n\n` +
      `📦 Category: ${product.category}\n` +
      `🎨 Color: ${product.color}\n` +
      `📏 Size: ${product.size}\n` +
      `💵 Price: ${product.price}\n\n` +
      `${imageUrl}`; // 👈 clickable & shows preview

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const url = isMobile
      ? `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`
      : `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Featured Collections</h2>

      {Object.entries(products).map(([key, items]) => (
        <div key={key} className="mb-16">
          {/* Collection Title */}
          <h3 className="text-2xl font-semibold mb-6 capitalize">
            {key.replace(/([A-Z])/g, " $1")}
          </h3>

          {/* Product Grid */}
          {items.length === 0 ? (
            <p className="text-gray-500">No products available.</p>
          ) : (
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {items.map((product) => (
                <div
                  key={`${product.category}-${product.id}`}
                  className="group relative flex flex-col"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/300x300?text=Image+Not+Found";
                    }}
                  />
                  <div className="mt-4 flex justify-between items-center">
                    <div>
                      <h3 className="text-sm text-gray-700">{product.name}</h3>
                      <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                      <p className="mt-1 text-sm text-gray-500">Size: {product.size}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {product.price}
                    </p>
                  </div>

                  {/* Order Now Button */}
                  <button
                    className="mt-4 w-full bg-[#0c5c66] text-white py-2 rounded-md hover:bg-[#094d54] transition-colors"
                    onClick={() => orderNow(product)}
                  >
                    Order Now
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* See More Button (goes to specific category) */}
          <div className="flex justify-center mt-8">
            <Link
              to={`/shop?category=${key}`}
              className="px-6 py-2 bg-[#0c5c66] text-white rounded-md hover:bg-[#094d54] transition-colors"
            >
              See More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
