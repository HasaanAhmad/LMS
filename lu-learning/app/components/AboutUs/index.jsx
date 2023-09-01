import React from "react";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Index = () => {
  return (
    <section className="bg-gray-100 py-16" id="aboutus">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl sm:text-6xl font-semibold mb-4 text-center">Want to know more about us?</h2>
        </div>
      </div>

      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600 mb-4 text-lg sm:text-2xl">
          LU is providing people with flexible and rigorous online learning opportunities that will help them acquire the knowledge, skills, and characteristics necessary for career readiness. LU is on a mission to help creators earn a living online. Here is what we do and how we get it done.
        </p>
        <div className="flex justify-center space-x-3">
          <a href="#" className="text-gray-600 hover:text-blue-500">
            <FaFacebook size={30} />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            <FaTwitter size={30} />
          </a>
          <a href="#" className="text-gray-600 hover:text-pink-500">
            <FaInstagram size={30} />
          </a>
        </div>
        <div className="mt-6">
          <h3 className="text-xl sm:text-lg font-semibold">Contact Us</h3>
          <p className="text-gray-600">
            Email: info@example.com
          </p>
          <p className="text-gray-600">
            Phone: +1234567890
          </p>
        </div>
      </div>
    </section>
  );
};

export default Index;
