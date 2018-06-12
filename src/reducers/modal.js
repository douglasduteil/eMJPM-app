const modal = (state = [], action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      console.log(4321)
      return;
      {
        openModal: true;
      }
    case "CLOSE_MODAL":
      return;
      {
        openModal: false;
      }
    default:
      return state;
  }
};

export default modal;
