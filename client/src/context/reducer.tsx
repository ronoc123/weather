interface Values {
  name: string;
}
type Action = { type: "UPDATE_VALUE"; name: string };

const reducer = (state: Values, action: Action) => {
  if (action.type === "UPDATE_VALUE") {
    return state;
  }

  throw new Error("Action not Found!");
};

export default reducer;
