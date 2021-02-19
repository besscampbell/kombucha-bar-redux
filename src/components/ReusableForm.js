import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props){
  return (
    <React.Fragment>
      <form onSubmit={props.formHandler}>
        <div className="form-group">
          <label htmlFor="brand">Brand:</label>
          <input
            type="text"
            name="brand"
            placeholder="Brand"
            required
             />
        </div>
        <div className="form-group">
          <label htmlFor="flavor">Flavor:</label>
          <input
            type="text"
            name="flavor"
            placeholder="Flavor"
            required
            />
        </div>
        <div className="form-group">
          <label htmlFor="kegPrice">Keg Price: $</label>
          <input
            type="number"
            name="kegPrice"
            placeholder="0.00"
            min="0"
            step="0.01"
            required
            />
        </div>
        <div className="form-group">
          <label htmlFor="pricePerPint">Price per Pint: $</label>
          <input
            type="number"
            name="pricePerPint"
            placeholder="0.00"
            min="0"
            step="0.01"
            required
            />
        </div>
        <div className="form-group">
          <label htmlFor="pintsRemaining">Pints remaining:</label>
          <input
            type="number"
            name="pintsRemaining"
            placeholder="124"
            min="0"
            required
             />
          </div>
          <div className="form-group">
          <label htmlFor="untappedKegs">Untapped Kegs:</label>
          <input
            type="number"
            name="untappedKegs"
            placeholder="0"
            min="0"
            required
             />
          </div>
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formHandler: PropTypes.func,
  buttonText: PropTypes.string,

}

export default ReusableForm;