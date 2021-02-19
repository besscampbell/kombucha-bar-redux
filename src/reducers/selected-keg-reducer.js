export default (state = null, action) => {
  const { type, id } = action;
  switch(type){
    case 'SELECT_KEG':
      return id;
    case 'DESELECT':
      return null;
    default:
      return state;
  }
}