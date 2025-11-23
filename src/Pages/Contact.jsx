import lady from "../Assets/lady.jpg";

export default function Contact() {
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
          <h1 className="text-4xl font-bold sm:text-6xl">Contact</h1>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-br from-gray-100 to-gray-200 py-20 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl font-bold text-[#0c5c66] uppercase">
            Don’t Be A Stranger
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            You Tell Us. We Listen.
          </p>

          {/* Contact Form */}
          <form className="mt-10 grid grid-cols-1 gap-6 text-left">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0c5c66] outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0c5c66] outline-none"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0c5c66] outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#0c5c66] text-white font-semibold py-4 rounded-lg shadow hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
