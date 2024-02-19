// AppBookings.js
import { Input, Grid, Row, Col } from 'rsuite';
import React from 'react';

const styles = {
  width: 200,
};

const CustomInput = ({ value, onChange, ...props }) => {
  const handleChange = (twoBookingsValue) => {
    // Check if the input is a valid number
    const isValidNumber = /^\d*$/.test(twoBookingsValue);

    // Update the state only if the input is a valid number
    if (isValidNumber) {
      onChange(twoBookingsValue);
    }
  };

  return <Input value={value} onChange={handleChange} style={styles} {...props} />;
};

const TwoBookings = ({ twoBookingsValue, setTwoBookingsValue }) => {
  return (
    <Grid fluid>
      <Row>
        <Col xs={24} sm={12} md={8}>
          <label
            style={{
              fontSize: '16px',
              color:'#333',

            }}
          >Number of 2 Bookings in a day: </label>
          <CustomInput
            style={{
                fontSize: '16px',
                marginTop: '10px',
                marginBottom: '20px',
                }}
          size="md" placeholder="Enter only Number" value={twoBookingsValue} onChange={setTwoBookingsValue} pattern="\d*" />
        </Col>
      </Row>
    </Grid>
  );
};

export default TwoBookings;
