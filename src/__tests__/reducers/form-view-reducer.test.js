import formViewReducer from '../../reducers/form-view-reducer';

const currentState = true

describe('formViewReducer', () => {
  test('Should return default state if no action is passed in', () => {
    expect(formViewReducer(true, {type: null})).toEqual(true);
  });

  test('Should correctly toggle boolean',  () => {
    let action = {
      type: 'TOGGLE_FORM'
    }
    expect(formViewReducer())
  });
});
