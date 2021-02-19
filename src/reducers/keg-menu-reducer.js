export default (state = {}, action) => {
  const { brand, flavor, pricePerPint, kegPrice, untappedKegs, pintsRemaining, id, type } = action;
  switch(type){
  case 'ADD_KEG':
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
  case 'DELETE_KEG':
    let newState = {...state};
    delete newState[id];
    return newState;
  default:
    return state;
  }
};