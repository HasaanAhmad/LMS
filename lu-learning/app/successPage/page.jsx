'use client'
import React from 'react';

const RegistrationSuccessfulPage = () => {
   
    const totalSum = sessionStorage.getItem("totalCost");;
    

  // Convert the comma-separated prices to an array of prices
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white p-8 rounded shadow-lg max-w-7xl w-full mx-4">
        <h1 className="text-3xl font-semibold mb-6 text-center text-green-600">Registration Successful!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for registering! Your registration has been successful. Please proceed with the payment to complete the process.
        </p>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-green-600">Payment Instructions:</h2>
          <p className="text-gray-600">
            To make the payment, you can use either EasyPaisa or JazzCash. Follow the steps below:
          </p>
          <ul className="list-disc pl-6 mt-3 text-gray-600">
            <li>Open the EasyPaisa or JazzCash app on your phone.</li>
            <li>Select the 'Send Money' or 'Send Payment' option.</li>
            <li>Enter the recipient's phone number: [03XX-XXXXXXX]</li>
            <li>Enter the amount: {totalSum} {console.log(searhParams.totalSum)} Rs.</li>
            <li>Add a reference note: [Your Reference]</li>
            <li>Confirm and complete the payment.</li>
          </ul>
        </div>
        <p className="text-gray-600">
          Once the payment is successfully made, your registration will be fully confirmed. Thank you for choosing our services!
        </p>
      </div>
    </div>
  );
};

export default RegistrationSuccessfulPage;
