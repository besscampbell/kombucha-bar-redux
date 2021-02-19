export default (state = null, action) => {
  const { type, id, kegMenu } = action;
  switch(type){
    case 'SELECT_KEG':
      const selectedTicket = kegMenu[id];
      return selectedTicket;
    case 'DESELECT':
      return null;
    default:
      return state;
  }
}