export default ColorReducer = (state, action) => {
  // state === {red: int, green: int, blue: int};
  // action === { colorToChange: 'red || 'green' || 'blue' , amount: 15 || -15}
  switch (action.type) {
    case "red":
      return 0 <= state.red + action.payload <= 255
        ? { ...state, red: state.red + action.payload }
        : state;
    case "green":
      return 0 <= state.green + action.payload <= 255
        ? { ...state, green: state.green + action.payload }
        : state;
    case "blue":
      return 0 <= state.blue + action.payload <= 255
        ? { ...state, blue: state.blue + action.payload }
        : state;
    default:
      return state;
  }
};
