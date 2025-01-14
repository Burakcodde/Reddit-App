// src/redux/filterReducer.js
const initialState = {
  category: "all", // Başlangıçta tüm verileri göster
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CATEGORY":
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};

export const setCategory = (category) => ({
  type: "SET_CATEGORY",
  payload: category,
});
