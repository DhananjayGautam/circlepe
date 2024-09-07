import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './step2.css'; // Ensure this CSS handles modal animations properly
import Oip from './assets/OIP.jpeg';
import R from './assets/R.jpeg';
import Th from './assets/th.jpeg';
import { FaCheck, FaCheckCircle, FaArrowRight } from "react-icons/fa";

const properties = [
  {
    id: 1,
    name: "Sky Dandelions Apartment",
    location: "Sector 28, Gurgaon",
    price: "₹ 22,000/month",
    image: Th,
  },
  {
    id: 2,
    name: "Wings Tower",
    location: "Sector 27, Gurgaon",
    price: "₹ 17,000/month",
    image: R,
  },
  {
    id: 3,
    name: "Wayside Modern House",
    location: "MG Road, Gurgaon",
    price: "₹ 18,000/month",
    image: Oip,
  },
];

const TransactionReview = () => {
  const { propertyId } = useParams();
  const property = properties.find(p => p.id === parseInt(propertyId));
  const [selectedPeriod, setSelectedPeriod] = useState(6);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const monthlyPayment = parseInt(property.price.replace(/[^0-9]/g, ''), 10);
  const totalAmount = monthlyPayment * selectedPeriod;

  const navigate = useNavigate();

  const handlePaymentClick = () => {
    setIsModalOpen(true); // Open the modal on button click
  };

  const proceedToNextPage = () => {
    navigate('/next-page'); // Navigate to the next page
  };

  return (
    <div className="transaction-container">
      <header className="transaction-header">
        <button className="back-btn w-full" onClick={() => navigate(-1)}>
          <ArrowBackIosIcon />
        </button>
        <h2 className="header-title w-full">Transaction review</h2>
      </header>

      <div className="apartment-card">
        <img className="apartment-image" src={property.image} alt={property.name} />
        <div className="apartment-info relative">
          <h3>{property.name}</h3>
          <p>{property.location}</p>
           <div className="relative bg-white rounded  inset-y-0 right-0 w-20 h-10">₹ {monthlyPayment}</div>
        </div>
      </div>

      <div className="period-selection">
        <h4>Select Period</h4>
        <div className="period-buttons">
          <button
            className={selectedPeriod === 3 ? 'active' : ''}
            onClick={() => setSelectedPeriod(3)}
          >
            3 months
          </button>
          <button
            className={selectedPeriod === 6 ? 'active' : ''}
            onClick={() => setSelectedPeriod(6)}
          >
            6 months
          </button>
          <button
            className={selectedPeriod === 9 ? 'active' : ''}
            onClick={() => setSelectedPeriod(9)}
          >
            9 months
          </button>
        </div>
      </div>

      <h3 className='pay'>Payment Detail</h3>
      <div className="payment-detail">
        <div className="total"><p>Period time: </p><p>{selectedPeriod} months</p></div>
        <div className="total"><p>Monthly payment: </p><p>₹ {monthlyPayment}</p></div>
        <div className="total"><p>Security deposit: </p><p>₹ 0</p></div>
        <div className="blue"><h3>Total: </h3><h3>₹ {totalAmount}</h3></div>
      </div>

      <button className="pay-button" onClick={handlePaymentClick}>
        Pay with Circle
      </button>

      {/* Modal Section */}
      <div className={`payment-modal ${isModalOpen ? 'open' : ''}`}>
        <div className="modal-content">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-blue-100 p-6 rounded-full">
              <FaCheck className="text-blue-500 text-5xl" />
            </div>
          </div>

          <div className="text-center text-blue-500 font-semibold text-3xl mb-8">Approved</div>

          <div className="flex flex-col items-center text-center space-y-4 text-lg">
            <div className="flex items-center">
              <FaCheckCircle className="text-blue-500 mr-3" />
              <span>
                New Rent Offer: <span className="text-blue-500 font-semibold">{property.price}</span>
              </span>
            </div>

            <div className="flex items-center">
              <FaCheckCircle className="text-blue-500 mr-3" />
              <span>
                Zero security deposit <span className="text-blue-500 underline">move-in</span>
              </span>
            </div>

            <div className="flex items-center">
              <FaCheckCircle className="text-blue-500 mr-3" />
              <span>
                3-Months <span className="text-blue-500 underline">salary cover</span>
              </span>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-center">
            <button 
              onClick={() => {
                setIsModalOpen(false); // Close the modal
                setTimeout(proceedToNextPage, 500); // Delay navigation to match animation
              }}
              className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-full flex items-center text-lg"
            >
              Pay with Circle
              <FaArrowRight className="ml-2 text-2xl" />
            </button>
          </div>

          <button
            onClick={() => setIsModalOpen(false)}
            className="bg-red-500 text-white font-semibold py-2 px-4 mt-4 rounded-full"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionReview;
