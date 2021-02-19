import * as c from './ActionTypes';

export const addKeg = (keg) => {
  const { brand, flavor, pricePerPint, kegPrice, untappedKegs, pintsRemaining, id } = keg;
  return {
    type: c.ADD_KEG,
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
  type: c.DELETE_KEG,
  id,
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const selectKeg = (id) => ({
  type: c.SELECT_KEG,
  id,
});

export const deselect = () => ({
  // type: c.DESELECT,
});