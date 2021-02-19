import * as c from './ActionTypes';

export const addKeg = (keg) => {
  const { brand, flavor, pricePerPint, kegPrice, untappedKegs, pintsRemaining, id } = keg;
  return {
    type: ADD_KEG,
    brand,
    flavor,
    pricePerPint,
    kegPrice,
    untappedKegs,
    pintsRemaining,
    id,
  }
};

export const deleteKeg = (id) => ({
  type: DELETE_KEG,
  id,
});

export const toggleForm = () => ({
  type: TOGGLE_FORM
});

export const selectKeg = (id) => ({
  type: SELECT_KEG,
  id,
});