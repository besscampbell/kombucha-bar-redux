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
    default:
      return state;
  }
};