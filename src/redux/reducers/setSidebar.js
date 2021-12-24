const setSidebar = (state = { sidebar: false }, action) => {
  switch (action.type) {
    case "SET_SIDEBAR_TRUE":
      return {
        ...state,
        sidebar: true,
      };
    case "SET_SIDEBAR_FALSE":
      return {
        ...state,
        sidebar: false,
      };
    default:
      return state;
  }
};

export default setSidebar;
