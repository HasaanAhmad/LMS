"use client"
import React from "react";
import Image from "next/image";
import { BsFilePdf } from "react-icons/bs";

const index = () => {
  return (
    <section className="bg-gray-100 py-16 " id="aboutus">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');
        `}
      </style>
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-600 text-lg text-center max-w-md mb-8">
            Our mission statement.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-[#71cbc9] p-6 rounded-lg text-center">
            <h3
              className="text-white lg:text-9xl font-semibold mb-2 sm:text-lg"
              style={{ fontFamily: "Caveat, cursive" }}
            >
              Mission
            </h3>
            <p className="text-white lg:w-96 w-80">
              LU is providing people with flexible and rigorous online learning
              opportunities that will help them acquire the knowledge, skills,
              and characteristics necessary for career readiness. LU is on a
              mission to help creators earn a living online. Here is what we do
              and how we get it done.
            </p>
          </div>

        </div>
        <div className="ml-10 flex justify-center items-center mt-10 flex-col">
          <h3 className="text-xl font-semibold mb-2">Certificates</h3>
          <ul>
            <li className="flex items-center text-gray-600">
              <BsFilePdf className="mr-2" />
              <a
                href="/path/to/tax-certificate.pdf"
                download="tax-certificate.pdf"
                className="hover:underline"
              >
                Tax Certificate
              </a>
            </li>
            <li className="flex items-center text-gray-600">
              <BsFilePdf className="mr-2" />
              <a
                href="/path/to/incorporation-certificate.pdf"
                download="incorporation-certificate.pdf"
                className="hover:underline"
              >
                Incorporation Certificate
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default index;
