// AppBookings.js
import { Input, Grid, Row, Col } from 'rsuite';
import React from 'react';

const styles = {
  width: 200,
};

const CustomInput = ({ value, onChange, ...props }) => {
  const handleChange = (inputValue) => {
    // Check if the input is a valid number
    const isValidNumber = /^\d*$/.test(inputValue);

    // Update the state only if the input is a valid number
    if (isValidNumber) {
      onChange(inputValue);
    }
  };

  return <Input value={value} onChange={handleChange} style={styles} {...props} />;
};

const AppBookings = ({ inputValue, setInputValue }) => {
  return (
    <Grid fluid>
      <Row>
        <Col xs={24} sm={12} md={8}>
          <label style={{
            fontSize: '16px',
            color:'#333',

          }}>Number of App Bookings: </label>
          <CustomInput style={{
            fontSize: '16px',
            marginTop: '10px',
            marginBottom: '20px',
          }}
          size="md" placeholder="Enter only Number" value={inputValue} onChange={setInputValue} pattern="\d*" />
        </Col>
      </Row>
    </Grid>
  );
};

export default AppBookings;
