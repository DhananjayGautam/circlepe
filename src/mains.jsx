import React from 'react';
import { useNavigate } from 'react-router-dom';
import Oip from './assets/OIP.jpeg';
import R from './assets/R.jpeg';
import Th from './assets/th.jpeg';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { FaHome, FaSearch, FaHeart, FaUser } from 'react-icons/fa';


const properties = [
  {
    id: 1,
    name: "Sky Dandelions Apartment",
    location: "Sector 28, Gurgaon",
    price: "₹ 22,000/month",
    rating: "4.9",
    image: Th,
  },
  {
    id: 2,
    name: "Wings Tower",
    location: "Sector 27, Gurgaon",
    price: "₹ 17,000/month",
    rating: "4.9",
    image: R,
  },
  {
    id: 3,
    name: "Wayside Modern House",
    location: "MG Road, Gurgaon",
    price: "₹ 18,000/month",
    rating: "4.4",
    image: Oip,
  },
];

const PropertyCard = ({ property }) => {
  const [liked, setLiked] = React.useState(false);
  const navigate = useNavigate();

  const toggleLike = (e) => {
    e.stopPropagation(); // Prevent click from propagating to the card
    setLiked(!liked);
  };

  const handleCardClick = () => {
    navigate(`/transaction-review/${property.id}`);
  };

  return (
    <div className="property-card" onClick={handleCardClick}>
      <div className="property-card-header">
        <img src={property.image} alt={property.name} className="property-image" />
        <div className="heart-circle" onClick={toggleLike}>
          <FaHeart className={`heart-icon ${liked ? 'liked' : ''}`} />
        </div>
      </div>
      <div className="property-info">
        <h3>{property.name}</h3>
        <p>{property.location}</p>
        <p className="price">{property.price}</p>
        <p className="rating">⭐ {property.rating}</p>
      </div>
    </div>
  );
};

const PropertyList = () => {
  return (
    <div className="app-container">
      <header className="head w-full">
        <div className="w-full">
          <div className="header-container w-full">
            <button className="back-btn w-full"><ArrowBackIosIcon/></button>
            <h2 className="header-title w-full">Search results</h2>
            <button className="filter-btn w-full"><TuneIcon/></button>
          </div>
          <div className="search-bar-container w-full">
            <div className="search-bar w-full">
              <input type="text" placeholder="Search" />
              <button type="submit"><SearchIcon/></button>
            </div>
          </div>
        </div>
      </header>

      <div className="properties-list">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      <div className="App">
        <BottomNav />
      </div>
    </div>
  );
};

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <FaHome className="icon" />
      <FaSearch className="icon" />
      <FaHeart className="icon active" />
      <FaUser className="icon" />
    </div>
  );
};

export default PropertyList;
