export default (state = true, action) => {
  switch(action.type){
  case 'TOGGLE_FORM':
    return !state;
  default:
    return state;
  }
}