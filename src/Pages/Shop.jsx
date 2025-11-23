import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import productData from "../data/products.json";
import lady from "../Assets/lady.jpg";

// Import all images as URLs (not modules)
const allImages = import.meta.glob("../Assets/**/*.{jpg,jpeg,png}", {
  eager: true,
  import: "default",
});

// Map products to categories with resolved image paths
const products = {
  maleShoes: productData
    .filter((p) => p.category === "maleShoes")
    .map((p) => ({
      ...p,
      image: allImages[`../Assets/male-shoes/${p.imageFile}`],
    })),
  femaleShoes: productData
    .filter((p) => p.category === "femaleShoes")
    .map((p) => ({
      ...p,
      image: allImages[`../Assets/female-shoes/${p.imageFile}`],
    })),
  femaleBags: productData
    .filter((p) => p.category === "femaleBags")
    .map((p) => ({
      ...p,
      image: allImages[`../Assets/female-bags/${p.imageFile}`],
    })),
};

export default function Shop() {
  const location = useLocation();
  const [category, setCategory] = useState("maleShoes");
  const [showArrow, setShowArrow] = useState(false);

  // Always scroll to top when Shop loads or category changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location, category]);

  // Read ?category= from URL when Shop loads
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryFromURL = params.get("category");

    if (categoryFromURL && products[categoryFromURL]) {
      setCategory(categoryFromURL);
    }
  }, [location]);

  // Scroll-to-top arrow toggle
  useEffect(() => {
    const handleScroll = () => setShowArrow(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // WhatsApp order
  const orderNow = (product) => {
    const phoneNumber = "2348108476118"; // change to your WhatsApp number
    const imageUrl = product.image;

    const message = `Hello, I want to order:\n\n` +
      `📦 Category: ${product.category}\n` +
      `🎨 Color: ${product.color}\n` +
      `📏 Size: ${product.size}\n` +
      `💵 Price: ${product.price}\n\n` +
      `${imageUrl}`;

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const url = isMobile
      ? `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`
      : `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <div>
      {/* 🔥 Fullscreen Hero Section */}
      <div className="relative isolate h-[50vh] flex items-center justify-center text-center text-white">
        {/* Background Image */}
        <div
          className="absolute inset-0 -z-10 h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${lady})` }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 -z-10 bg-black/60" />

        {/* Hero Content */}
        <div className="px-6">
          <h1 className="text-5xl font-bold sm:text-7xl">Shop</h1>
          <p className="mt-6 text-lg text-gray-200 max-w-xl mx-auto">
            Discover our latest styles of shoes and bags for men and women.
          </p>
        </div>
      </div>

      {/* Category Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        {["maleShoes", "femaleShoes", "femaleBags"].map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-md ${
              category === cat ? "bg-[#0c5c66] text-white" : "bg-gray-200"
            }`}
            onClick={() => setCategory(cat)}
          >
            {cat.replace(/([A-Z])/g, " $1")}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products[category].map((product) => (
            <div key={product.id} className="group relative flex flex-col">
              <img
                src={product.image}
                alt={product.name || product.category}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between items-center">
                <div>
                  <h3 className="text-sm text-gray-700">
                    {product.name || "No Name"}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  <p className="mt-1 text-sm text-gray-500">Size: {product.size}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
              <button
                className="mt-4 w-full bg-[#0c5c66] text-white py-2 rounded-md hover:bg-[#094d54] transition-colors"
                onClick={() => orderNow(product)}
              >
                Order Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll to Top Arrow */}
      {showArrow && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#0c5c66] text-white p-4 rounded-full shadow-xl hover:bg-[#094d54] hover:scale-110 transition-transform duration-300 flex items-center justify-center text-2xl"
          title="Scroll to Top"
        >
          ↑
        </button>
      )}
    </div>
  );
}
