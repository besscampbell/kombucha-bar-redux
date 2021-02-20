import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  const { type, id } = action;
  switch(type){
    case c.SELECT_KEG:
      return id;
    case c.DESELECT:
      return null;
    default:
      return state;
  }
}