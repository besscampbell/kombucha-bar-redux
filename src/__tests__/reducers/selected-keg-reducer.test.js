import selectedKegReducer from '../../reducers/selected-keg-reducer';

describe('selectedKegReducer', () => {

  test('Should return default state if no action type is passed in', () => {
    expect(selectedKegReducer(null, {type: null })).toEqual(null);
  });

  test('Should correctly return id of selected keg', () => {
    const action = {
      type: 'SELECT_KEG',
      id: 1,
    }
    expect(selectedKegReducer(null, action)).toEqual(1);
  });

  test('Should return to null when DESELECT action type is pass in', () => {
    const action = {
      type: 'DESELECT',
    }
    expect(selectedKegReducer(1, action)).toEqual(null);
  });
});
