import selectedKegReducer from '../../reducers/selected-keg-reducer';

describe('selectedKegReducer', () => {

  let action;

  const kegMenu = {
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
  test('Should return default state if no action type is passed in', () => {
    expect(selectedKegReducer(null, {type: null })).toEqual(null);
  });

  test('Should correctly return selected keg', () => {
    action = {
      type: 'SELECT_KEG',
      id: 1,
      kegMenu: kegMenu
    }
    expect(selectedKegReducer(null, action)).toEqual(
        {
        brand: 'Brew Dr.',
        flavor: 'Uplift',
        pricePerPint: 3.50,
        kegPrice: 270.00,
        untappedKegs: 1,
        pintsRemaining: 12,
        id: 1
        }
    );
  });
});
