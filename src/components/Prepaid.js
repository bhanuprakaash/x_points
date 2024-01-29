// AppBookings.js
import { Input, Grid, Row, Col } from 'rsuite';
import React from 'react';

const styles = {
  width: 200,
};

const CustomInput = ({ value, onChange, ...props }) => {
  const handleChange = (prepaidValue) => {
    // Check if the input is a valid number
    const isValidNumber = /^\d*$/.test(prepaidValue);

    // Update the state only if the input is a valid number
    if (isValidNumber) {
      onChange(prepaidValue);
    }
  };

  return <Input value={value} onChange={handleChange} style={styles} {...props} />;
};

const Prepaid = ({ prepaidValue, setprepaidValue }) => {
  return (
    <Grid fluid>
      <Row>
        <Col xs={24} sm={12} md={8}>
          <label
            style={{
              fontSize: '16px',
              color:'#333',

            }}
          >Number of Prepaid Bookings: </label>
          <CustomInput
            style={{
                fontSize: '16px',
                marginTop: '10px',
                marginBottom: '20px',
                }}
          size="md" placeholder="Enter only Number" value={prepaidValue} onChange={setprepaidValue} pattern="\d*" />
        </Col>
      </Row>
    </Grid>
  );
};

export default Prepaid;
