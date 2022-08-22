import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getData: (state) => {
      state.loading = true;
    },
    getDataSuccess: (state, { payload }) => {
      state.data = payload;
      state.loading = false;
    },
  },
});

export const { getData, getDataSuccess } = dataSlice.actions;

export const dataSelector = (state) => state.data;
export default dataSlice.reducer;

export function fetchData() {
  return async (dispatch) => {
    dispatch(getData());

    try {
      const response = await fetch("https://covidnigeria.herokuapp.com/api");
      const { data } = await response.json();
      dispatch(getDataSuccess(data));
    } catch (error) {
      throw error;
    }
  };
}
