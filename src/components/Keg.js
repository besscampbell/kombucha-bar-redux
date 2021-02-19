import React from 'react';
import PropTypes from 'prop-types';


function Keg(props){

  let availability;
  if(props.pintsRemaining > 9){
    availability = `Approximately ${props.pintsRemaining} pints left in the keg`;
  } else if (props.pintsRemaining > 0 && props.untappedKegs === 0) {
    availability = `Almost empty, only ${props.pintsRemaining} pint${props.pintsRemaining === 1 ? "": "s"} left and you haven't Restocked yet!`;
  }  else if (props.pintsRemaining > 0) {
    availability = `Almost empty, only about ${props.pintsRemaining} pint${props.pintsRemaining === 1 ? "": "s"} left. Good thing you have another keg!`;
  } else if (props.pintRemaining === 0 && props.untappedKegs > 0){
    availability = "Time to change the keg"
  } else {
    availability = "Out of Stock";
  }

  return(
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.brand}: {props.flavor}</h3>
        <h4>{availability}</h4>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  brand: PropTypes.string,
  flavor: PropTypes.string,
  untappedKegs: PropTypes.number,
  pintsRemaining: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
}

export default Keg;