import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setData: (state, { payload }) => {
      state.data = payload;
      state.loading = false;
    },
  },
});

export const { setLoading, setData } = dataSlice.actions;

export const dataSelector = (state) => state.data;
export default dataSlice.reducer;

export function fetchData() {
  return async (dispatch) => {
    dispatch(setLoading());

    try {
      const response = await fetch("https://covidnigeria.herokuapp.com/api");
      const data = await response.json();
      dispatch(setData(data.data));
    } catch (error) {
      throw error;
    }
  };
}
