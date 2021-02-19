export default (state = {}, action) => {
  const { type, id, kegMenu } = action;
  switch(type){
    case 'SELECT_KEG':
      const selectedTicket = kegMenu[id];
      return selectedTicket;
    default:
      return state;
  }
}