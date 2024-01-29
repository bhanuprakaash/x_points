// PlanInputPicker.js
import { InputNumber, InputGroup } from 'rsuite';
import React from 'react';

const styles = {
  planInputContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '10px',
    width: '100%',
    marginTop: '10px',
    // eslint-disable-next-line no-dupe-keys
    alignItems:'flex-start',
  },
  label: {
    marginRight: '10px',
    fontSize: '16px',
    marginBottom: '10px',
    alignSelf: 'flex-start',
    fontWeight: '300',
    color:'#333',
  },
  inputGroup: {
    width: '100%',
  },
};

const PlanInputPicker = ({ planType, value, onChange }) => {
  return (
    <div style={styles.planInputContainer}>
      <label style={styles.label}>{`${planType} Plan:`}</label>
      <div style={styles.inputGroup}>
        <InputGroup>
          <InputNumber className={'custom-input-number'} value={value} onChange={onChange} />
        </InputGroup>
      </div>
    </div>
  );
};

export default PlanInputPicker;
