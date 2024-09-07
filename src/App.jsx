import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PropertyList from './mains';
import TransactionReview from './step2';
import NextPage from './step3';
import NewPage from './step4';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PropertyList />} /> 
        <Route path="/transaction-review/:propertyId" element={<TransactionReview />} />
        <Route path="/next-page" element={<NextPage />} />
        <Route path="/new" element={<NewPage />} />
      </Routes>
    </Router>
  );
};

export default App;
