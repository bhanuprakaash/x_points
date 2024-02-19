// App.js
import React from 'react';
import 'rsuite/dist/rsuite.min.css';
import PlanBookings from './components/PlanBookings';
import AppBookings from './components/AppBookings';
import Prepaid from './components/Prepaid';
import WeekBonus from './components/WeekBonus';
import TwoBookings from './components/TwoBookings';

import './index.css';

function App() {
  const [silverCount, setSilverCount] = React.useState(0);
  const [goldCount, setGoldCount] = React.useState(0);
  const [platinumCount, setPlatinumCount] = React.useState(0);
  const [inputValue, setInputValue] = React.useState(0);
  const [prepaidValue, setprepaidValue] = React.useState(0);
  const [weekBonus, setweekBonus] = React.useState(0);
  const [twoBookingsValue, setTwoBookingsValue] = React.useState(0);

  const totalPoints = () => {
    const bookingPoints = silverCount * 4000 + goldCount * 6000 + platinumCount * 8500;
    const appBookingPoints =
      inputValue >= 1 && inputValue <= 4
        ? 1000
        : inputValue >= 5 && inputValue <= 9
        ? 2500
        : inputValue >= 10
        ? 5000
        : 0;
    const prepaidPoints = prepaidValue * 500;
    const weekBonusPoints = weekBonus * 2500;
    const totalPoints = bookingPoints + appBookingPoints + prepaidPoints + weekBonusPoints;
    
    return totalPoints - (twoBookingsValue * 500);
  };

  return (
    <div className="App" style={styles.appContainer}>
      <div
        style={{
          background: 'linear-gradient(135deg, #09203F 0%, #537895 100%)', // Gradient background
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '20px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          marginBottom: '20px',
          
        }}
      >
        <h1
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '20px',
            marginTop: '20px',
            fontFamily:'Poppins',
            color: '#fff', // Text color
            
          }}
        >
          Pilot 🚀
        </h1>
      </div>
      <div style={styles.planBookingsContainer}>
        <h3
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '20px',
            fontFamily:'Poppins',
            color: '#537895', // Text color
          }}
        >Booking Overview</h3>
        <PlanBookings
          silverCount={silverCount}
          setSilverCount={setSilverCount}
          goldCount={goldCount}
          setGoldCount={setGoldCount}
          platinumCount={platinumCount}
          setPlatinumCount={setPlatinumCount}
        />
      </div>
      <div style={styles.bonusContainer}>
        <h3
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '20px',
            fontFamily:'Poppins',
            color: '#537895', // Text color
          }}
        >Additional Benefits</h3>
        <AppBookings inputValue={inputValue} setInputValue={setInputValue} />
        <Prepaid prepaidValue={prepaidValue} setprepaidValue={setprepaidValue} />
        <WeekBonus weekBonus={weekBonus} setweekBonus={setweekBonus} />
        <TwoBookings twoBookingsValue={twoBookingsValue} setTwoBookingsValue={setTwoBookingsValue} />
      </div>
      <div style={styles.pointsContainer}>
      <h2 style={styles.pointsHeader}>Points Summary</h2>
      <div style={styles.pointItem}>
        <span style={styles.pointLabel}>Silver Points:</span>
        <span>{silverCount * 4000}</span>
      </div>
      <div style={styles.pointItem}>
        <span style={styles.pointLabel}>Gold Points:</span>
        <span>{goldCount * 6000}</span>
      </div>
      <div style={styles.pointItem}>
        <span style={styles.pointLabel}>Platinum Points:</span>
        <span>{platinumCount * 8500}</span>
      </div>
      <div style={styles.pointItem}>
        <span style={styles.pointLabel}>App Booking Points:</span>
        <span>{inputValue}</span>
      </div>
      <div style={styles.pointItem}>
        <span style={styles.pointLabel}>Prepaid Points:</span>
        <span>{prepaidValue * 500}</span>
      </div>
      <div style={styles.pointItem}>
        <span style={styles.pointLabel}>5 Bookings in a week:</span>
        <span>{weekBonus * 2500}</span>
  </div>
</div>
      <div style={styles.totalPointsContainer}>
        <h2>Total Points: {totalPoints()}</h2>
      </div>
    </div>
  );
}

const styles = {
  appContainer: {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
    boxSizing: 'border-box',
  },
  planBookingsContainer: {
    marginBottom: '20px',
    border: '2px solid #537895',
    padding: '20px',
    borderRadius: '15px',
    
  },
  bonusContainer: {
    marginBottom: '20px',
    border: '2px solid #537895',
    padding: '20px',
    borderRadius: '15px',
  },
  pointsContainer: {
    background: 'linear-gradient(135deg, #09203F 0%, #537895 100%)', // Gradient background
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    color: '#fff', // Text color
  },
  pointsHeader: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    alignSelf: 'flex-start', // Align self to the start (left)
  },
  pointItem: {
    marginBottom: '8px',
    alignSelf: 'stretch', // Align self to stretch the width
    display: 'flex',
    justifyContent: 'space-between', // Align label and value at opposite ends
  },
  pointLabel: {
    marginRight: '10px', // Add some space between label and value
  },
  totalPointsContainer: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', // Gradient background
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#fff', // Text color
    fontFamily:'Poppins',
  },
  totalPointsHeader: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',

  },
};

export default App;
