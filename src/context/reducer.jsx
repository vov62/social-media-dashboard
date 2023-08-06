export const initialState = {
  loading: true,
  error: "",
  data: [],
};

export const fetchDataReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
