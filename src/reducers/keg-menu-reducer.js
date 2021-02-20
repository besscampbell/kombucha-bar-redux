import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { brand, flavor, pricePerPint, kegPrice, untappedKegs, pintsRemaining, id, type } = action;
  switch(type){
  case c.ADD_KEG:
    return Object.assign({}, state, {
      [id]: {
        brand,
        flavor,
        pricePerPint,
        kegPrice,
        untappedKegs,
        pintsRemaining,
        id
      }
    });
  case c.DELETE_KEG:
    let newState = {...state};
    delete newState[id];
    return newState;
  default:
    return state;
  }
};