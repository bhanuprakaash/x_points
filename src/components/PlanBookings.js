import React from 'react';
import PlanInputPicker from './PlanInputPicker';
const PlanBookings = ({ silverCount, setSilverCount, goldCount, setGoldCount, platinumCount, setPlatinumCount })=>{
    return(
      <div>
        <PlanInputPicker planType={'Silver'} value={silverCount} onChange={setSilverCount}/>
        <PlanInputPicker planType={'Gold'} value={goldCount} onChange={setGoldCount}/>
        <PlanInputPicker planType={'Platinum'} value={platinumCount} onChange={setPlatinumCount}/>
      </div>
    )
}

export default PlanBookings;