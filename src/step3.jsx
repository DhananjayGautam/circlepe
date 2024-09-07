// NextPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faIdCard, faBriefcase, faUniversity, faIdBadge } from '@fortawesome/free-solid-svg-icons';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function NextPage() {
  const navigate = useNavigate(); // Initialize useNavigate
  const [isChecked, setIsChecked] = useState(false); // State to manage checkbox status

  // Handler for checkbox change
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gray-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl">
        <Header />
        <Setups />
        <Terms isChecked={isChecked} handleCheckboxChange={handleCheckboxChange} />
        <Footer navigate={navigate} isChecked={isChecked} /> {/* Pass isChecked state to Footer */}
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="text-center mb-6">
      <h1 className="text-3xl font-bold">Circle <span className="font-light">App</span></h1>
      <h2 className="bg-blue-100 text-black-500 font-semibold px-2 py-1 rounded-full ">
        Rent at <span className="text-blue-500">Zero</span> security deposit ✨

      </h2>
      <p className="text-base text-gray-500">Set-up No Cost EMI in 3 steps</p>
    </div>
  );
}

function Setups() {
  return (
    <div className="bg-gray-100 rounded-lg p-4 mb-6">
      <Step number="1" title="Eligibility check" details={[
        { icon: faIdCard, text: "Basic Details", extra: "PAN & DOB" },
        { icon: faBriefcase, text: "Work Details", extra: "Employment details" }
      ]} />
      <Step number="2" title="Setup AutoPay" details={[
        { icon: faUniversity, text: "Bank Details", extra: "Salary account details" },
        { icon: faIdBadge, text: "Identity Verification", extra: "Selfie & Aadhaar KYC" }
      ]} />
      <Step number="3" title="Move-In" details={[]} />
    </div>
  );
}

function Step({ number, title, details }) {
  return (
    <div className="mb-4">
      <div className="flex items-center mb-2">
        <div className="bg-blue-100 text-blue-500 rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">{number}</div>
        <div className="ml-4 text-blue-500 bg-blue-100 px-3 rounded font-medium text-lg">{title}</div>
      </div>
      {details.map((detail, index) => (
        <div key={index} className="ml-14">
          <div className="flex items-center mb-2">
            <FontAwesomeIcon icon={detail.icon} className="text-blue-500" />
            <div className="ml-4 text-gray-700 text-base">{detail.text}</div>
          </div>
          <div className="ml-10 text-gray-400 text-sm">{detail.extra}</div>
        </div>
      ))}
    </div>
  );
}

function Terms({ isChecked, handleCheckboxChange }) {
  return (
    <div className="flex items-center mb-6">
      <input 
        type="checkbox" 
        id="terms" 
        className="mr-2" 
        checked={isChecked} 
        onChange={handleCheckboxChange} 
      />
      <label htmlFor="terms" className="font-bold text-base text-gray-500">
        By clicking this, you approve our 
        <a href="#" className="text-blue-500">terms and conditions</a> and 
        <a href="#" className="text-blue-500">privacy policy</a>
      </label>
    </div>
  );
}

function Footer({ navigate, isChecked }) {
  return (
    <div>
      <div className="text-center mb-4">
        <button 
          onClick={() => navigate('/new')}  // Navigate to the new page
          className={`bg-gradient-to-r from-blue-500 to-blue-400 text-white py-3 px-6 rounded-full w-full ${!isChecked ? 'opacity-50 cursor-not-allowed' : ''}`} // Disable button if checkbox is not checked
          disabled={!isChecked} // Disable button functionality
        >
          Get Started <KeyboardArrowRightIcon />
        </button>
      </div>
      <div className="text-center">
        <button onClick={() => navigate(-1)} className="text-blue-500 text-base">
          Go Back
        </button>
      </div>
    </div>
  );
}

export default NextPage;
