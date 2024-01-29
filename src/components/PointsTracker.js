import React from 'react';
import PlanBookings from './PlanBookings';

const PointsTracker = () => {
  return (
    <div>
      <h1>Points Tracker</h1>
      
      <PlanBookings planType="Silver" />
      <PlanBookings planType="Gold" />
      <PlanBookings planType="Platinum" />

      {/* ... other components or logic */}
    </div>
  );
};

export default PointsTracker;
