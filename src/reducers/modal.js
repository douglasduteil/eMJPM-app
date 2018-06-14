const modal = (state = {
    openModal: false
}, action) => {
  console.log('modal reducer', state, action);
  switch (action.type) {
    case "OPEN_MODAL":
      console.log(4321)
      return {
        openModal: true
      }
      break;
    case "CLOSE_MODAL":
      return {
        openModal: false
      }
      break;
    default:
      return state;
  }
};

export default modal;
