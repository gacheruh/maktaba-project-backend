import React from "react";
import { FaUsers, FaBook, FaRecycle, FaDollarSign,  } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="p-6 md:px-16 lg:px-32 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        About Us
      </h1>
      <p className="text-lg mb-8 leading-relaxed text-gray-700">
        Welcome to <strong>Maktaba Store</strong>, a groundbreaking online
        marketplace tailored specifically for students and academic enthusiasts.
        <strong> Maktaba</strong>, which means "library" in Swahili, was
        designed to bridge the gap between students and the resources they need
        to succeed. Our platform is built with one mission in mind: to make
        academic and educational resources easily accessible, affordable, and
        convenient for everyone.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        What is Maktaba Store?
      </h2>
      <p className="text-lg mb-8 leading-relaxed text-gray-700">
        <strong>Maktaba Store</strong> is an online marketplace where students
        and users can <strong>buy, sell, and post educational items</strong>{" "}
        such as:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-8">
        <li>Books, novels, and textbooks</li>
        <li>Stationery, calculators, and lab equipment</li>
        <li>Other school-related tools and materials</li>
      </ul>
      <p className="text-lg leading-relaxed text-gray-700">
        Unlike conventional bookstores, Maktaba Store is a community-driven
        platform. Students can purchase items they need and sell unused or
        second-hand resources, ensuring affordability and sustainability.
      </p>

      <h2 className="text-2xl font-semibold mb-4 mt-10 text-gray-800">
        Why Choose Maktaba Store Over Other Bookstores?
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex space-x-4 items-start">
          <FaUsers className="text-blue-500 text-3xl" />
          <p>
            <strong>Peer-to-Peer Marketplace:</strong> Direct interactions
            between buyers and sellers eliminate middlemen and reduce costs.
          </p>
        </div>
        <div className="flex space-x-4 items-start">
          <FaDollarSign className="text-green-500 text-3xl" />
          <p>
            <strong>Affordable Prices:</strong> Students can sell unused items
            directly, providing affordable alternatives to retail prices.
          </p>
        </div>
        <div className="flex space-x-4 items-start">
          <FaRecycle className="text-orange-500 text-3xl" />
          <p>
            <strong>Sustainability:</strong> Encourages the reuse of second-hand
            books and educational tools, reducing waste.
          </p>
        </div>
        <div className="flex space-x-4 items-start">
          <FaBook className="text-purple-500 text-3xl" />
          <p>
            <strong>Wide Selection:</strong> From rare academic books to lab
            equipment, Maktaba Store caters to diverse needs.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4 mt-10 text-gray-800">
        Join the Maktaba Community
      </h2>
      <p className="text-lg leading-relaxed text-gray-700">
        Maktaba Store is more than just a marketplace—it’s a movement to make
        education more accessible, affordable, and sustainable. Be part of a
        community that fosters collaboration, empowers learners, and promotes
        sustainability.
      </p>
    </div>
  );
};

export default AboutUs;
