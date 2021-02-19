import kegMenuReducer from '../../reducers/keg-menu-reducer';

describe('kegMenuReducer', () => {

  let action;
  const kegInfo = {
    brand: 'Brew Dr.',
    flavor: 'Uplift',
    pricePerPint: 3.50,
    kegPrice: 270.00,
    untappedKegs: 1,
    pintsRemaining: 12,
    id: 1
  }
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegMenuReducer({}, {type: null})).toEqual({});
  });

  test('Should correctly add new keg to the keg menu', () =>{
    const { brand, flavor, pricePerPint, kegPrice, untappedKegs, pintsRemaining, id } = kegInfo;
    action = {
      type: 'ADD_KEG',
      brand,
      flavor,
      pricePerPint,
      kegPrice,
      untappedKegs,
      pintsRemaining,
      id
    }
    expect(kegMenuReducer({}, action)).toEqual({
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
  });
});