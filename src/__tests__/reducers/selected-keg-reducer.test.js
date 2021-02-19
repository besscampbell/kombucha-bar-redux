import selectedKegReducer from '../../reducers/selected-keg-reducer';

describe('selectedKegReducer', () => {
  test('Should return default state if no action type is passed in', () => {
    expect(selectedKegReducer({}, {type: null })).toEqual({});
  });
  
});
