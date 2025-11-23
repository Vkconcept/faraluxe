import { TruckIcon, BoltIcon, HeartIcon } from "@heroicons/react/24/outline";

export default function Features() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Fast Delivery */}
          <div className="bg-yellow-50 p-6 rounded-lg flex items-start space-x-4">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "#0c5c66" }}
            >
              <TruckIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Fast delivery to save your time.
              </h3>
              <p  className="font-semibold text-gray-900 mb-1">
                Get your favorite fashion items delivered to your doorstep quickly, anywhere you are.
              </p>
            </div>
          </div>

          {/* Quick Order */}
          <div className="bg-pink-50 p-6 rounded-lg flex items-start space-x-4">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "#0c5c66" }}
            >
              <BoltIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Order Your Favorite Styles Quickly.
              </h3>
              <p className="font-semibold text-gray-900 mb-1">
                Browse our collection of premium clothes, shoes, and bags, and place your order in just a few clicks. Shopping has never been this effortless.
              </p>
            </div>
          </div>

          {/* Customer Satisfaction */}
          <div className="bg-blue-50 p-6 rounded-lg flex items-start space-x-4">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "#0c5c66" }}
            >
              <HeartIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Customer Satisfaction is our greatest priority.
              </h3>
              <p className="font-semibold text-gray-900 mb-1">
                 We’re committed to offering top-quality products and excellent service for all fashion lovers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
