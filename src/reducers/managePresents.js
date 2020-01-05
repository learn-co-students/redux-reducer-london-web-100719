export function managePresents(state = { numberOfPresents: 0 }, action) {
  return action.type === "INCREASE"
    ? { numberOfPresents: state.numberOfPresents + 1 }
    : state;
}
