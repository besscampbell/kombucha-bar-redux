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
  const currentState = {
    1: {
    brand: 'Brew Dr.',
    flavor: 'Uplift',
    pricePerPint: 3.50,
    kegPrice: 270.00,
    untappedKegs: 1,
    pintsRemaining: 12,
    id: 1
    },
    2: {
    brand: 'GTs Synergy',
    flavor: 'Trilogy',
    pricePerPint: 3.75,
    kegPrice: 315.00,
    untappedKegs: 0,
    pintsRemaining: 99,
    id: 2
    }
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

  test('Should correctly update keg using the ADD KEG action', () => {
    const { brand, flavor, pricePerPint, kegPrice, untappedKegs, pintsRemaining, id } = kegInfo;
    action = {
      type: 'ADD_KEG',
      brand: 'Brew Dr.',
      flavor: 'Uplift',
      pricePerPint: 3.50,
      kegPrice: 270.00,
      untappedKegs: 0,
      pintsRemaining: 124,
      id: 1
    }
    expect(kegMenuReducer(currentState, action)).toEqual({
      1: {
        brand: 'Brew Dr.',
        flavor: 'Uplift',
        pricePerPint: 3.50,
        kegPrice: 270.00,
        untappedKegs: 0,
        pintsRemaining: 124,
        id: 1
        },
        2: {
        brand: 'GTs Synergy',
        flavor: 'Trilogy',
        pricePerPint: 3.75,
        kegPrice: 315.00,
        untappedKegs: 0,
        pintsRemaining: 99,
        id: 2
        }
    });
  });

  test('Should successfully delete a keg', () => {
    action = {
      type: 'DELETE_KEG',
      id: 2
    };
    expect(kegMenuReducer(currentState, action)).toEqual({
      1: {
        brand: 'Brew Dr.',
        flavor: 'Uplift',
        pricePerPint: 3.50,
        kegPrice: 270.00,
        untappedKegs: 1,
        pintsRemaining: 12,
        id: 1
        }
    });
  });
});