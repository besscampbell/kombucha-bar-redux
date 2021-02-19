import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function NewKeg(props){

  function handleNewKegForm(event){
    event.preventDefault();
    props.onNewKeg({
      brand: event.target.brand.value,
      flavor: event.target.flavor.value,
      pricePerPint: parseFloat(event.target.pricePerPint.value), kegPrice: parseFloat(event.target.kegPrice.value),
      untappedKegs: parseInt(event.target.untappedKegs.value),
      pintsRemaining: parseInt(event.target.pintsRemaining.value),
      id: v4()});
  }

  return(
    <React.Fragment>
      <ReusableForm formHandler={handleNewKegForm}
      buttonText="+ Keg"/>
    </React.Fragment>
  );
}

NewKeg.propTypes = {
  onNewKeg: PropTypes.func
}

export default NewKeg;