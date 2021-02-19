import formViewReducer from '../../reducers/form-view-reducer';

describe('formViewReducer', () => {
  test('Should return default state if no action is passed in', () => {
    expect(formViewReducer({}, {type: null})).toEqual({});
  });
});
