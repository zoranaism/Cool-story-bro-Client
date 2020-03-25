const initialState = {
  stories: []
};

export default (state = initialState, action) => {
  switch (action.type) {

  case "FETCH_HOMEPAGE_DETAILS_SUCCESS":
    return action.payload

  default:
    return state
  }
}
