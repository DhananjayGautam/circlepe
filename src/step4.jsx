// NewPage.js
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import CelebrationIcon from '@mui/icons-material/Celebration';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const NewPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-2xl shadow-lg p-12 w-full max-w-6xl relative"> {/* Added relative positioning */}
        {/* Back Button */}
        <div className="absolute top-4 left-4">
          <button onClick={() => navigate(-1)}> {/* Use navigate to go back */}
            <FaArrowLeft className="text-black" />
          </button>
        </div>

        {/* Setup Autopay and KYC Buttons */}
        <div className="flex justify-center space-x-4 mb-6">
          <button className="bg-green-100 text-green-600 px-6 py-2 rounded-md">Setup Autopay</button>
          <button className="bg-green-100 text-green-600 px-6 py-2 rounded-md">Setup Autopay</button>
          <button className="bg-blue-100 text-blue-600 px-6 py-2 rounded-md">KYC & move-in</button>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-semibold">One step away ✨</h1>
          <p className="text-blue-500 text-xl">from your dream home </p>
        </div>

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-blue-100 p-10 rounded-full">
            <CelebrationIcon className="text-blue-500" sx={{ fontSize: 80 }} />
          </div>
        </div>

        {/* Rent Converted Information */}
        <div className="text-center mb-6">
          <span className="bg-blue-100 text-blue-600 font-medium px-4 py-2 rounded-full">
            Rent converted to Zero-Cost EMI
          </span>
        </div>

        {/* Rent Information */}
        <div className="mb-8">
          <div className="flex justify-between mb-3 text-xl">
            <span className="text-gray-800">Co-living partner</span>
            <span className="text-gray-500">Rent-OK</span>
          </div>
          <div className="flex justify-between mb-3 text-xl">
            <span className="text-gray-800">Payment Amount</span>
            <span className="text-gray-500">INR XXXX.00</span>
          </div>
          <div className="flex justify-between text-xl">
            <span className="text-gray-800">Monthly rent</span>
            <span className="text-gray-500">10,000 INR/mo.</span>
          </div>
          <div className="flex justify-between mb-3 ">
            <span className="text-gray-800"><h6>(Zero-Cost EMI)</h6></span>
          </div>
          <div className="flex justify-between text-xl">
            <span className="text-gray-800">Rent cycle</span>
            <span className="text-gray-500">5 Months</span>
          </div>
          <div className="flex justify-between mb-3 ">
            <span className="text-gray-800"><h6>(EMI Duration)</h6></span>
          </div>
        </div>

        {/* Zero Cost EMI Button */}
        <div className="flex justify-center rounded mb-6">
          <button className="bg-green-100 text-green-600 px-10 py-1 rounded-full text-lg">
            Zero COST EMI
          </button>
        </div>
        <div className="mt-6 text-center text-gray-500 text-sm">
          By clicking on next, you acknowledge that you have read <a href="#" className="text-blue-500 underline">Loan Agreement & KFS</a> and agree to the terms and conditions.
        </div>
        {/* Continue Button */}
        <div className="flex justify-center">
          <button className="bg-blue-500 text-white font-semibold py-4 px-12 rounded-md text-xl w-full max-w-sm">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPage;
